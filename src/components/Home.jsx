import React from 'react';
import astronautImage from '../assets/images/astronaut.jpg';

function Home() {
  return (
    <div className="doc-container">
      <h2>Jacqueline Ohayon</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Welcome!</h4>
          <p>
            Welcome to my digital space! I'm excited to share my journey with you.
          </p>
          <img 
            src={astronautImage} 
            alt="Astronaut floating in space" 
            style={{ 
              display: 'block', 
              margin: '20px auto',
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
            }} 
          />
        </div>

        <div className="tool-category about-me-section">
          <h4>About Me</h4>
          <ul>
            <li>I'm currently a Backend Software Engineer</li>
            <li>I am working to gain fullstack experience</li>
            <li>I hope you enjoy my page!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home; 