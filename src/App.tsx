import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import OutfitAdvisor from './pages/OutfitAdvisor';
import Feedback from './pages/Feedback';
import ColorGuide from './pages/ColorGuide';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/outfit-advisor" element={<OutfitAdvisor />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/color-guide" element={<ColorGuide />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;