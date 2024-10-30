import React from 'react'

function DashboardProfile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Profile Settings SVG */}
      <div className="relative mb-8">
        <svg
          className="w-64 h-64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Profile Circle */}
          <circle cx="12" cy="8" r="4" className="stroke-gray-400" strokeWidth="1.5"/>
          
          {/* Body */}
          <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" 
            className="stroke-gray-400" 
            strokeWidth="1.5"/>
          
          {/* Settings Gear */}
          <path d="M12 12.5v2M12 17.5v2M9 15h6" 
            className="stroke-blue-500 animate-pulse" 
            strokeWidth="1.5"
            strokeLinecap="round"/>
        </svg>

        {/* Decorative Dots */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"/>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse"/>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Profile Settings Coming Soon
      </h1>
      
      <p className="text-gray-600 text-center max-w-lg mb-6 leading-relaxed">
        We're building a comprehensive profile management system where you'll be able to customize 
        your experience and manage your personal information. Stay tuned for exciting features!
      </p>

      <div className="flex items-center gap-3 px-6 py-2 bg-white rounded-full shadow-sm">
        <span className="flex gap-2 items-center text-gray-600">
          <span className="block w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
          Currently in Development
          <span className="block w-2 h-2 bg-blue-500 rounded-full animate-pulse"/>
        </span>
      </div>

      {/* Feature Preview List */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-3xl">
        {[
          'Personal Details',
          'Privacy Settings',
          'Notification Preferences'
        ].map((feature, index) => (
          <div key={index} className="px-4 py-3 bg-white/60 rounded-lg shadow-sm">
            <p className="text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardProfile
