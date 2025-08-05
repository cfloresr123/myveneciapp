import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-blue-600">404</h1>
      <p className="mt-4 text-gray-600">Página no encontrada.</p>
      <Link to="/" className="mt-6 text-blue-500 underline">Volver al inicio</Link>
    </div>
  )
}

export default NotFound