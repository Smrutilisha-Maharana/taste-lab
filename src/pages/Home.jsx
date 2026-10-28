import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaUtensils,
  FaLeaf,
  FaHeart,
  FaStar,
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaQuoteLeft,
  FaFire,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import "../styles/Home.css";

function Home() {
  const foodItems = [
    {
      id: 1,
      name: "Signature Pizza",
      category: "ITALIAN FAVORITE",
      description:
        "Crispy crust, melted cheese, fresh herbs, and unforgettable flavor.",
      price: "₹299",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "Gourmet Burger",
      category: "CHEF'S SPECIAL",
      description:
        "Juicy layers, fresh vegetables, and our signature house sauce.",
      price: "₹249",
      rating: "4.8",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxSv76_3d4__bXrCFLvkIdkPVCuFVB0q3pSsvkLJSaQ&s=10",
      tag: "Popular",
    },
    {
      id: 3,
      name: "Creamy Italian Pasta",
      category: "COMFORT FOOD",
      description:
        "Perfectly cooked pasta tossed in a rich, creamy, flavorful sauce.",
      price: "₹279",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
      tag: "Chef's pick",
    },
  ];

  const features = [
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      description:
        "We choose quality ingredients to bring freshness and flavor to every plate.",
    },
    {
      icon: <FaHeart />,
      title: "Made with Love",
      description:
        "Every dish is prepared with care, creativity, and attention to detail.",
    },
    {
      icon: <FaUtensils />,
      title: "Expert Chefs",
      description:
        "Our kitchen brings together classic recipes and exciting new flavors.",
    },
    {
      icon: <FaClock />,
      title: "A Warm Welcome",
      description:
        "Relax, enjoy your meal, and let us make your visit memorable.",
    },
  ];

  return (
    <main className="home-page">
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* INTRODUCTION SECTION */}
      <section className="home-intro" id="about">
        <div className="intro-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
            alt="Beautifully prepared restaurant dining experience"
            className="intro-image"
            loading="lazy"
          />

          <div className="intro-floating-card">
            <FaStar className="intro-star" />
            <div>
              <strong>Made with passion</strong>
              <span>Served with a smile</span>
            </div>
          </div>

          <div className="intro-image-decoration"></div>
        </div>

        <div className="intro-content">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            WELCOME TO THE TASTE LAB
          </span>

          <h2>
            Good Food.
            <br />
            Great <span>Memories.</span>
          </h2>

          <p className="intro-description">
            We believe food is more than something you eat. It is a reason to
            gather, a way to celebrate, and a memory waiting to happen.
          </p>

          <p className="intro-description secondary-description">
            From fresh ingredients to beautifully prepared dishes, every
            detail at The Taste Lab is designed to make your dining experience
            special.
          </p>

          <div className="intro-signature">
            <span className="signature-icon">
              <FaUtensils />
            </span>
            <div>
              <strong>The Taste Lab</strong>
              <span>Where every bite tells a story.</span>
            </div>
          </div>

          <Link to="/about" className="home-primary-btn">
            Discover Our Story <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="home-stats">
        <div className="stat-item">
          <span className="stat-number"></span>
          <span className="stat-label">Passion on Every Plate</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <span className="stat-number">Fresh</span>
          <span className="stat-label">Ingredients, Always</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <span className="stat-number">Every</span>
          <span className="stat-label">Meal Made Special</span>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="home-menu" id="menu">
        <div className="menu-heading">
          <div>
            <span className="section-eyebrow">
              <span className="eyebrow-line"></span>
              A LITTLE TASTE OF HAPPINESS
            </span>

            <h2>
              Our Crowd <span>Favorites.</span>
            </h2>

            <p>
              Delicious flavors, fresh ingredients, and dishes you'll want to
              come back for.
            </p>
          </div>

          <Link to="/menu" className="menu-view-all">
            Explore Full Menu <FaArrowRight />
          </Link>
        </div>

        <div className="home-food-grid">
          {foodItems.map((food) => (
            <article className="home-food-card" key={food.id}>
              <div className="food-image-container">
                <img
                  src={food.image}
                  alt={food.name}
                  className="food-image"
                  loading="lazy"
                />

                <span className="food-tag">
                  <FaFire /> {food.tag}
                </span>

                <span className="food-rating">
                  <FaStar /> {food.rating}
                </span>
              </div>

              <div className="food-card-content">
                <span className="food-category">{food.category}</span>

                <h3>{food.name}</h3>

                <p>{food.description}</p>

                <div className="food-card-bottom">
                  <span className="food-price">{food.price}</span>

                  <Link
                    to="/menu"
                    className="food-arrow"
                    aria-label={`Explore ${food.name}`}
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="home-features">
        <div className="features-heading">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            THE TASTE LAB DIFFERENCE
          </span>

          <h2>
            More Than Food.
            <br />
            It's an <span>Experience.</span>
          </h2>

          <p>
            Great food brings people together. Great hospitality makes them
            feel at home.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <span className="feature-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE BANNER */}
      <section className="home-experience">
        <div className="experience-image">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
            alt="Warm and welcoming restaurant interior"
            loading="lazy"
          />
        </div>

        <div className="experience-overlay"></div>

        <div className="experience-content">
          <span className="experience-eyebrow">
            YOUR NEXT FAVORITE PLACE
          </span>

          <h2>
            Good Times.
            <br />
            Great Taste.
            <br />
            <span>Better Together.</span>
          </h2>

          <p>
            Whether it's a family dinner, a catch-up with friends, or a little
            celebration, there's always room for another beautiful memory.
          </p>

          <Link to="/menu" className="experience-btn">
            Find Your Favorite <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="home-testimonial">
        <div className="testimonial-content">
          <span className="section-eyebrow">
            <span className="eyebrow-line"></span>
            A LITTLE LOVE FROM OUR GUESTS
          </span>

          <FaQuoteLeft className="testimonial-quote-icon" />

          <h2>
            Every visit should leave you with a <span>smile.</span>
          </h2>

          <p>
            Delicious food, a welcoming atmosphere, and little moments that
            turn an ordinary day into something special. That's the experience
            we're passionate about creating.
          </p>

          <div className="testimonial-stars" aria-label="Five decorative stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <span className="testimonial-caption">
            GOOD FOOD. GOOD PEOPLE. GOOD MEMORIES.
          </span>
        </div>
      </section>

      {/* RESERVATION SECTION */}
      <section className="home-reservation" id="reservation">
        <div className="reservation-decoration reservation-decoration-one"></div>
        <div className="reservation-decoration reservation-decoration-two"></div>

        <div className="reservation-content">
          <span className="reservation-eyebrow">
            SOMETHING DELICIOUS IS WAITING
          </span>

          <h2>
            Your Table.
            <br />
            Your People.
            <br />
            <span>Your Perfect Moment.</span>
          </h2>

          <p>
            Make room for great food and even better company. Get in touch with
            us to plan your next dining experience.
          </p>

          <div className="reservation-actions">
            <a
              href="mailto:reservations@the-tastelab.com?subject=Table%20Reservation"
              className="reservation-btn"
            >
              <FaPhoneAlt /> Contact Us to Reserve
            </a>

            <Link to="/menu" className="reservation-menu-link">
              Explore Our Menu <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer" id="contact">
        <div className="footer-main">
          <div className="footer-brand-section">
            <Link to="/" className="footer-brand">
              <span className="footer-brand-icon">
                <FaUtensils />
              </span>

              <span>
                The Taste <span className="footer-brand-highlight">Lab.</span>
              </span>
            </Link>

            <p>
              Fresh ingredients. Bold flavors.
              <br />
              Unforgettable moments.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div className="footer-links-column">
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/menu">Our Menu</Link>
          </div>

          <div className="footer-links-column">
            <h3>Discover</h3>
            <a href="#about">About Us</a>
            <a href="#menu">Popular Dishes</a>
            <a href="#reservation">Reservations</a>
          </div>

          <div className="footer-contact-column">
            <h3>Get in Touch</h3>

            <p>
              <FaMapMarkerAlt />
              <span>Visit us for a delicious experience.</span>
            </p>

            <p>
              <FaPhoneAlt />
              <a href="mailto:reservations@the-tastelab.com">
                Contact our team
              </a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} The Taste Lab. All rights reserved.
          </p>

          <p>Made with care and a whole lot of flavor.</p>
        </div>
      </footer>
    </main>
  );
}

export default Home;