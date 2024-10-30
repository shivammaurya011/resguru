import React from 'react'

function DashboardSettings() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Settings SVG */}
      <div className="relative mb-8">
        <svg
          className="w-64 h-64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Gear */}
          <path
            d="M12 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"
            className="stroke-gray-400"
            strokeWidth="1.5"
          />
          <path
            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
            className="stroke-blue-500 animate-pulse"
            strokeWidth="1.5"
          />
        </svg>

        {/* Decorative Dots */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"/>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse"/>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Settings Panel Coming Soon
      </h1>
      
      <p className="text-gray-600 text-center max-w-lg mb-6 leading-relaxed">
        We're working on a powerful settings dashboard that will give you complete control over your application preferences and configurations. Stay tuned for these exciting features!
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
          'General Settings',
          'Theme Customization',
          'Account Preferences',
        ].map((feature, index) => (
          <div key={index} className="px-4 py-3 bg-white/60 rounded-lg shadow-sm">
            <p className="text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardSettings
