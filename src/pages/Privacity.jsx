import React from "react";

const Privacity = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem", lineHeight: "1.6" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Política de Privacidad – MyVeneciApp
      </h1>
      <p style={{ fontStyle: "italic", marginBottom: "2rem" }}>
        Fecha de entrada en vigor: 02 de enero de 2026
      </p>

      <p>
        MyVeneciApp (“nosotros”, “nuestro” o “la App”) se compromete a proteger la privacidad
        de los usuarios (“usted”, “su”). Esta Política de Privacidad explica cómo recopilamos,
        usamos y protegemos su información al usar nuestra aplicación móvil.
      </p>

      <h2>1. Información que recopilamos</h2>
      <p>Al usar MyVeneciApp, podemos recopilar información que usted nos proporciona directamente o automáticamente:</p>
      <ul>
        <li><strong>Información personal:</strong> nombre, correo electrónico, número de departamento, foto de perfil.</li>
        <li><strong>Información de uso:</strong> fechas de reserva de recursos, historial de mantenimientos, visitas registradas.</li>
        <li><strong>Información técnica:</strong> dispositivo, sistema operativo, datos de conexión.</li>
      </ul>

      <h2>2. Cómo usamos su información</h2>
      <ul>
        <li>Permitir la correcta funcionalidad de la app (registro de reservas, mantenimientos, visitas).</li>
        <li>Enviar notificaciones sobre su unidad o recursos reservados.</li>
        <li>Mejorar la app y personalizar su experiencia.</li>
        <li>Cumplir obligaciones legales y administrativas relacionadas con la gestión del edificio.</li>
      </ul>

      <h2>3. Compartir información</h2>
      <p>No vendemos, alquilamos ni compartimos su información personal con terceros para fines comerciales. Solo compartimos información con:</p>
      <ul>
        <li>Proveedores de servicios que nos ayudan a operar la app.</li>
        <li>Autoridades legales si es requerido por ley.</li>
      </ul>

      <h2>4. Seguridad de la información</h2>
      <p>Implementamos medidas de seguridad razonables para proteger su información personal contra acceso no autorizado, modificación o eliminación.</p>

      <h2>5. Derechos del usuario</h2>
      <p>Usted puede:</p>
      <ul>
        <li>Solicitar acceso, corrección o eliminación de sus datos.</li>
        <li>Retirar su consentimiento para el uso de datos en cualquier momento.</li>
        <li>Contactarnos para ejercer estos derechos a través de <a href="mailto:contacto@myveneciapp.com">contacto@myveneciapp.com</a>.</li>
      </ul>

      <h2>6. Cambios a esta política</h2>
      <p>Podemos actualizar esta Política de Privacidad ocasionalmente. La fecha de entrada en vigor se actualizará al inicio de este documento.</p>

      <h2>7. Contacto</h2>
      <p>
        Si tiene preguntas sobre esta política, puede contactarnos en:
      </p>
      <ul>
        <li>📧 Email: <a href="mailto:myvenecia@gmail.com">myvenecia@gmail.com</a></li>
        <li>🌐 Web: <a href="https://www.myveneciapp.com" target="_blank">www.myveneciapp.com</a></li>
      </ul>
    </div>
  );
};

export default Privacity;

