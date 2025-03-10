import React from 'react';
import '../GoogleDocViewer.css';

function SQLPython() {
  return (
    <div className="doc-container">
      <h2>SQL & Python</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>SQL & Python are essential tools for data analysis and software development.</strong></p>
          <p>
            These languages form the foundation of data manipulation, analysis, and backend development. 
            Understanding both allows you to handle data effectively and create powerful applications.
          </p>
        </div>

        <h3>SQL Fundamentals</h3>
        <ul>
          <li><strong>Basic Queries:</strong> SELECT, FROM, WHERE, GROUP BY, ORDER BY</li>
          <li><strong>Joins:</strong> INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN</li>
          <li><strong>Aggregations:</strong> COUNT, SUM, AVG, MIN, MAX</li>
          <li><strong>Subqueries:</strong> Nested queries, correlated subqueries</li>
          <li><strong>Data Manipulation:</strong> INSERT, UPDATE, DELETE</li>
        </ul>

        <h3>Python for Data Analysis</h3>
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

        <h3>Learning Resources</h3>
        <div className="tools-section">
          <div className="tool-category">
            <h4>SQL Resources:</h4>
            <ul>
              <li>W3Schools SQL Tutorial</li>
              <li>SQLZoo Interactive Exercises</li>
              <li>Mode Analytics SQL Tutorial</li>
              <li>LeetCode SQL Problems</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Python Resources:</h4>
            <ul>
              <li>Codecademy Python Course</li>
              <li>Real Python Tutorials</li>
              <li>Python for Data Analysis Book</li>
              <li>DataCamp Python Track</li>
            </ul>
          </div>
        </div>

        <h3>Practice Projects</h3>
        <ul>
          <li>Build a data analysis pipeline</li>
          <li>Create automated reporting scripts</li>
          <li>Develop a database-driven application</li>
          <li>Contribute to open-source data projects</li>
        </ul>
      </div>
    </div>
  );
}

export default SQLPython; 