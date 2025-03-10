import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import PersonalLife from './components/PersonalLife';
import ProfessionalLife from './components/ProfessionalLife';
import './index.css';

function App() {
  // Get the base path from Vite's environment variable
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="app">
      <Navigation />
      <main>
        <Routes>
          <Route path={basePath} element={<Home />} />
          <Route path={`${basePath}about`} element={<AboutPage />} />
          <Route path={`${basePath}personal`} element={<PersonalLife />} />
          <Route path={`${basePath}professional`} element={<ProfessionalLife />} />
          <Route path="/" element={<Navigate to={basePath} replace />} />
          <Route path="*" element={<Navigate to={basePath} replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
