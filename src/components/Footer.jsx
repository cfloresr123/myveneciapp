// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">MyVeneciApp</h2>
          <p className="text-sm text-gray-300">
            Plataforma moderna para la gestión de edificios, diseñada para facilitar la vida de propietarios e inquilinos.
          </p>
        </div>

        {/* Información de contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Lima - Perú</li>
            <li>Teléfono: (1) 223 3982</li>
            <li>Móvil: +51 946 589 808</li>
            <li>Email: <a href="mailto:myveneciapp@gmail.com" className="underline">myveneciapp@gmail.com</a></li>
            <li>MyVeneciApp - 2025</li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/Propietarios" className="hover:underline">Propietarios e Inquilinos</a></li>
            <li><a href="/Reservas" className="hover:underline">Reservas</a></li>
            <li><a href="/Mantenimiento" className="hover:underline">Mantenimiento</a></li>
            <li><a href="/Visitas" className="hover:underline">Visitas</a></li>
            <li><a href="/Contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} MyVeneciApp - Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

