import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Menú */}
        <div>
          <h5 className="text-xl font-bold mb-4">Menú</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-yellow-400">Inicio</a></li>
            <li><a href="/Propietarios" className="hover:text-yellow-400">Propietarios e Inquilinos</a></li>
            <li><a href="/Reservas" target="_blank" className="hover:text-yellow-400">Reservas</a></li>
            <li><a href="/Mantenimiento" className="hover:text-yellow-400">Mantenimiento</a></li>
            <li><a href="/Visitas" className="hover:text-yellow-400">Visitas</a></li>
            <li><a href="/Contacto" className="hover:text-yellow-400">Contáctanos</a></li>
            <li><a href="/" className="hover:text-yellow-400">Libro de Reclamaciones</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h5 className="text-xl font-bold mb-4">Contáctanos</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Lima - Perú</li>
            <li>Teléfono: (1) 223 3982</li>
            <li>Móvil: +51 946 589 808</li>
            <li>Email: <a href="mailto:myveneciapp@gmail.com" className="underline">myveneciapp@gmail.com</a></li>
            <li>MyVeneciApp - 2025</li>
          </ul>
          <div className="mt-4">
            <a
              href="#demo"
              className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              Agenda una demo
            </a>
          </div>
        </div>

        {/* Sobre nosotros y redes */}
        <div>
          <h5 className="text-xl font-bold mb-4">Sobre nosotros</h5>
          <p className="text-sm text-gray-300 mb-4">
            © {new Date().getFullYear()} MyVeneciApp. Todos los derechos reservados.<br />
            Powered by <a href="/" target="_blank" className="text-yellow-400 hover:underline">Softwalce</a>
          </p>
          <h5 className="text-md font-semibold mb-3">Síguenos</h5>
          <div className="flex space-x-4 text-xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-yellow-400"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-400"><FaLinkedin /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-yellow-400"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



