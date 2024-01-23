import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import UseCase from './pages/UseCase/UseCase';
import Discover from './pages/Discover/Discover';
import FAQ from './pages/FAQ/FAQ';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/usecase" element={<UseCase />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/faqs" element={<FAQ />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
