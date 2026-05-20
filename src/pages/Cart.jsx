import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, ShoppingBag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import CartItem from "../components/CartItem";
import AddItemModal from "../components/AddItemModal";
import CheckoutModal from "../components/CheckoutModal";
import FloatingCart from "../components/FloatingCart";
import { useCart } from "../context/CartContext";
import fabricBg from "../assets/images/tees-bg.png";

const Cart = () => {
  const { cartItems, cartTotal } = useCart();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const handlePlaceOrder = () => {
    // Check if every variant has size AND color
    const incomplete = cartItems.filter((item) =>
      item.variants.some((v) => !v.size || !v.color)
    );
    if (incomplete.length > 0) {
      alert(
        "Please select a size and color for every unit before placing your order."
      );
      return;
    }

    setShowCheckoutModal(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <PageHeader
        title="Your Cart"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Cart", path: "/cart" },
        ]}
        backgroundImage={fabricBg}
      />

      {cartItems.length === 0 ? (
        <section className="px-6 lg:px-12 py-20">
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-12 shadow-sm">
            <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-blue-700" />
            </div>
            <h2 className="font-display text-3xl uppercase tracking-tight text-blue-950 mb-4">
              Your Cart Is Empty
            </h2>
            <p className="text-blue-950/60 mb-8">
              Looks like you haven't added anything yet. Browse our shop and
              find your favorites!
            </p>
            <Link
              to="/shop"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Browse Shop
            </Link>
          </div>
        </section>
      ) : (
        <section className="px-6 lg:px-12 py-16">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* LEFT */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl uppercase tracking-tight text-blue-950 mb-6">
                User Details
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <button
                onClick={() => setShowAddModal(true)}
                className="w-full bg-blue-50 hover:bg-blue-100 border-2 border-dashed border-blue-700/30 hover:border-blue-700 text-blue-700 font-bold tracking-wider uppercase py-4 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
                Add Another Item
              </button>
            </div>

            {/* RIGHT */}
            <div className="lg:sticky lg:top-24">
              <h2 className="font-display text-3xl uppercase tracking-tight text-blue-950 mb-6">
                Order Summary
              </h2>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-blue-950/70">
                        {item.variants.length}x {item.name}
                      </span>
                      <span className="font-bold text-blue-950">
                        ₵{item.price * item.variants.length}.00
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-blue-950/10 pt-4 space-y-2 mb-6">
                  <div className="flex justify-between text-blue-950/70">
                    <span>Subtotal</span>
                    <span>₵{cartTotal}.00</span>
                  </div>
                  <div className="flex justify-between text-blue-950/70">
                    <span>Delivery Fee</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-blue-950/10">
                    <span className="text-blue-950">Total</span>
                    <span className="text-blue-700">₵{cartTotal}.00</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold tracking-wider uppercase py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
                >
                  Place Order
                </button>

                <p className="text-xs text-blue-950/50 text-center mt-3">
                  Your order will be sent via WhatsApp with a receipt
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />

      <AddItemModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
      />

      <CheckoutModal
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
      />

      <FloatingCart />
    </div>
  );
};

export default Cart;