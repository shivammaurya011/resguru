import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialIcons = [
    { Icon: FaFacebookF, href: "#" },
    { Icon: FaTwitter, href: "#" },
    { Icon: FaLinkedinIn, href: "#" },
    { Icon: FaInstagram, href: "#" },
    { Icon: FaYoutube, href: "#" },
    { Icon: FaWhatsapp, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-6">Sarkari Result</h3>
            <p className="text-blue-100 mb-6 text-lg">Your trusted companion for government job notifications, exam preparation, and career guidance.</p>
            <div className="flex flex-wrap gap-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href}
                  className="bg-blue-600 p-2 rounded-full text-white hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out"
                  aria-label={`Visit our ${Icon.name.replace('Fa', '')}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About', 'Learn', 'Tests', 'Careers'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-blue-100 hover:text-white transition duration-300 text-lg">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              {['Study Materials', 'Mock Tests', 'Current Affairs'].map((item) => (
                <li key={item}>
                  <Link href={`/resources/${item.toLowerCase().replace(' ', '-')}`} className="text-blue-100 hover:text-white transition duration-300 text-lg">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-blue-100 text-lg">
              <li>123 Education Street</li>
              <li>New Delhi, 110001</li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: info@sarkariresult.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-base mb-4 md:mb-0">&copy; {currentYear} Sarkari Result. All rights reserved.</p>
          <div className="flex space-x-6 text-base">
            <Link href="/privacy-policy" className="text-blue-100 hover:text-white transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-blue-100 hover:text-white transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
