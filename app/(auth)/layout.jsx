import React from 'react'

function AuthLayout({ children }) {
  return (
    <main className='min-h-screen w-full flex flex-col lg:flex-row items-stretch justify-center bg-gray-100'>
      <div className='hidden lg:flex w-full lg:w-1/2 p-8 items-center justify-center bg-blue-50 relative overflow-hidden'>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
              <circle cx="40" cy="40" r="18" fill="none" stroke="#3B82F6" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">Sarkari Result</h1>
          <p className="text-xl text-blue-500">Your Gateway to Government Opportunities</p>
        </div>
      </div>
      <div className='w-full lg:w-1/2 p-8 flex items-center justify-center bg-white'>
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout
