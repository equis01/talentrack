import React from 'react';

const HomeCallToAction = ({ setCurrentPage }) => {
  return (
    <section className="py-20 px-8 bg-gradient-to-br from-indigo-700 to-purple-900 text-white text-center shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-extrabold leading-tight mb-6">
          ¿Listo para transformar tus contrataciones?
        </h3>
        <p className="text-xl mb-10 opacity-90">
          Únete a la comunidad de Talentrack y empieza a tomar decisiones de contratación más inteligentes y seguras.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setCurrentPage('companies')}
            className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Registra tu Empresa
          </button>
          <button
            onClick={() => setCurrentPage('workers')}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white hover:text-indigo-700 transition-all transform hover:scale-105"
          >
            Conoce tus Derechos
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCallToAction;