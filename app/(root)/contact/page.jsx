// pages/contact.jsx
import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-3xl text-gray-600 mx-auto">
            We're here to help you with any questions, concerns, or feedback regarding Sarkari Result. Reach out to us through any of the provided contact methods.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaEnvelope className="text-3xl text-indigo-600 mb-4" />, title: "Email Us", content: "support@sarkariresult.dev" },
              { icon: <FaPhone className="text-3xl text-indigo-600 mb-4" />, title: "Call Us", content: "+91 123-456-7890" },
              { icon: <FaMapMarkerAlt className="text-3xl text-indigo-600 mb-4" />, title: "Visit Us", content: "123 Sarkari Path, Sector 5, New Delhi, India" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-md hover:shadow-lg bg-white transition-shadow duration-300">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Follow Us</h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Stay updated with the latest government job alerts, results, and tips by following us on social media. Join our community to connect with other aspirants, share experiences, and stay motivated.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: <FaFacebookF />, href: "https://facebook.com/sarkariresult" },
              { icon: <FaTwitter />, href: "https://twitter.com/sarkariresult" },
              { icon: <FaInstagram />, href: "https://instagram.com/sarkariresult" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/sarkariresult" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
