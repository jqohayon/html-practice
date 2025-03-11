import React from 'react';
import './Home.css';
import astronautImage from '../assets/images/astronaut.jpg';

const Home: React.FC = () => {
  return (
    <>
      <div className="home">
        <h1>Welcome</h1>
        <img src={astronautImage} alt="Astronaut" className="astronaut-image" />
        <p>
          This website briefly documents my journey transitioning from a non-technical background to becoming a software engineer. My hope is to create a full stack project, hence the name 'JacqStack' in the favicon. I hope you enjoy your stay, thank you for visiting today.
        </p>
      </div>
    </>
  );
}

export default Home; 