import React from 'react';
import '../GoogleDocViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Resources: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Additional Resources</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <FontAwesomeIcon 
          icon={faBookOpen} 
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
        }}>Knowledge is power.</p>
      </div>
      <div className="content-section">
        <section className="tools-section">
          <div className="tool-category">
            <h4 style={{ fontSize: '1.3rem' }}>Reading Materials</h4>
            <ul>
              <li style={{ fontSize: '1.1rem' }}>
                <strong>David Farley</strong> - Modern Software Engineering
                <ul>
                  <li style={{ padding: '4px 0 4px 50px', position: 'relative', fontSize: '1rem' }}>
                    <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                    A foundational read that taught me golden standards, mindset development, and pracitcal approaches.
                  </li>
                </ul>
              </li>
              <li style={{ fontSize: '1.1rem' }}>
                <strong>Martin Fowler's Works</strong>
                <ul>
                  <li style={{ fontSize: '1.1rem' }}>Refactoring</li>
                  <li style={{ fontSize: '1.1rem' }}>The Practical Test Pyramid</li>
                </ul>
              </li>
              <li style={{ fontSize: '1.1rem' }}>
                <strong>Robert Martin's Series</strong>
                <ul>
                  <li style={{ fontSize: '1.1rem' }}>The Clean Coder</li>
                  <li style={{ fontSize: '1.1rem' }}>Clean Code</li>
                </ul>
              </li>
              <li style={{ fontSize: '1.1rem' }}>
                <strong>Vlad Knononov</strong> - Learning Domain-Driven Design
                <ul>
                  <li style={{ padding: '4px 0 4px 50px', position: 'relative', fontSize: '1rem' }}>
                    <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                    Current reading to understand the deeper concepts & importance of DDD.
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

export default Resources; 