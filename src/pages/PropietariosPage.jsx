import React, { useState } from 'react';
import { Check, Calendar, Users, Bell, FileText, Share2 } from 'lucide-react';

const PropietariosPage = () => {
  const [status, setStatus] = useState('');

  return (
    <main className="min-h-screen bg-gray-50 text-slate-900 p-6 md:p-12">
      <section className="max-w-6xl mx-auto">
        {/* HERO */}
        <header className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">MyVeneciApp para Propietarios</h1>
              <p className="mt-4 text-lg text-slate-700">
                Administra el mantenimiento mensual de tu edificio, condominio o casa en alquiler con una app pensada para
                propietarios y administradores: control de cobros, constancias, comunicación y reservas, todo en un mismo lugar.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
                >
                  Solicitar demo
                </a>
                <a href="#caracteristicas" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200">
                  Ver características
                </a>
              </div>
            </div>

            <div className="w-full md:w-80 bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-inner">
              <div className="text-sm text-slate-500">Resumen rápido</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-indigo-600 mt-1" />
                  Control de pagos y deudores por unidad
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-indigo-600 mt-1" />
                  Registro y envío de recibos y constancias
                </li>
                <li className="flex items-start gap-3">
                  <Bell className="w-5 h-5 text-indigo-600 mt-1" />
                  Notificaciones automáticas a morosos
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* FEATURES */}
        <section id="caracteristicas" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">¿Por qué elegir MyVeneciApp?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Users className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Gestión por unidades</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Mantén un registro claro por departamento o casa: dueños, inquilinos, contactos, datos de pago y archivos
                adjuntos (recibos, constancias).
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Mantenimientos y recibos</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Registra los mantenimientos mensuales, marca el estado (pendiente/pagado), sube constancias en PDF o imagen y
                lleva el historial de pagos por unidad.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Bell className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Recordatorios y cobranzas</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Envía notificaciones automáticas por WhatsApp o correo a los deudores, programa avisos y genera reportes de
                cobranza con un clic.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Calendar className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Agenda y reservas</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Controla reservas de áreas comunes (parrilla, salón, gimnasio) y evita conflictos con bloqueo automático de
                horarios duplicados.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Share2 className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Compartir información</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Comparte recibos, avisos y QR de visitas fácilmente a través de WhatsApp o correo. Ideal para administradores
                que usan canales rápidos de comunicación.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <Check className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Seguridad y control de accesos</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Controla quién ve qué: roles (propietario, residente, conserje, administrador), permisos y registros de actividad.
              </p>
            </article>
          </div>
        </section>

        {/* Aquí seguiría el resto de secciones tal como lo tenías */}
      </section>
    </main>
  );
};

export default PropietariosPage;
