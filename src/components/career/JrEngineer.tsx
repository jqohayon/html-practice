import React from 'react';
import '../GoogleDocViewer.css';

const JrEngineer: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Software Engineer</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>My Journey to Software Engineering</strong></p>
          <p>This page outlines my path to becoming a software engineer in my current role. While this is a high-level overview, 
             I'm happy to discuss deeper details and interview preparation strategies. The journey began with JS & TS fundamentals, 
             progressed through API development with NestJS, and included continuous DSA learning.</p>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4>JavaScript (JS)</h4>
            <ul></ul>
          </div>

          <div className="tool-category">
            <h4>TypeScript (TS)</h4>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <strong>Learning Journey</strong>
            </div>
            <ul>
              <li>
                <ul>
                  <li>Then I learned TS</li>
                  <li>TS is the superscript of JS</li>
                  <li>I took a class by Manik @ Udemy</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>NestJS Framework</h4>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <strong>Essential Resources</strong>
            </div>
            <ul>
              <li>
                <ul>
                  <li>Tech Vision: NestJS Brief Intro Video</li>
                  <li>Official NestJS Documentation</li>
                  <li>Manik's Course on Udemy (24.5 Hours)</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Data Structures & Algorithms (DSA)</h4>
            <ul>
              <li>W3 Schools - Comprehensive DSA coverage</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Building REST APIs</h4>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <strong>Enterprise Skills</strong>
            </div>
            <ul>
              <li>
                <ul>
                  <li>Build functional APIs</li>
                  <li>Connect APIs to databases</li>
                  <li>Implement proper API architecture</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default JrEngineer; 