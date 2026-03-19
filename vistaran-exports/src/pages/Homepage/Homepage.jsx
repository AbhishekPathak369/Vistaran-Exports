import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaShip, 
  FaShieldAlt, 
  FaClock, 
  FaGlobe,
  FaAppleAlt,
  FaCarrot,
  FaSeedling,
  FaFish,
  FaArrowRight,
  FaBox,
  FaChartLine,
  FaHandshake,
  FaWarehouse
} from 'react-icons/fa';
import './Homepage.css';

const Homepage = () => {
  // Export Categories
  const categories = [
    { id: 1, name: 'Fresh Fruits', icon: <FaAppleAlt />, color: '#ff6b6b', count: '25+ varieties' },
    { id: 2, name: 'Premium Vegetables', icon: <FaCarrot />, color: '#4caf50', count: '30+ varieties' },
    { id: 3, name: 'Grains & Cereals', icon: <FaSeedling />, color: '#ff9800', count: '20+ grades' },
    { id: 4, name: 'Seafood', icon: <FaFish />, color: '#2196f3', count: '15+ types' },
  ];

  // Featured Export Products
  const featuredProducts = [
    { id: 1, name: 'Premium Basmati Rice', price: 850, unit: 'MT', image: '🌾', origin: 'India', grade: 'Grade A' },
    { id: 2, name: 'Fresh Mangoes (Alphonso)', price: 1200, unit: 'box', image: '🥭', origin: 'Maharashtra', minOrder: '100 boxes' },
    { id: 3, name: 'Organic Turmeric', price: 450, unit: 'kg', image: '🌿', origin: 'India', certification: 'USDA Organic' },
    { id: 4, name: 'Black Pepper', price: 650, unit: 'kg', image: '🫑', origin: 'Kerala', grade: 'ASTA' },
    { id: 5, name: 'Fresh Ginger', price: 180, unit: 'kg', image: '🧄', origin: 'India', quality: 'Export Quality' },
    { id: 6, name: 'Cotton Bales', price: 45000, unit: 'bale', image: '🧶', origin: 'Gujarat', type: 'Shankar-6' },
  ];

  // Trade Offers
  const offers = [
    { id: 1, title: 'Bulk Order Discount', description: '5% off on orders above ₹5,00,000', color: '#ff6b6b' },
    { id: 2, title: 'Free Shipping', description: 'On FCL containers to major ports', color: '#4caf50' },
    { id: 3, title: 'Sample Available', description: 'Product samples for quality check', color: '#ff9800' },
  ];

  // Export Destinations
  const destinations = [
    'UAE', 'USA', 'UK', 'Singapore', 'Malaysia', 'Bangladesh', 'Sri Lanka', 'Nepal'
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Premium Quality Indian Agri-Commodities for Global Markets</h1>
              <p>Leading exporter of fresh produce, grains, spices, and agricultural commodities. Direct sourcing from farms, quality assured, and timely delivery to ports worldwide.</p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Explore Products <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get a Quote
                </Link>
              </div>
              <div className="delivery-info">
                <span className="delivery-badge">
                  <FaShip /> FCL/LCL Shipping
                </span>
                <span className="delivery-badge">
                  <FaShieldAlt /> SGS Certified
                </span>
                <span className="delivery-badge">
                  <FaGlobe /> Global Delivery
                </span>
                
              </div>
            </div>
            <div className="hero-image">
              <div className="image-grid">
                <div className="grid-item">🌾</div>
                <div className="grid-item">🥭</div>
                <div className="grid-item">🌿</div>
                <div className="grid-item">🫑</div>
                <div className="grid-item">🧄</div>
                <div className="grid-item">🧶</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Statistics */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>25+</h3>
              <p>Countries Exported</p>
            </div>
            <div className="stat-card">
              <h3>100+</h3>
              <p>Products</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaShip />
              </div>
              <h3>Global Shipping</h3>
              <p>FCL/LCL containers to major international ports</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Quality Assurance</h3>
              <p>SGS, BV or other third-party inspection available</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHandshake />
              </div>
              <h3>Direct Sourcing</h3>
              <p>Farm-direct procurement, no middlemen</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaWarehouse />
              </div>
              <h3>Warehousing</h3>
              <p>Temperature-controlled storage facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Export Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Export Categories</h2>
            <Link to="/products" className="view-all">
              View All Products <FaArrowRight />
            </Link>
          </div>
          <div className="categories-grid">
            {categories.map(category => (
              <Link to={`/products?category=${category.name.toLowerCase()}`} key={category.id} className="category-card">
                <div className="category-icon" style={{ background: `${category.color}20` }}>
                  <span style={{ color: category.color }}>{category.icon}</span>
                </div>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Export Destinations */}
      <section className="destinations-section">
        <div className="container">
          <h2 className="section-title">We Export To</h2>
          <div className="destinations-grid">
            {destinations.map((country, index) => (
              <div key={index} className="destination-card">
                <FaGlobe className="destination-icon" />
                <span>{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Offers */}
      <section className="offers-section">
        <div className="container">
          <div className="section-header">
            <h2>Trade Benefits</h2>
            <Link to="/offers" className="view-all">
              View All Offers <FaArrowRight />
            </Link>
          </div>
          <div className="offers-grid">
            {offers.map(offer => (
              <div key={offer.id} className="offer-card" style={{ background: offer.color }}>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <Link to="/contact" className="offer-btn">Inquire Now →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Export Products */}
      <section className="products-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Export Products</h2>
            <Link to="/products" className="view-all">
              View All Products <FaArrowRight />
            </Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <span className="product-emoji">{product.image}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-origin">
                    <FaGlobe /> {product.origin}
                  </p>
                  <p className="product-grade">{product.grade || product.certification || product.quality || product.type}</p>
                  <p className="product-price">
                    <span className="current-price">₹{product.price}</span>
                    <span className="unit">/{product.unit}</span>
                  </p>
                  {product.minOrder && (
                    <p className="min-order">Min. Order: {product.minOrder}</p>
                  )}
                  <button className="inquiry-btn">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">Why Choose Vistaran Exports?</h2>
          <div className="why-us-grid">
            <div className="why-us-card">
              <FaBox className="why-us-icon" />
              <h3>Consistent Supply</h3>
              <p>Year-round availability of all products</p>
            </div>
            <div className="why-us-card">
              <FaChartLine className="why-us-icon" />
              <h3>Competitive Pricing</h3>
              <p>Best market rates with volume discounts</p>
            </div>
            <div className="why-us-card">
              <FaHandshake className="why-us-icon" />
              <h3>Flexible Payment</h3>
              <p>LC, TT, DA, DP payment terms available</p>
            </div>
            <div className="why-us-card">
              <FaClock className="why-us-icon" />
              <h3>Timely Delivery</h3>
              <p>Strict adherence to shipping schedules</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated with Market Prices</h2>
            <p>Subscribe to receive daily price updates and trade opportunities</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your business email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;