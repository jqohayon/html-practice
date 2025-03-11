import React from 'react';
import '../GoogleDocViewer.css';

const Resources: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>Additional Resources</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>Welcome to my curated collection of resources!</strong></p>
          <p>These are tools and materials that I actively use and would love to discuss and collaborate on.</p>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4>Essential Reading Materials</h4>
            <ul>
              <li>
                <strong>Modern Software Engineering</strong> by David Farley
                <p>A foundational text covering golden standards, mindset development, and practical approaches. Highly digestible and impactful.</p>
              </li>
              <li>
                <strong>Martin Fowler's Works</strong>
                <ul>
                  <li>Refactoring</li>
                  <li>The Practical Test Pyramid</li>
                </ul>
              </li>
              <li>
                <strong>Robert Martin's Series</strong>
                <ul>
                  <li>The Clean Coder</li>
                  <li>Clean Code</li>
                </ul>
              </li>
              <li><strong>Learning Domain-Driven Design</strong> by Vlad Knononov</li>
              <li><strong>Design Patterns Catalogue</strong></li>
              <li><strong>Recommended Course:</strong> Manik on Udemy</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resources; 