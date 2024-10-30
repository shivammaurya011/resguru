import React, { useState, useEffect } from 'react';
import { FaUsers, FaFileAlt, FaChartLine, FaArrowUp } from 'react-icons/fa';
import axios from 'axios';

function AdminDashboard() {
  const [stats, setStats] = useState({
    users: null,
    careers: null,
    resources: null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [usersRes, careersRes, resourcesRes] = await Promise.all([
        axios.get('/api/users/stats'),
        axios.get('/api/careers/stats'),
        axios.get('/api/resources/stats')
      ]);

      setStats({
        users: usersRes.data,
        careers: careersRes.data,
        resources: resourcesRes.data
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setError('Failed to fetch dashboard data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-red-600 bg-red-50 px-4 py-3 rounded-lg shadow-sm">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Users Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Total Users</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stats.users?.total.toLocaleString()}
                  </p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaUsers className="text-blue-600 text-2xl" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Today</p>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      {stats.users?.today.toLocaleString()}
                    </span>
                    {stats.users?.today > 0 && (
                      <FaArrowUp className="ml-2 text-green-500" />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">This Month</p>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      {stats.users?.thisMonth.toLocaleString()}
                    </span>
                    <span className={`ml-2 text-sm ${stats.users?.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stats.users?.change >= 0 ? '+' : ''}{stats.users?.change}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Resources</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stats.resources?.total.toLocaleString()}
                  </p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <FaFileAlt className="text-green-600 text-2xl" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Today</p>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      {stats.resources?.today.toLocaleString()}
                    </span>
                    {stats.resources?.today > 0 && (
                      <FaArrowUp className="ml-2 text-green-500" />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">This Month</p>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      {stats.resources?.thisMonth.toLocaleString()}
                    </span>
                    <span className={`ml-2 text-sm ${stats.resources?.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stats.resources?.change >= 0 ? '+' : ''}{stats.resources?.change}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Careers Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Careers</h3>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stats.careers?.total.toLocaleString()}
                  </p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <FaChartLine className="text-purple-600 text-2xl" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Today</p>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      {stats.careers?.today.toLocaleString()}
                    </span>
                    {stats.careers?.today > 0 && (
                      <FaArrowUp className="ml-2 text-green-500" />
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">This Month</p>
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      {stats.careers?.thisMonth.toLocaleString()}
                    </span>
                    <span className={`ml-2 text-sm ${stats.careers?.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {stats.careers?.change >= 0 ? '+' : ''}{stats.careers?.change}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
