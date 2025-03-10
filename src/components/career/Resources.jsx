import React from 'react';
import '../GoogleDocViewer.css';

function Resources() {
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

          <div className="tool-category">
            <h4>GitHub Mastery</h4>
            <ul>
              <li>Enterprise Branching Strategies
                <ul>
                  <li>Workflow fundamentals</li>
                  <li>Merge vs Rebase</li>
                  <li>Pull vs Fetch</li>
                </ul>
              </li>
              <li>Kevin Stratvert's GitHub Guides</li>
              <li>Building your coding activity</li>
              <li>Project showcase best practices</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Professional Tech Stack</h4>
            <ul>
              <li><strong>ORM:</strong> Sequelize / TypeORM</li>
              <li><strong>Logging:</strong> DataDog</li>
              <li><strong>Containerization:</strong>
                <ul>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Rancher</li>
                </ul>
              </li>
              <li><strong>Cloud Platform:</strong> AWS</li>
              <li><strong>API Testing:</strong> Postman</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>AI Development Tools</h4>
            <ul>
              <li>VSCode with GitHub Copilot</li>
              <li>Windsurf</li>
              <li>Cursor</li>
              <li><em>Check out the AI tab for detailed guides on leveraging these tools effectively!</em></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resources; 