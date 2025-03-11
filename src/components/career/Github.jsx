import React from 'react';
import '../GoogleDocViewer.css';

function Github() {
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
            <h4>GitHub Features</h4>
            <ul>
              <li><strong>Repositories/repos:</strong> Storage spaces for code, documentation, and project files.</li>
              <li><strong>Version Control:</strong> Tracks changes and allows rollback to previous versions.</li>
              <li><strong>Collaboration:</strong> Multiple devs can work on the same project using PRs & reviews.</li>
              <li><strong>Issue Tracking:</strong> Manages bugs, tasks, and feature requests.</li>
              <li><strong>CI/CD:</strong> Automates testing and deployment with GitHub Actions.</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Git Features</h4>
            <ul>
              <li><strong>Distributed architecture:</strong> Each dev has a local copy of the repo; working independently</li>
              <li><strong>Branching:</strong> Branches represent independent lines of development.</li>
              <li><strong>Merging:</strong> Changes from a remote repository can be merged into a working branch.</li>
              <li><strong>Committing:</strong> Snapshots of project history & staged files are marked committed.</li>
              <li><strong>Terminal Command Codes:</strong> Cheat Sheet</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Additional Resources</h4>
            <ul>
              <li><strong>AI:</strong> Copilot & Project Padawan</li>
              <li><strong>Community:</strong> Blog & Newsletter</li>
              <li><strong>In-Depth Tutorial:</strong> Git & GitHub (1 Hour)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Github; 