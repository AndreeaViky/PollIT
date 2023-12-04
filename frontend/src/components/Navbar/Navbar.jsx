import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import Hamburger from "../../assets/hamburger.png";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { CreatePoll } from "../CreatePoll/createPoll";

function Navbar({ isLoggedIn, onLogout, onLogin }) {
  const navigate = useNavigate();
  // const handleLogout = () => {
  //   onLogout();
  //   navigate("/");
  // };

  const [showMenu, setShowMenu] = useState(false);

  function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
  }

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="nav-navbar">
      <img className="logo" src={Logo} alt="Logo" />

      <div className="text">
        <ul>
          {/* {!isLoggedIn && (
            <>
              <li>
               <Login onLogin={onLogin} />
              </li>
              <li>
                <Register />
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <CreatePoll />
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )} */}

          <Login />
          <Register />
          <CreatePoll />
        </ul>
        <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
          <ul class="mobile-menu">
            <li id="login">
              <Login />
            </li>
            <li id="register">
              <Register />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
