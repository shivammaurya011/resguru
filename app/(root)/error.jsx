'use client';

import { useEffect } from 'react';
import { FaExclamationTriangle, FaSync } from 'react-icons/fa';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="text-center">
        <FaExclamationTriangle className="text-red-500 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-4">
          We're having trouble loading the page. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 
            rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FaSync className="text-sm" />
          Try again
        </button>
      </div>
    </div>
  );
} 