import React from 'react';
import '../GoogleDocViewer.css';

function SQLPython() {
  return (
    <div className="doc-container">
      <h2>SQL & Python</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>Overview</h4>
          <p><strong>SQL & Python are essential tools for data analysis and software development.</strong></p>
          <p>
            These languages form the foundation of data manipulation, analysis, and backend development. 
            Understanding both allows you to handle data effectively and create powerful applications.
          </p>
        </div>

        <div className="tool-category">
          <h4>Python for Data Analysis</h4>
          <ul>
            <li><strong>Key Libraries:</strong>
              <ul>
                <li>Pandas - Data manipulation and analysis</li>
                <li>NumPy - Numerical computing</li>
                <li>Matplotlib/Seaborn - Data visualization</li>
                <li>Scikit-learn - Machine learning</li>
              </ul>
            </li>
            <li><strong>Data Cleaning:</strong> Handling missing values, duplicates, outliers</li>
            <li><strong>Data Transformation:</strong> Reshaping, merging, aggregating</li>
            <li><strong>Statistical Analysis:</strong> Descriptive stats, hypothesis testing</li>
          </ul>
        </div>

        <div className="tool-category">
          <h4>SQL Resources</h4>
          <ul>
            <li>W3Schools SQL Tutorial</li>
            <li>SQLZoo Interactive Exercises</li>
            <li>Mode Analytics SQL Tutorial</li>
            <li>LeetCode SQL Problems</li>
          </ul>
        </div>

        <div className="tool-category">
          <h4>Python Resources</h4>
          <ul>
            <li>Codecademy Python Course</li>
            <li>Real Python Tutorials</li>
            <li>Python for Data Analysis Book</li>
            <li>DataCamp Python Track</li>
          </ul>
        </div>

        <div className="tool-category">
          <h4>Practice Projects</h4>
          <ul>
            <li>Build a data analysis pipeline</li>
            <li>Create automated reporting scripts</li>
            <li>Develop a database-driven application</li>
            <li>Contribute to open-source data projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SQLPython; 