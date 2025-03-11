import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
        Home
      </NavLink>
      <NavLink to="/jr-engineer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        My Journey
      </NavLink>
      <NavLink to="/resources" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Resources
      </NavLink>
      <NavLink to="/leveraging-ai" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Leveraging AI
      </NavLink>
      <NavLink to="/career-paths" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Career Paths
      </NavLink>
      <NavLink to="/github" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Github
      </NavLink>
    </nav>
  );
};

export default Navigation; 