import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'red' : '')}
          to="/home"
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'red' : '')}
          to="/about"
        >
          <li>About Us</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'red' : '')}
          to="/contact"
        >
          <li>Contact Us</li>
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? 'red' : '')}
          to="/user"
        >
          <li>User</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
