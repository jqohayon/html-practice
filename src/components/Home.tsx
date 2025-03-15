import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import astronautImage from '../assets/images/astronaut.jpg';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <h1>Welcome</h1>
        <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
        <p>
          This website briefly documents my journey transitioning from a non-technical background to becoming a software engineer. My hope is to create a full stack project, hence the name 'JacqStack' in the favicon. I hope you enjoy your stay, thank you for visiting today.
        </p>
        
        <div className="home-buttons">
          <button 
            onClick={() => navigate('/jr-engineer')}
            className="home-button primary-button"
            style={{
              padding: '8px 20px',
              fontSize: '0.95rem',
              background: 'linear-gradient(135deg, rgba(157, 107, 231, 0.6) 0%, rgba(106, 27, 154, 0.6) 100%)',
              color: '#f0d9ff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 2px 8px rgba(157, 107, 231, 0.2)',
              marginTop: '15px',
              marginRight: '15px',
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.3px',
              fontWeight: '500',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(157, 107, 231, 0.25)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(106, 27, 154, 0.6) 0%, rgba(157, 107, 231, 0.6) 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(157, 107, 231, 0.2)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(157, 107, 231, 0.6) 0%, rgba(106, 27, 154, 0.6) 100%)';
            }}
          >
            My Journey
          </button>
          
          <button 
            onClick={() => navigate('/feedback')}
            style={{
              padding: '8px 20px',
              fontSize: '0.95rem',
              background: 'linear-gradient(135deg, rgba(157, 107, 231, 0.4) 0%, rgba(106, 27, 154, 0.4) 100%)',
              color: '#d4b6ff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 2px 8px rgba(157, 107, 231, 0.1)',
              marginTop: '15px',
              fontFamily: "'Poppins', sans-serif",
              letterSpacing: '0.3px',
              fontWeight: '400',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(157, 107, 231, 0.15)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(106, 27, 154, 0.4) 0%, rgba(157, 107, 231, 0.4) 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(157, 107, 231, 0.1)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(157, 107, 231, 0.4) 0%, rgba(106, 27, 154, 0.4) 100%)';
            }}
          >
            Feedback
          </button>
        </div>
      </div>
    </>
  );
}

export default Home; 