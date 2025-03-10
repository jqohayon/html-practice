import React from 'react';
import '../GoogleDocViewer.css';

function Github() {
  return (
    <div className="doc-container">
      <h2>Github</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>Github is essential for version control and collaboration in software development.</strong></p>
          <p>
            Master Github to manage your code, collaborate with others, and showcase your projects to potential employers.
            A strong Github profile can be your best portfolio.
          </p>
        </div>

        <h3>Essential Git Commands</h3>
        <ul>
          <li><strong>Basic Commands:</strong>
            <ul>
              <li>git clone - Copy a repository</li>
              <li>git add - Stage changes</li>
              <li>git commit - Save changes</li>
              <li>git push - Upload changes</li>
              <li>git pull - Download updates</li>
            </ul>
          </li>
          <li><strong>Branching:</strong>
            <ul>
              <li>git branch - Create/list branches</li>
              <li>git checkout - Switch branches</li>
              <li>git merge - Combine branches</li>
            </ul>
          </li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Write clear commit messages</li>
          <li>Create meaningful README files</li>
          <li>Use .gitignore properly</li>
          <li>Branch for new features</li>
          <li>Review code before merging</li>
        </ul>

        <h3>Building Your Profile</h3>
        <div className="tools-section">
          <div className="tool-category">
            <h4>Profile Must-Haves:</h4>
            <ul>
              <li>Professional README</li>
              <li>Pinned repositories</li>
              <li>Regular contributions</li>
              <li>Project documentation</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Project Ideas:</h4>
            <ul>
              <li>Personal website</li>
              <li>Data analysis projects</li>
              <li>Web applications</li>
              <li>Open source contributions</li>
            </ul>
          </div>
        </div>

        <h3>Learning Resources</h3>
        <ul>
          <li>Github Learning Lab</li>
          <li>Git Documentation</li>
          <li>Github Guides</li>
          <li>Interactive Git tutorials</li>
        </ul>
      </div>
    </div>
  );
}

export default Github; 