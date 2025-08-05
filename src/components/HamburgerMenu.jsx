import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Botón hamburguesa */}
      <button
        onClick={toggleMenu}
        className="fixed top-5 right-5 z-50 text-3xl text-gray-800 md:hidden"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay oscuro */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        ></div>
      )}

      {/* Menú lateral */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="p-6 space-y-4 text-lg font-semibold text-gray-700">
          <li>
            <a href="#inicio" onClick={toggleMenu}>Inicio</a>
          </li>
          <li>
            <a href="#caracteristicas" onClick={toggleMenu}>Características</a>
          </li>
          <li>
            <a href="#contacto" onClick={toggleMenu}>Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
