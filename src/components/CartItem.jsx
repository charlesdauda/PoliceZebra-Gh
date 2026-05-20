import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products, ALL_COLORS } from "../data/Products";

const CartItem = ({ item }) => {
  const { removeItem, addVariant, removeVariant, updateVariantSize, updateVariantColor,} = useCart();

  const productInfo = products.find((p) => p.id === item.id);
  const availableSizes = productInfo?.sizes || [];
  const availableColors = productInfo?.colors || [];
  const quantity = item.variants.length;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-blue-950">{item.name}</h3>
          <p className="text-blue-700 font-bold">₵{item.price}.00 each</p>
          <p className="text-xs text-blue-950/50 mt-1">
            Subtotal: ₵{item.price * quantity}.00
          </p>
        </div>

        <button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0"
          aria-label="Remove item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-between border-t border-blue-950/10 pt-4 mb-4">
        <div>
          <span className="text-sm text-blue-950/60 font-bold tracking-wider uppercase block">
            Quantity
          </span>
          {quantity > 1 && (
            <span className="text-[10px] text-blue-700 font-bold mt-1">
              Pick size & color for each unit below
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 bg-blue-50 rounded-full px-2 py-1">
          <button
            onClick={() => removeVariant(item.id)}
            disabled={quantity <= 1}
            className="w-8 h-8 rounded-full hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent flex items-center justify-center transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4 text-blue-950" />
          </button>

          <span className="font-bold text-blue-950 min-w-6 text-center">
            {quantity}
          </span>

          <button
            onClick={() => addVariant(item.id)}
            className="w-8 h-8 rounded-full hover:bg-white flex items-center justify-center transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4 text-blue-950" />
          </button>
        </div>
      </div>

      {item.variants.map((variant, variantIndex) => (
        <div
          key={variantIndex}
          className="border-t border-blue-950/10 pt-4 mt-4 first:mt-0"
        >
          {quantity > 1 && (
            <div className="flex items-center gap-2 mb-3">
              <div className="bg-blue-700 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                Unit {variantIndex + 1}
              </div>
              {variant.size && variant.color && (
                <span className="text-xs text-green-600 font-bold">✓ Set</span>
              )}
            </div>
          )}

          <div className="mb-4">
            <p className="text-sm text-blue-950/60 mb-2 font-bold tracking-wider uppercase">
              Select Size
            </p>
            <div className="flex flex-wrap gap-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    updateVariantSize(item.id, variantIndex, size)
                  }
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 ${
                    variant.size === size
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-blue-50 text-blue-950 hover:bg-blue-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-blue-950/60 mb-3 font-bold tracking-wider uppercase">
              Select Color{" "}
              {variant.color && (
                <span className="text-blue-700 normal-case">
                  — {variant.color}
                </span>
              )}
            </p>
            <div className="flex flex-wrap gap-3">
              {availableColors.map((colorName) => {
                const hex = ALL_COLORS[colorName];
                return (
                  <button
                    key={colorName}
                    onClick={() =>
                      updateVariantColor(item.id, variantIndex, colorName)
                    }
                    style={{ backgroundColor: hex }}
                    className={`w-9 h-9 rounded-full transition-all duration-200 hover:scale-110 ${
                      variant.color === colorName
                        ? "ring-2 ring-blue-700 ring-offset-2 scale-110"
                        : "ring-1 ring-blue-950/20"
                    }`}
                    aria-label={`Select ${colorName}`}
                    title={colorName}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;