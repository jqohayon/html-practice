import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Home from './components/Home';
import JrEngineer from './components/career/JrEngineer';
import Future from './components/career/Future';
import Resources from './components/career/Resources';
import Keyboards from './components/Keyboards';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jr-engineer" element={<JrEngineer />} />
            <Route path="/future" element={<Future />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/keyboards" element={<Keyboards />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 