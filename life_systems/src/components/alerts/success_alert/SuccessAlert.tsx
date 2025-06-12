// components/SuccessAlert.tsx
import React from 'react';

interface SuccessAlertProps {
  onClose: () => void;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ onClose }) => {
  return (
    <div
      role="alert"
      className="max-w-md mx-auto p-5 mb-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-100 via-purple-50 to-white border border-purple-300 text-purple-800"
    >
      <div className="flex items-start space-x-3">
        <svg
          className="w-6 h-6 text-purple-600 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
        </svg>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-lg leading-6">Message Sent Successfully!</p>
          <p className="mt-1 text-sm text-purple-700">
            Thank you for reaching out. Your inquiry is under review, and we'll get back to you soon.
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close alert"
          className="text-purple-600 hover:text-purple-900 focus:outline-none"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SuccessAlert;
