import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "../context/CartContext";

function CartIcon() {
  const { cartCount } = useCart();

  return (
    <Link
      to="/cart"
      className="cart-button"
      aria-label={`Shopping cart with ${cartCount} items`}
    >
      <FaShoppingCart aria-hidden="true" />
      <span className="cart-count" aria-hidden="true">
        {cartCount}
      </span>
    </Link>
  );
}

export default CartIcon;