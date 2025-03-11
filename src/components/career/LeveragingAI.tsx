import React from 'react';
import monsterImage from '../../assets/Monster_3-removebg-preview.png';
import '../GoogleDocViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCloud } from '@fortawesome/free-solid-svg-icons';

const LeveragingAI: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Artificial Intelligence</h2>
      <div style={{ textAlign: 'center', marginTop: '-15px', marginBottom: '15px' }}>
        <a 
          href="https://www.cursor.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            cursor: 'pointer',
            display: 'inline-block'
          }}
        >
          <FontAwesomeIcon 
            icon={faRobot} 
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
        </a>
        <p style={{
          color: '#ffffff',
          fontSize: '1.2rem',
          marginTop: '8px',
          marginBottom: '0',
          fontStyle: 'italic'
        }}>"Beep, Boop. Let me troubleshoot."</p>
      </div>
      <div className="content-section">
        {/* DEPRECATED: Alien buddy section - kept for potential future use
        <div className="alien-buddy-container">
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
        */}

        <div className="emphasis-box">
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

        <div className="tool-category" style={{ marginTop: '2rem' }}>
          <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>How I Leverage AI</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', position: 'relative', paddingLeft: '50px' }}>
              <span style={{ 
                position: 'absolute', 
                left: '15px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                fontSize: '20px', 
                opacity: '0.7' 
              }}>☁️</span>
              <span><strong>Learning:</strong> ChatGPT target problem areas for coding scenarios & interview prep.</span>
            </li>
            <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', position: 'relative', paddingLeft: '50px' }}>
              <span style={{ 
                position: 'absolute', 
                left: '15px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                fontSize: '20px', 
                opacity: '0.7' 
              }}>☁️</span>
              <span><strong>Work:</strong> I use AI to help me understand the codebase, learn design patterns, & auto code completion. It has transformed my efficiency & increased my learning tenfold.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', position: 'relative', paddingLeft: '50px' }}>
              <span style={{ 
                position: 'absolute', 
                left: '15px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                fontSize: '20px', 
                opacity: '0.7' 
              }}>☁️</span>
              <span><strong>Tools:</strong> I use Cursor for personal & Windsurf for work. I look forward to using Github Copilot once Project Padawan launches. Since they each use the same backend AI, they are competitive. However, I have found Windsurf to be my favorite, but appreciate aspects of Cursor as well. Cursor & Github Copilot are free to use.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeveragingAI; 