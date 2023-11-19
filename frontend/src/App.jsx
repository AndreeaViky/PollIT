import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Testoasa from "./assets/testoasa.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="header">
          <p>
            Opiniile sunt mai importante ca niciodată. Platformele de sondaje
            permit organizatorilor să culeagă feedback direct de la audiența lor
            și să înțeleagă mai bine nevoile și dorințele acesteia.
          </p>
          <div>
            <img className="testoasa" src={Testoasa} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
