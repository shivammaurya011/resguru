"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

export default function DashboardCareer() {
  const [careerData, setCareerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortField, setSortField] = useState('startDate');
  const [sortDirection, setSortDirection] = useState('desc');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/careers');
      setCareerData(response.data);
    } catch (error) {
      console.error('Error fetching careers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug) => {
    if (!window.confirm('Are you sure you want to delete this career?')) return;
    
    try {
      await axios.delete(`/api/careers/${slug}`);
      fetchCareers();
    } catch (error) {
      console.error('Error deleting career:', error);
    }
  };

  const handleStatusUpdate = async (slug, newStatus) => {
    try {
      await axios.put(`/api/careers/${slug}`, { status: newStatus });
      fetchCareers(); // Refresh the data after update
    } catch (error) {
      console.error('Error updating career status:', error);
    }
  };

  const filteredData = careerData
    .filter(career => {
      const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || career.type === filterType;
      const matchesStatus = filterStatus === 'all' || career.status === filterStatus;
      return matchesSearch && matchesType && matchesStatus;
    })
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      return sortDirection === 'asc' 
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1;
    });

  if (!isClient) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Career Management</h1>
        <Link
          href="/dashboard/career/create"
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg 
            hover:bg-blue-700 transition-all duration-200"
        >
          <FaPlus className="text-sm" /> Add New Career
        </Link>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search careers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Types</option>
          <option value="job">Job</option>
          <option value="result">Result</option>
          {/* Add other type options */}
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Status</option>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="archived">Archived</option>
        </select>
        <select
          value={`${sortField}-${sortDirection}`}
          onChange={(e) => {
            const [field, direction] = e.target.value.split('-');
            setSortField(field);
            setSortDirection(direction);
          }}
          className="border rounded-lg px-4 py-2"
        >
          <option value="startDate-desc">Date (Newest)</option>
          <option value="startDate-asc">Date (Oldest)</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="views-desc">Most Viewed</option>
          <option value="views-asc">Least Viewed</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Views
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">Loading...</td>
              </tr>
            ) : filteredData.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">No careers found</td>
              </tr>
            ) : (
              filteredData.map((career) => (
                <tr key={career._id}>
                  <td className="px-6 py-4">{career.title}</td>
                  <td className="px-6 py-4">{career.type}</td>
                  <td className="px-6 py-4">
                    <select
                      value={career.status}
                      onChange={(e) => handleStatusUpdate(career.slug, e.target.value)}
                      className={`px-2 py-1 rounded text-xs border-0 ${
                        career.status === 'published' ? 'bg-green-100 text-green-800' :
                        career.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                      <option value="archived">Archived</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">{career.views}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2 items-center">
                      <Link
                        href={`/dashboard/career/edit/${career.slug}`}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(career.slug)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
