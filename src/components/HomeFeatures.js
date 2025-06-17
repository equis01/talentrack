import React from 'react';

const HomeFeatures = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-emerald-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.001 12.001 0 002.92 12c0 3.072 1.188 5.979 3.246 8.255a12.007 12.007 0 0014.83-11.013c-.717-3.107-2.319-5.977-4.519-8.255z"
          ></path>
        </svg>
      ),
      title: 'Reseñas Verificadas',
      description: 'Accede a comentarios y calificaciones de ex-empleadores, validados por nuestra plataforma.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-emerald-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
      ),
      title: 'Documentos Clave',
      description: 'Consulta contratos, evaluaciones de desempeño y cartas de baja directamente en el perfil.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-emerald-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8L11 17m-5 2a2 2 0 11-4 0 2 2 0 014 0zM12 19a2 2 0 11-4 0 2 2 0 014 0z"
          ></path>
        </svg>
      ),
      title: 'Contratación Ágil',
      description: 'Reduce el tiempo de contratación al tener toda la información relevante al alcance de tu mano.',
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-12">
          ¿Por qué Talentrack?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {feature.icon}
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;