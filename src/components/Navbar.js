// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // State to manage the mobile menu's open or closed state
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" aria-label="Go to Home Page" className="logo-link" onClick={closeMobileMenu}>
        <img src="/logo.jpg" alt="Tuscan Money Logo" className="logo" />
      </Link>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul>
          <li>
            <Link to="/music-distribution" onClick={closeMobileMenu}>
              Music Distribution
            </Link>
          </li>
          <li>
            <Link to="/litigation-finance" onClick={closeMobileMenu}>
              Litigation Finance
            </Link>
          </li>
          <li>
            <Link to="/partners" onClick={closeMobileMenu}>
              Partners
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={closeMobileMenu}>
              News
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={closeMobileMenu}>
              Shop
            </Link>
          </li>
        </ul>
      </div>

      <button className="mobile-menu-icon" onClick={handleMenuToggle} aria-label="Toggle Menu">
        <span className="menu-icon-bar"></span>
        <span className="menu-icon-bar"></span>
        <span className="menu-icon-bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
