import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaShoppingCart, 
  FaSearch, 
  FaBars, 
  FaTimes,
  FaLeaf,
  FaTruck,
  FaHeadset,
  FaInfoCircle,
  FaQuestionCircle,
  FaUser
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
    // You can add navigation to search results here
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar with Trust Badges */}
      <div className="top-trust-bar">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <FaLeaf className="trust-icon" />
              <span>100% Fresh Guarantee</span>
            </div>
            <div className="trust-item">
              <FaTruck className="trust-icon" />
              <span>Free Delivery over ₹499</span>
            </div>
            <div className="trust-item">
              <FaHeadset className="trust-icon" />
              <span>24/7 Customer Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="container">
          <div className="header-content">
            {/* Logo and company name with enhanced design */}
            <Link to="/" className="logo">
              <div className="logo-container">
                <div className="logo-icon-wrapper">
                  <FaLeaf className="logo-icon" />
                </div>
                <div className="logo-text-wrapper">
                  <span className="logo-text">Vistaran Exports</span>
                  <span className="logo-tagline">Fresh Grocery Delivery</span>
                </div>
              </div>
            </Link>

            {/* Enhanced Search bar */}
            <form className="search-bar" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search for fresh groceries, fruits, vegetables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-btn">
                <FaSearch />
              </button>
              {searchQuery && (
                <div className="search-suggestions">
                  {/* You can populate this with actual suggestions */}
                  <div className="suggestion-item">Fresh Fruits</div>
                  <div className="suggestion-item">Vegetables</div>
                  <div className="suggestion-item">Organic Products</div>
                </div>
              )}
            </form>

            {/* Right side actions with enhanced design */}
            <div className="header-actions">
              <Link to="/profile" className="action-icon" title="My Account">
                <FaUser />
              </Link>
              <Link to="/cart" className="cart-icon" title="Shopping Cart">
                <FaShoppingCart />
                <span className="cart-badge">0</span>
              </Link>
              
              {/* Mobile menu button */}
              <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation menu */}
      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="container">
          <ul className="nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/products' ? 'active' : ''}>
              <Link to="/products">All Products</Link>
            </li>
            <li className="dropdown">
              <Link to="/products?category=fruits">Fruits</Link>
              <div className="dropdown-menu">
                <Link to="/products?category=fruits&type=citrus">Citrus Fruits</Link>
                <Link to="/products?category=fruits&type=tropical">Tropical Fruits</Link>
                <Link to="/products?category=fruits&type=berries">Berries</Link>
              </div>
            </li>
            <li className="dropdown">
              <Link to="/products?category=vegetables">Vegetables</Link>
              <div className="dropdown-menu">
                <Link to="/products?category=vegetables&type=leafy">Leafy Greens</Link>
                <Link to="/products?category=vegetables&type=root">Root Vegetables</Link>
                <Link to="/products?category=vegetables&type=seasonal">Seasonal</Link>
              </div>
            </li>
            <li><Link to="/products?category=grains">Grains & Rice</Link></li>
            <li><Link to="/products?category=dairy">Dairy</Link></li>
            <li><Link to="/products?category=snacks">Snacks</Link></li>
            <li><Link to="/offers" className="offer-link">Offers</Link></li>
            
            {/* New Navigation Items */}
            <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
              <Link to="/about" className="nav-link">
                <FaInfoCircle className="nav-icon" />
                <span>About Us</span>
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === '/faq' ? 'active' : ''}`}>
              <Link to="/faq" className="nav-link">
                <FaQuestionCircle className="nav-icon" />
                <span>FAQ</span>
              </Link>
            </li>
          </ul>
          
          {/* Mobile-only action buttons */}
          <div className="mobile-actions">
            <Link to="/profile" className="mobile-action-btn">
              <FaUser /> My Account
            </Link>
            <Link to="/about" className="mobile-action-btn">
              <FaInfoCircle /> About Us
            </Link>
            <Link to="/faq" className="mobile-action-btn">
              <FaQuestionCircle /> FAQ
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile search bar with enhanced design */}
      <div className="mobile-search">
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;