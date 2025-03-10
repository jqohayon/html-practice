import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/html-practice" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
        Home
      </NavLink>
      <NavLink to="/html-practice/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        About Me
      </NavLink>
      <NavLink to="/html-practice/personal" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Personal Life
      </NavLink>
      <NavLink to="/html-practice/professional" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Professional Life
      </NavLink>
    </nav>
  );
}

export default Navigation; 