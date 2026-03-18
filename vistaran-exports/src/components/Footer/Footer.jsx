import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <h3 className="footer-title">Vistaran Exports</h3>
              <p className="company-description">
                Your trusted partner for fresh groceries and quality products. 
                Delivering happiness to your doorstep since 2020.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">All Products</Link></li>
                <li><Link to="/offers">Today's Offers</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-section">
              <h3 className="footer-title">Categories</h3>
              <ul className="footer-links">
                <li><Link to="/products?category=fruits">Fresh Fruits</Link></li>
                <li><Link to="/products?category=vegetables">Fresh Vegetables</Link></li>
                <li><Link to="/products?category=dairy">Dairy Products</Link></li>
                <li><Link to="/products?category=grains">Grains & Rice</Link></li>
                <li><Link to="/products?category=snacks">Snacks & Beverages</Link></li>
                <li><Link to="/products?category=organic">Organic Products</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>123, Market Street, New Delhi - 110001</span>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <span>support@vistaranexports.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="payment-section">
            <h3 className="footer-title">We Accept</h3>
            <div className="payment-methods">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcPaypal />
              <FaCcAmex />
              <span className="payment-text">UPI</span>
              <span className="payment-text">COD</span>
            </div>
          </div>

          {/* Download App Section */}
          <div className="app-section">
            <h3 className="footer-title">Download Our App</h3>
            <div className="app-buttons">
              <a href="#" className="app-button">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play"
                />
              </a>
              <a href="#" className="app-button">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store"
                />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="copyright">
            <p>&copy; {currentYear} Vistaran Exports. All rights reserved.</p>
            <div className="legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/shipping">Shipping Policy</Link>
              <Link to="/returns">Returns & Refunds</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;