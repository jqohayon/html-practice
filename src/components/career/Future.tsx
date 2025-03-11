import React from 'react';
import '../GoogleDocViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

const Future: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Goals</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FontAwesomeIcon 
          icon={faBullseye} 
          style={{ 
            fontSize: '2rem',
            color: '#6a1b9a',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>Aim high, reach higher</p>
      </div>
      <div className="content-section">
        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Coming Soon</h4>
            <ul>
              <li style={{ fontSize: '1.1rem' }}>
                <strong>Project Updates</strong>
                <ul>
                  <li style={{ padding: '4px 0 4px 50px', position: 'relative', fontSize: '1.1rem' }}>
                    <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                    Stay tuned for exciting updates and new features
                  </li>
                </ul>
              </li>
              <li style={{ fontSize: '1.1rem' }}>
                <strong>Design Patterns</strong>
                <ul>
                  <li style={{ padding: '4px 0 4px 50px', position: 'relative', fontSize: '1.1rem' }}>
                    <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                    Learning and implementing common software design patterns to write more maintainable and scalable code
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Future; 