import React from "react";
import BigProject from "./BigProject";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects_header">
        <h2>Algunos proyectos que he desarrollado</h2>
        <div className="line"></div>
      </div>
      <div className="Projects_container">
        <BigProject />
        <BigProject />
        <BigProject />
      </div>
    </div>
  );
};

export default Projects;
