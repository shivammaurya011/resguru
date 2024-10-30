import React from 'react';
import Link from 'next/link';
import { FaClipboardCheck, FaClock, FaChartBar, FaMedal, FaUsers, FaLightbulb, FaBook, FaQuestionCircle, FaCalendarAlt, FaRocket, FaChalkboardTeacher, FaTrophy, FaBrain, FaPuzzlePiece, FaRegNewspaper, FaBalanceScale } from 'react-icons/fa';

const examCategories = [
  { id: 1, title: "UPSC", icon: <FaClipboardCheck />, color: "bg-blue-100 text-blue-600" },
  { id: 2, title: "SSC", icon: <FaClock />, color: "bg-green-100 text-green-600" },
  { id: 3, title: "Banking", icon: <FaChartBar />, color: "bg-yellow-100 text-yellow-600" },
  { id: 4, title: "Railway", icon: <FaMedal />, color: "bg-red-100 text-red-600" },
  { id: 5, title: "Teaching", icon: <FaUsers />, color: "bg-purple-100 text-purple-600" },
  { id: 6, title: "Defense", icon: <FaLightbulb />, color: "bg-indigo-100 text-indigo-600" },
];

const practiceFeatures = [
  { title: "Topic-wise Tests", description: "Practice specific topics to strengthen your understanding", icon: <FaBook className="text-3xl text-blue-500" /> },
  { title: "Full-Length Mock Tests", description: "Simulate real exam conditions with comprehensive tests", icon: <FaClipboardCheck className="text-3xl text-green-500" /> },
  { title: "Daily Quiz Challenge", description: "Test your knowledge with our daily quiz", icon: <FaCalendarAlt className="text-3xl text-yellow-500" /> },
  { title: "Performance Analytics", description: "Track your progress and identify areas for improvement", icon: <FaChartBar className="text-3xl text-red-500" /> },
];

function PracticePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 text-gray-800 py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">Master Your Exam Preparation</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">Elevate your skills with our comprehensive practice platform featuring topic-wise tests, full-length mock exams, and daily challenges.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/mock-tests" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">
              Start Practicing Now
            </Link>
            <Link href="/features" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-100 transition duration-300 border border-blue-600">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Options Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Choose Your Practice Mode</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Topic-wise Tests", description: "Focus on specific subjects and topics", icon: <FaBook className="text-5xl text-blue-500 mb-4" /> },
              { title: "Full-Length Mocks", description: "Simulate complete exam experience", icon: <FaClipboardCheck className="text-5xl text-green-500 mb-4" /> },
              { title: "Daily Quiz", description: "Test your knowledge every day", icon: <FaCalendarAlt className="text-5xl text-yellow-500 mb-4" /> },
              { title: "Practice Sets", description: "Curated question sets for focused practice", icon: <FaPuzzlePiece className="text-5xl text-purple-500 mb-4" /> },
            ].map((item, index) => (
              <Link key={index} href={`/${item.title.toLowerCase().replace(' ', '-')}`} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center group">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Categories Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Practice by Exam Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {examCategories.map((category) => (
              <Link key={category.id} href={`/practice/${category.id}`} className={`${category.color} p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300`}>
                <div className="flex items-center mb-4">
                  {React.cloneElement(category.icon, { className: "text-4xl mr-4" })}
                  <h3 className="text-2xl font-semibold">{category.title} Exams</h3>
                </div>
                <p className="text-gray-700">Practice questions and mock tests for {category.title} examinations</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Enhance Your Preparation with Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {practiceFeatures.map((feature, index) => (
              <div key={index} className="flex items-start p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex-shrink-0 mr-6">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Tests Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Recently Added Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "UPSC Prelims 2024 Mock Test", type: "Full Length", questions: 100, duration: "2 hours" },
              { title: "SSC CGL Quantitative Aptitude", type: "Topic-wise", questions: 30, duration: "30 minutes" },
              { title: "Bank PO Reasoning Ability", type: "Practice Set", questions: 50, duration: "45 minutes" },
              { title: "Railway Group D General Knowledge", type: "Topic-wise", questions: 40, duration: "35 minutes" },
              { title: "CTET Paper I Child Development", type: "Topic-wise", questions: 25, duration: "25 minutes" },
              { title: "IBPS Clerk English Language", type: "Practice Set", questions: 35, duration: "30 minutes" },
            ].map((test, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{test.title}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{test.type}</span>
                    <span>{test.questions} questions</span>
                    <span>{test.duration}</span>
                  </div>
                  <Link href={`/test/${index + 1}`} className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    Start Test
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Plan Section */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Personalized Study Plans</h2>
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-3xl font-semibold mb-6 text-gray-800">Tailored to Your Goals</h3>
                <p className="text-gray-600 mb-8 text-lg">Get a customized study plan based on your target exam, strengths, and areas for improvement. Our AI-powered system adapts to your progress and helps you focus on what matters most.</p>
                <Link href="/create-study-plan" className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition duration-300 shadow-md">
                  Create Your Study Plan
                </Link>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img src="/images/study-plan-illustration.svg" alt="Study Plan Illustration" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Statistics */}
      <section className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Your Practice Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <FaRocket className="text-5xl text-blue-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-blue-800">247</h3>
              <p className="text-blue-600">Tests Completed</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <FaChalkboardTeacher className="text-5xl text-green-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-green-800">89</h3>
              <p className="text-green-600">Hours Practiced</p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg text-center">
              <FaTrophy className="text-5xl text-yellow-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-yellow-800">15</h3>
              <p className="text-yellow-600">Achievements Unlocked</p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg text-center">
              <FaBrain className="text-5xl text-purple-600 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold text-purple-800">78%</h3>
              <p className="text-purple-600">Average Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Top Performers This Week</h2>
          
          {/* Top 3 Performers */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-end space-y-8 md:space-y-0 md:space-x-8 mb-16">
            {[
              { rank: 2, name: "Rahul Verma", category: "SSC", score: 96 },
              { rank: 1, name: "Priya Sharma", category: "UPSC", score: 98 },
              { rank: 3, name: "Anita Desai", category: "Banking", score: 95 },
            ].map((user, index) => (
              <div key={index} className={`w-64 ${index === 1 ? 'md:w-72 md:-mb-8' : ''} bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105`}>
                <div className={`h-3 ${index === 1 ? 'bg-yellow-400' : index === 0 ? 'bg-gray-400' : 'bg-yellow-600'}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className={`text-5xl font-bold ${index === 1 ? 'text-yellow-400' : index === 0 ? 'text-gray-400' : 'text-yellow-600'}`}>#{user.rank}</span>
                    <span className="text-3xl font-bold text-gray-800">{user.score}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {user.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Remaining Top 10 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { rank: 4, name: "Vikram Singh", category: "Railway", score: 94 },
                    { rank: 5, name: "Neha Gupta", category: "Teaching", score: 93 },
                    { rank: 6, name: "Amit Patel", category: "GATE", score: 92 },
                    { rank: 7, name: "Sonia Kumar", category: "CAT", score: 91 },
                    { rank: 8, name: "Rajesh Khanna", category: "UPSC", score: 90 },
                    { rank: 9, name: "Preeti Jain", category: "SSC", score: 89 },
                    { rank: 10, name: "Suresh Raina", category: "Banking", score: 88 },
                  ].map((user, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-full">{user.rank}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {user.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Tips Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Expert Practice Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Consistency is Key", tip: "Practice regularly, even if it's just for 30 minutes a day. Consistent effort leads to significant improvement over time.", icon: <FaCalendarAlt className="text-4xl text-blue-500" /> },
              { title: "Focus on Weak Areas", tip: "Identify your weak subjects or topics and allocate more time to improve them. This targeted approach can boost your overall performance.", icon: <FaChartBar className="text-4xl text-green-500" /> },
              { title: "Simulate Exam Conditions", tip: "Take full-length mock tests under timed conditions to build stamina and improve your time management skills.", icon: <FaClock className="text-4xl text-yellow-500" /> },
              { title: "Review Your Mistakes", tip: "After each practice session, thoroughly review your incorrect answers. Understanding your mistakes is crucial for improvement.", icon: <FaQuestionCircle className="text-4xl text-red-500" /> },
              { title: "Stay Updated", tip: "Keep track of the latest exam patterns and syllabus changes. Adjust your practice strategy accordingly.", icon: <FaRegNewspaper className="text-4xl text-purple-500" /> },
              { title: "Balance Your Preparation", tip: "While focusing on weak areas is important, don't neglect your strong subjects. Maintain a balanced approach to maximize your overall score.", icon: <FaBalanceScale className="text-4xl text-indigo-500" /> },
            ].map((tip, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {tip.icon}
                  <h3 className="text-xl font-semibold ml-4">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 text-gray-800 py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Ace Your Exam?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">Join thousands of successful candidates who have improved their scores through consistent practice on our platform.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/signup" className="bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg">
              Start Your Free Trial
            </Link>
            <Link href="/testimonials" className="bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-blue-100 transition duration-300 border border-blue-600">
              Read Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PracticePage;
