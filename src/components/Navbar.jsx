import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUtensils,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <FaUtensils className="logo-icon" />
        <span>The Taste Lab</span>
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {/* Home */}
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Home
        </NavLink>

        {/* About */}
        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          About
        </NavLink>

        {/* Menu */}
        <NavLink
          to="/menu"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Menu
        </NavLink>

        {/* Reservation */}
        <NavLink
          to="/reservation"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Reservation
        </NavLink>

        {/* Gallery */}
        <NavLink
          to="/gallery"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Gallery
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Contact
        </NavLink>

        {/* Shopping Cart */}
        <Link
          to="/cart"
          className="cart-button"
          aria-label={`Shopping cart with ${cartCount} items`}
          onClick={closeMenu}
        >
          <FaShoppingCart />
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;