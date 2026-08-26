import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

const pageNumbers: Record<string, string> = {
  "/": "01",
  "/a-propos": "02",
  "/services": "03",
  "/competences": "04",
  "/projets": "05",
  "/contact": "06",
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const pageNumber = pathname.startsWith("/projets/")
    ? "05"
    : pageNumbers[pathname] ?? "01";

  return (
    <>
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.68, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "bottom" }}
        className="fixed inset-0 z-[55] bg-[#ff551f] pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0 speed-lines opacity-25" />
        <motion.span
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute bottom-8 left-5 sm:bottom-12 sm:left-12 font-display text-[clamp(5rem,22vw,16rem)] font-extrabold leading-none tracking-[-0.08em] text-[#07070a]"
        >
          {pageNumber}<span className="text-[#f5f1ea]">/</span>D
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, clipPath: "inset(0 0 7% 0)" }}
        animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
        exit={{ opacity: 0, clipPath: "inset(7% 0 0 0)" }}
        transition={{ duration: 0.58, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
