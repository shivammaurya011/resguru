"use client";

import React, { useState, Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ClientEditor = dynamic(() => import('./ClientEditor'), {
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-gray-100 rounded-lg animate-pulse" />
});

// Add these organization and department options based on the Career model
const ORGANIZATION_OPTIONS = [
  'UPSC', 'SSC', 'IBPS', 'RRB', 'Defence', 'DRDO', 'Income Tax', 'Indian Post',
  'ISRO', 'Banking', 'Insurance', 'EPFO', 'ESIC', 'Central PSUs', 'UGC', 'CSIR',
  'Teaching', 'KVS', 'NVS', 'Police', 'IB', 'RAW', 'CBI', 'BSF', 'CRPF', 'CISF',
  'Coast Guard', 'State PSC', 'State Police', 'State Teaching', 'State PSUs',
  'Autonomous Bodies', 'Research Institutions', 'Other'
];

const STATE_OPTIONS = [
  'All India', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar',
  'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya',
  'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 
  'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir',
  'Ladakh', 'Lakshadweep', 'Puducherry', 'Not Applicable'
];

const DEPARTMENT_OPTIONS = [
  'Ministry of Home Affairs', 'Ministry of Defence', 'Ministry of Finance',
  'Ministry of Railways', 'Ministry of Education', 
  'Ministry of Health and Family Welfare', 'Ministry of External Affairs',
  'Ministry of Agriculture and Farmers Welfare', 
  'Ministry of Commerce and Industry', 'Ministry of Communications',
  'Ministry of Information and Broadcasting', 'Ministry of Law and Justice',
  'Ministry of Civil Aviation', 
  'Ministry of Environment, Forest and Climate Change', 'Ministry of Power',
  'Ministry of Rural Development', 'Ministry of Science and Technology',
  'Ministry of Skill Development and Entrepreneurship', 'Ministry of Tourism',
  'Ministry of Tribal Affairs', 'Ministry of Urban Development',
  'Ministry of Women and Child Development', 
  'Ministry of Youth Affairs and Sports', 'Department of Space',
  'Department of Atomic Energy', 'Department of Revenue',
  'Department of Personnel and Training', 'Department of Posts',
  'Department of Telecommunications', 'State Department', 'Other'
];

// Add this helper function at the top of your component
const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toISOString().split('T')[0];
};

export default function CareerForm({ initialData = null, onSubmit, loading }) {
  console.log('initialData:', initialData);

  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    type: initialData?.type || 'job',
    startDate: formatDateForInput(initialData?.dates?.startDate) || '',
    endDate: formatDateForInput(initialData?.dates?.endDate) || '',
    details: initialData?.details || '',
    organization: initialData?.organization || '',
    state: initialData?.state || 'All India',
    status: initialData?.status || 'draft',
    tags: initialData?.tags?.join(', ') || '',
    image: initialData?.image || '',
    organizationDetails: {
      name: initialData?.organizationDetails?.name || '',
      website: initialData?.organizationDetails?.website || '',
      department: initialData?.organizationDetails?.department || 'Other',
      contactEmail: initialData?.organizationDetails?.contactEmail || '',
      contactPhone: initialData?.organizationDetails?.contactPhone || '',
      address: initialData?.organizationDetails?.address || ''
    }
  });

  console.log('formData:', formData);

  // Add a useEffect to log the initial data and formatted dates for debugging
  useEffect(() => {
    if (initialData) {
      console.log('Initial Data:', initialData);
      console.log('Formatted Start Date:', formatDateForInput(initialData?.dates?.startDate));
      console.log('Formatted End Date:', formatDateForInput(initialData?.dates?.endDate));
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested object properties
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const editorStyles = `
    /* Editor Base Styles */
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: #374151;
    }

    /* Table Styles */
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }

    /* Basic Table */
    table.basic {
      border: 1px solid #e5e7eb;
    }

    table.basic th,
    table.basic td {
      border: 1px solid #e5e7eb;
      padding: 12px;
    }

    table.basic th {
      background-color: #f9fafb;
      font-weight: 600;
      text-align: left;
    }

    /* Striped Table */
    table.striped tr:nth-child(even) {
      background-color: #f9fafb;
    }

    /* Modern Table */
    table.modern {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      border-radius: 0.5rem;
      overflow: hidden;
      border: none;
    }

    table.modern th {
      background-color: #f3f4f6;
      padding: 12px;
      text-align: left;
      font-weight: 600;
      border: none;
    }

    table.modern td {
      padding: 12px;
      border: none;
      border-bottom: 1px solid #e5e7eb;
    }

    table.modern tr:last-child td {
      border-bottom: none;
    }

    /* Compact Table */
    table.compact th,
    table.compact td {
      padding: 6px;
      font-size: 0.875rem;
    }

    /* Hover Effects */
    table.hover tr:hover {
      background-color: #f3f4f6;
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the data before submission
    const formattedData = {
      ...formData,
      // Only include organization if it has a value
      ...(formData.organization && { organization: formData.organization }),
      // Structure the dates properly
      dates: {
        startDate: formData.startDate,
        endDate: formData.endDate
      },
      // Convert comma-separated string to array and clean up
      tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(Boolean) : [],
      // Set default image if not provided
      image: formData.image || 'https://example.com/default-image.jpg', // Add your default image URL here
      // Ensure organizationDetails is properly structured with valid values
      organizationDetails: {
        name: formData.organizationDetails?.name || '',
        // Only include website if it's a valid URL
        ...(formData.organizationDetails?.website && {
          website: formData.organizationDetails.website
        }),
        // Only include department if it's not empty
        ...(formData.organizationDetails?.department && {
          department: formData.organizationDetails.department
        }),
        ...(formData.organizationDetails?.contactEmail && {
          contactEmail: formData.organizationDetails.contactEmail
        }),
        ...(formData.organizationDetails?.contactPhone && {
          contactPhone: formData.organizationDetails.contactPhone
        }),
        ...(formData.organizationDetails?.address && {
          address: formData.organizationDetails.address
        })
      }
    };

    // Remove empty fields
    if (!formattedData.organization) {
      delete formattedData.organization;
    }

    // Remove the individual date fields since they're now in the dates object
    delete formattedData.startDate;
    delete formattedData.endDate;

    // Remove empty organizationDetails fields
    Object.keys(formattedData.organizationDetails).forEach(key => {
      if (!formattedData.organizationDetails[key]) {
        delete formattedData.organizationDetails[key];
      }
    });

    console.log('Submitting formatted data:', formattedData);
    onSubmit(formattedData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm p-8 space-y-12"
    >
      {/* Basic Information Section */}
      <div>
        <div className="border-b border-gray-200 pb-3 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Basic Information</h2>
          <p className="mt-1 text-sm text-gray-500">Fill in the basic details about this opportunity.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
              required
            >
              <option value="job">Job</option>
              <option value="result">Result</option>
              <option value="admitCard">Admit Card</option>
              <option value="answerKey">Answer Key</option>
              <option value="syllabus">Syllabus</option>
              <option value="admission">Admission</option>
              <option value="scheme">Scheme</option>
              <option value="exam">Exam</option>
              <option value="scholarship">Scholarship</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date *
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date *
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Enter tags separated by commas (e.g., government, jobs, exam)"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
      </div>

      {/* Organization Details Section */}
      <div>
        <div className="border-b border-gray-200 pb-3 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Organization Details</h2>
          <p className="mt-1 text-sm text-gray-500">Specify the organization and location information.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">
          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization Name
            </label>
            <input
              type="text"
              name="organizationDetails.name"
              value={formData.organizationDetails.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization Category *
            </label>
            <select
              name="organization"
              value={formData.organization}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            >
              <option value="">Select Organization (Optional)</option>
              {ORGANIZATION_OPTIONS.map(org => (
                <option key={org} value={org}>{org}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State/Region *
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
              required
            >
              {STATE_OPTIONS.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <select
              name="organizationDetails.department"
              value={formData.organizationDetails.department}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            >
              <option value="">Select Department (Optional)</option>
              {DEPARTMENT_OPTIONS.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Website
            </label>
            <input
              type="url"
              name="organizationDetails.website"
              value={formData.organizationDetails.website}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Email
            </label>
            <input
              type="email"
              name="organizationDetails.contactEmail"
              value={formData.organizationDetails.contactEmail}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="contact@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Phone
            </label>
            <input
              type="tel"
              name="organizationDetails.contactPhone"
              value={formData.organizationDetails.contactPhone}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="+91 1234567890"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <textarea
              name="organizationDetails.address"
              value={formData.organizationDetails.address}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Enter complete address"
            />
          </div>
        </div>
      </div>

      {/* Content Details Section */}
      <div>
        <div className="border-b border-gray-200 pb-3 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">Content Details</h2>
          <p className="mt-1 text-sm text-gray-500">Add the main content and description.</p>
        </div>
        <Suspense fallback={<div className="h-[500px] w-full bg-gray-100 rounded-lg animate-pulse" />}>
          <ClientEditor
            value={formData.details}
            onChange={(content) => setFormData(prev => ({ ...prev, details: content }))}
            editorStyles={editorStyles}
          />
        </Suspense>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
        <Link
          href="/dashboard/career"
          className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 
            transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {loading ? 'Saving...' : initialData ? 'Update' : 'Create'}
        </button>
      </div>
    </form>
  );
} 