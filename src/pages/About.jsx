
import {
  FaUtensils,
  FaHeart,
  FaLeaf,
  FaAward,
  FaTruck,
  FaUsers,
  FaStar,
  FaArrowRight,
  FaClock,
  FaShieldAlt,
  FaFire,
  FaCheckCircle,
  FaQuoteLeft,
  FaPlay,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import "../styles/About.css";

function About() {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      description:
        "Freshly selected ingredients bring natural goodness, beautiful aromas, and unforgettable flavors to every plate.",
      tag: "FRESH DAILY",
    },
    {
      icon: <FaAward />,
      title: "Quality First",
      description:
        "From preparation to presentation, every detail matters when creating a meal worth remembering.",
      tag: "PREMIUM QUALITY",
    },
    {
      icon: <FaHeart />,
      title: "Made With Love",
      description:
        "Every recipe carries our passion for food, bringing warmth, happiness, and people closer together.",
      tag: "MADE WITH LOVE",
    },
    {
      icon: <FaTruck />,
      title: "Quick Service",
      description:
        "Discover your favorite meals and enjoy a smooth, convenient ordering experience whenever hunger calls.",
      tag: "EASY ORDERING",
    },
    {
      icon: <FaShieldAlt />,
      title: "Hygiene Matters",
      description:
        "We value cleanliness, careful food handling, and thoughtful preparation at every step.",
      tag: "CARE IN EVERY STEP",
    },
    {
      icon: <FaUsers />,
      title: "Customer First",
      description:
        "Your happiness inspires us to create a welcoming experience filled with flavor and friendly service.",
      tag: "YOU MATTER",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Passion",
      description:
        "Our love for food inspires every recipe, every flavor, and every plate we serve.",
      icon: <FaHeart />,
    },
    {
      number: "02",
      title: "Creativity",
      description:
        "We bring traditional favorites and exciting new flavors together in delicious ways.",
      icon: <FaFire />,
    },
    {
      number: "03",
      title: "Consistency",
      description:
        "We strive to make every meal an enjoyable experience, from your first bite to your last.",
      icon: <FaCheckCircle />,
    },
  ];

  const highlights = [
    {
      icon: <FaUtensils />,
      title: "Multiple Cuisines",
      description: "Something delicious for every craving.",
    },
    {
      icon: <FaHeart />,
      title: "Made With Care",
      description: "Thoughtful preparation in every dish.",
    },
    {
      icon: <FaStar />,
      title: "Flavorful Choices",
      description: "Discover dishes you will love.",
    },
    {
      icon: <FaClock />,
      title: "Easy Ordering",
      description: "Your favorite flavors, just a few clicks away.",
    },
  ];

  return (
    <main className="taste-about">
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="taste-hero">
        <div className="taste-hero-decoration taste-decoration-one"></div>
        <div className="taste-hero-decoration taste-decoration-two"></div>

        <div className="taste-hero-content">
          <div className="taste-eyebrow">
            <span className="taste-eyebrow-line"></span>
            <FaUtensils />
            <span>WELCOME TO THE TASTE LAB</span>
          </div>

          <h1>
            Every Bite
            <br />
            Tells a <span>Story.</span>
          </h1>

          <p className="taste-hero-description">
            We believe the best memories begin around a table.
            Discover beautiful flavors, comforting favorites, and
            food made to bring people together.
          </p>

          <div className="taste-hero-actions">
            <Link to="/menu" className="taste-btn taste-btn-primary">
              Explore Our Menu
              <FaArrowRight />
            </Link>

            <a href="#our-story" className="taste-btn taste-btn-outline">
              <span className="taste-play-icon">
                <FaPlay />
              </span>
              Our Story
            </a>
          </div>

          <div className="taste-hero-note">
            <div className="taste-note-icon">
              <FaHeart />
            </div>

            <div>
              <strong>A little love in every dish.</strong>
              <span>Made for the moments that matter.</span>
            </div>
          </div>
        </div>

        <div className="taste-hero-visual">
          <div className="taste-hero-image-frame">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85"
              alt="Beautifully prepared colorful food"
              fetchPriority="high"
            />
          </div>

          <div className="taste-image-gradient"></div>

          <div className="taste-floating-card taste-floating-top">
            <span className="taste-floating-icon">
              <FaLeaf />
            </span>

            <div>
              <strong>Fresh & Flavorful</strong>
              <span>Goodness in every bite</span>
            </div>
          </div>

          <div className="taste-floating-card taste-floating-bottom">
            <div className="taste-floating-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <strong>A world of flavors</strong>
            <span>Find your next favorite.</span>
          </div>

          <div className="taste-image-stamp">
            <FaUtensils />
            <span>THE</span>
            <strong>TASTE</strong>
            <strong>LAB</strong>
            <span>MADE WITH LOVE</span>
          </div>
        </div>

        <div className="taste-scroll-indicator">
          <span></span>
          SCROLL TO DISCOVER
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}

      <section className="taste-highlights">
        <div className="taste-highlights-inner">
          {highlights.map((item, index) => (
            <article
              className="taste-highlight-card"
              key={item.title}
              style={{ "--card-index": index }}
            >
              <div className="taste-highlight-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <span className="taste-highlight-arrow">
                <FaArrowRight />
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* ================= OUR STORY ================= */}

      <section className="taste-story" id="our-story">
        <div className="taste-story-visual">
          <div className="taste-story-main-image">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
              alt="Beautiful restaurant dining experience"
              loading="lazy"
            />
          </div>

          <div className="taste-story-small-image">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=85"
              alt="Freshly prepared delicious food"
              loading="lazy"
            />
          </div>

          <div className="taste-story-experience">
            <FaHeart />
            <span>OUR SECRET</span>
            <strong>Passion in</strong>
            <strong>Every Plate.</strong>
          </div>

          <div className="taste-story-ring"></div>
        </div>

        <div className="taste-story-content">
          <span className="taste-section-kicker">
            <span></span>
            A LITTLE ABOUT US
          </span>

          <h2>
            A Love for Food.
            <br />
            A Passion for <span>Flavor.</span>
          </h2>

          <p className="taste-story-lead">
            At The Taste Lab, food is more than a meal.
            It is a celebration of culture, creativity,
            connection, and the little moments that make
            life beautiful.
          </p>

          <p>
            From comforting Indian classics and spicy street
            food to Chinese favorites, Italian delights,
            South Indian specialties, and irresistible desserts,
            our menu brings a variety of flavors together.
          </p>

          <p>
            Whether you are sharing a meal with friends,
            enjoying family time, or treating yourself to
            something special, we want every order to feel
            like a little celebration.
          </p>

          <div className="taste-story-promise">
            <FaCheckCircle />

            <span>
              Delicious choices, a welcoming experience,
              and a passion for making food memorable.
            </span>
          </div>

          <Link to="/menu" className="taste-text-link">
            Discover Our Food
            <span>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="taste-features">
        <div className="taste-section-heading">
          <span className="taste-section-kicker">
            <span></span>
            THE TASTE LAB DIFFERENCE
            <span></span>
          </span>

          <h2>
            Not Just Delicious.
            <br />
            <span>Delightfully Different.</span>
          </h2>

          <p>
            Good food is about more than ingredients.
            It is the care, creativity, and attention that
            make every experience special.
          </p>
        </div>

        <div className="taste-features-grid">
          {features.map((feature, index) => (
            <article
              className="taste-feature-card"
              key={feature.title}
              style={{ "--card-index": index }}
            >
              <div className="taste-feature-top">
                <div className="taste-feature-icon">
                  {feature.icon}
                </div>

                <span className="taste-feature-number">
                  0{index + 1}
                </span>
              </div>

              <span className="taste-feature-tag">
                {feature.tag}
              </span>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="taste-feature-bottom-line"></div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= OUR PHILOSOPHY ================= */}

      <section className="taste-philosophy">
        <div className="taste-philosophy-background"></div>

        <div className="taste-philosophy-content">
          <span className="taste-section-kicker taste-kicker-light">
            <span></span>
            OUR FOOD PHILOSOPHY
          </span>

          <h2>
            Good Food.
            <br />
            <span>Good Feelings.</span>
          </h2>

          <p>
            We want every meal to feel like time well spent.
            Every flavor is an invitation to slow down,
            share a moment, and enjoy something wonderful.
          </p>

          <Link to="/menu" className="taste-btn taste-btn-light">
            Find Your Favorite
            <FaArrowRight />
          </Link>
        </div>

        <div className="taste-philosophy-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRsnHVJ1z8062iWsOuce735xq-y84CYzb9x_70mHQ4Og&s=10"
            alt="A delicious meal prepared with care"
            loading="lazy"
          />

          <div className="taste-philosophy-image-caption">
            <FaQuoteLeft />

            <p>
              Food tastes better when it brings us together.
            </p>

            <span>THE TASTE LAB PHILOSOPHY</span>
          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}

      <section className="taste-values">
        <div className="taste-values-heading">
          <span className="taste-section-kicker">
            <span></span>
            WHAT WE BELIEVE
          </span>

          <h2>
            The Ingredients
            <br />
            Behind <span>Our Passion.</span>
          </h2>

          <p>
            Our values shape the way we think about food
            and the experience we want to create for you.
          </p>
        </div>

        <div className="taste-values-list">
          {values.map((value) => (
            <article className="taste-value-item" key={value.number}>
              <span className="taste-value-number">
                {value.number}
              </span>

              <div className="taste-value-icon">
                {value.icon}
              </div>

              <div className="taste-value-content">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>

              <FaArrowRight className="taste-value-arrow" />
            </article>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="taste-cta">
        <div className="taste-cta-decoration"></div>

        <div className="taste-cta-image">
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
            alt="A colorful and delicious meal"
            loading="lazy"
          />

          <div className="taste-cta-image-label">
            <FaHeart />
            MADE WITH LOVE
          </div>
        </div>

        <div className="taste-cta-content">
          <span className="taste-section-kicker">
            <span></span>
            YOUR NEXT FAVORITE MEAL AWAITS
          </span>

          <h2>
            Your Cravings.
            <br />
            Our <span>Passion.</span>
          </h2>

          <p>
            Something comforting? Something exciting?
            Something sweet? Your next favorite dish
            is waiting to be discovered.
          </p>

          <Link to="/menu" className="taste-btn taste-btn-primary">
            Explore the Menu
            <FaArrowRight />
          </Link>

          <div className="taste-cta-note">
            <FaUtensils />
            <span>Come hungry. Leave happy.</span>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="taste-footer">
        <div className="taste-footer-main">
          <div className="taste-footer-brand">
            <div className="taste-footer-logo">
              <FaUtensils />
            </div>

            <div>
              <h3>
                THE TASTE <span>LAB.</span>
              </h3>

              <p>Where every flavor tells a story.</p>
            </div>
          </div>

          <div className="taste-footer-message">
            Discover flavors.
            <br />
            <span>Share happiness. Create memories.</span>
          </div>

          <Link to="/menu" className="taste-footer-button">
            Explore Menu
            <FaArrowRight />
          </Link>
        </div>

        <div className="taste-footer-bottom">
          <p>
            © {new Date().getFullYear()} The Taste Lab.
            Made with <FaHeart /> for food lovers.
          </p>

          <div className="taste-footer-links">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default About;

