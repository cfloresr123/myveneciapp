import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'

// Landing components
import FeatureSection from './components/FeatureSection'
import Carrusel from './components/Carrusel'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

// Pages
import PropietariosPage from './pages/PropietariosPage'
import JuntaPage from './pages/JuntaPage'
import ConserjePage from './pages/ConserjePage'
import Propietarios from './pages/Propietarios'
import Reservas from './pages/Reservas'
import Mantenimiento from './pages/Mantenimiento'
import Visitas from './pages/Visitas'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'

function App() {
  return (        
    <Router>
      <Header />
      <Navbar />
      <div className="bg-red-500 p-10 text-white">Prueba Tailwind</div>
      <div className="min-h-screen flex items-center justify-center bg-blue-500 text-white text-4xl">
          🚀 Tailwind 4 funcionando
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-600">
          🚀 MyVeneciApp con Tailwind
        </h1>
        <p className="mt-4 text-lg">Tailwind está funcionando 🎉</p>
      </div>
      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>                                
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
  )
}

export default App