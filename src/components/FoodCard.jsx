import { FaStar, FaPlus, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/FoodCard.css";

function FoodCard({ food }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addToCart(food);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  }

  return (
    <article className="food-card">
      <div className="food-image-container">
        <img
          src={food.image}
          alt={food.name}
          className="food-image"
          loading="lazy"
        />

        {food.tag && (
          <span className="food-tag">
            {food.tag}
          </span>
        )}

        <span className="food-category">
          {food.category}
        </span>
      </div>

      <div className="food-card-content">
        <div className="food-title-row">
          <h3>{food.name}</h3>

          <span className="food-rating">
            <FaStar />
            {food.rating}
          </span>
        </div>

        <p className="food-description">
          {food.description}
        </p>

        <div className="food-card-bottom">
          <span className="food-price">
            ₹{food.price}
          </span>

          <button
            className={`add-cart-btn ${added ? "added" : ""}`}
            onClick={handleAddToCart}
          >
            {added ? <FaCheck /> : <FaPlus />}

            {added ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;