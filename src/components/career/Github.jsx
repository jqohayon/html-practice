import React from 'react';
import '../GoogleDocViewer.css';

function Github() {
  return (
    <div className="doc-container">
      <h2>GitHub</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>Start Using GitHub Early in Your Journey!</strong></p>
          <p>Even if the initial setup feels challenging, it's crucial to begin using GitHub as soon as possible. 
             Understanding the difference between Git and GitHub is your first step to success.</p>
        </div>

        <section className="tools-section">
          <div className="tool-category">
            <h4>Core Concepts</h4>
            <ul>
              <li>
                <strong>GitHub</strong>
                <p>Cloud-based platform that hosts Git repositories, enabling:</p>
                <ul>
                  <li>Team collaboration</li>
                  <li>Code review processes</li>
                  <li>Project sharing</li>
                  <li>Pull Requests (PRs)</li>
                  <li>CI/CD automation</li>
                </ul>
              </li>
              <li>
                <strong>Git</strong>
                <p>Local version control system that:</p>
                <ul>
                  <li>Tracks code changes</li>
                  <li>Enables version reversion</li>
                  <li>Supports branching and merging</li>
                  <li>Works offline</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>GitHub Features</h4>
            <ul>
              <li>
                <strong>Repositories (Repos)</strong>
                <p>Storage spaces for:</p>
                <ul>
                  <li>Code</li>
                  <li>Documentation</li>
                  <li>Project files</li>
                </ul>
              </li>
              <li>
                <strong>Version Control</strong>
                <ul>
                  <li>Change tracking</li>
                  <li>Version rollback capabilities</li>
                </ul>
              </li>
              <li>
                <strong>Collaboration Tools</strong>
                <ul>
                  <li>Pull Requests</li>
                  <li>Code reviews</li>
                  <li>Issue tracking</li>
                </ul>
              </li>
              <li>
                <strong>CI/CD</strong>
                <ul>
                  <li>Automated testing</li>
                  <li>Deployment with GitHub Actions</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Git Features</h4>
            <ul>
              <li>
                <strong>Distributed Architecture</strong>
                <p>Each developer maintains:</p>
                <ul>
                  <li>Local repository copy</li>
                  <li>Independent working capability</li>
                </ul>
              </li>
              <li>
                <strong>Core Operations</strong>
                <ul>
                  <li>Branching: Independent development lines</li>
                  <li>Merging: Combining changes from different sources</li>
                  <li>Committing: Creating project snapshots</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Getting Started</h4>
            <ul>
              <li>
                <strong>Initial Setup</strong>
                <ul>
                  <li>Create GitHub account</li>
                  <li>Install IDE extensions</li>
                </ul>
              </li>
              <li>
                <strong>Project Initialization</strong>
                <ul>
                  <li>Create folder for personal projects</li>
                  <li>Clone repositories for enterprise work</li>
                  <li>Publish branches</li>
                </ul>
              </li>
              <li>
                <strong>Best Practices</strong>
                <ul>
                  <li>Regular commits</li>
                  <li>Utilize source control features</li>
                  <li>Follow enterprise workflows</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Additional Resources</h4>
            <ul>
              <li>
                <strong>AI Tools</strong>
                <ul>
                  <li>GitHub Copilot</li>
                  <li>Project Padawan</li>
                </ul>
              </li>
              <li>
                <strong>Learning Resources</strong>
                <ul>
                  <li>GitHub Community Blog</li>
                  <li>GitHub Newsletter</li>
                  <li>Comprehensive Git & GitHub Tutorial (1 Hour)</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Github; 