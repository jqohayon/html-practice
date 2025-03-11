import React from 'react';
import monsterImage from '../../assets/Monster_3-removebg-preview.png';
import '../GoogleDocViewer.css';

const LeveragingAI: React.FC = () => {
  return (
    <div className="doc-container">
      <h2 style={{
        fontSize: '2.2rem',
        marginBottom: '1.5rem',
        background: 'linear-gradient(135deg, #9d6be7 0%, #6a1b9a 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center'
      }}>Artificial Intelligence</h2>

      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#2d2a41',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 2.5rem',
        fontWeight: 500
      }}>
        Meet my AI companion – not just a tool, but a partner in coding adventures. 
        Together, we've transformed complex challenges into exciting opportunities, 
        making every line of code a step towards innovation.
      </p>
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '2.5rem',
        position: 'relative'
      }}>
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
            alt="Purple monster with alarm clock" 
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
          bottom: '140px',
          margin: 0,
          whiteSpace: 'nowrap',
          fontSize: '1.1rem',
          fontWeight: 500,
          color: '#2d2a41',
          textShadow: '0 1px 2px rgba(255, 255, 255, 0.1)'
        }}>If you don't have an AI buddy in your IDE - <span style={{ 
          color: '#6a1b9a', 
          fontWeight: 900, 
          fontSize: '1.2em', 
          fontStyle: 'italic',
          textShadow: '0 2px 4px rgba(147, 112, 219, 0.2)'
        }}>GET ONE!</span></p>
      </div>

      <div style={{
        background: `linear-gradient(135deg, 
          rgba(45, 42, 65, 0.7) 0%,
          rgba(55, 52, 75, 0.7) 50%,
          rgba(45, 42, 65, 0.7) 100%
        )`,
        padding: '2rem',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 0 30px rgba(147, 112, 219, 0.1)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        margin: '0.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(147, 112, 219, 0.1)'
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
              transparent 12px
            ),
            radial-gradient(circle at 30% 70%, 
              rgba(147, 112, 219, 0.08) 0%, 
              transparent 60%
            )
          `,
          pointerEvents: 'none'
        }} />
        <p style={{ 
          color: '#9d6be7', 
          margin: 0,
          position: 'relative',
          fontSize: '1.15rem',
          lineHeight: '1.6',
          letterSpacing: '0.01em',
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