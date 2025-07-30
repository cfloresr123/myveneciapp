import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send } from 'lucide-react';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3bhwg4d',
        'template_v91veun',
        form.current,
        '_65mpFhmInt9QT90E'
      )
      .then(
        () => {
          setStatus('✅ Tu mensaje fue enviado correctamente.');
          form.current.reset();
        },
        () => {
          setStatus('❌ Ocurrió un error. Inténtalo nuevamente.');
        }
      );
  };

  return (
    <section className="w-full px-4 py-8 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <div className="flex items-center mb-6">
          <Mail className="text-blue-600 w-6 h-6 mr-2" />
          <h2 className="text-2xl font-semibold text-blue-700">Contáctanos</h2>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
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
};

export default ContactForm;
