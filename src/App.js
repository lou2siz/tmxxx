import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MusicDistribution from './pages/MusicDistribution';
import Partners from './pages/Partners';
import News from './pages/News';
import Shop from './pages/Shop';
import LitigationFinance from './pages/LitigationFinance';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music-distribution" element={<MusicDistribution />} />
            <Route path="/litigation-finance" element={<LitigationFinance />} />
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
