'use client';

import Image from 'next/image';
import { FaUser, FaEnvelope, FaBriefcase, FaBuilding } from 'react-icons/fa';

export default function AuthorCard({ author }) {
  if (!author) {
    console.log('No author data provided');
    return null;
  }

  console.log('Author data:', author); // For debugging

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">About the Author</h2>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          {author.image ? (
            <Image
              src={author.image}
              alt={author.name}
              width={64}
              height={64}
              className="rounded-full"
              priority
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <FaUser className="text-gray-400 text-2xl" />
            </div>
          )}
        </div>
        
        <div className="flex-grow">
          <div className="space-y-2">
            {author.name && (
              <div className="flex items-center gap-2">
                <FaUser className="text-blue-500" />
                <span className="font-medium">{author.name}</span>
              </div>
            )}
            
            {author.email && (
              <div className="flex items-center gap-2 text-gray-600">
                <FaEnvelope className="text-blue-500" />
                <span>{author.email}</span>
              </div>
            )}
            
            {author.role && (
              <div className="flex items-center gap-2 text-gray-600">
                <FaBriefcase className="text-blue-500" />
                <span>{author.role}</span>
              </div>
            )}
            
            {author.department && (
              <div className="flex items-center gap-2 text-gray-600">
                <FaBuilding className="text-blue-500" />
                <span>{author.department}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 