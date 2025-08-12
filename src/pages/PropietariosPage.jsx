import React from 'react';

import { IconCheck, IconCalendar, IconUsers, IconBell, IconFileText, IconShare2 } from 'lucide-react';

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
n                </a>
                <a href="#caracteristicas" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200">
                  Ver características
                </a>
              </div>
            </div>

            <div className="w-full md:w-80 bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 shadow-inner">
              <div className="text-sm text-slate-500">Resumen rápido</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-indigo-600 mt-1" />
                  Control de pagos y deudores por unidad
                </li>
                <li className="flex items-start gap-3">
                  <IconCalendar className="w-5 h-5 text-indigo-600 mt-1" />
                  Registro y envío de recibos y constancias
                </li>
                <li className="flex items-start gap-3">
                  <IconBell className="w-5 h-5 text-indigo-600 mt-1" />
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
                <IconUsers className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Gestión por unidades</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Mantén un registro claro por departamento o casa: dueños, inquilinos, contactos, datos de pago y archivos
                adjuntos (recibos, constancias).
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <IconFileText className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Mantenimientos y recibos</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Registra los mantenimientos mensuales, marca el estado (pendiente/pagado), sube constancias en PDF o imagen y
                lleva el historial de pagos por unidad.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <IconBell className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Recordatorios y cobranzas</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Envía notificaciones automáticas por WhatsApp o correo a los deudores, programa avisos y genera reportes de
                cobranza con un clic.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <IconCalendar className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Agenda y reservas</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Controla reservas de áreas comunes (parrilla, salón, gimnasio) y evita conflictos con bloqueo automático de
                horarios duplicados.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <IconShare2 className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Compartir información</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Comparte recibos, avisos y QR de visitas fácilmente a través de WhatsApp o correo. Ideal para administradores
                que usan canales rápidos de comunicación.
              </p>
            </article>

            <article className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <IconCheck className="w-8 h-8 text-indigo-600" />
                <h3 className="text-lg font-semibold">Seguridad y control de accesos</h3>
              </div>
              <p className="mt-3 text-slate-600 text-sm">
                Controla quién ve qué: roles (propietario, residente, conserje, administrador), permisos y registros de actividad.
              </p>
            </article>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Para qué tipo de propiedades sirve</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold">Edificios con departamentos</h4>
              <p className="mt-2 text-slate-600 text-sm">Distribución por pisos y departamentos, estados de cuenta por unidad y reportes de morosidad.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold">Condominios de casas</h4>
              <p className="mt-2 text-slate-600 text-sm">Cobro centralizado, mantenimiento de áreas comunes y comunicación vecinal.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold">Casas grandes en alquiler / Mini departamentos / Cuartos</h4>
              <p className="mt-2 text-slate-600 text-sm">Ideal para propietarios que arriendan por ambientes: control de inquilinos, pagos y recibos por habitación.</p>
            </div>
          </div>
        </section>

        {/* CTA + testimonial */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-xl font-bold">Empieza a cobrar con orden</h3>
            <p className="mt-3 text-slate-600">Prueba MyVeneciApp y reduce el tiempo que dedicas a la cobranza y la comunicación con tus inquilinos.</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>- Genera reportes mensuales en segundos</li>
              <li>- Registra constancias y adjunta recibos</li>
              <li>- Notifica automáticamente a los deudores</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white" href="#contacto">Solicitar demo</a>
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border" href="#precios">Ver planes</a>
            </div>
          </div>

          <blockquote className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-slate-700">“Desde que usamos MyVeneciApp, la cobranza es mucho más ordenada y los vecinos reciben sus recibos al instante.”</p>
            <footer className="mt-4 text-sm text-slate-500">— María G., Administradora de edificio (Lima)</footer>
          </blockquote>
        </section>

        {/* CONTACT / FOOTER */}
        <footer id="contacto" className="bg-white rounded-xl p-8 shadow-md">
          <h4 className="text-lg font-semibold">Contacto</h4>
          <p className="mt-2 text-slate-600 text-sm">¿Quieres una demo o una cotización personalizada? Escríbenos y te contactamos.</p>

          <form className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3" onSubmit={(e) => e.preventDefault()}>
            <input className="col-span-1 md:col-span-1 p-3 rounded border" placeholder="Nombre" />
            <input className="col-span-1 md:col-span-1 p-3 rounded border" placeholder="Correo" />
            <input className="col-span-1 md:col-span-1 p-3 rounded border" placeholder="Teléfono / WhatsApp" />
            <textarea className="col-span-1 md:col-span-3 p-3 rounded border" placeholder="Mensaje (opcional)" />

            <button className="col-span-1 md:col-span-3 inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white">Enviar solicitud</button>
          </form>

          <div className="mt-6 text-sm text-slate-500">También podemos preparar un kit comercial: PDF, texto para WhatsApp y video demo para tu promoción.</div>
        </footer>
      </section>
    </main>
  );
}


export default PropietariosPage;
