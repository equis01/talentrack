import React, { useState } from 'react';
import CompanyDashboard from '../components/CompanyDashboard';
import CompanyRegistrationForm from '../components/CompanyRegistrationForm';

const CompaniesPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleBackToDashboard = () => {
    setShowRegistration(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {showRegistration ? (
        <div className="p-8">
          <button
            onClick={handleBackToDashboard}
            className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Volver al Panel
          </button>
          <CompanyRegistrationForm />
        </div>
      ) : (
        <CompanyDashboard onRegisterClick={handleRegisterClick} />
      )}
    </div>
  );
};

export default CompaniesPage;