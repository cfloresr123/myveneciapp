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
      <Navbar />
      {/* Espaciado para que no se oculte debajo del navbar fijo */}
      <div className="pt-20"> 
        <Header />  
        <HamburgerMenu />            
        <FeatureSection />
        <Carrusel />
        <ContactForm />
        <WhatsAppFloatingButton />
      </div>
    </>
  )
}

export default App