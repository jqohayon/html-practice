import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import ReferencesSection from './ReferencesSection';

function Home() {
  return (
    <div className="home">
      <Header />
      <AboutSection />
      <ReferencesSection />
    </div>
  );
}

export default Home; 