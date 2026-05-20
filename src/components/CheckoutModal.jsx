import { useState, useRef } from "react";
import { X, Download, Check, FileImage, MessageCircle } from "lucide-react";
import html2canvas from "html2canvas";
import { useCart } from "../context/CartContext";
import logo from "../assets/images/policelogo.png";

const WHATSAPP_NUMBER = "+233541519069";

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [name, setName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const receiptRef = useRef(null);

  const [orderId] = useState(() => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `BLX-${random}`;
  });

  if (!isOpen) return null;

  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Group variants by size+color combo for cleaner display
  const groupVariants = (variants) => {
    const grouped = {};
    variants.forEach((v) => {
      const key = `${v.size}|${v.color}`;
      grouped[key] = (grouped[key] || 0) + 1;
    });
    return Object.entries(grouped).map(([key, count]) => {
      const [size, color] = key.split("|");
      return { size, color, count };
    });
  };

  const handlePlaceOrder = async () => {
    if (!name.trim()) {
      alert("Please enter your name to continue.");
      return;
    }

    if (!receiptRef.current) {
      alert("Receipt not ready. Please try again.");
      return;
    }

    setIsGenerating(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));

      const canvas = await html2canvas(receiptRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
      });

      const imageUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `Order-${orderId}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Build WhatsApp message
      let messageBody = `Hello! I'd like to place an order.\n\n`;
      messageBody += `Order ID: ${orderId}\n`;
      messageBody += `Name: ${name}\n\n`;
      messageBody += `ITEMS:\n`;

      cartItems.forEach((item) => {
        const grouped = groupVariants(item.variants);
        grouped.forEach(({ size, color, count }) => {
          const subtotal = item.price * count;
          messageBody += `• ${count}x ${item.name} (Size: ${size}, Color: ${color}) — ₵${subtotal}.00\n`;
        });
      });

      messageBody += `\nTotal: ₵${cartTotal}.00\n\n`;
      messageBody += `I will attach my receipt, soon.\n\nThank you!`;

      const message = encodeURIComponent(messageBody);
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

      // Save the URL so the user can click the button to open it
      setWhatsappUrl(url);
      setShowSuccess(true);
      setIsGenerating(false);
    } catch (error) {
      console.error("Error generating receipt:", error);
      alert("Something went wrong generating your receipt. Please try again.");
      setIsGenerating(false);
    }
  };

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, "_blank");
    setTimeout(() => {
      clearCart();
      setShowSuccess(false);
      onClose();
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
      onClick={!isGenerating ? onClose : undefined}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {showSuccess ? (
          <div className="p-8 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <Check className="w-10 h-10 text-green-600" strokeWidth={3} />
            </div>

            <h2 className="font-display text-2xl uppercase tracking-tight text-blue-950 mb-3">
              Receipt Downloaded!
            </h2>

            <p className="text-blue-950/70 mb-6 leading-relaxed">
              Your receipt has been saved to your phone.
            </p>

            <div className="bg-blue-50 rounded-2xl p-4 mb-6 flex items-start gap-3 text-left">
              <div className="bg-blue-700 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <FileImage className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-blue-950 text-sm mb-1">
                  Where to find it:
                </p>
                <p className="text-xs text-blue-950/70 leading-relaxed">
                  Check your <strong>Files</strong>, <strong>Downloads</strong>{" "}
                  folder, or <strong>Gallery</strong>. The file is named{" "}
                  <code className="bg-white px-1 rounded text-blue-700 font-bold text-[10px]">
                    Order-{orderId}.png
                  </code>
                </p>
              </div>
            </div>

            <button
              onClick={handleOpenWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold tracking-wider uppercase py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 mb-3"
            >
              <MessageCircle className="w-5 h-5" />
              Open WhatsApp to Send Order
            </button>

            <p className="text-xs text-blue-950/60 text-center leading-relaxed">
              Tap above to open WhatsApp, then{" "}
              <strong>attach the downloaded receipt</strong> and send.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-blue-950/10">
              <h2 className="font-display text-2xl uppercase tracking-tight text-blue-950">
                Almost Done
              </h2>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-blue-950" />
              </button>
            </div>

            <div className="p-6">
              <label className="block text-sm font-bold tracking-wider uppercase text-blue-950/60 mb-3">
                What's your name?
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-blue-50 rounded-xl px-5 py-4 text-blue-950 placeholder:text-blue-950/40 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
                autoFocus
                disabled={isGenerating}
              />

              <button
                onClick={handlePlaceOrder}
                disabled={isGenerating}
                className="w-full mt-6 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold tracking-wider uppercase py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  "Generating receipt..."
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Generate Receipt
                  </>
                )}
              </button>

              <p className="text-xs text-blue-950/50 text-center mt-3">
                Your receipt will download, then you'll send it via WhatsApp
              </p>
            </div>
          </>
        )}

        <div style={{ position: "fixed", left: "-9999px", top: 0, zIndex: -1 }}>
          <div
            ref={receiptRef}
            style={{
              backgroundColor: "#ffffff",
              padding: "40px",
              width: "500px",
              fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
            }}
          >
            {/* Logo */}
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <img
                src={logo}
                alt="Blinx"
                style={{ height: "70px", display: "block", margin: "0 auto 12px" }}
                crossOrigin="anonymous"
              />
              <h1
                style={{
                  fontFamily: "Anton, Arial, sans-serif",
                  letterSpacing: "0.05em",
                  fontSize: "24px",
                  color: "#172554",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Order Receipt
              </h1>
            </div>

            <div
              style={{
                backgroundColor: "#eff6ff",
                borderRadius: "12px",
                padding: "16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "#64748b", fontSize: "14px" }}>Order ID:</span>
                <span style={{ fontWeight: "bold", color: "#172554" }}>{orderId}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ color: "#64748b", fontSize: "14px" }}>Date:</span>
                <span style={{ fontWeight: "bold", color: "#172554" }}>{today}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#64748b", fontSize: "14px" }}>Customer:</span>
                <span style={{ fontWeight: "bold", color: "#172554" }}>{name || "—"}</span>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid #e2e8f0",
                borderBottom: "1px solid #e2e8f0",
                padding: "16px 0",
                marginBottom: "16px",
              }}
            >
              {cartItems.map((item, index) => {
                const grouped = groupVariants(item.variants);
                return (
                  <div
                    key={item.id}
                    style={{ marginBottom: index < cartItems.length - 1 ? "16px" : 0 }}
                  >
                    <p style={{ fontWeight: "bold", color: "#172554", marginBottom: "6px" }}>
                      {item.name}
                    </p>
                    {grouped.map((g, gIndex) => (
                      <div
                        key={gIndex}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "13px",
                          color: "#475569",
                          marginBottom: "3px",
                          paddingLeft: "12px",
                        }}
                      >
                        <span>
                          {g.count}x · Size: {g.size || "—"} · Color: {g.color || "—"}
                        </span>
                        <span style={{ fontWeight: "bold", color: "#172554" }}>
                          ₵{item.price * g.count}.00
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Total */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#172554" }}>
                TOTAL
              </span>
              <span
                style={{
                  fontFamily: "Anton, Arial, sans-serif",
                  fontSize: "32px",
                  color: "#1d4ed8",
                }}
              >
                ₵{cartTotal}.00
              </span>
            </div>

            {/* Footer */}
            <div style={{ textAlign: "center", fontSize: "14px", color: "#64748b" }}>
              <p style={{ fontWeight: "bold", color: "#172554", margin: "0 0 4px" }}>
                Thank you for your order!
              </p>
              <p style={{ margin: 0 }}>
                Please send this receipt to confirm your order via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
