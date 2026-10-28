import { Link } from "react-router-dom";
import { FaArrowRight, FaHome, FaUtensils } from "react-icons/fa";

import Navbar from "../components/Navbar";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">
      <Navbar />

      <section className="not-found-content" aria-labelledby="not-found-title">
        <div className="not-found-icon" aria-hidden="true">
          <FaUtensils />
        </div>
        <span className="not-found-code">404 — TABLE NOT FOUND</span>
        <h1 id="not-found-title">
          This page is <span>off the menu.</span>
        </h1>
        <p>
          The page you are looking for may have moved, or it is not available
          yet. Let&apos;s get you back to something delicious.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">
            <FaHome aria-hidden="true" />
            Back home
          </Link>
          <Link to="/menu" className="not-found-secondary">
            Explore the menu
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default NotFound;