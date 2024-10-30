import React from 'react';
import Link from 'next/link';
import { FaBook, FaFileAlt, FaVideo, FaPodcast, FaNewspaper, FaChalkboardTeacher, FaBriefcase, FaBullhorn, FaClipboardList } from 'react-icons/fa';

const resourceCategories = [
  { id: 1, title: "Study Materials", icon: <FaBook />, color: "bg-blue-100 text-blue-600" },
  { id: 2, title: "Previous Year Papers", icon: <FaFileAlt />, color: "bg-green-100 text-green-600" },
  { id: 3, title: "Video Lectures", icon: <FaVideo />, color: "bg-yellow-100 text-yellow-600" },
  { id: 4, title: "Podcasts", icon: <FaPodcast />, color: "bg-red-100 text-red-600" },
  { id: 5, title: "Current Affairs", icon: <FaNewspaper />, color: "bg-purple-100 text-purple-600" },
  { id: 6, title: "Expert Insights", icon: <FaChalkboardTeacher />, color: "bg-indigo-100 text-indigo-600" },
];

const features = [
  { title: "Curated Content", description: "Access high-quality, exam-specific study materials vetted by experts", icon: <FaBook className="text-3xl text-blue-500" /> },
  { title: "Regular Updates", description: "Stay current with the latest exam patterns and syllabus changes", icon: <FaNewspaper className="text-3xl text-green-500" /> },
  { title: "Multi-format Learning", description: "Choose from text, video, and audio resources to suit your learning style", icon: <FaVideo className="text-3xl text-yellow-500" /> },
  { title: "Exam Strategies", description: "Learn proven techniques to tackle different types of questions effectively", icon: <FaChalkboardTeacher className="text-3xl text-red-500" /> },
];

// New arrays for job news and announcements
const jobNews = [
  { title: "New Government Positions Open", date: "2023-05-15", link: "/news/gov-positions" },
  { title: "Private Sector Hiring Surge", date: "2023-05-10", link: "/news/private-sector" },
  { title: "Upcoming Job Fair in Delhi", date: "2023-05-05", link: "/news/job-fair" },
];

const announcements = [
  { title: "UPSC Exam Dates Announced", date: "2023-05-12", link: "/announcements/upsc-dates" },
  { title: "New Skill Development Program", date: "2023-05-08", link: "/announcements/skill-program" },
  { title: "Changes in SSC Selection Process", date: "2023-05-03", link: "/announcements/ssc-changes" },
];

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Updated Hero Section with blue-related colors */}
      <section className="bg-gradient-to-r from-blue-100 to-cyan-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">Your Gateway to Exam Success</h1>
          <p className="text-xl mb-8 text-blue-800 max-w-2xl mx-auto">
            Dive into a sea of knowledge with our comprehensive study materials, previous year papers, and expert insights. 
            Navigate your way to exam excellence with our curated resources.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/resources/all" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
              Explore Resources
            </Link>
            <Link href="/signup" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Resources by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceCategories.map((category) => (
              <Link key={category.id} href={`/resources/${category.id}`} className={`${category.color} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
                <div className="flex items-center mb-4">
                  {React.cloneElement(category.icon, { className: "text-3xl mr-4" })}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-gray-600">Access {category.title.toLowerCase()} to enhance your preparation</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Job News Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Job News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {jobNews.map((news, index) => (
              <Link key={index} href={news.link} className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-2xl text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold">{news.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">Posted on: {news.date}</p>
                <p className="text-blue-600 font-semibold">Read more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Announcements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Important Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {announcements.map((announcement, index) => (
              <Link key={index} href={announcement.link} className="bg-yellow-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="flex items-center mb-4">
                  <FaBullhorn className="text-2xl text-yellow-600 mr-4" />
                  <h3 className="text-xl font-semibold">{announcement.title}</h3>
                </div>
                <p className="text-gray-600 mb-2">Announced on: {announcement.date}</p>
                <p className="text-yellow-600 font-semibold">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Application Guidance Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Application Guidance</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <FaClipboardList className="text-3xl text-green-600 mr-4" />
              <h3 className="text-2xl font-semibold">How to Fill Application Forms</h3>
            </div>
            <p className="text-gray-600 mb-4">Follow these steps to ensure your job application is complete and accurate:</p>
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>Read the instructions carefully</li>
              <li>Gather all necessary documents</li>
              <li>Fill in personal details accurately</li>
              <li>Double-check educational qualifications</li>
              <li>Provide relevant work experience</li>
              <li>Upload required documents in the specified format</li>
              <li>Review all information before submission</li>
            </ol>
            <Link href="/application-guide" className="bg-green-600 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
              Detailed Application Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Resources Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="flex-shrink-0 mr-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated CTA Section with blue-related colors */}
      <section className="bg-gradient-to-r from-sky-100 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Elevate Your Exam Preparation</h2>
          <p className="text-xl mb-8 text-blue-800 max-w-2xl mx-auto">
            Join a community of high achievers who have mastered their exams with our resources. 
            Unlock premium study materials and chart your course to success.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition duration-300">
              Embark on Your Journey
            </Link>
            <Link href="/testimonials" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-indigo-100 transition duration-300">
              Discover Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResourcesPage;
