import React from 'react';
import '../GoogleDocViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Github: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Github Projects</h2>
      <FontAwesomeIcon 
        icon={faGithub} 
        style={{ 
          fontSize: '2.5rem',
          color: '#6a1b9a',
          marginBottom: '1rem'
        }} 
      />
      <p>Check out my latest projects and contributions!</p>
    </div>
  );
};

export default Github; 