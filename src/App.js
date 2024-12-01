import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MusicDistribution from './pages/MusicDistribution';
import StrategicLitigation from './pages/StrategicLitigation';
import Partners from './pages/Partners';
import News from './pages/News';
import Shop from './pages/Shop';
import './App.css'; // Main styles

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music-distribution" element={<MusicDistribution />} />
            <Route path="/strategic-litigation" element={<StrategicLitigation />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/news" element={<News />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
