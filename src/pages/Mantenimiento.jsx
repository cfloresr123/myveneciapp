import React from 'react'
import { FaClipboardList, FaBell, FaHistory, FaBuilding } from "react-icons/fa";

const Mantenimiento = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Mantenimiento Mensual del Edificio
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Gestiona de manera clara y transparente el mantenimiento mensual de tu edificio.
          Con MyVeneciApp tendrás control total de tus pagos, notificaciones y comprobantes
          desde cualquier dispositivo.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaClipboardList className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Transparencia total</h3>
            <p className="text-gray-600 text-sm">
              Consulta el detalle de tu mantenimiento: monto, fecha y estado de pago.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaBell className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Notificaciones</h3>
            <p className="text-gray-600 text-sm">
              Recibe recordatorios automáticos para evitar recargos y olvidos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaHistory className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Historial accesible</h3>
            <p className="text-gray-600 text-sm">
              Consulta tus pagos anteriores y descarga comprobantes fácilmente.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
            <FaBuilding className="text-indigo-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Gestión centralizada</h3>
            <p className="text-gray-600 text-sm">
              El administrador puede supervisar todos los departamentos en un solo lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mantenimiento
