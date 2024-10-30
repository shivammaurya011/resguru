import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import ModalLayout from '../layouts/ModalLayout';

function ResourceUpsertModal({ show, onClose, onSubmit, initialData, loading }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'job',
    summary: '',
    content: '',
    status: 'draft',
    tags: '',
    image: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        category: initialData.category || 'job',
        summary: initialData.summary || '',
        content: initialData.content || '',
        status: initialData.status || 'draft',
        tags: Array.isArray(initialData.tags) ? initialData.tags.join(', ') : initialData.tags || '',
        image: initialData.image || ''
      });
      setCurrentStep(1);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formData);
      // Reset form after successful submission
      setFormData({
        title: '',
        category: 'job',
        summary: '',
        content: '',
        status: 'draft',
        tags: '',
        image: ''
      });
      setCurrentStep(1);
      handleClose(); // Optional: close the modal after successful submission
    } catch (error) {
      // Handle error if needed
      console.error('Error submitting form:', error);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleClose = () => {
    setFormData({
      title: '',
      category: 'job',
      summary: '',
      content: '',
      status: 'draft',
      tags: '',
      image: ''
    });
    setCurrentStep(1);
    onClose();
  };

  // Memoize step content components
  const StepOne = useMemo(() => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="job">Job</option>
          <option value="admission">Admission</option>
          <option value="counseling">Counseling</option>
          <option value="exam">Exam</option>
          <option value="applicationForm">Application Form</option>
          <option value="news">News</option>
          <option value="scheme">Scheme</option>
          <option value="result">Result</option>
          <option value="interview">Interview</option>
          <option value="scholarship">Scholarship</option>
          <option value="workshop">Workshop</option>
          <option value="career-guidance">Career Guidance</option>
          <option value="skill-development">Skill Development</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Tags</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleInputChange}
          placeholder="Enter tags separated by commas"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Summary</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
    </div>
  ), [formData.title, formData.tags, handleInputChange]);

  // Optimize editor configuration
  const editorConfig = useMemo(() => ({
    height: 300,
    menubar: false,
    plugins: [
      'advlist autolink lists link image',
      'searchreplace visualblocks code',
      'insertdatetime media table paste help'
    ],
    toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter | bullist numlist'
  }), []);

  // Memoize handlers
  const handleEditorChange = useCallback((content) => {
    setFormData(prev => ({ ...prev, content }));
  }, []);

  const renderStepContent = useCallback(() => {
    switch (currentStep) {
      case 1:
        return StepOne;
      case 2:
        return isClient ? (
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            value={formData.content}
            onEditorChange={handleEditorChange}
            init={editorConfig}
          />
        ) : null;
      case 3:
        return (
          <div className="prose prose-sm mt-1 border rounded-lg p-4">
            {formData.content ? (
              <div dangerouslySetInnerHTML={{ __html: formData.content }} />
            ) : (
              <div className="text-gray-500">No content to preview</div>
            )}
          </div>
        );
      default:
        return null;
    }
  }, [currentStep, formData.content, isClient, StepOne, handleEditorChange, editorConfig]);

  return (
    <ModalLayout
      show={show}
      onClose={handleClose}
      title={initialData ? 'Edit Resource' : 'Add New Resource'}
      showStepIndicator={true}
      currentStep={currentStep}
      totalSteps={totalSteps}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="min-h-[300px]">{renderStepContent()}</div>

        <div className="flex justify-between pt-4 border-t">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="bg-gray-300 px-4 py-2 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition-colors"
          >
            Previous
          </button>
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {loading ? 'Saving...' : initialData ? 'Update' : 'Create'}
            </button>
          )}
        </div>
      </form>
    </ModalLayout>
  );
}

export default ResourceUpsertModal;
