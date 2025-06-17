import React from 'react';

const AuthRegistrationTypeSelector = ({ onSelectType }) => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg my-10 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Qué tipo de cuenta deseas crear?</h2>
      <p className="text-gray-600 mb-8">
        Selecciona si eres una empresa o una persona individual.
      </p>
      <div className="space-y-4">
        <button
          onClick={() => onSelectType('company')}
          className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition-colors font-semibold text-lg flex items-center justify-center"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          Soy una Empresa
        </button>
        <button
          onClick={() => onSelectType('person')}
          className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg shadow-md hover:bg-amber-700 transition-colors font-semibold text-lg flex items-center justify-center"
        >
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          Soy una Persona
        </button>
      </div>
    </div>
  );
};

export default AuthRegistrationTypeSelector;