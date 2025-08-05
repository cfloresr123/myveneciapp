import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton'

// Landing components
import FeatureSection from './components/FeatureSection'
import Carrusel from './components/Carrusel'
import ContactForm from './components/ContactForm'

// Pages
import PropietariosPage from './pages/PropietariosPage'
import JuntaPage from './pages/JuntaPage'
import ConserjePage from './pages/ConserjePage'
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
      <div className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeatureSection />
                <Carrusel />
                <ContactForm />
                <WhatsAppFloatingButton />
              </>
            }
          />
          <Route path="/propietariospage" element={<PropietariosPage />} />
          <Route path="/juntapage" element={<JuntaPage />} />
          <Route path="/conserjepage" element={<ConserjePage />} />
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