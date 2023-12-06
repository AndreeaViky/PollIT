import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { CreatePoll } from "../CreatePoll/createPoll";
import { AuthContext } from "../Login/AuthContext";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  function toggleMobileMenu(menu) {
    console.log(typeof this);
  }

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="nav-navbar">
      <img className="logo" src={Logo} alt="Logo" />

      <div className="text">
        <ul>
          {!isLoggedIn ? (
            <>
              <Login />
              <Register />
            </>
          ) : (
            <>
              <CreatePoll />
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </ul>
      </div>
      <div id="hamburger-icon" onClick={toggleMobileMenu(this)}>
        <ul className="mobile-menu">
          <li id="login">
            <Login />
          </li>
          <li id="register">
            <Register />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;