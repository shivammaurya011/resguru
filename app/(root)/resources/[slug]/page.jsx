'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaEye, FaTags } from 'react-icons/fa';

function NewsPage({ params }) {
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResource = async () => {
      try {
        const response = await axios.get(`/api/resources/${params.slug}?t=${Date.now()}`);
        setResource(response.data);
      } catch (error) {
        console.error('Error fetching resource:', error);
      } finally {
        setLoading(false);
      }
    };

    let mounted = true;

    if (mounted) {
      fetchResource();
    }

    return () => {
      mounted = false;
    };
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Resource not found</h1>
          <p className="text-gray-600">The resource you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{resource.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" />
            {new Date(resource.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-blue-500" />
            {resource.author?.name || 'Anonymous'}
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-blue-500" />
            {resource.views} views
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
        <Image
          src={resource.image || '/images/default-news.png'}
          alt={resource.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Summary Section */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <p className="text-lg text-gray-700 italic">{resource.summary}</p>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <div dangerouslySetInnerHTML={{ __html: resource.content }} />
      </div>

      {/* Tags Section */}
      {resource.tags && resource.tags.length > 0 && (
        <div className="border-t pt-6">
          <div className="flex items-center gap-2 flex-wrap">
            <FaTags className="text-blue-500" />
            {resource.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default NewsPage;
