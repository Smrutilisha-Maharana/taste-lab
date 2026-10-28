import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaEye, FaEyeSlash, FaUtensils } from "react-icons/fa";

import { useAuth } from "../context/AuthContext";
import "../styles/Auth.css";

function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    const confirmation = formData.get("passwordConfirmation");

    if (password !== confirmation) {
      setError("Passwords do not match. Please check both password fields.");
      return;
    }

    try {
      register({
        name: formData.get("name"),
        email: formData.get("email"),
        password,
      });
      navigate("/", { replace: true });
    } catch (registrationError) {
      setError(registrationError.message);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="register-title">
        <Link
          to="/"
          className="auth-brand"
          aria-label="Return to The Taste Lab home"
        >
          <span className="auth-brand-icon">
            <FaUtensils aria-hidden="true" />
          </span>
          <span>
            The Taste <strong>Lab.</strong>
          </span>
        </Link>

        <div className="auth-heading">
          <span className="auth-eyebrow">JOIN THE TABLE</span>
          <h1 id="register-title">
            Create your <span>account.</span>
          </h1>
          <p>
            Save your favorite dishes and make every visit to The Taste Lab
            feel personal.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="register-name">Full name</label>
            <input
              id="register-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="register-email">Email address</label>
            <input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="register-password">Password</label>
            <div className="auth-password-field">
              <input
                id="register-password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="At least 8 characters"
                minLength={8}
                required
              />
              <button
                type="button"
                className="auth-password-toggle"
                onClick={() => setShowPassword((visible) => !visible)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
              >
                {showPassword ? (
                  <FaEyeSlash aria-hidden="true" />
                ) : (
                  <FaEye aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="register-password-confirmation">
              Confirm password
            </label>
            <div className="auth-password-field">
              <input
                id="register-password-confirmation"
                name="passwordConfirmation"
                type={showConfirmation ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                minLength={8}
                required
              />
              <button
                type="button"
                className="auth-password-toggle"
                onClick={() => setShowConfirmation((visible) => !visible)}
                aria-label={
                  showConfirmation
                    ? "Hide password confirmation"
                    : "Show password confirmation"
                }
                aria-pressed={showConfirmation}
              >
                {showConfirmation ? (
                  <FaEyeSlash aria-hidden="true" />
                ) : (
                  <FaEye aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="auth-submit">
            Create account <FaArrowRight aria-hidden="true" />
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
}

export default Register;