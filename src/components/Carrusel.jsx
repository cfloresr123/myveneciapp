export default function Carrusel() {
  return (
    <section className="container mt-5">
      <h2 className="text-center mb-4">Galería</h2>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner rounded shadow">
          {[1, 2, 3].map((n, i) => (
            <div key={n} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={`/assets/imagen${n}.jpg`} className="d-block w-100" alt={`Imagen ${n}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </section>
  );
}