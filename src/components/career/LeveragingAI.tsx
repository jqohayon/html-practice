import React from 'react';
import monsterImage from '../../assets/Monster_3-removebg-preview.png';
import '../GoogleDocViewer.css';

const LeveragingAI: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Artificial Intelligence</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1rem',
        position: 'relative'
      }}>
        <a 
          href="https://www.cursor.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            cursor: 'pointer',
            display: 'block'
          }}
        >
          <img 
            src={monsterImage} 
            alt="Purple monster with alarm clock" 
            style={{ 
              width: '200px', 
              height: 'auto',
              borderRadius: '12px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              filter: 'drop-shadow(0 8px 20px rgba(147, 112, 219, 0.4))'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.filter = 'drop-shadow(0 12px 25px rgba(147, 112, 219, 0.6))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.filter = 'drop-shadow(0 8px 20px rgba(147, 112, 219, 0.4))';
            }}
          />
        </a>
        <img 
          src={monsterImage} 
          alt="" 
          aria-hidden="true"
          style={{ 
            width: '200px', 
            height: '140px',
            transform: 'scaleY(-1)',
            opacity: '0.4',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent 90%)',
            marginTop: '-30px',
            filter: 'blur(1px)'
          }}
        />
        <p style={{
          position: 'absolute',
          bottom: '130px',
          margin: 0,
          whiteSpace: 'nowrap'
        }}>If you don't have an AI buddy in your IDE - <span style={{ color: '#6a1b9a', fontWeight: 900, fontSize: '1.2em', fontStyle: 'italic' }}>GET ONE!</span></p>
      </div>
      <div style={{
        background: `linear-gradient(135deg, 
          rgba(45, 42, 65, 0.6) 0%,
          rgba(55, 52, 75, 0.6) 50%,
          rgba(45, 42, 65, 0.6) 100%
        )`,
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 0 30px rgba(147, 112, 219, 0.1)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        margin: '0.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            repeating-linear-gradient(45deg,
              rgba(255, 255, 255, 0.03) 0px,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px,
              transparent 8px
            ),
            radial-gradient(circle at 30% 70%, 
              rgba(147, 112, 219, 0.08) 0%, 
              transparent 50%
            )
          `,
          pointerEvents: 'none'
        }} />
        <p style={{ 
          color: '#9d6be7', 
          margin: 0,
          position: 'relative',
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
        }}>
          Leverage AI to automate repetitive tasks, perform automated testing, analyze code for potential issues, 
          predict project risks, & assist with project planning; enhancing developer productivity & overall 
          software quality by focusing on problem-solving instead of mundane coding chores.
        </p>
      </div>
    </div>
  );
}

export default LeveragingAI; 