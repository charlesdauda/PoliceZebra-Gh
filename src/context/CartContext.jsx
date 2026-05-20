import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0 && !parsed[0].variants) {
        localStorage.removeItem("cart");
        return [];
      }
      return parsed;
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                variants: [...item.variants, { size: null, color: null }],
              }
            : item
        );
      }

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          variants: [{ size: null, color: null }],
        },
      ];
    });
  };

  // Quantity +1 = add a new variant
  const addVariant = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              variants: [...item.variants, { size: null, color: null }],
            }
          : item
      )
    );
  };

  const removeVariant = (itemId) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id !== itemId) return item;
        if (item.variants.length <= 1) return item;
        return { ...item, variants: item.variants.slice(0, -1) };
      })
    );
  };

  const updateVariantSize = (itemId, variantIndex, newSize) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              variants: item.variants.map((v, i) =>
                i === variantIndex ? { ...v, size: newSize } : v
              ),
            }
          : item
      )
    );
  };

  const updateVariantColor = (itemId, variantIndex, newColor) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              variants: item.variants.map((v, i) =>
                i === variantIndex ? { ...v, color: newColor } : v
              ),
            }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.variants.length,
    0
  );

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.variants.length,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        addVariant,
        removeVariant,
        updateVariantSize,
        updateVariantColor,
        removeItem,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};