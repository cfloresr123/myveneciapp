import React from 'react'
import MyLandingPage from './components/MyLandingPage'
import Header from './components/Header'
import FeatureSection from './components/FeatureSection'
import Carrusel from './components/Carrusel'
import ContactForm from './components/ContactForm'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import HamburgerMenu from './components/HamburgerMenu';
import Navbar from './components/Navbar';
  
function App() {
  return (
    <> 
      <Header />       
      <Navbar />
      {/* Espaciado para que no se oculte debajo del navbar fijo */}
      <div className="pt-20">                                    
        <FeatureSection />
        <Carrusel />
        <ContactForm />
        <WhatsAppFloatingButton />
        <section id="inicio" className="h-screen bg-gray-100">Inicio</section>
        <section id="caracteristicas" className="h-screen bg-gray-200">Características</section>
        <section id="contacto" className="h-screen bg-gray-300">Contacto</section>
      </div>
    </>
  )
}

export default App