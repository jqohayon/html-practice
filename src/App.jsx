import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import PersonalLife from './components/PersonalLife';
import ProfessionalLife from './components/ProfessionalLife';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/personal" element={<PersonalLife />} />
          <Route path="/professional" element={<ProfessionalLife />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
