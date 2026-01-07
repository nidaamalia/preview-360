import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/6231123456?text=Halo%20Paktukang,%20saya%20ingin%20konsultasi", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-lg transition-all duration-300 hover:bg-navy-light hover:scale-110 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl animate-pulse-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingButtons;
