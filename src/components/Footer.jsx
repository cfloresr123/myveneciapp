import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-10 px-4" style={{ 
      background: 'linear-gradient(to right, #0f172a, #1e293b)' 
    }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Sección 1: Logo o nombre */}
        <div>
          <h2 className="text-xl font-bold mb-2">MyVeneciApp</h2>
          <p className="text-sm">Tecnología para la gestión moderna de edificios.</p>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Enlaces</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/Reservas" className="hover:underline">Reservas</a></li>
            <li><a href="/Mantenimiento" className="hover:underline">Mantenimiento</a></li>
            <li><a href="/Visitas" className="hover:underline">Visitas</a></li>
            <li><a href="/Contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Sección 3: Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contáctanos</h3>
          <p className="text-sm">Lima - Perú</p>
          <p className="text-sm">Teléfono: +51 946 589 808</p>
          <p className="text-sm">Email: myveneciapp@gmail.com</p>
        </div>

      </div>

      {/* Línea final */}
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} MyVeneciApp. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;


