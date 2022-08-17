import React from "react";
import me from "../assets/me.png";
import "../styles/About.css";
import StackList from "./StackList";

const About = () => {
  return (
    <section className="About">
      <div className="About_data">
        <div className="About_title">
          <h2>Sobre Mi</h2>
          <div className="line"></div>
        </div>
        <p>
          Hola! Mi nombre es Joan Mutti y disfruto creando cosas que ayuden a la gente a explorar el mundo digital. Mi interes hacia el mundo de la tecnologia nació cuando era pequeño y mis trabajos y
          pasiones siempre estuvieron dentro de este entorno.
        </p>
        <p>
          Desde mis inicios tuve la suerte de trabajar en{" "}
          <a href="https://www.legislatura.gov.ar/" target="_blank" rel="noreferrer">
            un ente gubernamental
          </a>
          , donde pude aprender de gente con mucha experiencia. Tambien fui parte de{" "}
          <a href="https://www.techint.com/es" target="_blank" rel="noreferrer">
            una gran empresa multinacional
          </a>
          , donde adquirí nuevas herramientas y di mis primeros pasos en la seguridad SAP. Hasta llegar al día de hoy, que me encuentro en{" "}
          <a href="https://www.volkswagen.com.ar/" target="_blank" rel="noreferrer">
            una conocida empresa automotriz
          </a>
          , que fue el lugar que me enseño como generar un espiritu de equipo desde la virtualidad y tambien como gestionar proyectos de alta demanda.
        </p>
        <p>
          Actualmente tambien desarrollo mis propios emprendimientos donde plasmo mis conocimientos solucionando problemas que encuentro en el mundo real. Asi como tambien participo en proyectos
          ideados por colegas que persiguen los mismos objetivos de desarrollar con tecnologia herramientas que desde nuestro humilde lugar mejoren el mundo.
        </p>
        <p>Alguna de las tecnologias que con las que he trabajado:</p>
        <StackList />
      </div>
      <div className="About_image">
        <img src={me} alt="Joan Mutti" />
      </div>
    </section>
  );
};

export default About;
