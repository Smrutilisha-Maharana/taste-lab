import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(food) {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.id === food.id
      );

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousItems, { ...food, quantity: 1 }];
    });
  }

  function removeFromCart(foodId) {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== foodId)
    );
  }

  function updateQuantity(foodId, quantity) {
    if (quantity < 1) {
      removeFromCart(foodId);
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === foodId
          ? { ...item, quantity }
          : item
      )
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [cartItems, cartCount, cartTotal]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}