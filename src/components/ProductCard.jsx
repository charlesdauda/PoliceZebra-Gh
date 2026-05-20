import { useState } from "react";
import { useCart } from "../context/CartContext";
import Toast from "./Toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleOrder = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <>
      <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="relative bg-blue-50/50 aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
          />

          <img
            src={product.hoverImage || product.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-bold text-lg text-blue-950 mb-2">
            {product.name}
          </h3>

          <p className="font-display text-2xl text-blue-700 mb-5">
            ₵{product.price}.00
          </p>
          <button
            onClick={handleOrder}
            className="mt-auto bg-blue-700 hover:bg-blue-800 text-white font-bold tracking-wider uppercase py-3 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Order
          </button>
        </div>
      </div>
      <Toast
        message={`${product.name} added!`}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
};

export default ProductCard;