'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  const navItems = ['Home', 'About', 'Learn', 'Practice', 'Careers', 'Resources', 'Contact'];

  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl sm:text-4xl font-bold text-white hover:text-blue-200 transition duration-300">
              Sarkari Result
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-4">
            {navItems.map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className={`text-sm xl:text-base font-medium px-3 py-2 rounded-md transition duration-300 ${
                  pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                    ? 'bg-white text-blue-700'
                    : 'text-blue-100 hover:bg-blue-600 hover:text-white'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Login Button or Profile Menu */}
          <div className="hidden sm:block">
            {session ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center text-white hover:text-blue-200 focus:outline-none transition duration-300"
                >
                  <span className="mr-2 text-sm font-medium">{session.user.name}</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Dashboard</Link>
                    <span className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed" title="Coming soon">Profile</span>
                    <span className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed" title="Coming soon">Settings</span>
                    <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Sign out</button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login" className="bg-white text-blue-700 text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300 shadow-md">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 focus:outline-none transition duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-blue-800 border-t border-blue-600">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link 
                  key={item} 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
                    pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'bg-white text-blue-700'
                      : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="px-2 py-3 border-t border-blue-600">
              {session ? (
                <>
                  <Link href="/dashboard" className="block text-blue-100 hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300">Dashboard</Link>
                  <span className="block text-blue-300 px-3 py-2 rounded-md text-base font-medium cursor-not-allowed" title="Coming soon">Profile</span>
                  <span className="block text-blue-300 px-3 py-2 rounded-md text-base font-medium cursor-not-allowed" title="Coming soon">Settings</span>
                  <button onClick={handleSignOut} className="block w-full text-left text-blue-100 hover:text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium transition duration-300">Sign out</button>
                </>
              ) : (
                <Link href="/login" className="block w-full text-center bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300 text-base font-semibold shadow-md">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
