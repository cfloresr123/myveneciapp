// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-white text-gray-700 border-t mt-16">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">

      {/* Sección de contacto */}
      <div>
        <h4 className="text-base font-semibold mb-4 text-gray-800 uppercase tracking-wide">Contáctanos</h4>
        <p className="mb-1">Lima - Perú</p>
        <p className="mb-1">Teléfono: (1) 223 3982</p>
        <p className="mb-1">Móvil: +51 946 589 808</p>
        <p className="mb-1">Email: <a href="mailto:myveneciapp@gmail.com" className="text-blue-600 hover:underline">myveneciapp@gmail.com</a></p>
        <p className="mt-3 text-gray-600 font-medium">SOFTWALCE - RUC 2025</p>
      </div>

      {/* Navegación */}
      <div>
        <h4 className="text-base font-semibold mb-4 text-gray-800 uppercase tracking-wide">Navegación</h4>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-blue-600 transition">Inicio</a></li>
          <li><a href="/Propietarios" className="hover:text-blue-600 transition">Propietarios e Inquilinos</a></li>
          <li><a href="/Reservas" className="hover:text-blue-600 transition">Reservas</a></li>
          <li><a href="/Visitas" className="hover:text-blue-600 transition">Visitas</a></li>
          <li><a href="/Contacto" className="hover:text-blue-600 transition">Contáctanos</a></li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div>
        <h4 className="text-base font-semibold mb-4 text-gray-800 uppercase tracking-wide">Síguenos</h4>
        <div className="flex space-x-5 text-xl text-gray-600">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition"><FaFacebook /></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition"><FaLinkedin /></a>
        </div>
      </div>
    </div>

    {/* Derechos reservados */}
    <div className="bg-gray-100 text-center text-xs py-4 text-gray-500">
      © {new Date().getFullYear()} SOFTWALCE – Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
