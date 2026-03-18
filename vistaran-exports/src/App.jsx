import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';  // Changed from 'src/components/Header/Header'
import Footer from './components/Footer/Footer';  // Changed from 'src/components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage';  // Changed from 'src/pages/Homepage/Homepage'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<div className="construction">Products Page Coming Soon</div>} />
          <Route path="/cart" element={<div className="construction">Cart Page Coming Soon</div>} />
          <Route path="/login" element={<div className="construction">Login Page Coming Soon</div>} />
          <Route path="/signup" element={<div className="construction">Signup Page Coming Soon</div>} />
          <Route path="/offers" element={<div className="construction">Offers Page Coming Soon</div>} />
          <Route path="/about" element={<div className="construction">About Us Page Coming Soon</div>} />
          <Route path="/contact" element={<div className="construction">Contact Page Coming Soon</div>} />
          <Route path="/faq" element={<div className="construction">FAQ Page Coming Soon</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;