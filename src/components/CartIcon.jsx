import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const CartIcon = () => {
  const { cartCount } = useCart();

  return (
    <Link
      to="/cart"
      className="relative text-blue-950 hover:text-blue-700 transition-colors"
      aria-label={`Cart with ${cartCount} items`}
    >
      <ShoppingBag className="w-6 h-6" />

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-blue-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;