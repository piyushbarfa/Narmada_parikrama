import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ParikramaGuide from './pages/ParikramaGuide';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parikrama-guide" element={<ParikramaGuide />} />
      </Routes>
    </>
  );
}

export default App;
