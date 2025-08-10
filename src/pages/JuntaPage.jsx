import React from 'react';
import grupopng from "../assets/grupo-de-trabajo-hablando.png";

const JuntaPage = () => {
  return (
      <>
        <section className="article3 cid-tgkLRPjNwZ" id="content03-p">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="counter-container col-12 col-md-12 m-auto col-lg-8">
                <div className="card">
                  <h2 className="mbr-section-title align-left mbr-fonts-style mb-3 display-7">
                    <strong>MyVeneciApp para Junta de Propietarios</strong>
                  </h2>
                  <h3 className="mbr-section-subtitle align-left mbr-fonts-style mb-3 display-2">
                    <strong>Gestión Eficiente para Juntas Directivas de Condominios</strong>
                  </h3>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-4 image-wrapper align-right">
                <img src={grupopng} alt="myveneciapp-software-de-edificios" />
              </div>
            </div>
          </div>
        </section>
  
        <section className="content2 cid-tgkLRPMna0" id="content02-q">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                <p className="mbr-text mbr-fonts-style display-7">
                  Mantén el control total con MyVeneciapp. Nuestra plataforma garantiza 
                  cuentas claras y procesos administrativos eficientes, 
                  promoviendo una comunicación abierta con transparencia y finanzas organizadas. 
                  Dile adiós a los malentendidos 
                  y da la bienvenida a una gestión innovadora, moderna y transparente.
                  <br />
                  Las ventajas de la modernidad en control Administrativo en la
                  palma de tu mano, con nuestro 
                  <strong> módulos Administrativos</strong>.
                  <br />
                  <br />
                  
                  <br />
                  <br />
                  ¿Te gustaría implementar este tipo de solución en tu
                  <strong> administradora de edificios</strong>? Solicita más
                  información{" "}
                  <a
                    href="#"
                    className="text-primary"
                    data-toggle="modal"
                    data-bs-toggle="modal"
                    data-target="#mbr-popup-e"
                    data-bs-target="#mbr-popup-e"
                  >
                    AQUÍ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default JuntaPage;
