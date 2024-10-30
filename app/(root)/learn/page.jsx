import React from 'react'
import Link from 'next/link'
import { FaBook, FaFileAlt, FaLanguage, FaCalculator, FaAtom, FaGlobe, FaPalette, FaMusic, FaLightbulb, FaChalkboardTeacher, FaUserGraduate, FaChartLine } from 'react-icons/fa'

const subjects = [
  { id: 1, title: "Hindi", icon: <FaLanguage />, color: "bg-red-100 text-red-600" },
  { id: 2, title: "English", icon: <FaBook />, color: "bg-blue-100 text-blue-600" },
  { id: 3, title: "Mathematics", icon: <FaCalculator />, color: "bg-green-100 text-green-600" },
  { id: 4, title: "Science", icon: <FaAtom />, color: "bg-yellow-100 text-yellow-600" },
  { id: 5, title: "Social Studies", icon: <FaGlobe />, color: "bg-purple-100 text-purple-600" },
  { id: 6, title: "Art", icon: <FaPalette />, color: "bg-indigo-100 text-indigo-600" },
];

const features = [
  { title: "Comprehensive Study Materials", description: "Access in-depth guides and notes for all subjects", icon: <FaBook className="text-3xl text-blue-500" /> },
  { title: "Practice Questions", description: "Reinforce your learning with topic-wise practice questions", icon: <FaFileAlt className="text-3xl text-yellow-500" /> },
  { title: "Self-Paced Learning", description: "Study at your own pace with our structured content", icon: <FaMusic className="text-3xl text-green-500" /> },
];

const testimonials = [
  { name: "Priya Sharma", subject: "Mathematics", quote: "The comprehensive study materials helped me improve my problem-solving skills." },
  { name: "Rahul Verma", subject: "Science", quote: "The practice questions were incredibly helpful in reinforcing complex concepts." },
  { name: "Anita Desai", subject: "English", quote: "I've seen a significant improvement in my language skills thanks to these materials." },
];

function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Empower Your</span>
                <span className="block text-indigo-600">Learning Journey</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Access comprehensive study materials for various subjects to enhance your knowledge and skills.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/subjects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Explore Subjects
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <svg className="w-full h-auto" viewBox="0 0 786 786" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="393" cy="393" r="393" fill="#F3F4F6"/>
                <path d="M566.711 276.438L512.169 246.852L379.632 331.377L379.632 390.551L512.169 306.025L566.711 335.611L566.711 276.438Z" fill="#4F46E5"/>
                <path d="M219.289 276.438L273.831 246.852L406.368 331.377L406.368 390.551L273.831 306.025L219.289 335.611L219.289 276.438Z" fill="#818CF8"/>
                <path d="M219.289 394.449L273.831 364.863L406.368 449.388L406.368 508.562L273.831 424.036L219.289 453.622L219.289 394.449Z" fill="#818CF8"/>
                <path d="M566.711 394.449L512.169 364.863L379.632 449.388L379.632 508.562L512.169 424.036L566.711 453.622L566.711 394.449Z" fill="#4F46E5"/>
                <rect x="353" y="234" width="80" height="318" fill="#C7D2FE"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subjects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject) => (
              <Link key={subject.id} href={`/subjects/${subject.id}`} className={`${subject.color} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
                <div className="flex items-center mb-4">
                  {React.cloneElement(subject.icon, { className: "text-3xl mr-4" })}
                  <h3 className="text-xl font-semibold">{subject.title}</h3>
                </div>
                <p className="text-gray-600">Comprehensive study materials for {subject.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Learning Platform Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <FaLightbulb className="text-4xl text-yellow-500" />, title: "Choose Your Subject", description: "Select from our wide range of subjects" },
              { icon: <FaBook className="text-4xl text-blue-500" />, title: "Access Materials", description: "Get comprehensive study materials and notes" },
              { icon: <FaFileAlt className="text-4xl text-green-500" />, title: "Practice & Learn", description: "Reinforce your learning with practice questions" },
              { icon: <FaChartLine className="text-4xl text-purple-500" />, title: "Track Progress", description: "Monitor your improvement over time" },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Learning Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Sample Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { subject: "Hindi", topic: "व्याकरण", description: "Learn about Hindi grammar and sentence structure" },
              { subject: "Mathematics", topic: "Algebra", description: "Explore algebraic equations and problem-solving" },
              { subject: "Science", topic: "Photosynthesis", description: "Understand the process of photosynthesis in plants" },
            ].map((sample, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{sample.subject}: {sample.topic}</h3>
                <p className="text-gray-600 mb-4">{sample.description}</p>
                <Link href={`/subjects/${sample.subject.toLowerCase()}/${sample.topic.toLowerCase()}`} className="text-indigo-600 hover:text-indigo-800">
                  View sample →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Who Can Benefit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaUserGraduate className="text-4xl text-indigo-500" />, title: "Students", description: "Enhance your understanding of various subjects" },
              { icon: <FaChalkboardTeacher className="text-4xl text-indigo-500" />, title: "Teachers", description: "Use our materials as teaching aids" },
              { icon: <FaBook className="text-4xl text-indigo-500" />, title: "Lifelong Learners", description: "Expand your knowledge in different areas" },
            ].map((audience, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">{audience.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{audience.title}</h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">50,000+</p>
              <p className="text-xl text-gray-700">Students Enrolled</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">1,000+</p>
              <p className="text-xl text-gray-700">Success Stories</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">95%</p>
              <p className="text-xl text-gray-700">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { question: "Is this platform suitable for all age groups?", answer: "Yes, our materials cater to students from primary school to higher education." },
              { question: "How often is the content updated?", answer: "We regularly review and update our content to ensure accuracy and relevance." },
              { question: "Can I access the materials offline?", answer: "Yes, you can download materials for offline use on our mobile app." },
              { question: "Do you offer personalized learning paths?", answer: "We provide recommended learning paths based on your chosen subjects and progress." },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to boost your career?</span>
            <span className="block text-indigo-600">Start your journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/subjects" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LearnPage;
