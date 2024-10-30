import React from 'react';
import { FaFileContract, FaUserShield, FaCopyright, FaExclamationTriangle } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700 text-center">Terms of Service</h1>
          <p className="text-xl text-center max-w-3xl text-gray-600 mx-auto">
            Please read these terms carefully before using Sarkari Result's services. By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                icon: <FaFileContract className="text-4xl text-indigo-600 mb-4" />,
                title: "Acceptance of Terms",
                content: "By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service."
              },
              {
                icon: <FaUserShield className="text-4xl text-indigo-600 mb-4" />,
                title: "User Responsibilities",
                content: "You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account."
              },
              {
                icon: <FaCopyright className="text-4xl text-indigo-600 mb-4" />,
                title: "Intellectual Property",
                content: "All content on Sarkari Result, including text, graphics, logos, and software, is the property of Sarkari Result and protected by copyright laws."
              },
              {
                icon: <FaExclamationTriangle className="text-4xl text-indigo-600 mb-4" />,
                title: "Limitation of Liability",
                content: "Sarkari Result shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service."
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

      {/* Additional Terms */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Additional Terms</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Service Modifications</h3>
              <p className="text-gray-700">We reserve the right to modify or discontinue, temporarily or permanently, the service (or any part thereof) with or without notice.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Termination</h3>
              <p className="text-gray-700">We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Governing Law</h3>
              <p className="text-gray-700">These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;