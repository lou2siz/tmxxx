// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" aria-label="Go to Home Page">
        <img src="/logo.jpg" alt="Tuscan Money Logo" className="logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/music-distribution">Music Distribution</Link></li>
        <li><Link to="/strategic-litigation">Strategic Litigation</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
