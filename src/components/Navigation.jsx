import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navigation">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
        end
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        About Me
      </NavLink>
      <NavLink 
        to="/personal" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Personal Life
      </NavLink>
      <NavLink 
        to="/professional" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Professional Life
      </NavLink>
    </nav>
  );
}

export default Navigation; 