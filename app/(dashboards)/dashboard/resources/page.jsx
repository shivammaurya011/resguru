'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaSort } from 'react-icons/fa';
import ResourceModal from '@/components/modals/ResourceUpsertModal';
import dynamic from 'next/dynamic';

// Create a client-only wrapper component
const ClientOnlyWrapper = ({ children }) => {
  return <div suppressHydrationWarning>{children}</div>;
};

// Make the wrapper only render on client-side
const DynamicClientOnlyWrapper = dynamic(() => Promise.resolve(ClientOnlyWrapper), {
  ssr: false
});

function DashboardResources() {
  const [resourceData, setResourceData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'job',
    summary: '',
    content: '',
    status: 'draft',
    tags: '',
    image: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const response = await axios.get('/api/resources');
      setResourceData(response.data);
    } catch (error) {
      console.error("Error fetching resources", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = useCallback(async (formData) => {
    setLoading(true);
    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()),
      };

      await axios[editingId ? 'put' : 'post'](
        `/api/resources${editingId ? `/${resourceData.find(r => r._id === editingId).slug}` : ''}`,
        payload
      );
      
      setShowForm(false);
      setEditingId(null);
      fetchResources();
    } catch (error) {
      console.error("Error saving resource", error);
      alert(error.response?.data?.error || 'Error saving resource');
    } finally {
      setLoading(false);
    }
  }, [editingId, resourceData]);

  const handleEditResource = (resource) => {
    setEditingId(resource._id);
    setFormData({
      title: resource.title,
      category: resource.category,
      summary: resource.summary,
      content: resource.content,
      status: resource.status,
      tags: Array.isArray(resource.tags) ? resource.tags.join(', ') : resource.tags,
      image: resource.image || ''
    });
    setShowForm(true);
  };

  const handleDeleteResource = async (resource) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      try {
        await axios.delete(`/api/resources/${resource.slug}`);
        fetchResources();
      } catch (error) {
        console.error("Error deleting resource", error);
      }
    }
  };

  const handleStatusChange = async (resource, newStatus) => {
    try {
      await axios.put(`/api/resources/${resource.slug}`, {
        ...resource,
        status: newStatus
      });
      fetchResources();
    } catch (error) {
      console.error("Error updating status", error);
    }
  };

  const handleSort = (field) => {
    const fieldMapping = {
      'title': 'title',
      'category': 'category',
      'status': 'status',
      'views': 'views',
      'createdAt': 'createdAt'
    };

    const mappedField = fieldMapping[field.toLowerCase()] || field;
    
    if (sortField === mappedField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(mappedField);
      setSortDirection('asc');
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setFilterCategory('all');
    setFilterStatus('all');
    fetchResources();
  };

  const filteredAndSortedData = useMemo(() => {
    let filtered = resourceData;
    
    if (searchTerm || filterCategory !== 'all' || filterStatus !== 'all') {
      filtered = resourceData.filter(item => {
        const matchesSearch = !searchTerm || 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.status.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
        const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
        
        return matchesSearch && matchesCategory && matchesStatus;
      });
    }
    
    return [...filtered].sort((a, b) => {
      if (sortField === 'createdAt') {
        const aDate = new Date(a.createdAt);
        const bDate = new Date(b.createdAt);
        return sortDirection === 'asc' 
          ? aDate - bDate
          : bDate - aDate;
      }
      
      const aValue = sortField === 'views' ? Number(a.views) : a[sortField]?.toString().toLowerCase();
      const bValue = sortField === 'views' ? Number(b.views) : b[sortField]?.toString().toLowerCase();
      
      return sortDirection === 'asc' 
        ? (aValue > bValue ? 1 : -1)
        : (aValue < bValue ? 1 : -1);
    });
  }, [resourceData, searchTerm, filterCategory, filterStatus, sortField, sortDirection]);

  return (
    <DynamicClientOnlyWrapper>
      <div className="max-w-7xl flex flex-col gap-6 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-500">Resource Management</h1>
          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg 
              hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg 
              transform hover:-translate-y-0.5"
          >
            <FaPlus className="text-sm" /> Add New Resource
          </button>
        </div>

        <ResourceModal
          show={showForm}
          onClose={() => {
            setShowForm(false);
            setEditingId(null);
          }}
          onSubmit={handleSubmit}
          initialData={editingId ? resourceData.find(resource => resource._id === editingId) : null}
          loading={loading}
        />

        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Search
                </label>
                <div className="relative group">
                  <input
                    key="search-input"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search resources..."
                    className="w-full p-3 border border-gray-200 rounded-lg pl-10 
                      focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                      transition-all duration-200 bg-gray-50 group-hover:bg-white"
                  />
                  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 
                    group-hover:text-blue-500 transition-colors duration-200" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  key="category-select"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 
                    hover:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    transition-all duration-200"
                >
                  <option value="all">All Categories</option>
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

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  key="status-select"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 
                    hover:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                    transition-all duration-200"
                >
                  <option value="all">All Status</option>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleReset}
                  className="w-full px-4 py-3 border border-gray-200 text-gray-600 rounded-lg
                    hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100
                    transition-all duration-200 text-sm font-medium flex items-center 
                    justify-center gap-2 bg-white shadow-sm hover:shadow"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {[
                  { label: 'Title', field: 'title' },
                  { label: 'Category', field: 'category' },
                  { label: 'Status', field: 'status' },
                  { label: 'Views', field: 'views' },
                  { label: 'Date', field: 'createdAt' }
                ].map(({ label, field }) => (
                  <th
                    key={field}
                    onClick={() => handleSort(field)}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      {label}
                      <span className="text-gray-400">
                        {sortField === field ? (
                          sortDirection === 'asc' ? '↑' : '↓'
                        ) : (
                          <FaSort />
                        )}
                      </span>
                    </div>
                  </th>
                ))}
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAndSortedData.map((resource) => (
                <tr key={resource._id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900 break-words max-w-xs">
                      {resource.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {resource.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={resource.status}
                      onChange={(e) => handleStatusChange(resource, e.target.value)}
                      className={`px-4 py-2 text-sm leading-5 font-semibold rounded-lg cursor-pointer
                        ${resource.status === 'published' ? 'bg-green-100 text-green-800' :
                        resource.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    {resource.views}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(resource.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => handleEditResource(resource)}
                        className="text-yellow-600 hover:text-yellow-900 p-1 hover:bg-yellow-50 rounded transition-colors"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteResource(resource)}
                        className="text-red-600 hover:text-red-900 p-1 hover:bg-red-50 rounded transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DynamicClientOnlyWrapper>
  );
}

export default DashboardResources;
