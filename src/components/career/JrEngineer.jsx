import React from 'react';
import '../GoogleDocViewer.css';

function JrEngineer() {
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
            <ul>
              <li>
                <strong>Recommended Resources</strong>
                <ul>
                  <li>Max's Course on Udemy</li>
                  <li>W3 Schools
                    <ul>
                      <li>Online access</li>
                      <li>No downloads required</li>
                      <li>Completely free</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>TypeScript (TS)</h4>
            <ul>
              <li>
                <strong>Learning Resources</strong>
                <ul>
                  <li>TypeScript Playground
                    <p>Program, run, and compile directly in your browser</p>
                  </li>
                  <li>TypeScript Handbook
                    <p>Complete written documentation for self-paced learning</p>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Recommended Courses</strong>
                <ul>
                  <li>Manik on Udemy (37 Hours)</li>
                  <li>Max on Udemy (22.5 Hours)</li>
                  <li>W3 Schools - Free online resource</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>NestJS Framework</h4>
            <ul>
              <li>
                <strong>Essential Resources</strong>
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
              <li>
                <strong>Learning Platform</strong>
                <ul>
                  <li>W3 Schools - Comprehensive DSA coverage</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Building REST APIs</h4>
            <ul>
              <li>
                <strong>Key Skills</strong>
                <p>Focus on developing the ability to:</p>
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