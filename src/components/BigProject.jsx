/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import image from "../assets/futter.png";
import "../styles/BigProject.css";

const BigProject = ({ index }) => {
  return (
    <div className="BigProject">
      <div className="BigProject_info">
        <p className="BigProject_great">Proyecto Destacado</p>
        <a href="https://www.futter.cc" rel="noopener noreferrer" target="_blank" className="BigProject_title">
          Futter
        </a>
        <div className="BigProject_description">
          <p>
            Este es el primer proyecto que he desarrollado. El objetivo fue crear una web que brindara herramientas de estudio (notas en video, filtros por intereses, etc) a los recursos gratuitos de
            Youtube.
          </p>
        </div>
        <div className="BigProject_stack">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Node Js</p>
          <p>Express</p>
          <p>Mongo DB</p>
        </div>
      </div>
      <div className="BigProject_image">
        <a href="https://futter.cc" rel="noopener noreferrer" target="_blank"></a>
        <img src={image} alt="Imagen del proyecto" />
      </div>
    </div>
  );
};

export default BigProject;
