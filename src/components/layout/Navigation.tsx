import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaRocket, FaLightbulb, FaGithub, FaBook } from 'react-icons/fa';
import '../Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
        <FaHome size={20} style={{ marginRight: '4px' }} />
        <span className="nav-text">Home</span>
      </NavLink>
      <NavLink to="/jr-engineer" className={({ isActive }) => isActive ? 'nav-link active icon-only-mobile' : 'nav-link icon-only-mobile'}>
        <FaRocket size={18} style={{ marginRight: '4px' }} />
        <span>Path</span>
      </NavLink>
      <NavLink to="/leveraging-ai" className={({ isActive }) => isActive ? 'nav-link active icon-only-mobile' : 'nav-link icon-only-mobile'}>
        <FaLightbulb size={18} style={{ marginRight: '4px' }} />
        <span>AI</span>
      </NavLink>
      <NavLink to="/github" className={({ isActive }) => isActive ? 'nav-link active icon-only-mobile' : 'nav-link icon-only-mobile'}>
        <FaGithub size={18} style={{ marginRight: '4px' }} />
        <span>Github</span>
      </NavLink>
      <NavLink to="/future" className={({ isActive }) => isActive ? 'nav-link active icon-only-mobile' : 'nav-link icon-only-mobile'}>
        <FaRocket size={18} style={{ marginRight: '4px' }} />
        <span>Future</span>
      </NavLink>
      <NavLink to="/resources" className={({ isActive }) => isActive ? 'nav-link active icon-only-mobile' : 'nav-link icon-only-mobile'}>
        <FaBook size={18} style={{ marginRight: '4px' }} />
        <span>Resources</span>
      </NavLink>
    </nav>
  );
};

export default Navigation; 