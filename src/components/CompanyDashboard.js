import React from 'react';

const CompanyDashboard = ({ onRegisterClick }) => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Panel de Empresas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Buscar Candidatos</h3>
          <p className="text-gray-600 mb-4">
            Encuentra el talento ideal consultando historiales laborales verificados.
          </p>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Buscar Ahora
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Subir Reseñas</h3>
          <p className="text-gray-600 mb-4">
            Comparte tu experiencia con ex-trabajadores para ayudar a otras empresas.
          </p>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
            Subir Reseña
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Mis Publicaciones</h3>
          <p className="text-gray-600 mb-4">
            Gestiona las reseñas y documentos que has subido a la plataforma.
          </p>
          <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Ver Mis Publicaciones
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg col-span-full md:col-span-1">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Registrar Nueva Empresa</h3>
          <p className="text-gray-600 mb-4">
            Si aún no has registrado tu empresa, hazlo aquí para empezar a usar Talentrack.
          </p>
          <button
            onClick={onRegisterClick}
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            Registrar Empresa
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;