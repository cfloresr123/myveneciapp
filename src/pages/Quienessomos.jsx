import React from 'react';
import { Building2, Users, Heart, ShieldCheck } from "lucide-react";

const Quienessomos = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900 p-6 md:p-12">
      <section className="max-w-6xl mx-auto">
        {/* HERO */}
        <header className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Quiénes Somos
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
            En <span className="font-semibold">MyVeneciApp</span> ayudamos a
            propietarios, administradores y comunidades a gestionar de manera
            más eficiente sus propiedades. Creemos que la tecnología debe
            simplificar tu día a día y darte control total sobre la cobranza,
            mantenimiento y comunicación.
          </p>
        </header>

        {/* MISSION & VALUES */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <Building2 className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Nuestra Misión</h3>
            <p className="text-slate-600">
              Facilitar la gestión de propiedades con una plataforma integral,
              reduciendo el tiempo dedicado a tareas repetitivas y mejorando la
              experiencia tanto para administradores como para residentes.
            </p>
          </article>

          <article className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <Heart className="w-10 h-10 text-indigo-600 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Nuestros Valores</h3>
            <p className="text-slate-600">
              Transparencia, confianza, innovación y cercanía con nuestros
              usuarios son los pilares que guían cada mejora y actualización de
              MyVeneciApp.
            </p>
          </article>
        </section>

        {/* TEAM */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Users className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
              <h4 className="font-semibold">Profesionales en tecnología</h4>
              <p className="text-sm text-slate-600 mt-2">
                Expertos en desarrollo de software y soluciones digitales para
                comunidades.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <ShieldCheck className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
              <h4 className="font-semibold">Compromiso con la seguridad</h4>
              <p className="text-sm text-slate-600 mt-2">
                Protegemos tu información con altos estándares de seguridad y
                buenas prácticas.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <Heart className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
              <h4 className="font-semibold">Pasión por ayudar</h4>
              <p className="text-sm text-slate-600 mt-2">
                Escuchamos a nuestros clientes para mejorar continuamente y
                ofrecer la mejor experiencia posible.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white rounded-xl p-8 shadow-md text-center">
          <h3 className="text-xl font-bold">Únete a nuestra comunidad</h3>
          <p className="mt-3 text-slate-600">
            Miles de propietarios y administradores ya gestionan sus propiedades
            con MyVeneciApp. ¿Quieres ser parte?
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700"
            >
              Solicitar información
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200"
            >
              Ver demo
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Quienessomos
