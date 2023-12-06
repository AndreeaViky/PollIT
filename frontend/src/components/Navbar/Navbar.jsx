import { useState, useContext } from "react";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../Login/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { CreatePoll } from "../CreatePoll/createPoll";

function Navbar() {
  const { isLoggedIn, onLogin, onLogout } = useContext(AuthContext);

  const handleLogout = () => {
    onLogout();
    navigate("/");
  };

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
      <div className="nav-links">
        {!isLoggedIn ? (
          <>
            <div className="nav-item">
              <Login onLogin={onLogin} /> {/* Pass onLogin here */}
            </div>
            <div className="nav-item">
              <Register />
            </div>
          </>
        ) : (
          <>
            <div className="nav-item">
              <CreatePoll />
            </div>
            <div className="nav-item">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        )}
      </div>
      <div
        id="hamburger-icon"
        onClick={() =>
          toggleMobileMenu(document.getElementById("hamburger-icon"))
        }
      >
        <ul className="mobile-menu">
          {!isLoggedIn && (
            <>
              <li id="login">
                <Login onLogin={onLogin} /> {/* Pass onLogin here */}
              </li>
              <li id="register">
                <Register />
              </li>
            </>
          )}
          {isLoggedIn && (
            <li id="logout">
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
