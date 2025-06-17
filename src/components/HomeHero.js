import React from 'react';

const HomeHero = ({ setCurrentPage }) => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-20 px-8 text-center overflow-hidden shadow-lg">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-pattern-dots"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold leading-tight mb-6 animate-fade-in-down">
          Contrata con Confianza, Reduce el Riesgo
        </h2>
        <p className="text-xl mb-10 opacity-90 animate-fade-in-up">
          Talentrack te permite acceder a historiales laborales verificados de candidatos,
          reduciendo el tiempo y la incertidumbre en tus procesos de contratación.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
          <button
            onClick={() => setCurrentPage('companies')}
            className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Para Empresas
          </button>
          <button
            onClick={() => setCurrentPage('workers')}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white hover:text-emerald-700 transition-all transform hover:scale-105"
          >
            Para Trabajadores
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;