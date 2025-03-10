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
        to="/jr-engineer" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Jr Engineer
      </NavLink>
      <NavLink 
        to="/resources" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Resources
      </NavLink>
      <NavLink 
        to="/leveraging-ai" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Leveraging AI
      </NavLink>
      <NavLink 
        to="/career-paths" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Career Paths
      </NavLink>
      <NavLink 
        to="/sql-python" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        SQL & Python
      </NavLink>
      <NavLink 
        to="/github" 
        className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
      >
        Github
      </NavLink>
    </nav>
  );
}

export default Navigation; 