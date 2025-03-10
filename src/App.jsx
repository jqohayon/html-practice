import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import Resources from './components/career/Resources';
import LeveragingAI from './components/career/LeveragingAI';
import CareerPaths from './components/career/CareerPaths';
import SQLPython from './components/career/SQLPython';
import Github from './components/career/Github';
import JrEngineer from './components/career/JrEngineer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jr-engineer" element={<JrEngineer />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/leveraging-ai" element={<LeveragingAI />} />
          <Route path="/career-paths" element={<CareerPaths />} />
          <Route path="/sql-python" element={<SQLPython />} />
          <Route path="/github" element={<Github />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
