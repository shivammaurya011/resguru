import React from 'react'

function DashboardProgress() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      {/* Analytics Dashboard SVG */}
      <div className="relative mb-8">
        <svg
          className="w-64 h-64"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dashboard Frame */}
          <rect x="2" y="2" width="20" height="16" rx="2" 
            className="stroke-gray-400" strokeWidth="1.5"/>
          
          {/* Screen Content */}
          <path d="M2 6h20" className="stroke-gray-400" strokeWidth="1.5"/>
          
          {/* Chart Bars */}
          <rect x="5" y="9" width="2" height="6" rx="0.5" 
            className="fill-blue-500 animate-pulse"/>
          <rect x="9" y="11" width="2" height="4" rx="0.5" 
            className="fill-blue-400"/>
          <rect x="13" y="8" width="2" height="7" rx="0.5" 
            className="fill-blue-500 animate-pulse"/>
          <rect x="17" y="10" width="2" height="5" rx="0.5" 
            className="fill-blue-400"/>
          
          {/* Stand */}
          <path d="M8 20h8M12 18v2" 
            className="stroke-gray-400" 
            strokeWidth="1.5"
            strokeLinecap="round"/>
        </svg>

        {/* Decorative Dots */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"/>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-blue-500/20 rounded-full animate-pulse"/>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Dashboard Analytics Coming Soon
      </h1>
      
      <p className="text-gray-600 text-center max-w-lg mb-6 leading-relaxed">
        We're building a comprehensive analytics dashboard to help you visualize your progress 
        and track key metrics. Our team is working diligently to bring you powerful insights 
        and meaningful data visualization.
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
          'Performance Metrics',
          'Interactive Charts',
          'Progress Tracking'
        ].map((feature, index) => (
          <div key={index} className="px-4 py-3 bg-white/60 rounded-lg shadow-sm">
            <p className="text-gray-600">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardProgress
