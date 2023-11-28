import React, { useState } from "react";
import Logo from "../../assets/logo.png";

import "./Navbar.css";
import { Login } from "../../pages/Login/Login";
import { Register } from "../../pages/Register/Register";
import { CreatePoll } from "../../pages/CreatePoll/createPoll";

function Navbar() {
  return (
    <div className="nav-navbar">
      <img src={Logo} alt="Logo" />

      <div className="text">
        <ul>
          <Login />
          <Register />
          {/* <CreatePoll /> */}
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
