'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBell, FaEnvelope, FaSearch, FaChevronDown, FaBars, FaTimes, FaClipboardList, FaGraduationCap, FaBriefcase, FaFileAlt, FaChartBar, FaUsers } from 'react-icons/fa';

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { data: session } = useSession();
  const [notifications] = useState(0); // You'll want to replace this with real data
  const [messages] = useState(0);      // You'll want to replace this with real data

  const menuItems = [
    { icon: FaHome, text: 'Dashboard', href: '/dashboard' },
    { icon: FaUsers, text: 'Users', href: '/dashboard/users' },
    { icon: FaClipboardList, text: 'Learn', href: '/dashboard/learn' },
    { icon: FaGraduationCap, text: 'Practice', href: '/dashboard/practice' },
    { icon: FaBriefcase, text: 'Career', href: '/dashboard/career' },
    { icon: FaFileAlt, text: 'Resources', href: '/dashboard/resources' },
    { icon: FaChartBar, text: 'Progress', href: '/dashboard/progress' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-white text-gray-800 w-64 min-h-screen shadow-lg ${isSidebarOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out flex flex-col`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-200 flex-shrink-0">
            <Link href="/dashboard" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200">
              Sarkari Results
            </Link>
          </div>
          <nav className="flex-grow mt-5 px-4 overflow-y-auto scrollbar-hide">
            {menuItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className={`flex items-center py-3 px-4 mb-2 rounded-md transition-colors duration-200 ${
                  pathname === item.href ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                }`}>
                  <item.icon className={`mr-3 ${pathname === item.href ? 'text-blue-600' : 'text-gray-400'}`} />
                  {item.text}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-4 border-t border-gray-200 flex-shrink-0">
            <Link href="/dashboard/profile">
              <span className={`flex items-center py-2 px-4 rounded-md transition-colors duration-200 ${
                pathname === '/dashboard/profile' ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
              }`}>
                <FaUser className={`mr-3 ${pathname === '/dashboard/profile' ? 'text-blue-600' : 'text-gray-400'}`} />
                Profile
              </span>
            </Link>
            <Link href="/dashboard/settings">
              <span className={`flex items-center py-2 px-4 rounded-md transition-colors duration-200 ${
                pathname === '/dashboard/settings' ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
              }`}>
                <FaCog className={`mr-3 ${pathname === '/dashboard/settings' ? 'text-blue-600' : 'text-gray-400'}`} />
                Settings
              </span>
            </Link>
            <button
              onClick={() => signOut()}
              className="flex items-center py-2 px-4 mt-2 w-full text-left text-gray-600 hover:bg-gray-100 hover:text-blue-600 rounded-md transition-colors duration-200"
            >
              <FaSignOutAlt className="mr-3 text-gray-400" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:hidden">
                  <FaBars className="h-6 w-6" />
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-100 text-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 text-sm"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1 relative">
                  <FaBell className="h-6 w-6" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>
                <button className="text-gray-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1 relative">
                  <FaEnvelope className="h-6 w-6" />
                  {messages > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {messages}
                    </span>
                  )}
                </button>
                <div className="relative">
                  <button 
                    onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                    className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full transition-colors duration-200"
                  >
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={session?.user?.image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(session?.user?.name || 'User')}
                      alt={session?.user?.name || "User avatar"}
                    />
                    <span className="ml-2 text-sm font-medium hidden sm:inline-block">{session?.user?.name}</span>
                    <FaChevronDown className="ml-1 text-xs hidden sm:inline-block" />
                  </button>
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Your Profile</Link>
                      <Link href="/dashboard/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Settings</Link>
                      <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white">Sign out</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
