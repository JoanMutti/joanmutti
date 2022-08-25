import React from "react";
import BigProject from "./BigProject";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <section className="Projects" id="projects">
      <div className="Projects_header">
        <h2>Algunos Proyectos Desarrollados</h2>
        <div className="line"></div>
      </div>
      <div className="Projects_container">
        <BigProject />
        <BigProject />
        <BigProject />
      </div>
    </section>
  );
};

export default Projects;
