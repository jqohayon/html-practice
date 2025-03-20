import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import '../Navigation.css';

type NavLinkClassNameProps = {
  isActive: boolean;
};

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <NavLink to="/" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'} end>
        <FaHome size={24} />
      </NavLink>
      <NavLink to="/jr-engineer" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Path
      </NavLink>
      <NavLink to="/leveraging-ai" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        AI
      </NavLink>
      <NavLink to="/github" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Github
      </NavLink>
      <NavLink to="/future" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Future
      </NavLink>
      <NavLink to="/resources" className={({ isActive }: NavLinkClassNameProps) => isActive ? 'nav-link active' : 'nav-link'}>
        Resources
      </NavLink>
    </nav>
  );
};

export default Navigation; 