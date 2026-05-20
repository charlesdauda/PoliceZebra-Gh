import { useEffect } from "react";
import { Check } from "lucide-react";

const Toast = ({ message, isVisible, onClose }) => {
  // Auto-close after 2 seconds when shown
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [isVisible, onClose]);

  return (
    <div
      className={`fixed top-24 right-6 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      <div className="bg-blue-950 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-62.5">
        <div className="bg-blue-700 p-1 rounded-full">
          <Check className="w-4 h-4" />
        </div>
        <span className="font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;