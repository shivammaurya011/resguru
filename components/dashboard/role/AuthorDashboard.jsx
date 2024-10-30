import React, { useEffect, useState } from 'react';
import { FaClipboardList, FaUsers, FaCalendarAlt, FaBell, FaNewspaper, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';
import Link from 'next/link';
import axios from 'axios';
import { format } from 'date-fns';

function AuthorDashboard() {
  const [careers, setCareers] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
    archived: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const response = await axios.get('/api/careers');
      setCareers(response.data);
      
      // Calculate stats
      const statsData = response.data.reduce((acc, career) => {
        acc.total++;
        acc[career.status]++;
        return acc;
      }, {
        total: 0,
        published: 0,
        draft: 0,
        archived: 0
      });
      
      setStats(statsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching career data", error);
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="bg-blue-100 border-blue-200 p-6 rounded-2xl shadow-sm border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-full bg-white shadow-inner">
              <FaClipboardList className="text-blue-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{stats.total}</h2>
          </div>
          <p className="text-lg font-medium text-gray-600">Total Careers</p>
        </div>

        <div className="bg-green-100 border-green-200 p-6 rounded-2xl shadow-sm border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-full bg-white shadow-inner">
              <FaCheckCircle className="text-green-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{stats.published}</h2>
          </div>
          <p className="text-lg font-medium text-gray-600">Published</p>
        </div>

        <div className="bg-yellow-100 border-yellow-200 p-6 rounded-2xl shadow-sm border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-full bg-white shadow-inner">
              <FaHourglassHalf className="text-yellow-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{stats.draft}</h2>
          </div>
          <p className="text-lg font-medium text-gray-600">Drafts</p>
        </div>

        <div className="bg-red-100 border-red-200 p-6 rounded-2xl shadow-sm border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-full bg-white shadow-inner">
              <FaNewspaper className="text-red-600 text-3xl" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{stats.archived}</h2>
          </div>
          <p className="text-lg font-medium text-gray-600">Archived</p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Careers List */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <FaCalendarAlt className="mr-2 text-blue-600" /> Recent Career Posts
          </h2>
          {loading ? (
            <p className="text-center text-gray-500">Loading careers...</p>
          ) : (
            <ul className="space-y-4">
              {careers.slice(0, 5).map((career) => (
                <li key={career._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-center flex-1">
                    <div className="p-2 bg-blue-100 rounded-full mr-4">
                      <FaUsers className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{career.title}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">{career.type}</span>
                        <span className="text-sm text-gray-500">
                          {format(new Date(career.dates.startDate), 'MMM d, yyyy')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${career.status === 'published' ? 'bg-green-100 text-green-800' :
                    career.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}`}>
                    {career.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaBell className="mr-2 text-yellow-600" /> Quick Actions
            </h2>
            <div className="space-y-4">
              <Link 
                href="/dashboard/career"
                className="flex items-center w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FaClipboardList className="mr-3" />
                <span className="font-medium">Manage Careers</span>
              </Link>
              <Link 
                href="/dashboard/applications"
                className="flex items-center w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <FaCalendarAlt className="mr-3" />
                <span className="font-medium">View Applications</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorDashboard;
