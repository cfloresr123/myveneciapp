import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HomeIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Header from './components/Header';
import Navbar from './components/Navbar';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import ManualViewer from "./components/ManualViewer";

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
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Quienessomos from './pages/Quienessomos';


function App() {
  const menuItems = [
  { label: "Quiénes Somos", icon: HomeIcon, href: "/Quienessomos" },
  { label: "Reservas", icon: CalendarDaysIcon, href: "/reservas" },
  { label: "Mantenimiento", icon: WrenchScrewdriverIcon, href: "/mantenimiento" },
  { label: "Visitas", icon: UsersIcon, href: "/visitas" },
  { label: "Contacto", icon: PhoneIcon, href: "/contacto" },

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
                <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-4 min-h-[60vh] max-w-7xl mx-auto">
                  <h1 className="text-4xl font-extrabold text-center mb-12 text-indigo-700 animate-fadeIn">
                    Bienvenido a MyVeneciApp
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
                      >
                        <item.icon className="w-8 h-8 text-indigo-600 mb-4 flex-shrink-0" />
                        <span className="text-lg font-semibold text-gray-800">
                          {item.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </section>
                <main className="mt-8 px-4 max-w-7xl mx-auto">
                  <FeatureSection />
                  <Carrusel />
                  <ContactForm />
                </main>                
                {/*<WhatsAppFloatingButton />*/}
              </>
            }
          />

          {/* Otras páginas */}
          <Route path="/propietariospage" element={<PropietariosPage />} />
          <Route path="/manual" element={<ManualViewer />} />
          <Route path="/juntapage" element={<JuntaPage />} />
          <Route path="/conserjepage" element={<ConserjePage />} />
          <Route path="/propietarios" element={<Propietarios />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/mantenimiento" element={<Mantenimiento />} />
          <Route path="/visitas" element={<Visitas />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacy" element={<Privacy />} />          
          <Route path="/Quienessomos" element={<Quienessomos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Botón flotante global */}
        <WhatsAppFloatingButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
