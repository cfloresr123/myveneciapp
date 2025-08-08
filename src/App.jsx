import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeIcon, CalendarDaysIcon, WrenchScrewdriverIcon, UsersIcon, PhoneIcon } from '@heroicons/react/24/outline';

import Header from './components/Header';
import Navbar from './components/Navbar';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

// Landing components
import FeatureSection from './components/FeatureSection';
import Carrusel from './components/Carrusel';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Pages
import PropietariosPage from './pages/PropietariosPage';
import JuntaPage from './pages/JuntaPage';
import ConserjePage from './pages/ConserjePage';
import Propietarios from './pages/Propietarios';
import Reservas from './pages/Reservas';
import Mantenimiento from './pages/Mantenimiento';
import Visitas from './pages/Visitas';
import Contacto from './pages/Contacto';
import NotFound from './pages/NotFound';

function App() {
  const menuItems = [
    { label: 'Propietarios e Inquilinos', icon: <HomeIcon className="h-10 w-10 text-indigo-500" />, href: '/propietarios' },
    { label: 'Reservas', icon: <CalendarDaysIcon className="h-10 w-10 text-indigo-500" />, href: '/reservas' },
    { label: 'Mantenimiento', icon: <WrenchScrewdriverIcon className="h-10 w-10 text-indigo-500" />, href: '/mantenimiento' },
    { label: 'Visitas', icon: <UsersIcon className="h-10 w-10 text-indigo-500" />, href: '/visitas' },
    { label: 'Contacto', icon: <PhoneIcon className="h-10 w-10 text-indigo-500" />, href: '/contacto' },
  ];

  return (
    <Router>
      <Header />
      <Navbar />

      <div className="pt-20">
        <Routes>
          {/* Página principal con dashboard */}
          <Route
            path="/"
            element={
              <>
                <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-6">
                  <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-700 animate-fadeIn">
                    Bienvenido a MyVeneciApp
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center hover:shadow-xl hover:scale-105 transition duration-300 transform"
                      >
                        {item.icon}
                        <h2 className="text-lg font-semibold mt-4 text-gray-800">{item.label}</h2>
                      </a>
                    ))}
                  </div>
                </section>

                <main className="flex-grow">
                  <FeatureSection />
                  <Carrusel />
                  <ContactForm />
                </main>

                <Footer />
                <WhatsAppFloatingButton />
              </>
            }
          />

          {/* Otras páginas */}
          <Route path="/propietariospage" element={<PropietariosPage />} />
          <Route path="/juntapage" element={<JuntaPage />} />
          <Route path="/conserjepage" element={<ConserjePage />} />
          <Route path="/propietarios" element={<Propietarios />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/mantenimiento" element={<Mantenimiento />} />
          <Route path="/visitas" element={<Visitas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
