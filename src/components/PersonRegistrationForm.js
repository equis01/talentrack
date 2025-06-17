import React, { useState } from 'react';

const PersonRegistrationForm = ({ onRegistrationSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    inePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos
    console.log('Datos de registro de persona:', formData);
    alert('¡Registro de persona enviado! Pronto nos pondremos en contacto para la validación.');
    onRegistrationSuccess();
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Registro de Persona</h2>
      <p className="text-gray-600 mb-8 text-center">
        Completa los siguientes datos para registrarte en Talentrack.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            placeholder="Ej. Juan Pérez"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            placeholder="ejemplo@correo.com"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Las cuentas con Gmail tendrán filtros adicionales y tarifas más altas.
          </p>
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            placeholder="Mínimo 8 caracteres"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold mb-2">
            Confirmar Contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
            placeholder="Repite tu contraseña"
            required
          />
        </div>
        <div>
          <label htmlFor="inePhoto" className="block text-gray-700 text-sm font-semibold mb-2">
            Foto de INE (Frente y reverso, PDF o Imagen)
          </label>
          <input
            type="file"
            id="inePhoto"
            name="inePhoto"
            accept=".pdf, .jpg, .jpeg, .png"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-amber-600 text-white py-3 rounded-lg shadow-md hover:bg-amber-700 transition-colors font-semibold text-lg"
        >
          Registrar Persona
        </button>
      </form>
    </div>
  );
};

export default PersonRegistrationForm;