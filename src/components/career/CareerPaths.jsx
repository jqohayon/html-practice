import React from 'react';
import '../GoogleDocViewer.css';

function CareerPaths() {
  return (
    <div className="doc-container">
      <h2>Career Paths</h2>
      <div className="content-section">
        <h3>Data Analysis</h3>
        <ul>
          <li>Data Analyst</li>
          <li>Business Intelligence Analyst</li>
          <li>Marketing Analyst</li>
          <li>Financial Analyst</li>
          <li>Healthcare Data Analyst</li>
        </ul>

        <h3>Data Science</h3>
        <ul>
          <li>Data Scientist</li>
          <li>Machine Learning Engineer</li>
          <li>AI Research Scientist</li>
          <li>Quantitative Analyst</li>
        </ul>

        <h3>Software Development</h3>
        <ul>
          <li>Full Stack Developer</li>
          <li>Frontend Developer</li>
          <li>Backend Developer</li>
          <li>Mobile App Developer</li>
          <li>DevOps Engineer</li>
        </ul>

        <h3>Required Skills</h3>
        <ul>
          <li>Programming (Python, SQL, JavaScript)</li>
          <li>Data Analysis and Visualization</li>
          <li>Statistical Analysis</li>
          <li>Machine Learning</li>
          <li>Problem-Solving</li>
          <li>Communication</li>
        </ul>

        <h3>Career Resources</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/jobs" target="_blank" rel="noopener noreferrer">
              LinkedIn Jobs
            </a>
          </li>
          <li>
            <a href="https://www.glassdoor.com" target="_blank" rel="noopener noreferrer">
              Glassdoor
            </a>
          </li>
          <li>
            <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer">
              Indeed
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CareerPaths; 