import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Panel de Administración</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Validar Empresas</h3>
          <p className="text-gray-600 mb-4">
            Revisa y aprueba los registros de nuevas empresas.
          </p>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Ver Pendientes
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Gestionar Disputas</h3>
          <p className="text-gray-600 mb-4">
            Administra las reseñas marcadas como "En disputa".
          </p>
          <button className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors">
            Ver Disputas
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Reportes y Estadísticas</h3>
          <p className="text-gray-600 mb-4">
            Accede a métricas clave de la plataforma.
          </p>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
            Ver Reportes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;