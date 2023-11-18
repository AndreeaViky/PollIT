import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="text">
        <ul>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
