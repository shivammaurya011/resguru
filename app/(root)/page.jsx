import Link from "next/link";
import { FaSearch, FaRegNewspaper, FaUserGraduate, FaCheckCircle, FaUsers, FaBookOpen, FaChartLine, FaBuilding, FaUniversity, FaTrain, FaShieldAlt, FaLandmark, FaGraduationCap, FaPencilAlt, FaBriefcase, FaFileAlt, FaEnvelope, FaQuestionCircle, FaNewspaper, FaBook, FaUniversalAccess, FaBalanceScale, FaHandshake, FaChalkboardTeacher, FaFlask, FaChartBar, FaHeartbeat, FaGavel, FaPlane, FaBell, FaCheckSquare, FaIdCard, FaClipboardCheck, FaClock, FaLaptop, FaCalendarAlt, FaKey, FaArrowRight, FaExclamationTriangle } from 'react-icons/fa';
import { GiPoliceOfficerHead } from 'react-icons/gi';

// Add this async function to fetch data from the API
async function fetchCareers() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/careers`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching careers:', error);
    return [];
  }
}

// Add organizations data
const organizations = [
  {
    id: 'upsc',
    name: 'UPSC',
    icon: <FaLandmark className="text-4xl text-blue-600" />,
  },
  {
    id: 'ssc',
    name: 'SSC',
    icon: <FaBuilding className="text-4xl text-green-600" />,
  },
  {
    id: 'railways',
    name: 'Indian Railways',
    icon: <FaTrain className="text-4xl text-red-600" />,
  },
  {
    id: 'defence',
    name: 'Defence',
    icon: <FaShieldAlt className="text-4xl text-purple-600" />,
  },
  {
    id: 'banking',
    name: 'Banking',
    icon: <FaUniversity className="text-4xl text-yellow-600" />,
  },
  {
    id: 'teaching',
    name: 'Teaching',
    icon: <FaChalkboardTeacher className="text-4xl text-pink-600" />,
  },
  {
    id: 'police',
    name: 'Police',
    icon: <GiPoliceOfficerHead className="text-4xl text-gray-600" />,
  },
  {
    id: 'research',
    name: 'Research',
    icon: <FaFlask className="text-4xl text-indigo-600" />,
  },
  {
    id: 'statistics',
    name: 'Statistics',
    icon: <FaChartBar className="text-4xl text-orange-600" />,
  },
  {
    id: 'medical',
    name: 'Medical',
    icon: <FaHeartbeat className="text-4xl text-red-600" />,
  },
  {
    id: 'legal',
    name: 'Legal',
    icon: <FaGavel className="text-4xl text-brown-600" />,
  },
  {
    id: 'aviation',
    name: 'Aviation',
    icon: <FaPlane className="text-4xl text-sky-600" />,
  },
  {
    id: 'education',
    name: 'Education',
    icon: <FaGraduationCap className="text-4xl text-emerald-600" />,
  },
  {
    id: 'administrative',
    name: 'Administrative',
    icon: <FaBriefcase className="text-4xl text-slate-600" />,
  },
  {
    id: 'social',
    name: 'Social Services',
    icon: <FaUniversalAccess className="text-4xl text-rose-600" />,
  }
];

// Add services data
const services = [
  {
    id: 1,
    title: "Job Alerts",
    icon: <FaBell className="text-3xl text-blue-600" />,
    description: "Get instant notifications about latest government job openings, application deadlines, and exam schedules tailored to your preferences."
  },
  {
    id: 2,
    title: "Exam Updates",
    icon: <FaNewspaper className="text-3xl text-green-600" />,
    description: "Stay informed about exam patterns, important dates, admit card releases, and result announcements across all major competitive exams."
  },
  {
    id: 3,
    title: "Study Materials",
    icon: <FaBook className="text-3xl text-purple-600" />,
    description: "Access comprehensive study materials, previous year papers, and topic-wise notes prepared by subject matter experts."
  },
  {
    id: 4,
    title: "Mock Tests",
    icon: <FaCheckSquare className="text-3xl text-red-600" />,
    description: "Practice with our extensive collection of mock tests designed to simulate actual exam conditions and improve your performance."
  },
  {
    id: 5,
    title: "Career Guidance",
    icon: <FaUserGraduate className="text-3xl text-yellow-600" />,
    description: "Get expert advice on career paths, exam preparation strategies, and personalized guidance for government job aspirants."
  },
  {
    id: 6,
    title: "Application Tracking",
    icon: <FaClipboardCheck className="text-3xl text-indigo-600" />,
    description: "Keep track of your job applications, important dates, and application status all in one place."
  },
  {
    id: 7,
    title: "Interview Preparation",
    icon: <FaUsers className="text-3xl text-pink-600" />,
    description: "Comprehensive interview preparation resources including mock interviews, tips, and commonly asked questions."
  },
  {
    id: 8,
    title: "Document Manager",
    icon: <FaFileAlt className="text-3xl text-teal-600" />,
    description: "Securely store and manage all your important documents, certificates, and application forms in one place."
  },
  {
    id: 9,
    title: "Email Notifications",
    icon: <FaEnvelope className="text-3xl text-orange-600" />,
    description: "Receive timely email updates about new opportunities, deadline reminders, and important announcements."
  }
];

// Helper function for generating avatar backgrounds (used in Success Stories section)
const generateAvatar = (name, bgColor) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold"
      style={{ backgroundColor: bgColor }}
    >
      {initials}
    </div>
  );
};

// Add this function near the top of the file with other data fetching functions
async function fetchResources() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resources`, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching resources:', error);
    return [];
  }
}

export default async function Home() {
  const careers = await fetchCareers();

  // Filter careers by type
  const jobPosts = careers.filter(career => career.type === 'job' && career.status === 'published');
  const admissionPosts = careers.filter(career => career.type === 'admission' && career.status === 'published');
  const resultPosts = careers.filter(career => career.type === 'result' && career.status === 'published');
  const answerKeys = careers.filter(career => career.type === 'answerKey' && career.status === 'published');
  const syllabusData = careers.filter(career => career.type === 'syllabus' && career.status === 'published');
  const sarkariSchemes = careers.filter(career => career.type === 'scheme' && career.status === 'published');
  const exams = careers.filter(career => career.type === 'exam' && career.status === 'published');
  const scholarships = careers.filter(career => career.type === 'scholarship');

  // Update getMixedTrendingItems to use real data
  const getMixedTrendingItems = () => {
    const allItems = careers.map(career => ({
      ...career,
      uniqueId: `${career.type}-${career._id}`
    }));
    return allItems
      .sort((a, b) => b.views - a.views) // Sort by views
      .slice(0, 6); // Get top 6 items
  };

  const trendingItems = getMixedTrendingItems();

  const resources = await fetchResources();
  
  // Filter news items - get latest 6 published news
  const newsItems = resources
    .filter(resource => resource.status === 'published')
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <>
      {/* Skip to main content link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-700 text-white p-2">
        Skip to main content
      </a>

      {/* Hero Section with Trending Items */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-12 sm:py-16 lg:py-20" id="main-content" tabIndex="-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                Unlock Your <span className="text-blue-700">Sarkari</span> <br className="hidden sm:inline"/>
                Career <span className="text-blue-700">Dreams</span> Here
              </h1>
              <p className="text-xl sm:text-2xl mb-8 text-gray-700 leading-relaxed">
                Your trusted companion for government job notifications, exam results, and career guidance. We empower millions to achieve their public service aspirations.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <FaCheckCircle className="text-green-600" aria-hidden="true" />, text: "Comprehensive Coverage" },
                  { icon: <FaUsers className="text-blue-600" aria-hidden="true" />, text: "Vibrant Community" },
                  { icon: <FaBookOpen className="text-yellow-600" aria-hidden="true" />, text: "Tailored Resources" },
                  { icon: <FaChartLine className="text-red-600" aria-hidden="true" />, text: "Real-time Updates" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-gray-800 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/careers" className="bg-blue-700 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-800 transition duration-300 shadow-lg text-center text-lg">
                  Explore Careers
                </Link>
                <Link href="/practice" className="bg-white border-2 border-blue-700 text-blue-700 font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition duration-300 text-center text-lg">
                  Start Practicing
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 pb-2 border-b-2 border-blue-100">Trending Now</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {trendingItems.map((item) => (
                    <div key={item.uniqueId} className="bg-blue-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 border-l-4 border-blue-500 group">
                      <Link href={`/${item.type}s/${item.id}`} className="block">
                        <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-700 transition duration-300">{item.title}</h3>
                        <div className="flex items-center text-sm text-blue-600">
                          {item.type === 'job' && (
                            <>
                              <FaCalendarAlt className="mr-2" />
                              <span>End: {item.applicationEndDate}</span>
                            </>
                          )}
                          {item.type === 'result' && (
                            <>
                              <FaClipboardCheck className="mr-2" />
                              <span>Date: {item.date}</span>
                            </>
                          )}
                          {item.type === 'admission' && (
                            <>
                              <FaGraduationCap className="mr-2" />
                              <span>End: {item.applicationEndDate}</span>
                            </>
                          )}
                          {item.type === 'answerKey' && (
                            <>
                              <FaKey className="mr-2" />
                              <span>Date: {item.date}</span>
                            </>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizations Section */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-800">Government Organizations</h2>
          <p className="text-xl text-center text-gray-600 mb-10 max-w-3xl mx-auto">Explore opportunities across major public sector institutions and kickstart your career in governance</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {organizations.map((item) => (
              <Link key={`org-${item.id}`} href={`/explore/${item.id}`}>
                <div className="flex flex-col items-center justify-center bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
                  <div className="mb-2">{item.icon}</div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center">{item.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs, Results, and Admit Cards Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Latest Updates</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Jobs Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Latest Jobs</h3>
                <FaBriefcase className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {jobPosts.slice(0, 5).map((job) => (
                  <Link key={`job-list-${job._id}`} href={`/careers/${job.slug}`} className="block hover:bg-blue-50 transition duration-300">
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
                  <Link key={`result-list-${result._id}`} href={`/careers/${result.slug}`} className="block hover:bg-green-50 transition duration-300">
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
                {jobPosts.slice(0, 5).map((job) => (
                  <Link key={`admit-list-${job._id}`} href={`/careers/${job.slug}`} className="block hover:bg-purple-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{job.title} Admit Card</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Exam Date: {job.applicationEndDate}</span>
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

      {/* Learn Section */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-800">Learning Hub</h2>
          <p className="text-xl text-center text-gray-600 mb-10 max-w-3xl mx-auto">Access comprehensive study materials and expert-curated resources to excel in your exam preparation</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaGraduationCap className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Exam Guides</h3>
              <p className="text-gray-600 text-center">Comprehensive guides for various government exams</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaBookOpen className="text-4xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Study Materials</h3>
              <p className="text-gray-600 text-center">Curated resources to help you prepare effectively</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaChartLine className="text-4xl text-red-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Strategy Sessions</h3>
              <p className="text-gray-600 text-center">Expert tips to optimize your exam preparation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Answer Key, Syllabus, and Admissions Section */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Exam Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Answer Key Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-yellow-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Answer Keys</h3>
                <FaKey className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {answerKeys.map((key) => (
                  <Link key={`answerkey-list-${key._id}`} href={`/answerkeys/${key.slug}`} className="block hover:bg-yellow-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{key.title}</h4>
                      <div className="text-sm text-gray-600">Date: {key.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/allanswerkeys" className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Answer Keys
                </Link>
              </div>
            </div>

            {/* Syllabus Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-red-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Syllabus</h3>
                <FaBook className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {syllabusData.map((syllabus) => (
                  <Link key={`syllabus-list-${syllabus._id}`} href={`/syllabus/${syllabus.slug}`} className="block hover:bg-red-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{syllabus.title}</h4>
                      <div className="text-sm text-gray-600">Last Updated: {syllabus.lastUpdated}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/allsyllabus" className="block w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Syllabus
                </Link>
              </div>
            </div>

            {/* Admissions Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Admissions</h3>
                <FaGraduationCap className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {admissionPosts.map((admission) => (
                  <Link key={`admission-list-${admission._id}`} href={`/admissions/${admission.slug}`} className="block hover:bg-indigo-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{admission.title}</h4>
                      <div className="text-sm text-gray-600">End: {admission.applicationEndDate}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/alladmissions" className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Section */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-800">Practice Arena</h2>
          <p className="text-xl text-center text-gray-600 mb-10 max-w-3xl mx-auto">Sharpen your skills with our extensive collection of mock tests, previous year papers, and topic-wise quizzes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaPencilAlt className="text-4xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Mock Tests</h3>
              <p className="text-gray-600 text-center">Simulate real exam conditions with our comprehensive mock tests</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaFileAlt className="text-4xl text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Previous Year Papers</h3>
              <p className="text-gray-600 text-center">Practice with actual questions from past exams</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaQuestionCircle className="text-4xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Quiz Challenges</h3>
              <p className="text-gray-600 text-center">Test your knowledge with topic-wise quizzes and improve your skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sarkari Schemes, exams, and scholarships*/}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Additional Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sarkari Schemes Subsection */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-teal-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Sarkari Schemes</h3>
                <FaHandshake className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {sarkariSchemes.map((scheme) => (
                  <Link key={scheme.id} href={`/schemes/${scheme.id}`} className="block hover:bg-teal-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{scheme.title}</h4>
                      <div className="text-sm text-gray-600">Last Updated: {scheme.lastUpdated}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/allschemes" className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Schemes
                </Link>
              </div>
            </div>

            {/* exams*/}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-orange-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Exams</h3>
                <FaExclamationTriangle className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {exams.map((info) => (
                  <Link key={info.id} href={`/important/${info.id}`} className="block hover:bg-orange-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      <div className="text-sm text-gray-600">Date: {info.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/allimportant" className="block w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Important Info
                </Link>
              </div>
            </div>

            {/* scholarships*/}
            <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
              <div className="bg-pink-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold">Scholarships</h3>
                <FaCalendarAlt className="text-2xl" />
              </div>
              <div className="divide-y divide-gray-200 flex-grow">
                {scholarships.map((form) => (
                  <Link key={form.id} href={`/upcoming/${form.id}`} className="block hover:bg-pink-50 transition duration-300">
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{form.title}</h4>
                      <div className="text-sm text-gray-600">Expected Date: {form.expectedDate}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-gray-50">
                <Link href="/allupcoming" className="block w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded transition duration-300 text-center">
                  View All Upcoming Forms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-800">Preparation Toolkit</h2>
          <p className="text-xl text-center text-gray-600 mb-10 max-w-3xl mx-auto">Leverage our comprehensive resources to streamline your study process and boost your exam readiness</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaFileAlt className="text-4xl text-teal-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Exam Notifications</h3>
              <p className="text-gray-600 text-center">Stay updated with the latest exam announcements</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaUsers className="text-4xl text-orange-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">Discussion Forums</h3>
              <p className="text-gray-600 text-center">Connect with fellow aspirants and share knowledge</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <FaBookOpen className="text-4xl text-pink-600 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">E-Library</h3>
              <p className="text-gray-600 text-center">Access a vast collection of digital study materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={`service-${service.id}`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold ml-3 text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Preparation Tips Section */}
      <section className="bg-gray-100 py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-800">Success Strategies</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">Master proven techniques and expert tips to optimize your study plan and maximize your exam performance</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
              <FaClipboardCheck className="text-5xl text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Create a Study Plan</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Set clear daily and weekly goals</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Balance study time across subjects</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Schedule regular revision sessions</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Include short breaks to stay focused</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
              <FaBook className="text-5xl text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Use Quality Materials</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Follow the official exam syllabus</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Use up-to-date study guides</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Solve previous years' question papers</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Supplement with online resources</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-blue-600">
              <FaClock className="text-5xl text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">Master Time Management</h3>
              <ul className="text-gray-700 space-y-3">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Take regular timed mock tests</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Practice quick answer techniques</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Identify and improve weak areas</span>
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2 flex-shrink-0" />
                  <span>Learn to allocate time per question</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-8 pb-4" style={{ width: "max-content" }}>
              {[
                {
                  name: "Priya Sharma",
                  position: "UPSC CSE 2023 - AIR 45",
                  bgColor: "#4299E1", // blue-500
                  quote: "Consistent effort and the right guidance helped me achieve my dream of joining the civil services. The structured approach and comprehensive resources provided here were instrumental in my success.",
                  exam: "UPSC Civil Services",
                  borderColor: "border-blue-600",
                },
                {
                  name: "Rahul Verma",
                  position: "SBI PO 2023 - Selected",
                  bgColor: "#48BB78", // green-500
                  quote: "The resources and mock tests available here were crucial in my preparation for the banking exams. The platform's personalized study plan and performance analytics gave me a competitive edge.",
                  exam: "SBI Probationary Officer",
                  borderColor: "border-green-600",
                },
                {
                  name: "Anita Desai",
                  position: "SSC CGL 2023 - AIR 78",
                  bgColor: "#9F7AEA", // purple-500
                  quote: "The comprehensive study materials and regular mock tests helped me crack the SSC CGL exam. The platform's guidance was invaluable in my journey.",
                  exam: "SSC Combined Graduate Level",
                  borderColor: "border-purple-600",
                },
                {
                  name: "Vikram Singh",
                  position: "IBPS PO 2023 - Selected",
                  bgColor: "#F56565", // red-500
                  quote: "The sectional tests and performance analysis provided by the platform were key to my success in the IBPS PO exam. I'm grateful for the support.",
                  exam: "IBPS Probationary Officer",
                  borderColor: "border-red-600",
                },
              ].map((story, index) => (
                <div key={`story-${index}`} className={`bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 ${story.borderColor} flex-shrink-0 w-[500px]`}>
                  <div className="flex items-center mb-6">
                    {generateAvatar(story.name, story.bgColor)}
                    <div className="ml-4">
                      <h3 className="text-2xl font-semibold text-gray-800">{story.name}</h3>
                      <p className={`text-${story.borderColor.split('-')[1]} font-medium`}>{story.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Exam: {story.exam}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="bg-gray-100 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-800">Latest News</h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Stay ahead with the latest updates on government jobs, policy changes, and crucial exam notifications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news) => (
              <div 
                key={news._id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(news.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors duration-300">
                    <Link href={`/resources/${news.slug}`}>
                      {news.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {news.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Views: {news.views}
                    </span>
                    <Link 
                      href={`/resources/${news.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Stay Ahead of the Curve</h2>
            <p className="text-center text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest job notifications, exam updates, and career insights directly in your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full md:flex-1 px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 shadow-sm" 
                  required
                  aria-label="Email Address"
                />
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-300 transform hover:scale-105"
                  aria-label="Subscribe Now"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-sm mt-6">
              Your privacy is our priority. We'll never share your information. Unsubscribe anytime.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <span className="text-gray-600 flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2 align-middle" /> Daily Updates
              </span>
              <span className="text-gray-600 flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2 align-middle" /> Exam Alerts
              </span>
              <span className="text-gray-600 flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2 align-middle" /> Career Tips
              </span>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}