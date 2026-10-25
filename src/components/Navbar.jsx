
import React, { useState } from "react";
import sibilogo from "../assets/sibilogo.png";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={sibilogo} alt="SIBI logo" />

        <div className="logo-text">
          <h2 id="text-sibi">SIBI</h2>
          <p>SKILL DEVELOPMENT INSTITUTE</p>
        </div>
      </div>

      {/* Hamburger Button - Mobile */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Links */}
      <nav
        id="navbar-links"
        className={`nav-content ${menuOpen ? "open" : ""}`}
      >
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/courses" onClick={closeMenu}>
          Courses
        </NavLink>

        <NavLink to="/location" onClick={closeMenu}>
          Location
        </NavLink>

        {/* Course Details Dropdown */}
        <div className="navbar-course">
          <div className="dropdown">
            <span>Course Details</span>

            <ul className="dropdown-menu">
              <li>
                <Link to="/course/land-survey" onClick={closeMenu}>
                  Land Survey
                </Link>
              </li>

              <li>
                <Link to="/course/mobile-service" onClick={closeMenu}>
                  Mobile Service
                </Link>
              </li>

              <li>
                <Link to="/course/laptop-service" onClick={closeMenu}>
                  Laptop Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <NavLink to="/register" onClick={closeMenu}>
          Register
        </NavLink>
      </nav>

    </div>
  );
};

export default Navbar;
