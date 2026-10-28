import { Link } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaStar } from "react-icons/fa";

import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background-glow"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <FaStar />
          <span>WELCOME TO THE TASTE LAB</span>
        </div>

        <h1>
          Crafted to <span>Crave.</span>
        </h1>

        <h2>
          Fresh ingredients. Bold flavors. A dining experience you'll want
          again and again.
        </h2>

        <p className="hero-description">
          At The Taste Lab Restaurant, we craft delicious meals using fresh
          ingredients and traditional recipes. From perfectly baked breads
          to mouth-watering specialties, every dish is prepared to deliver a
          rich and unforgettable taste. Whether you're here for a quick bite
          or a full dining experience, our kitchen is dedicated to quality,
          flavor, and satisfaction.
        </p>

        <div className="hero-buttons">
          <a href="#reservation" className="btn btn-primary">
            <FaCalendarAlt />
            Reserve a Table
          </a>

          <a href="#menu" className="btn btn-secondary">
            Explore Menu
            <FaArrowRight />
          </a>
        </div>

        <div className="hero-features">
          <div className="hero-feature">
            <span className="feature-number"></span>
            <span className="feature-label">Fresh Ingredients</span>
          </div>

          <div className="feature-divider"></div>

          <div className="hero-feature">
            <span className="feature-number"></span>
            <span className="feature-label">Special Dishes</span>
          </div>

          <div className="feature-divider"></div>

          <div className="hero-feature">
            <span className="feature-number"></span>
            <span className="feature-label">Taste Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-glow"></div>

        <div className="hero-image-border">
          <div className="hero-image-inner">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85"
              alt="Freshly prepared pizza served on a plate"
              className="hero-food-image"
            />
          </div>
        </div>

        <div className="floating-card floating-card-top">
          <span className="floating-icon">✦</span>
          <div>
            <strong>Fresh & Delicious</strong>
            <small>Made with love</small>
          </div>
        </div>

        <div className="floating-card floating-card-bottom">
          <span className="rating-star">★</span>
          <div>
            <strong>Chef's Special</strong>
            <small>Prepared fresh daily</small>
          </div>
        </div>

        <div className="image-decoration decoration-one"></div>
        <div className="image-decoration decoration-two"></div>
      </div>
    </section>
  );
}

export default Hero;