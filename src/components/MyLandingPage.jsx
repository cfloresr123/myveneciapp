// src/components/MyLandingPage.jsx

import React from "react";

const MyLandingPage = () => {
  return (
    <div>
      <header>
        <h1>Bienvenido a MyVeneciApp</h1>
        <p>Tu solución para administrar tu edificio</p>
      </header>

      {/* Carrusel básico con imágenes locales o URLs */}
      <section>
        <h2>Galería</h2>
        <div style={{ display: "flex", overflowX: "scroll" }}>
          <img src="/img1.jpg" alt="Imagen 1" style={{ width: "300px", marginRight: "10px" }} />
          <img src="/img2.jpg" alt="Imagen 2" style={{ width: "300px", marginRight: "10px" }} />
          <img src="/img3.jpg" alt="Imagen 3" style={{ width: "300px" }} />
        </div>
      </section>

      {/* Formulario de contacto */}
      <section>
        <h2>Contacto</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Nombre:
            <input type="text" name="nombre" required />
          </label>
          <br />
          <label>
            Correo:
            <input type="email" name="correo" required />
          </label>
          <br />
          <label>
            Mensaje:
            <textarea name="mensaje" rows="4" required></textarea>
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default MyLandingPage;