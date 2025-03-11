import React from 'react';
import '../GoogleDocViewer.css';

const JrEngineer: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Software Engineer</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p>This page outlines my path to becoming a software engineer in my current role. The journey began with JS & TS fundamentals, 
             progressed through API development with NestJS, and included continuous DSA learning.</p>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4>JavaScript (JS)</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>My journey began with mastering JavaScript fundamentals, the backbone of modern web development.</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>TypeScript (TS)</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>After learning the fundamentals of JS, I moved on to a Typescript course by Manik at Udemy, to master Typescript syntax.</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>NestJS Framework</h4>
            <ul>
              <li style={{ padding: '4px 0 4px 50px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                Official NestJS Documentation
              </li>
              <li style={{ padding: '4px 0 4px 50px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                Manik's Course on Udemy
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Data Structures & Algorithms</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>Data Structures and Algorithms (DSA) are crucial for backend engineers as they help optimize code for efficiency, ensuring systems perform well under varying loads. Additionally, DSA knowledge is essential for problem-solving, database optimization, and system design, enabling engineers to create robust and maintainable backend solutions.</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Building REST APIs</h4>
            <ul>
              <li style={{ padding: '4px 0 4px 50px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                Build functional APIs
              </li>
              <li style={{ padding: '4px 0 4px 50px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                Connect APIs to databases
              </li>
              <li style={{ padding: '4px 0 4px 50px', position: 'relative' }}>
                <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: '0.7' }}>☁️</span>
                Implement proper API architecture
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default JrEngineer; 