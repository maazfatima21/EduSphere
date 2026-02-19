import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
  <nav className="navbar">

    <div className="logo-container">
      <img src="/images/logo.png" alt="logo" className="logo" />
      <span className="college-name">EduSphere</span>
    </div>

    <div ref={menuRef} className="menu-wrapper">
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About Us</NavLink></li>
        <li><NavLink to="/courses" onClick={closeMenu}>Courses</NavLink></li>
        <li><NavLink to="/faculty" onClick={closeMenu}>Faculty</NavLink></li>
        <li><NavLink to="/admissions" onClick={closeMenu}>Admissions</NavLink></li>
        <li><NavLink to="/placements" onClick={closeMenu}>Placements</NavLink></li>
        <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </ul>
    </div>

    <div className="nav-btn">
      <Link to="/contact" className="btn-primary">
        Apply Now
      </Link>
    </div>
  </nav>
  );
};

export default Navbar;
