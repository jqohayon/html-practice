import React from 'react';
import '../GoogleDocViewer.css';

function Resources() {
  return (
    <div className="doc-container">
      <h2>Resources</h2>
      <div className="content-section">
        <h3>Learning Platforms</h3>
        <ul>
          <li>
            <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">
              Coursera
            </a>
            - Offers courses from top universities and companies
          </li>
          <li>
            <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer">
              Udemy
            </a>
            - Wide range of practical courses
          </li>
          <li>
            <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">
              edX
            </a>
            - University-level courses
          </li>
        </ul>

        <h3>Technical Resources</h3>
        <ul>
          <li>
            <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
              W3Schools
            </a>
            - Web development tutorials
          </li>
          <li>
            <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">
              MDN Web Docs
            </a>
            - Comprehensive web development documentation
          </li>
          <li>
            <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
              Stack Overflow
            </a>
            - Community-driven Q&A for developers
          </li>
        </ul>

        <h3>Practice Platforms</h3>
        <ul>
          <li>
            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
              LeetCode
            </a>
            - Coding practice and interview preparation
          </li>
          <li>
            <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
              HackerRank
            </a>
            - Programming challenges and competitions
          </li>
          <li>
            <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer">
              Codecademy
            </a>
            - Interactive coding lessons
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Resources; 