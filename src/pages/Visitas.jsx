import React from "react";
import qrImage from "../assets/mujer-mostrando-qr.png";

const Visitas = () => {
  return (
    <>
      <section className="article3 cid-tgkLRPjNwZ" id="content03-p">
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="counter-container col-12 col-md-12 m-auto col-lg-8">
              <div className="card">
                <h2 className="mbr-section-title align-left mbr-fonts-style mb-3 display-7">
                  <strong>MyVeneciApp lanza módulo para invitados</strong>
                </h2>
                <h3 className="mbr-section-subtitle align-left mbr-fonts-style mb-3 display-2">
                  <strong>Genera códigos QR para tus invitados</strong>
                </h3>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4 image-wrapper align-right">
              <img src={qrImage} alt="myveneciapp-software-de-edificios" />
            </div>
          </div>
        </div>
      </section>

      <section className="content2 cid-tgkLRPMna0" id="content02-q">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-12">
              <p className="mbr-text mbr-fonts-style display-7">
                Invita a tus familiares, amigos, proveedores y clientes a visitar
                tu departamento u oficina, y bríndales un acceso fácil y rápido.
                ¿Cómo? Con una entrada al edificio, o condominio, en código QR.
                <br />
                Las ventajas de la modernidad en acceso a eventos en la
                palma de tu mano, con nuestro 
                <strong> módulo de invitaciones</strong>.
                <br />
                <br />
                ¿Cómo funciona? <br />
                -Registra en MyVeneciApp los datos de tu
                invitado: nombre, fecha y hora de visita, estacionamiento
                reservado (y otros datos opcionales). <br />
                -Descarga el código QR
                generado en MyVeneciApp y enviáselo a tu invitado por Whatsapp o
                correo electrónico. <br />
                -Al llegar el invitado presentará su
                entrada al portero quien, luego de escanear la invitación, le
                permitirá el ingreso, sin demoras o incómodos momentos de espera.
                <br />
                <br />
                ¿Te gustaría implementar este tipo de solución en tu
                <strong>administradora de edificios</strong>? Solicita más
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

export default Visitas;
