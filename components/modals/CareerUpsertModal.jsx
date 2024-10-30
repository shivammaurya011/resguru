import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import ModalLayout from '../layouts/ModalLayout';

const CareerModal = ({ 
  show, 
  onClose, 
  onSubmit, 
  initialData = null, 
  loading 
}) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    type: initialData?.type || 'job',
    startDate: initialData?.dates?.startDate || '',
    endDate: initialData?.dates?.endDate || '',
    details: initialData?.details || '',
    status: initialData?.status || 'draft',
    tags: Array.isArray(initialData?.tags) ? initialData.tags.join(', ') : '',
    image: initialData?.image || ''
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleClose = () => {
    setFormData({
      title: '',
      type: 'job',
      startDate: '',
      endDate: '',
      details: '',
      status: 'draft',
      tags: '',
      image: '',
    });
    setCurrentStep(1); 
    onClose();
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="job">Job</option>
                {/* Other options here */}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
        </div>
      );
    } else if (currentStep === 2) {
      return (
        <div className="space-y-4">
          <label className="block text-sm font-medium mb-1">Details</label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
            value={formData.details}
            onEditorChange={(content) =>
              setFormData((prev) => ({ ...prev, details: content }))
            }
          />
        </div>
      );
    } else if (currentStep === 3) {
      return (
        <div className="space-y-4">
          <h3 className="font-medium text-lg">Preview</h3>
          {formData.details ? (
            <div 
              className="prose prose-sm mt-1 border rounded-lg p-4"
              dangerouslySetInnerHTML={{ __html: formData.details }}
            />
          ) : (
            <div className="flex items-center justify-center h-[200px] border rounded-lg text-gray-500">
              No content to preview
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <ModalLayout
      show={show}
      onClose={handleClose}
      title={initialData ? 'Edit Career' : 'Add New Career'}
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
            className="bg-gray-300 px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {currentStep < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
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
};

export default CareerModal;
