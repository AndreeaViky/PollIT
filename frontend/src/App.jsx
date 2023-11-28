import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cards from "./components/Cards/Cards.jsx";

import Testoasa from "./assets/testoasa.png";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <div className="page">
                <div className="header">
                  <p>
                    Opiniile sunt mai importante ca niciodată. Platformele de
                    sondaje permit organizatorilor să culeagă feedback direct de
                    la audiența lor și să înțeleagă mai bine nevoile și
                    dorințele acesteia.
                  </p>
                  <div>
                    <img className="testoasa" src={Testoasa} />
                  </div>
                </div>

                <div>
                  <Cards />
                </div>
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
