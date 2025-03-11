import React from 'react';
import './Home.css';
import astronautImage from '../assets/images/astronaut.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Welcome to My Journey</h1>
      <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
      <p>
        This website documents my journey transitioning from a non-technical background to becoming a software engineer.
        I hope my experiences and resources can help others on their own path to tech.
      </p>
    </div>
  );
}

export default Home; 