import { Link } from 'react-router-dom'

export default function FeatureSection() {
  const items = [
    {
      icon: "users",
      title: "Propietarios e Inquilinos",
      desc: "Reservas, mantenimiento, visitas y más.",
      href: "/propietariospage"
    },
    {
      icon: "gavel",
      title: "Junta de Propietarios",
      desc: "Gestión centralizada, reportes, seguridad.",
      href: "/juntapage"
    },
    {
      icon: "concierge-bell",
      title: "Conserje o Vigilante",
      desc: "Control de visitas, incidencias.",
      href: "/conserjepage"
    },
  ];

  return (
    <section className="container text-center mt-5">
      <h2 className="mb-4">¿Para quién es MyVeneciApp?</h2>
      <div className="row g-4">
        {items.map(({ icon, title, desc, href }, i) => (
          <div className="col-md-4" key={i}>
            <a
              href={href}
              className="block p-4 bg-white rounded shadow text-center hover:bg-blue-100 transition duration-300 cursor-pointer text-decoration-none text-dark"
            >
              <i className={`fas fa-${icon} fa-2x text-primary mb-3`}></i>
              <h5>{title}</h5>
              <p>{desc}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}