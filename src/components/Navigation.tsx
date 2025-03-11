import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Home
      </NavLink>
      <NavLink to="/career" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Career
      </NavLink>
      <NavLink to="/feedback" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Feedback
      </NavLink>
    </nav>
  );
};

export default Navigation; 