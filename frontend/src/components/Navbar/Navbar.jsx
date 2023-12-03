import React, { useState } from "react";
import Logo from "../../assets/logo.png";

import "./Navbar.css";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { CreatePoll } from "../CreatePoll/createPoll";

function Navbar() {
  return (
    <div className="nav-navbar">
      <img src={Logo} alt="Logo" />

      <div className="text">
        <ul>
          <Login />
          <Register />
          <CreatePoll />
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
