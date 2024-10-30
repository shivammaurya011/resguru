import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ModalLayout = ({ 
  show, 
  onClose, 
  title,
  children,
  size = 'lg',
  showStepIndicator = false,
  currentStep = 1,
  totalSteps = 1
}) => {
  if (!show) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl'
  };

  const renderStepIndicator = () => {
    if (!showStepIndicator) return null;
    
    return (
      <div className="flex justify-center mb-8">
        {[...Array(totalSteps)].map((_, index) => {
          const step = index + 1;
          return (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep === step 
                  ? 'bg-blue-600 text-white' 
                  : currentStep > step 
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
              }`}>
                {step}
              </div>
              {step < totalSteps && (
                <div className={`w-12 h-1 ${
                  currentStep > step ? 'bg-green-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto p-4">
      <div className={`bg-white rounded-xl p-4 w-full ${sizeClasses[size]} shadow-2xl`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-blue-50 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {renderStepIndicator()}
        
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
