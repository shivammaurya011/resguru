export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero Section Loading */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left side */}
            <div className="lg:w-1/2">
              <div className="h-12 bg-gray-200 rounded-lg w-3/4 mb-6"></div>
              <div className="h-6 bg-gray-200 rounded-lg w-full mb-4"></div>
              <div className="h-6 bg-gray-200 rounded-lg w-5/6 mb-8"></div>
              
              {/* Features grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                ))}
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="h-12 bg-gray-200 rounded-full w-40"></div>
                <div className="h-12 bg-gray-200 rounded-full w-40"></div>
              </div>
            </div>

            {/* Right side - Trending box */}
            <div className="lg:w-1/2">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="bg-gray-100 p-4 rounded-lg">
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizations Section Loading */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-96 mx-auto mb-10"></div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {Array.from({ length: 15 }, (_, i) => (
              <div key={`org-skeleton-${i}`} className="bg-white p-4 rounded-lg shadow">
                <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-20 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section Loading */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={`update-skeleton-${i}`} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-12 bg-gray-200 rounded-t"></div>
                <div className="p-4 space-y-4">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <div key={`update-item-${i}-${j}`} className="border-b border-gray-100 pb-4">
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section Loading */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }, (_, i) => (
              <div key={`service-skeleton-${i}`} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="h-6 bg-gray-200 rounded w-32 ml-3"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section Loading */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="h-10 bg-gray-200 rounded w-64 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-8"></div>
            <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
              <div className="h-12 bg-gray-200 rounded-lg flex-grow"></div>
              <div className="h-12 bg-gray-200 rounded-lg w-32"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 