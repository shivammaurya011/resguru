import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { FaCalendarAlt, FaEye, FaTags, FaUser } from 'react-icons/fa';
import ViewCounter from '@/components/ViewCounter';
import AuthorCard from '@/components/AuthorCard';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPostData(slug);
  
  if (!post) {
    return {
      title: 'Job Not Found',
      description: 'The requested job posting could not be found.'
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

async function getPostData(slug) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers/${slug}`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) return null;
    const data = await res.json();
    console.log('Fetched data:', data); // For debugging
    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const post = await getPostData(slug);
  
  if (!post) {
    notFound();
  }

  console.log('Post author:', post.author); // For debugging

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          
          {/* Meta Information */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-500" />
              <span>Posted: {format(new Date(post.createdAt), 'MMM d, yyyy')}</span>
            </div>
            <ViewCounter initialViews={post.views} slug={post.slug} />
            {post.author && (
              <div className="flex items-center gap-2">
                <FaUser className="text-blue-500" />
                <span>By: {post.author.name}</span>
              </div>
            )}
          </div>

          {/* Key Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {post.location && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">📍 Location:</span>
                <span>{post.location}</span>
              </div>
            )}
            {post.type && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">💼 Type:</span>
                <span className="capitalize">{post.type}</span>
              </div>
            )}
            {post.department && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">🏢 Department:</span>
                <span>{post.department}</span>
              </div>
            )}
            {post.dates && (
              <div className="flex items-center gap-2">
                <span className="font-semibold">📅 Duration:</span>
                <span>
                  {format(new Date(post.dates.startDate), 'MMM d, yyyy')} - 
                  {format(new Date(post.dates.endDate), 'MMM d, yyyy')}
                </span>
              </div>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <FaTags className="text-blue-500" />
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Author Card */}
        {post.author && (
          <div className="mb-8">
            <AuthorCard author={post.author} />
          </div>
        )}

        {/* Content Sections */}
        <div className="prose max-w-none">
          {/* Details Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.details || '' 
              }} 
            />
          </div>

          {/* Description Section */}
          {post.description && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: post.description || '' 
                }} 
              />
            </div>
          )}

          {/* Requirements Section */}
          {post.requirements && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Requirements</h2>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: post.requirements || '' 
                }} 
              />
            </div>
          )}

          {/* Benefits Section */}
          {post.benefits && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Benefits</h2>
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: post.benefits || '' 
                }} 
              />
            </div>
          )}

          {/* Apply Button */}
          <div className="text-center mt-8">
            <a
              href={post.applicationUrl || `mailto:${post.applicationEmail || 'careers@example.com'}`}
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
