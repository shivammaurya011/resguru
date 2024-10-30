import React from 'react'
import { FaClipboardList, FaGraduationCap, FaBriefcase, FaChartLine, FaBell, FaFileAlt, FaEye, FaCalendarAlt, FaUser, FaCheckCircle } from 'react-icons/fa'
import Link from 'next/link'

function UserDashboard() {
  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {[
          { title: 'Active Applications', value: '5', icon: <FaClipboardList className="text-blue-600 text-3xl" />, color: 'bg-blue-100 border-blue-200' },
          { title: 'Completed Tests', value: '3', icon: <FaGraduationCap className="text-green-600 text-3xl" />, color: 'bg-green-100 border-green-200' },
          { title: 'Saved Jobs', value: '12', icon: <FaBriefcase className="text-yellow-600 text-3xl" />, color: 'bg-yellow-100 border-yellow-200' },
          { title: 'Profile Strength', value: '85%', icon: <FaChartLine className="text-purple-600 text-3xl" />, color: 'bg-purple-100 border-purple-200' },
        ].map((stat, index) => (
          <div key={index} className={`${stat.color} p-6 rounded-2xl shadow-sm border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md`}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full bg-white shadow-inner">
                {stat.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{stat.value}</h2>
            </div>
            <p className="text-lg font-medium text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Application Status */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <FaClipboardList className="mr-2 text-blue-600" /> Application Status
          </h2>
          <ul className="space-y-4">
            {[
              { job: 'Software Engineer at TechCorp', status: 'Under Review', date: 'Applied on May 1, 2024', icon: <FaFileAlt className="text-blue-500" /> },
              { job: 'Data Analyst at DataCo', status: 'Interview Scheduled', date: 'Interview on May 15, 2024', icon: <FaCalendarAlt className="text-green-500" /> },
              { job: 'Product Manager at InnovateTech', status: 'Application Submitted', date: 'Applied on May 5, 2024', icon: <FaCheckCircle className="text-yellow-500" /> },
              { job: 'UX Designer at DesignHub', status: 'Shortlisted', date: 'Updated on May 7, 2024', icon: <FaUser className="text-purple-500" /> },
            ].map((application, index) => (
              <li key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="flex items-center">
                  <div className="p-2 bg-white rounded-full mr-4 shadow-sm">
                    {application.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{application.job}</h3>
                    <p className="text-sm text-gray-600">{application.status}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{application.date}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Notifications and Actions */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaBell className="mr-2 text-yellow-600" /> Notifications
            </h2>
            <ul className="space-y-4">
              {[
                { message: 'New job matching your profile: Data Scientist at AI Solutions', time: '1 hour ago', icon: <FaBriefcase className="text-blue-500 text-xl" /> },
                { message: 'Reminder: Complete your personality assessment', time: 'Action required', icon: <FaGraduationCap className="text-yellow-500 text-xl" /> },
                { message: 'Your application for Software Engineer has been viewed', time: '1 day ago', icon: <FaEye className="text-green-500 text-xl" /> },
              ].map((notification, index) => (
                <li key={index} className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <div className="mr-4 p-2 bg-white rounded-full shadow-sm">{notification.icon}</div>
                  <div>
                    <p className="text-gray-800 font-medium">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <FaClipboardList className="mr-2 text-gray-600" /> Quick Actions
            </h2>
            <div className="space-y-4">
              {[
                { text: 'Review Applications', href: '/user/applications', icon: FaClipboardList, color: 'from-blue-500 to-blue-600' },
                { text: 'Schedule Interviews', href: '/user/schedule', icon: FaCalendarAlt, color: 'from-green-500 to-green-600' },
                { text: 'Generate Reports', href: '/user/reports', icon: FaChartLine, color: 'from-yellow-500 to-yellow-600' },
              ].map((action, index) => (
                <Link key={index} href={action.href} className={`flex items-center w-full bg-gradient-to-r ${action.color} text-white py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 hover:shadow-lg`}>
                  <action.icon className="mr-3" />
                  <span className="font-medium">{action.text}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
