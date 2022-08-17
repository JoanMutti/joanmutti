import React from "react";
import "../styles/Presentation.css";

const Presentation = () => {
  return (
    <section className="Presentation">
      <p className="Presentation_mono">Hola, mi nombre es</p>
      <h1 className="Presentation_title">Joan Mutti</h1>
      <p className="Presentation_subtitle">Construyo cosas que faciliten la vida de las personas</p>
      <p className="Presentation_long">
        Soy un desarrollador de software y especialista en seguridad SAP viviendo en Buenos Aires, Argentina especializado en construir (y ocasionalmente diseñar) sistemas para la web, generando
        experiencias de usuario distintivas, facilitando la transformación y optimización digital.
      </p>
    </section>
  );
};

export default Presentation;
