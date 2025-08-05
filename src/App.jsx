import React from 'react'
import MyLandingPage from './components/MyLandingPage'
import Header from './components/Header'
import FeatureSection from './components/FeatureSection'
import Carrusel from './components/Carrusel'
import ContactForm from './components/ContactForm'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'
import HamburgerMenu from './components/HamburgerMenu';
  
function App() {
  return (
    <>   
      <HamburgerMenu />    
      <Header />
      <FeatureSection />
      <Carrusel />
      <ContactForm />
      <WhatsAppFloatingButton />
      
    </>
  )
}

export default App