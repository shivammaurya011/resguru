// pages/about.jsx
import React from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaUsers, FaBookOpen, FaChartLine, FaQuoteLeft, FaMedal, FaChevronDown, FaChevronUp, FaHandshake, FaLightbulb, FaStar } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Introduction Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">Welcome to Sarkari Result</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At Sarkari Result, we're not just a website; we're a team of passionate individuals who understand the dreams and aspirations of millions of Indians seeking stability, purpose, and growth in the public sector.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2010, we've been walking alongside aspirants like you for over a decade, celebrating your successes and learning from every challenge. Our mission is simple: to demystify the government job application process and empower you with the knowledge and resources you need to succeed.
              </p>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-full h-0 pb-[75%] overflow-hidden">
                <Image
                  src="/images/about-page-image.svg"
                  alt="Sarkari Result Team"
                  layout="fill"
                  objectFit="cover"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 text-center">Our Mission & Vision</h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            Guiding principles that drive us to empower millions of aspirants in their pursuit of public service careers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower millions of aspirants with accurate, timely information and resources, simplifying their journey towards securing government jobs. We strive to be the most trusted companion for every individual dreaming of a rewarding career in public service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-indigo-600 mb-6 flex items-center">
                <svg className="w-8 h-8 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a future where every deserving candidate has equal access to opportunities in the public sector. We envision a platform that not only informs but also inspires, educates, and connects aspirants, fostering a community of future leaders who will shape India's tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-700">
            The Sarkari Result Advantage
          </h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            Discover why thousands of aspirants trust us for their government job preparation journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaCheckCircle className="text-green-500 text-4xl mb-4" />, title: "Comprehensive Coverage", description: "From UPSC to SSC, banking to teaching – we've got every government opportunity covered." },
              { icon: <FaUsers className="text-blue-500 text-4xl mb-4" />, title: "Community-Driven", description: "Join a vibrant community of aspirants, share experiences, and grow together." },
              { icon: <FaBookOpen className="text-yellow-500 text-4xl mb-4" />, title: "Tailored Learning", description: "Personalized study plans, mock tests, and resources designed for your success." },
              { icon: <FaChartLine className="text-red-500 text-4xl mb-4" />, title: "Real-Time Updates", description: "Stay ahead with instant notifications on new opportunities and results." },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet Our Team Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 text-center">Meet Our Team</h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            The dedicated professionals working tirelessly to support your success in government job exams.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", bio: "Former UPSC topper with a passion for education." },
              { name: "Priya Sharma", role: "Content Head", bio: "10+ years of experience in creating exam-oriented study materials." },
              { name: "Amit Patel", role: "Tech Lead", bio: "IT expert ensuring smooth user experience on our platform." },
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 text-center">Success Stories</h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            Real experiences from candidates who achieved their dreams with Sarkari Result's support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Anita Desai", exam: "UPSC CSE 2022", rank: "AIR 45", quote: "Sarkari Result's comprehensive study material and mock tests were instrumental in my success." },
              { name: "Rahul Verma", exam: "SSC CGL 2023", rank: "AIR 22", quote: "The community support and expert guidance I received here made all the difference in my preparation." },
            ].map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <FaQuoteLeft className="text-indigo-500 text-3xl mb-4" />
                <p className="text-gray-700 italic mb-4">{story.quote}</p>
                <div className="flex items-center">
                  <FaMedal className="text-yellow-500 text-2xl mr-2" />
                  <div>
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-sm text-gray-600">{story.exam} - Rank {story.rank}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
            Find answers to common queries about our services and how we can assist you in your preparation.
          </p>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { 
                question: "How often do you update job notifications?", 
                answer: "We update our job notifications daily, sometimes multiple times a day for urgent announcements. Our team works around the clock to ensure you have the most current information available."
              },
              { 
                question: "Do you provide study materials?", 
                answer: "Yes, we offer a wide range of free and premium study materials tailored for various exams. This includes comprehensive guides, practice tests, video lectures, and downloadable PDFs to support your preparation journey."
              },
              { 
                question: "Can I get personalized guidance?", 
                answer: "Absolutely! Our premium members get access to one-on-one mentoring sessions with experts. We also offer personalized study plans and progress tracking to help you stay on course."
              },
              { 
                question: "Are the mock tests on your platform similar to actual exams?", 
                answer: "Yes, our mock tests are designed to closely mimic the pattern, difficulty level, and time constraints of actual government exams. They are regularly updated based on the latest exam trends and feedback from successful candidates."
              },
              { 
                question: "How can I stay updated with the latest notifications?", 
                answer: "You can enable push notifications on our mobile app, subscribe to our email newsletter, or follow our social media channels. We ensure that critical updates reach you through multiple channels so you never miss an important announcement."
              },
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer focus:outline-none">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                    <FaChevronDown className="text-indigo-600" />
                  </div>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Promise Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-indigo-800">
            Our Promise to You
          </h2>
          <p className="text-gray-600 text-lg text-center mb-16 max-w-3xl mx-auto">
            We're committed to your success every step of the way. Here's what you can expect from us:
          </p>
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              {
                icon: <FaHandshake className="text-5xl text-indigo-500 mb-6" />,
                title: "Unwavering Support",
                description: "We're your mentors, cheerleaders, and support system throughout your journey."
              },
              {
                icon: <FaLightbulb className="text-5xl text-yellow-500 mb-6" />,
                title: "Simplified Success Path",
                description: "We break down complex processes into manageable steps for your success."
              },
              {
                icon: <FaStar className="text-5xl text-red-500 mb-6" />,
                title: "Celebrate Every Milestone",
                description: "Your achievements, big or small, are our victories too."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-2xl font-bold mb-4 text-indigo-700">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"></div>
            <FaQuoteLeft className="text-6xl text-indigo-100 absolute top-8 left-8" />
            <div className="relative z-10">
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                At Sarkari Result, we understand the dedication it takes to pursue a government job. That's why we ensure every piece of information, study resource, and guidance we offer is accurate, timely, and truly helpful.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                We're committed to simplifying your path to success, providing you with the tools and support you need to achieve your goals. Our team works tirelessly to keep you informed, prepared, and motivated throughout your journey.
              </p>
              <p className="text-indigo-700 text-2xl font-bold italic">
                Your success story is waiting to be written, and we're here to help you pen every chapter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
