import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaUtensils,
} from "react-icons/fa";

import "../styles/Footer.css";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-brand-section">
          <Link to="/" className="site-footer-brand">
            <span className="site-footer-brand-icon">
              <FaUtensils aria-hidden="true" />
            </span>
            <span>
              The Taste <span className="site-footer-brand-highlight">Lab.</span>
            </span>
          </Link>

          <p>
            Fresh ingredients. Bold flavors.
            <br />
            Unforgettable moments.
          </p>

          <div className="site-footer-socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="site-footer-links" aria-label="Explore">
          <h2>Explore</h2>
          <Link to="/">Home</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/reservation">Reservations</Link>
        </nav>

        <div className="site-footer-contact">
          <h2>Get in Touch</h2>
          <p>
            <FaMapMarkerAlt aria-hidden="true" />
            <span>Visit us for a delicious experience.</span>
          </p>
          <p>
            <FaPhoneAlt aria-hidden="true" />
            <a href="mailto:reservations@the-tastelab.com">
              Contact our team
            </a>
          </p>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {CURRENT_YEAR} The Taste Lab. All rights reserved.</p>
        <p>Made with care and a whole lot of flavor.</p>
      </div>
    </footer>
  );
}

export default Footer;