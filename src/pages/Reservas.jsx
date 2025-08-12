import React from 'react';
import { FaCalendarCheck, FaUtensils, FaUsers, FaClock } from "react-icons/fa";

// Imagen de fondo (ponla en src/assets y ajusta la ruta)
import reservasImg from "../assets/reservas.png";

const Reservas = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: `url(${reservasImg})`,
      }}
    >
      {/* Degradado para mejor contraste */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50"></div>

      <div className="relative max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Reservas de Espacios Comunes
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Organiza y reserva de manera sencilla los espacios comunes de tu edificio,
          como la sala de reuniones, parrilla o áreas recreativas, todo desde una misma plataforma.
        </p>

        {/* Botón de acción */}
        <a
          href="#contacto"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Reserva ahora
        </a>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-gray-900">
            <FaCalendarCheck className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Reserva en segundos</h3>
            <p className="text-sm">
              Agenda tu espacio desde cualquier dispositivo, rápido y fácil.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-gray-900">
            <FaUtensils className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Parrillas y zonas BBQ</h3>
            <p className="text-sm">
              Disfruta de tus reuniones con amigos y familiares en espacios bien administrados.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-gray-900">
            <FaUsers className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Salas de reuniones</h3>
            <p className="text-sm">
              Perfecto para juntas, eventos o capacitaciones en un ambiente profesional.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-gray-900">
            <FaClock className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Gestión de horarios</h3>
            <p className="text-sm">
              Visualiza la disponibilidad y evita conflictos en tus reservas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reservas;

