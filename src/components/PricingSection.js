import React from 'react';

const PricingSection = ({ setCurrentPage }) => {
  const plans = [
    {
      name: 'Básico (Gratis)',
      price: 'Gratis',
      description: 'Ideal para pequeñas empresas que inician.',
      features: [
        'Acceso limitado a reseñas',
        '5 consultas al mes',
        'Soporte por correo electrónico',
        'Filtros adicionales para cuentas Gmail',
      ],
      buttonText: 'Comenzar Gratis',
      buttonAction: () => setCurrentPage('auth'),
      isFree: true,
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/mes',
      description: 'Para empresas con necesidades de contratación frecuentes.',
      features: [
        'Acceso ilimitado a reseñas',
        'Consultas ilimitadas',
        'Soporte prioritario 24/7',
        'Sin filtros adicionales para cuentas Gmail',
        'Acceso a documentos completos',
      ],
      buttonText: 'Elegir Plan Premium',
      buttonAction: () => alert('¡Has elegido el plan Premium!'),
      isFree: false,
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      description: 'Soluciones a medida para grandes corporaciones.',
      features: [
        'Todas las características de Premium',
        'Integración API',
        'Soporte dedicado con gestor de cuenta',
        'Firma digital avanzada',
        'Capacitaciones personalizadas',
      ],
      buttonText: 'Contactar Ventas',
      buttonAction: () => setCurrentPage('contact'),
      isFree: false,
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Nuestros Planes de Precios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg flex flex-col ${
                !plan.isFree ? 'border-2 border-emerald-600' : 'border border-gray-200'
              }`}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{plan.name}</h3>
              <p className="text-5xl font-extrabold text-emerald-600 mb-4">
                {plan.price}
                {plan.period && <span className="text-xl text-gray-600">{plan.period}</span>}
              </p>
              <p className="text-gray-600 mb-6 flex-grow">{plan.description}</p>
              <ul className="text-left text-gray-700 space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={plan.buttonAction}
                className={`w-full py-3 rounded-lg shadow-md font-semibold text-lg transition-colors ${
                  plan.isFree
                    ? 'bg-gray-800 text-white hover:bg-gray-900'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;