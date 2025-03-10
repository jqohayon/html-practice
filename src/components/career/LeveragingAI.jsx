import React from 'react';
import '../GoogleDocViewer.css';

function LeveragingAI() {
  return (
    <div className="doc-container">
      <h2>Artificial Intelligence</h2>
      <div className="content-section">
        <div className="emphasis-box">
          <p><strong>If you don't have an AI buddy in your IDE - GET ONE!</strong></p>
          <p>
            Leverage AI to automate repetitive tasks, perform automated testing, analyze code for potential issues, 
            predict project risks, & assist with project planning; enhancing developer productivity & overall 
            software quality by focusing on problem-solving instead of mundane coding chores.
          </p>
        </div>

        <h3>How to Leverage AI</h3>
        <div className="feature-list">
          <div className="feature-item">
            <h4>Code generation and autocompletion:</h4>
            <p>Suggest relevant code snippets & complete lines based on context</p>
          </div>

          <div className="feature-item">
            <h4>Code review and refactoring:</h4>
            <p>Analyze code for style inconsistencies, code smells, & improvements to optimize code</p>
          </div>

          <div className="feature-item">
            <h4>Automated testing:</h4>
            <p>Generate tests using AI algorithms to cover different scenarios, allowing for more comprehensive testing and early detection of bugs.</p>
          </div>

          <div className="feature-item">
            <h4>Requirement analysis:</h4>
            <p>Use natural language processing to extract key requirements from user stories or documents, aiding in better understanding of project needs.</p>
          </div>

          <div className="feature-item">
            <h4>Code documentation generation:</h4>
            <p>Automatically generate documentation & READ-ME files</p>
          </div>
        </div>

        <h3>How I Use AI</h3>
        <ul>
          <li><strong>Learning:</strong> ChatGPT target problem areas for coding scenarios & interview prep.</li>
          <li><strong>Work:</strong> I use AI to help me understand the codebase, learn design patterns, & auto code completion. 
              It has transformed my efficiency & increased my learning tenfold.</li>
          <li><strong>Tools:</strong> I use Cursor for personal & Windsurf for work. I look forward to using Github Copilot 
              once Project Padawan launches. Since they each use the same backend AI, they are competitive. However, 
              I have found Windsurf to be my favorite, but appreciate aspects of Cursor as well. Cursor & Github 
              Copilot are free to use.</li>
        </ul>

        <h3>Tools</h3>
        <div className="tools-section">
          <div className="tool-category">
            <h4>Search Chatbot:</h4>
            <ul>
              <li>ChatGPT</li>
              <li>Gemini</li>
              <li>Claude</li>
            </ul>
          </div>

          <div className="tool-category">
            <h4>Within IDE:</h4>
            <ul>
              <li>VSC & Github Copilot (free)</li>
              <li>Windsurf / AI Built-in ($$)</li>
              <li>Cursor / AI Built-in (free)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeveragingAI; 