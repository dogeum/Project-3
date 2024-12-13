import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>IMDb</span>
      </div>
      <div className="navbar-links">
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top-rated">Top Rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
      </div>
    </nav>
  );
};

export default Navbar;
