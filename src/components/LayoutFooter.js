import React from 'react';

const LayoutFooter = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">Talentrack</h3>
          <p className="text-gray-400">© 2024 Todos los derechos reservados.</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-6 md:space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Privacidad
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Términos
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Contacto
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Ayuda
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default LayoutFooter;