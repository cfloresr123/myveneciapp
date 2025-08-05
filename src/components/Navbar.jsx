import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Características', href: '#caracteristicas' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo o imagen */}
        <div className="flex items-center space-x-2">
          {/* Puedes cambiar esto por un <img src="/logo.png" alt="logo" /> si tienes imagen */}
          <span className="text-2xl font-extrabold text-blue-700">MyVeneciApp</span>
        </div>

        {/* Links visibles solo en escritorio */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-600 transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa solo en móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay y menú lateral en móvil */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <ul className="p-6 space-y-6 text-lg font-semibold text-gray-700">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={toggleMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;