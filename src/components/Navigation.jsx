import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const basePath = import.meta.env.BASE_URL;

  return (
    <nav className="navigation">
      <NavLink to={basePath} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
        Home
      </NavLink>
      <NavLink to={`${basePath}about`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        About Me
      </NavLink>
      <NavLink to={`${basePath}personal`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Personal Life
      </NavLink>
      <NavLink to={`${basePath}professional`} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Professional Life
      </NavLink>
    </nav>
  );
}

export default Navigation; 