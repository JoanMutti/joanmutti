import React from "react";
import logo from "../logo.svg";
import Navbar from "./Navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header_logo">
        <img src={logo} alt="Joan Mutti" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
