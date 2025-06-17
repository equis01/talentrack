import React from 'react';

const LayoutHeader = ({ currentPage, setCurrentPage, isLoggedIn, onLogout }) => {
  const navItems = [
    { name: 'Inicio', page: 'home' },
    { name: 'Empresas', page: 'companies' },
    { name: 'Trabajadores', page: 'workers' },
    { name: 'Administración', page: 'admin' },
  ];

  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <img src="https://via.placeholder.com/40" alt="Talentrack Logo" className="h-10 w-10 mr-3" />
        <h1 className="text-2xl font-bold text-gray-800">Talentrack</h1>
      </div>
      <nav className="flex space-x-6">
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => setCurrentPage(item.page)}
            className={`text-lg font-medium transition-colors ${
              currentPage === item.page
                ? 'text-emerald-600 border-b-2 border-emerald-600'
                : 'text-gray-600 hover:text-emerald-500'
            }`}
          >
            {item.name}
          </button>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-colors"
          >
            Cerrar Sesión
          </button>
        ) : (
          <>
            <button
              onClick={() => setCurrentPage('auth')}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-700 transition-colors"
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => setCurrentPage('auth')}
              className="px-4 py-2 border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              Registrarse
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default LayoutHeader;