import React, { useState } from 'react';
import LayoutHeader from './components/LayoutHeader';
import LayoutFooter from './components/LayoutFooter';
import HomePage from './pages/HomePage';
import CompaniesPage from './pages/CompaniesPage';
import WorkersPage from './pages/WorkersPage';
import AdminDashboard from './components/AdminDashboard';
import AuthPage from './pages/AuthPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setCurrentPage('home'); // Redirige a la página de inicio después del login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home'); // Redirige a la página de inicio después del logout
  };

  const renderPage = () => {
    // Si no está logueado y la página actual no es la de autenticación,
    // se muestra la página de inicio general.
    // La página de autenticación se mostrará solo si se navega a ella explícitamente.
    if (!isLoggedIn && currentPage !== 'auth') {
      return <HomePage setCurrentPage={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'companies':
        return <CompaniesPage />;
      case 'workers':
        return <WorkersPage />;
      case 'admin':
        return <AdminDashboard />;
      case 'auth':
        return <AuthPage onLoginSuccess={handleLoginSuccess} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <LayoutHeader currentPage={currentPage} setCurrentPage={setCurrentPage} isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <LayoutFooter />
    </div>
  );
};

export default App;

// DONE