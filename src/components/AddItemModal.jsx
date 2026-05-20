import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../data/Products";

const AddItemModal = ({ isOpen, onClose }) => {
  const { addToCart } = useCart();
  if (!isOpen) return null;
  const handleAdd = (product) => {
    addToCart(product);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose} >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()} >

        <div className="flex items-center justify-between p-6 border-b border-blue-950/10">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-tight text-blue-950">
              Select Item to Add
            </h2>
            <p className="text-blue-950/60 text-sm mt-1">
              Want more items? Pick from the list below.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-blue-950" />
          </button>
        </div>
        <div className="overflow-y-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-blue-50/50 rounded-2xl p-4 flex items-center gap-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-blue-950 truncate">
                    {product.name}
                  </h3>
                  <p className="text-blue-700 font-bold mb-2">
                    ₵{product.price}.00
                  </p>
                  <button
                    onClick={() => handleAdd(product)}
                    className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-lg transition-colors"
                     >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;