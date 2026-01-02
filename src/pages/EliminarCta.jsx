import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react';

const Contacto = () => {
  const [status, setStatus] = useState('');
  
    return (
      <section className="w-full px-4 py-8 bg-gray-100">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <div className="flex items-center mb-6">
            <Mail className="text-blue-600 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-semibold text-blue-700">Eliminar Cuenta</h2>
          </div>
  
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const data = new FormData(form);
  
              fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(data).toString(),
              })
                .then(() => {
                  setStatus("✅ Tu mensaje fue enviado correctamente.");
                  form.reset();
                })
                .catch((error) => {
                  console.error("Error al enviar:", error);
                  setStatus("❌ Ocurrió un error. Intenta nuevamente.");
                });
            }}
          >
            {/* Hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Tu nombre completo"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="ejemplo@correo.com"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
  
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Send className="w-4 h-4" />
                Enviar
              </button>
  
              {status && (
                <p className="text-sm text-green-600 font-medium">{status}</p>
              )}
            </div>
          </form>
        </div>
      </section>
    );
}

export default EliminarCta
