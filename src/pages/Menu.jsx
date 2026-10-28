import { useMemo, useState } from "react";
import {
  FaSearch,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import foodData from "../data/foodData";

import "../styles/Menu.css";

function Menu() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      name: "Indian",
      title: "Indian Cuisine",
      subtitle: "Authentic Indian flavors, made with love.",
      emoji: "🇮🇳",
      description: "From rich curries to iconic Indian street food.",
    },
    {
      name: "Chinese",
      title: "Chinese Cuisine",
      subtitle: "Wok-tossed perfection in every bite.",
      emoji: "🥡",
      description: "Discover delicious noodles, rice, and Manchurian.",
    },
    {
      name: "Italian",
      title: "Italian Cuisine",
      subtitle: "A little taste of Italy on your plate.",
      emoji: "🍕",
      description: "Enjoy cheesy pizzas, creamy pasta, and garlic bread.",
    },
    {
      name: "South Indian",
      title: "South Indian Delights",
      subtitle: "Crispy, comforting, and full of flavor.",
      emoji: "🥥",
      description: "Fresh dosa, soft idli, and traditional favorites.",
    },
    {
      name: "Snacks",
      title: "Street Food & Snacks",
      subtitle: "Your favorite street-food cravings, all in one place.",
      emoji: "🍟",
      description: "Try our crispy samosas, spicy vada pav, and more.",
    },
    {
      name: "Starters",
      title: "Starters & Chaat",
      subtitle: "Start your food journey with something exciting.",
      emoji: "🥟",
      description: "Enjoy gupchup, momos, paneer tikka, and more.",
    },
    {
      name: "Desserts",
      title: "Sweet Endings",
      subtitle: "Because every great meal deserves a dessert.",
      emoji: "🍰",
      description: "Treat yourself to brownies, gulab jamun, and ice cream.",
    },
    {
      name:"Drinks",
      title: "Refreshing Drinks",
      subtitle: "Quench your thirst with our delightful, refreshing beverages.",
      emoji: "🥤",
      description: "From fresh juices to cool shakes, find your perfect sip.",
    },
  ];

  const filteredFoods = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return foodData.filter((food) => {
      return (
        food.name.toLowerCase().includes(query) ||
        food.category.toLowerCase().includes(query) ||
        food.description.toLowerCase().includes(query)
      );
    });
  }, [searchTerm]);

  function scrollToCategory(category) {
    document.getElementById(category)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="menu-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="menu-hero">
        <div className="menu-hero-content">
          <span className="menu-eyebrow">
            <FaUtensils />
            WELCOME TO OUR FOOD WORLD
          </span>

          <h1>
            Discover Our
            <br />
            <span>Delicious Menu.</span>
          </h1>

          <p>
            From Indian classics and spicy street food to Italian favorites
            and irresistible desserts, discover something delicious
            for every craving.
          </p>

          <button
            className="explore-menu-btn"
            onClick={() =>
              document.getElementById("all-categories")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Explore Our Menu <FaArrowRight />
          </button>
        </div>

        <div className="menu-hero-decoration">
          <div className="menu-hero-circle">
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85"
              alt="Freshly prepared pizza"
            />
          </div>

          <div className="hero-food-badge">
            <span>✦</span>
            Freshly Prepared
          </div>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="menu-search-section">
        <div className="menu-search-heading">
          <span className="section-label">YOUR NEXT FAVORITE MEAL</span>
          <h2>What are you craving today?</h2>
        </div>

        <div className="menu-search">
          <FaSearch />

          <input
            type="search"
            placeholder="Search pizza, momos, gupchup, dosa..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search dishes"
          />

          {searchTerm && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        <p className="search-result-count">
          {searchTerm
            ? `${filteredFoods.length} dish(es) found`
            : `${foodData.length} delicious dishes to explore`}
        </p>
      </section>

      {/* CATEGORY QUICK NAVIGATION */}
      {!searchTerm && (
        <section className="category-navigation" id="all-categories">
          <div className="category-navigation-heading">
            <span className="section-label">EXPLORE BY CATEGORY</span>
            <h2>Choose Your Favorite</h2>
          </div>

          <div className="category-navigation-grid">
            {categories.map((category) => (
              <button
                key={category.name}
                className="category-navigation-card"
                onClick={() => scrollToCategory(category.name)}
              >
                <span className="category-navigation-emoji">
                  {category.emoji}
                </span>

                <span className="category-navigation-name">
                  {category.name}
                </span>

                <FaArrowRight className="category-navigation-arrow" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* SEPARATE FOOD SECTIONS */}
      <section className="menu-categories">
        {searchTerm ? (
          <div className="menu-category-section search-food-results">
            <div className="menu-category-heading">
              <div>
                <span className="section-label">SEARCH RESULTS</span>
                <h2>
                  Dishes matching <span>"{searchTerm}"</span>
                </h2>
              </div>
            </div>

            {filteredFoods.length > 0 ? (
              <div className="food-grid">
                {filteredFoods.map((food) => (
                  <FoodCard key={food.id} food={food} />
                ))}
              </div>
            ) : (
              <div className="empty-menu">
                <span className="empty-menu-emoji">🍽️</span>
                <h3>No dishes found</h3>
                <p>Try searching for pizza, dosa, momos, or another dish.</p>

                <button
                  className="reset-menu-btn"
                  onClick={() => setSearchTerm("")}
                >
                  Explore All Dishes
                </button>
              </div>
            )}
          </div>
        ) : (
          categories.map((category) => {
            const categoryFoods = foodData.filter(
              (food) => food.category === category.name
            );

            return (
              <section
                key={category.name}
                id={category.name}
                className="menu-category-section"
              >
                <div className="menu-category-heading">
                  <div className="menu-category-title-group">
                    <span className="menu-category-emoji">
                      {category.emoji}
                    </span>

                    <div>
                      <span className="section-label">
                        {category.name.toUpperCase()}
                      </span>

                      <h2>{category.title}</h2>

                      <p>{category.subtitle}</p>
                    </div>
                  </div>

                  <span className="category-dish-count">
                    {categoryFoods.length} Dishes
                  </span>
                </div>

                <p className="category-description">
                  {category.description}
                </p>

                {categoryFoods.length > 0 ? (
                  <div className="food-grid">
                    {categoryFoods.map((food) => (
                      <FoodCard key={food.id} food={food} />
                    ))}
                  </div>
                ) : (
                  <p className="no-category-food">
                    Dishes coming soon!
                  </p>
                )}
              </section>
            );
          })
        )}
      </section>

      {/* FOOTER */}
      <footer className="menu-footer">
        <h2>The Taste Lab</h2>

        <p>
          Fresh ingredients. Bold flavors. Unforgettable moments.
        </p>

        <p>
          © {new Date().getFullYear()} The Taste Lab. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

export default Menu;