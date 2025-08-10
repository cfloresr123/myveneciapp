import React from 'react'
import { FaClipboardList, FaBell, FaHistory, FaBuilding } from "react-icons/fa";

// Importa la imagen desde la carpeta public o src/assets
import edificioImg from "../assets/edificio.png"; // Cambia la ruta según tu proyecto

const Mantenimiento = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 px-6"
      style={{
        backgroundImage: `url(${edificioImg})`,
      }}
    >
      {/* Capa oscura para contraste */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div>*/}

      <div className="relative max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Mantenimiento Mensual del Edificio
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Gestiona de manera clara y transparente el mantenimiento mensual de tu
          edificio. Con MyVeneciApp tendrás control total de tus pagos,
          notificaciones y comprobantes desde cualquier dispositivo.
        </p>

        {/* Botón de acción */}
        <a
          href="#contacto"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Conoce más
        </a>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-gray-900">
            <FaClipboardList className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Transparencia total</h3>
            <p className="text-sm">
              Consulta el detalle de tu mantenimiento: monto, fecha y estado de
              pago.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-gray-900">
            <FaBell className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Notificaciones</h3>
            <p className="text-sm">
              Recibe recordatorios automáticos para evitar recargos y olvidos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-gray-900">
            <FaHistory className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Historial accesible</h3>
            <p className="text-sm">
              Consulta tus pagos anteriores y descarga comprobantes fácilmente.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-gray-900">
            <FaBuilding className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Gestión centralizada</h3>
            <p className="text-sm">
              El administrador puede supervisar todos los departamentos en un
              solo lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mantenimiento
