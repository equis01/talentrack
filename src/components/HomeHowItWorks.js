import React from 'react';

const HomeHowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Registro y Verificación',
      description: 'Las empresas se registran y validan su identidad subiendo su acta constitutiva y datos fiscales.',
      icon: (
        <svg className="w-16 h-16 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 3.072 1.188 5.979 3.246 8.255a12.007 12.007 0 0014.83-11.013c-.717-3.107-2.319-5.977-4.519-8.255z"></path>
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Subida de Historial',
      description: 'Las empresas suben reseñas, contratos, evaluaciones y cartas de baja de sus ex-trabajadores.',
      icon: (
        <svg className="w-16 h-16 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6H16a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V16a2 2 0 01-2 2H7a2 2 0 01-2-2z"></path>
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Consulta y Contratación',
      description: 'Otras empresas consultan el historial de candidatos antes de contratarlos, reduciendo riesgos.',
      icon: (
        <svg className="w-16 h-16 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      ),
    },
    {
      number: 4,
      title: 'Gestión de Disputas',
      description: 'Si un trabajador disputa una reseña, se marca como "En disputa" para transparencia.',
      icon: (
        <svg className="w-16 h-16 text-indigo-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-12">
          ¿Cómo Funciona Talentrack?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-indigo-100 rounded-full p-4 mb-6">
                {step.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-3">
                {step.number}. {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;