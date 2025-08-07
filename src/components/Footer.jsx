// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-white text-gray-700 border-t mt-10">
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Sección de contacto */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Contáctanos</h4>
        <p className="mb-1">Lima - Perú</p>
        <p className="mb-1">Teléfono: (1) 223 3982</p>
        <p className="mb-1">Móvil: +51 946 589 808</p>
        <p className="mb-1">Email: myveneciapp@gmail.com</p>
        <p className="mt-2 font-medium">SOFTWALCE - 2025</p>
      </div>

      {/* Navegación */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Navegación</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:underline">Inicio</a></li>
          <li><a href="/Propietarios" className="hover:underline">Propietarios e Inquilinos</a></li>
          <li><a href="/Reservas" className="hover:underline">Reservas</a></li>
          <li><a href="/Visitas" className="hover:underline">Visitas</a></li>
          <li><a href="/Contacto" className="hover:underline">Contáctanos</a></li>
        </ul>
      </div>

      {/* Redes sociales */}
      <div>
        <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
        <div className="flex space-x-4 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebook /></a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700"><FaLinkedin /></a>
        </div>
      </div>
    </div>

    {/* Derechos reservados */}
    <div className="bg-gray-100 text-center text-sm py-4 mt-6">
      © {new Date().getFullYear()} SOFTWALCE – Todos los derechos reservados.
    </div>
  </footer>
);

export default Footer;
