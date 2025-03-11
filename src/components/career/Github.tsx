import React from 'react';
import '../GoogleDocViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const Github: React.FC = () => {
  return (
    <div className="doc-container">
      <h2>GitHub</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <h4>What's the Difference?</h4>
          <ul>
            <li><strong>GitHub:</strong> Cloud-based platform that hosts Git repos; allows teams to collaborate, review code, & share projects; it provides extra features like PRs & CI/CD automation, Git alone does not have.</li>
            <li><strong>Git:</strong> Version control system that runs on your local; tracks changes in your code & allows you to revert, branch, & merge different versions of a project. Git works without an internet connection.</li>
          </ul>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4>My Use Cases</h4>
            <div style={{ color: '#9d6be7', fontSize: '1.1em', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <span>Branch</span>
              <span>Merge</span>
              <span>Commit</span>
              <span>Rebase</span>
            </div>
            <p style={{ marginTop: '1rem', textAlign: 'center', maxWidth: '800px', margin: '1rem auto 0' }}>
              I use Git & GitHub in both my current role & personal projects. What started as mild frustration has quickly become an easy way to take a look at version control, collaborate with colleagues, & manage projects, all in the packages of Git & GitHub.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Github; 