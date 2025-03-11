import React from 'react';
import monsterImage from '../../assets/Monster_3-removebg-preview.png';
import '../GoogleDocViewer.css';

const LeveragingAI: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Artificial Intelligence</h2>
      <div className="content-section">
        <div className="alien-buddy-container">
          <a 
            href="https://www.cursor.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              cursor: 'pointer',
              display: 'block',
              position: 'relative',
              zIndex: 1
            }}
          >
            <img 
              src={monsterImage} 
              alt="alien buddy" 
              style={{ 
                width: '220px',
                height: 'auto',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 8px 20px rgba(147, 112, 219, 0.4))'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                e.currentTarget.style.filter = 'drop-shadow(0 15px 30px rgba(147, 112, 219, 0.6))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.filter = 'drop-shadow(0 8px 20px rgba(147, 112, 219, 0.4))';
              }}
            />
          </a>
          <img 
            src={monsterImage} 
            alt="" 
            aria-hidden="true"
            style={{ 
              width: '220px',
              height: '70px',
              transform: 'scaleY(-1)',
              opacity: '0.2',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 90%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent 90%)',
              marginTop: '-15px',
              filter: 'blur(1px)'
            }}
          />
          <p style={{
            position: 'absolute',
            bottom: '70px',
            margin: 0,
            whiteSpace: 'nowrap',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: '#ffffff'
          }}>If you don't have an AI buddy in your IDE - <span style={{ 
            color: '#9d6be7', 
            fontWeight: 900, 
            fontSize: '1.2em', 
            fontStyle: 'italic'
          }}>GET ONE!</span></p>
        </div>

        <div className="emphasis-box">
          <p>Meet my AI companion – not just a tool, but a partner in coding adventures. 
          Together, we've transformed complex challenges into exciting opportunities, 
          making every line of code a step towards innovation.</p>
        </div>

        <div className="tool-category">
          <p style={{ 
            margin: 0,
            fontSize: '1.15rem',
            lineHeight: '1.6',
            letterSpacing: '0.01em'
          }}>
            Leverage AI to automate repetitive tasks, perform automated testing, analyze code for potential issues, 
            predict project risks, & assist with project planning; enhancing developer productivity & overall 
            software quality by focusing on problem-solving instead of mundane coding chores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeveragingAI; 