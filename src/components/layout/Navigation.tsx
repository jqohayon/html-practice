import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end>
        <FaHome size={24} />
      </NavLink>
      <NavLink to="/jr-engineer" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Path
      </NavLink>
      <NavLink to="/leveraging-ai" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        AI
      </NavLink>
      <NavLink to="/github" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Github
      </NavLink>
      <NavLink to="/future" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Future
      </NavLink>
      <NavLink to="/keyboards" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Keyboards
      </NavLink>
      <NavLink to="/resources" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Resources
      </NavLink>
    </nav>
  );
};

export default Navigation; 