import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<div>Products Page Coming Soon</div>} />
          <Route path="/about" element={<div>About Us Page Coming Soon</div>} />
          <Route path="/contact" element={<div>Contact Us Page Coming Soon</div>} />
          <Route path="/products/rice" element={<div>Rice Products</div>} />
          <Route path="/products/spice" element={<div>Spice Products</div>} />
          <Route path="/products/pulses" element={<div>Pulses Products</div>} />
          <Route path="/products/garments" element={<div>Garments Products</div>} />
          <Route path="/products/spare-part" element={<div>Spare Parts</div>} />
          <Route path="/products/industrial-chemicals" element={<div>Industrial Chemicals</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;