import React from 'react';
import Link from 'next/link';
import { FaBriefcase, FaGraduationCap, FaChartLine, FaHandshake, FaSearch, FaRegNewspaper, FaClipboardCheck, FaIdCard, FaUniversity, FaQuestionCircle } from 'react-icons/fa';

const careerCategories = [
  { id: 1, title: "Civil Services", icon: <FaBriefcase />, color: "bg-blue-100 text-blue-600" },
  { id: 2, title: "Banking & Finance", icon: <FaChartLine />, color: "bg-green-100 text-green-600" },
  { id: 3, title: "Defense", icon: <FaGraduationCap />, color: "bg-yellow-100 text-yellow-600" },
  { id: 4, title: "Teaching", icon: <FaHandshake />, color: "bg-red-100 text-red-600" },
  { id: 5, title: "Railways", icon: <FaSearch />, color: "bg-purple-100 text-purple-600" },
  { id: 6, title: "Public Sector Units", icon: <FaRegNewspaper />, color: "bg-indigo-100 text-indigo-600" },
];

const features = [
  { title: "Comprehensive Job Listings", description: "Access the latest government job openings across various sectors", icon: <FaSearch className="text-3xl text-blue-500" /> },
  { title: "Career Guidance", description: "Get expert advice on choosing the right career path in the public sector", icon: <FaHandshake className="text-3xl text-green-500" /> },
  { title: "Exam Notifications", description: "Stay updated with the latest exam announcements and schedules", icon: <FaRegNewspaper className="text-3xl text-yellow-500" /> },
  { title: "Salary & Benefits Info", description: "Detailed information on pay scales and perks for different positions", icon: <FaChartLine className="text-3xl text-red-500" /> },
];

// Sample data for jobs, results, admit cards, admissions, and answer keys
const jobPosts = [
  { id: 1, title: "UPSC Civil Services 2024", applicationStartDate: "2024-06-01", applicationEndDate: "2024-06-30" },
  { id: 2, title: "SBI PO Recruitment 2024", applicationStartDate: "2024-07-01", applicationEndDate: "2024-07-31" },
  { id: 3, title: "Indian Army Officer Recruitment", applicationStartDate: "2024-08-01", applicationEndDate: "2024-08-31" },
  { id: 4, title: "Railway Group D Recruitment", applicationStartDate: "2024-09-01", applicationEndDate: "2024-09-30" },
  { id: 5, title: "IBPS Clerk Recruitment 2024", applicationStartDate: "2024-10-01", applicationEndDate: "2024-10-31" },
];

const resultPosts = [
  { id: 1, title: "UPSC CSE 2023 Results", date: "2024-05-15" },
  { id: 2, title: "SSC CGL 2023 Results", date: "2024-04-30" },
  { id: 3, title: "IBPS PO 2023 Results", date: "2024-03-31" },
  { id: 4, title: "RRB NTPC Results", date: "2024-06-15" },
  { id: 5, title: "GATE 2024 Results", date: "2024-03-15" },
];

const admitCards = [
  { id: 1, title: "UPSC CSE Prelims 2024", examDate: "2024-06-15" },
  { id: 2, title: "SSC CHSL 2024", examDate: "2024-07-10" },
  { id: 3, title: "IBPS PO Prelims 2024", examDate: "2024-08-05" },
  { id: 4, title: "RRB Group D 2024", examDate: "2024-09-20" },
  { id: 5, title: "NDA Exam 2024", examDate: "2024-10-15" },
];

const admissionPosts = [
  { id: 1, title: "Delhi University Admissions", applicationStartDate: "2024-05-01", applicationEndDate: "2024-06-01" },
  { id: 2, title: "IIT JEE Admissions", applicationStartDate: "2024-04-01", applicationEndDate: "2024-05-01" },
  { id: 3, title: "NEET UG Admissions", applicationStartDate: "2024-06-01", applicationEndDate: "2024-07-01" },
  { id: 4, title: "AIIMS MBBS Admissions", applicationStartDate: "2024-05-15", applicationEndDate: "2024-06-15" },
  { id: 5, title: "NDA Admissions", applicationStartDate: "2024-06-15", applicationEndDate: "2024-07-15" },
];

const answerKeys = [
  { id: 1, title: "UPSC Prelims 2024 Answer Key", date: "2024-06-10" },
  { id: 2, title: "SSC CHSL 2024 Answer Key", date: "2024-07-05" },
  { id: 3, title: "IBPS Clerk 2024 Answer Key", date: "2024-09-15" },
  { id: 4, title: "RRB Group D Answer Key", date: "2024-08-20" },
  { id: 5, title: "CTET 2024 Answer Key", date: "2024-10-01" },
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Discover Your Path in Public Service
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Explore rewarding career opportunities in government sectors and make a lasting impact on society.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/job-search" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                Search Jobs
              </Link>
              <Link href="/career-guide" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300">
                Career Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Career Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Career Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerCategories.map((category) => (
              <Link key={category.id} href={`/careers/${category.id}`} className={`${category.color} p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
                <div className="flex items-center mb-4">
                  {React.cloneElement(category.icon, { className: "text-3xl mr-4" })}
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-gray-600">Explore opportunities in {category.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs, Results, and Admit Cards Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Jobs Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Latest Jobs</h3>
                <FaBriefcase className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {jobPosts.map((job) => (
                  <Link key={job.id} href={`/jobs/${job.id}`} className="block hover:bg-blue-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{job.title}</h4>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Start: {job.applicationStartDate}</span>
                        <span>End: {job.applicationEndDate}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/alljobs" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Jobs
                </Link>
              </div>
            </div>

            {/* Results Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Latest Results</h3>
                <FaClipboardCheck className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {resultPosts.map((result) => (
                  <Link key={result.id} href={`/results/${result.id}`} className="block hover:bg-green-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{result.title}</h4>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Date: {result.date}</span>
                        <span className="text-green-600 font-medium">Result Available</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/allresults" className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Results
                </Link>
              </div>
            </div>

            {/* Admit Cards Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-purple-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Latest Admit Cards</h3>
                <FaIdCard className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {admitCards.map((card) => (
                  <Link key={card.id} href={`/admitcards/${card.id}`} className="block hover:bg-purple-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{card.title}</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Exam Date: {card.examDate}</span>
                        <span className="text-purple-600 font-medium">Download Available</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/alladmitcards" className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Admit Cards
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions and Answer Keys Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Educational Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Admissions Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-yellow-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Latest Admissions</h3>
                <FaUniversity className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {admissionPosts.map((admission) => (
                  <Link key={admission.id} href={`/admissions/${admission.id}`} className="block hover:bg-yellow-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{admission.title}</h4>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Start: {admission.applicationStartDate}</span>
                        <span>End: {admission.applicationEndDate}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/alladmissions" className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Admissions
                </Link>
              </div>
            </div>

            {/* Answer Keys Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-red-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Latest Answer Keys</h3>
                <FaQuestionCircle className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {answerKeys.map((key) => (
                  <Link key={key.id} href={`/answerkeys/${key.id}`} className="block hover:bg-red-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{key.title}</h4>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Date: {key.date}</span>
                        <span className="text-red-600 font-medium">Available Now</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/allanswerkeys" className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Answer Keys
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose a Government Career</h2>
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

      {/* New Resources and Announcements Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Resources and Announcements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Latest Announcements */}
            <div className="bg-blue-50 rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-semibold">Latest Announcements</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li>
                    <Link href="/announcement/1" className="block hover:bg-blue-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-blue-800">UPSC CSE 2024 Notification Released</h4>
                      <p className="text-sm text-gray-600">Applications open from June 1st to June 30th, 2024</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/announcement/2" className="block hover:bg-blue-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-blue-800">SSC CGL 2024 Exam Dates Announced</h4>
                      <p className="text-sm text-gray-600">Tier I exam scheduled for August 2024</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/announcement/3" className="block hover:bg-blue-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-blue-800">IBPS PO 2024 Recruitment Drive</h4>
                      <p className="text-sm text-gray-600">Over 5000 vacancies to be filled across India</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Application Guides */}
            <div className="bg-green-50 rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <h3 className="text-xl font-semibold">Application Guides</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li>
                    <Link href="/guide/upsc-cse" className="block hover:bg-green-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-green-800">How to Fill UPSC CSE Application Form</h4>
                      <p className="text-sm text-gray-600">Step-by-step guide with tips and common mistakes to avoid</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/guide/ssc-cgl" className="block hover:bg-green-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-green-800">SSC CGL Application Process Explained</h4>
                      <p className="text-sm text-gray-600">Detailed walkthrough of the online application system</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/guide/bank-po" className="block hover:bg-green-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-green-800">Bank PO Application: Do's and Don'ts</h4>
                      <p className="text-sm text-gray-600">Expert advice on perfecting your bank job application</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Career Resources */}
            <div className="bg-purple-50 rounded-xl shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white p-4">
                <h3 className="text-xl font-semibold">Career Resources</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-4">
                  <li>
                    <Link href="/resource/exam-preparation" className="block hover:bg-purple-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-purple-800">Exam Preparation Strategies</h4>
                      <p className="text-sm text-gray-600">Effective study techniques for competitive exams</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resource/interview-tips" className="block hover:bg-purple-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-purple-800">Government Job Interview Tips</h4>
                      <p className="text-sm text-gray-600">Ace your interview with our expert advice</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/resource/career-paths" className="block hover:bg-purple-100 p-2 rounded transition duration-300">
                      <h4 className="font-semibold text-purple-800">Government Sector Career Paths</h4>
                      <p className="text-sm text-gray-600">Explore various career trajectories in public service</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Serve Your Nation?</h2>
            <p className="text-xl mb-8 text-gray-600">
              Take the first step towards a fulfilling career in public service. Our career assessment tool will help you find the perfect path.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/career-assessment" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
                Take Career Assessment
              </Link>
              <Link href="/success-stories" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg border border-blue-600 hover:bg-blue-50 transition duration-300">
                Read Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CareersPage;
