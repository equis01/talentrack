import React, { useState } from 'react';

const CompanyRegistrationForm = ({ onRegistrationSuccess }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    taxId: '',
    incorporationAct: null,
    responsibilityLetter: null,
    legalPower: null, // Nuevo campo para el poder legal
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
    console.log('Datos de registro de empresa:', formData);
    alert('¡Registro de empresa enviado! Pronto nos pondremos en contacto para la validación.');
    onRegistrationSuccess();
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg my-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Registro de Empresa</h2>
      <p className="text-gray-600 mb-8 text-center">
        Completa los siguientes datos para registrar tu empresa en Talentrack.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="companyName" className="block text-gray-700 text-sm font-semibold mb-2">
            Nombre de la Empresa
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            placeholder="Ej. Innova Solutions S.A. de C.V."
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            placeholder="ejemplo@empresa.com"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            placeholder="Repite tu contraseña"
            required
          />
        </div>
        <div>
          <label htmlFor="taxId" className="block text-gray-700 text-sm font-semibold mb-2">
            RFC / ID Fiscal
          </label>
          <input
            type="text"
            id="taxId"
            name="taxId"
            value={formData.taxId}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            placeholder="Ej. ABC010101XYZ"
            required
          />
        </div>
        <div>
          <label htmlFor="incorporationAct" className="block text-gray-700 text-sm font-semibold mb-2">
            Acta Constitutiva (PDF)
          </label>
          <input
            type="file"
            id="incorporationAct"
            name="incorporationAct"
            accept=".pdf"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            required
          />
        </div>
        <div>
          <label htmlFor="responsibilityLetter" className="block text-gray-700 text-sm font-semibold mb-2">
            Carta Responsiva (Escrita a mano y firmada por apoderado legal, PDF)
          </label>
          <input
            type="file"
            id="responsibilityLetter"
            name="responsibilityLetter"
            accept=".pdf"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            required
          />
        </div>
        <div>
          <label htmlFor="legalPower" className="block text-gray-700 text-sm font-semibold mb-2">
            Poder Legal (Opcional, PDF)
          </label>
          <input
            type="file"
            id="legalPower"
            name="legalPower"
            accept=".pdf"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 rounded-lg shadow-md hover:bg-emerald-700 transition-colors font-semibold text-lg"
        >
          Registrar Empresa
        </button>
      </form>
    </div>
  );
};

export default CompanyRegistrationForm;