// components/ErrorAlert.tsx
import React from 'react';

interface ErrorAlertProps {
  message: string;
  onClose: () => void;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onClose }) => {
  return (
    <div
      role="alert"
      className="max-w-md mx-auto p-5 mb-6 rounded-lg shadow-md bg-gradient-to-r from-red-100 via-red-50 to-white border border-red-300 text-red-700 flex items-start space-x-4"
    >
      <svg
        className="w-6 h-6 flex-shrink-0 text-red-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-lg leading-6">Oops! Something went wrong.</p>
        <p className="mt-1 text-sm">{message}</p>
      </div>
      <button
        onClick={onClose}
        aria-label="Close alert"
        className="text-red-600 hover:text-red-900 focus:outline-none"
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
  );
};

export default ErrorAlert;
