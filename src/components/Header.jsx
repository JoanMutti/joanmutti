import React from "react";
import logo from "../logo.svg";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header_logo">
        <img src={logo} alt="Joan Mutti" />
      </div>
      <nav className="Header_nav">
        <a href="#about">Sobre Mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contacto</a>
      </nav>
      <a href="https://google.com" target="_blank" rel="noreferrer" className="Header_toCv">
        Curriculum
      </a>
    </header>
  );
};

export default Header;
