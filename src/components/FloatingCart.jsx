import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

const FloatingCart = () => {
  const { cartCount } = useCart();

  return (
    <Link
      to="/cart"
      aria-label={`View cart with ${cartCount} items`}
      className="lg:hidden fixed bottom-6 right-6 z-40 bg-blue-700 hover:bg-blue-800 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-breathe"
    >
      <ShoppingBag className="w-7 h-7" />

      {/* Badge */}
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full min-w-6 h-6 px-1 flex items-center justify-center border-2 border-white">
          {cartCount}
        </span>
      )}

      <span className="absolute inset-0 rounded-full bg-blue-700 animate-ping opacity-25" />
    </Link>
  );
};

export default FloatingCart;