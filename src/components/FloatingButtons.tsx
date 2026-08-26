import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 z-40 flex flex-col items-end gap-4"
      style={{ pointerEvents: "none" }}
    >
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Retour en haut"
            className="group w-12 h-12 bg-[#0c0d11] border border-[#22232a] text-[#f5f1ea] grid place-items-center hover:bg-[#ff551f] hover:border-[#ff551f] hover:text-[#07070a] transition-colors"
            style={{ pointerEvents: "auto" }}
          >
            <HiArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        data-magnetic
        href="https://wa.me/22674119750"
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter sur WhatsApp"
        initial={{ scale: 0, rotate: -12 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 220, damping: 16 }}
        whileHover={{ scale: 1.06, rotate: -4 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-[#25D366] text-[#07070a] grid place-items-center shadow-[0_10px_40px_-5px_rgba(37,211,102,0.5)]"
        style={{ pointerEvents: "auto" }}
      >
        <span className="absolute inset-0 bg-[#25D366] animate-ping opacity-25" />
        <FaWhatsapp size={28} className="relative z-10" />
      </motion.a>
    </div>
  );
}
