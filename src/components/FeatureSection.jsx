export default function FeatureSection() {
  return (
    <section className="container text-center mt-5">
      <h2 className="mb-4">¿Para quién es MyVeneciApp?</h2>
      <div className="row g-4">
        {[
          { icon: "users", title: "Propietarios e Inquilinos", desc: "Reservas, mantenimiento, visitas y más." },
          { icon: "gavel", title: "Junta de Propietarios", desc: "Gestión centralizada, reportes, seguridad." },
          { icon: "concierge-bell", title: "Conserje o Vigilante", desc: "Control de visitas, incidencias." },
        ].map(({ icon, title, desc }, i) => (
          <div className="col-md-4" key={i}>
            <div className="p-4 bg-white rounded shadow text-center">
              <i className={`fas fa-${icon} fa-2x text-primary mb-3`}></i>
              <h5>{title}</h5>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}