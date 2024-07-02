// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Boost</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
