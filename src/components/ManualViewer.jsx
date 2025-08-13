import React from "react";

const ManualViewer = () => {
  // Cambia este link por tu enlace de Google Drive en formato directo
  const pdfUrl =
    "https://drive.google.com/file/d/1BzaYpoHOQ2ScHntzAeQsamL5KjSMq9rB/view?usp=drivesdk";

  // Convertir enlace de "view" a "preview" para embeberlo
  const embedUrl = pdfUrl.replace("/view", "/preview");

  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={embedUrl}
        style={{ width: "100%", height: "100%" }}
        frameBorder="0"
        title="Manual"
      ></iframe>
    </div>
  );
};

export default ManualViewer;

