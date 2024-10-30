import React from 'react';
import { FaShieldAlt, FaUserLock, FaCookieBite, FaEnvelope } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700 text-center">Privacy Policy</h1>
          <p className="text-xl text-center max-w-3xl text-gray-600 mx-auto">
            At Sarkari Result, we are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <FaShieldAlt className="text-4xl text-indigo-600 mb-4" />,
                title: "Information We Collect",
                content: "We collect personal information such as your name, email address, and contact details when you register on our website or use our services."
              },
              {
                icon: <FaUserLock className="text-4xl text-indigo-600 mb-4" />,
                title: "How We Use Your Information",
                content: "We use your information to provide and improve our services, send you relevant notifications, and personalize your experience on our platform."
              },
              {
                icon: <FaCookieBite className="text-4xl text-indigo-600 mb-4" />,
                title: "Cookies and Tracking",
                content: "We use cookies and similar technologies to enhance your browsing experience and collect usage data to improve our services."
              },
              {
                icon: <FaEnvelope className="text-4xl text-indigo-600 mb-4" />,
                title: "Communication Preferences",
                content: "You can manage your communication preferences and opt-out of marketing emails at any time through your account settings."
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Additional Information</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Data Security</h3>
              <p className="text-gray-700">We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Third-Party Services</h3>
              <p className="text-gray-700">We may use third-party services to support our website and services. These third parties have their own privacy policies and may collect information about you.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Changes to This Policy</h3>
              <p className="text-gray-700">We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;