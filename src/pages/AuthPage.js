import React, { useState } from 'react';
import AuthLoginForm from '../components/AuthLoginForm';
import CompanyRegistrationForm from '../components/CompanyRegistrationForm';
import PersonRegistrationForm from '../components/PersonRegistrationForm';
import AuthRegistrationTypeSelector from '../components/AuthRegistrationTypeSelector';

const AuthPage = ({ onLoginSuccess }) => {
  const [registrationType, setRegistrationType] = useState(null); // 'company', 'person', or null for selector
  const [showLogin, setShowLogin] = useState(true);

  const handleSelectType = (type) => {
    setRegistrationType(type);
    setShowLogin(false); // Oculta el login para mostrar el formulario de registro
  };

  const handleRegistrationSuccess = () => {
    setRegistrationType(null); // Vuelve al selector de tipo
    setShowLogin(true); // Muestra el login después de registrar
    alert('Registro completado. Por favor, inicia sesión.');
  };

  const handleBackToLogin = () => {
    setRegistrationType(null);
    setShowLogin(true);
  };

  const handleBackToTypeSelection = () => {
    setRegistrationType(null);
    setShowLogin(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {showLogin ? (
        <AuthLoginForm onRegisterClick={() => setShowLogin(false)} onLoginSuccess={onLoginSuccess} />
      ) : (
        <>
          {registrationType === null && (
            <AuthRegistrationTypeSelector onSelectType={handleSelectType} />
          )}
          {registrationType === 'company' && (
            <div className="w-full">
              <button
                onClick={handleBackToTypeSelection}
                className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center mx-auto"
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
                Volver a selección de tipo
              </button>
              <CompanyRegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
            </div>
          )}
          {registrationType === 'person' && (
            <div className="w-full">
              <button
                onClick={handleBackToTypeSelection}
                className="mb-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors flex items-center mx-auto"
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
                Volver a selección de tipo
              </button>
              <PersonRegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AuthPage;

// DONE