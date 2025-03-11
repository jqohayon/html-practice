import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const LeveragingAI: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Leveraging AI</h2>
      <FontAwesomeIcon 
        icon={faRobot} 
        style={{ 
          fontSize: '2.5rem',
          color: '#6a1b9a',
          marginBottom: '1rem'
        }} 
      />
      <p>Exploring the possibilities of artificial intelligence!</p>
    </div>
  );
};

export default LeveragingAI; 