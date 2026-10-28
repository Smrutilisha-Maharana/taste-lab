import { useCart as useCartContext } from "../context/CartContext";

function useCart() {
  return useCartContext();
}

export { useCart };
export default useCart;