import React, { useState } from 'react';

const AuthLoginForm = ({ onRegisterClick, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión
    console.log('Intentando iniciar sesión con:', { email, password });
    alert('Inicio de sesión simulado. ¡Bienvenido!');
    onLoginSuccess(); // Simula un inicio de sesión exitoso
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="tu@empresa.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Tu contraseña"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-colors font-semibold text-lg"
        >
          Entrar
        </button>
      </form>
      <p className="text-center text-gray-600 mt-6">
        ¿No tienes cuenta?{' '}
        <button onClick={onRegisterClick} className="text-indigo-600 hover:underline font-semibold">
          Regístrate aquí
        </button>
      </p>
    </div>
  );
};

export default AuthLoginForm;