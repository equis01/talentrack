import React from 'react';

const WorkerDashboard = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Panel de Trabajadores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Mi Historial Laboral</h3>
          <p className="text-gray-600 mb-4">
            Consulta las reseñas y documentos que las empresas han subido sobre ti.
          </p>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Ver Historial
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Disputar Reseña</h3>
          <p className="text-gray-600 mb-4">
            Si no estás de acuerdo con una reseña, puedes iniciar un proceso de disputa.
          </p>
          <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
            Disputar
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;