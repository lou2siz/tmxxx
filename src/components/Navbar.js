import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this file for Navbar-specific styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/logo.jpg" alt="Tuscan Money Logo" className="logo" />
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
