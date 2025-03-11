import React from 'react';
import '../GoogleDocViewer.css';

const JrEngineer: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Software Engineer</h2>
      <p style={{
        fontSize: '1.2rem',
        fontWeight: 600,
        color: '#9d6be7',
        textAlign: 'center',
        marginTop: '-25px',
        marginBottom: '35px'
      }}>My Path</p>
      <div className="content-section">
        <section className="tools-section">
          <div className="tool-category">
            <h4>JavaScript & TypeScript</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>My journey began with mastering JavaScript fundamentals, the backbone of modern web development. After learning JS, I moved on to a Typescript course by Manik at Udemy, to master Typescript syntax and enhance my development capabilities.</li>
            </ul>
          </div>

          <div className="arrow-down">↓</div>

          <div className="tool-category">
            <h4>NestJS Framework</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>Next, I began studying the NestJS documentation website, and began a new Udemy course by Manik to begin building a RESTful API using this in-dept framework.</li>
            </ul>
          </div>

          <div className="arrow-down">↓</div>

          <div className="tool-category">
            <h4>Data Structures & Algorithms</h4>
            <ul style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}>
              <li style={{ textAlign: 'center', paddingLeft: 0 }}>Data Structures and Algorithms (DSA) are crucial for backend engineers as they help optimize code for efficiency, ensuring systems perform well under varying loads. Additionally, DSA knowledge is essential for problem-solving, database optimization, and system design, enabling engineers to create robust and maintainable backend solutions.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default JrEngineer; 