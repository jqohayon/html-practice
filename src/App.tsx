import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import Resources from './components/career/Resources';
import LeveragingAI from './components/career/LeveragingAI';
import Github from './components/career/Github';
import JrEngineer from './components/career/JrEngineer';
import Future from './components/career/Future';
import Feedback from './components/Feedback';
import Keyboards from './components/Keyboards';
import SocialLinks from './components/SocialLinks';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>
      <div className="cloud cloud-5"></div>
      <div className="cloud cloud-6"></div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jr-engineer" element={<JrEngineer />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/leveraging-ai" element={<LeveragingAI />} />
          <Route path="/github" element={<Github />} />
          <Route path="/future" element={<Future />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SocialLinks />
    </div>
  );
}

export default App; 