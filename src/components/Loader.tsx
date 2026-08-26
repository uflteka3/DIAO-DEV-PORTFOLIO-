import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] grid place-items-center bg-[#07070a] overflow-hidden"
    >
      {/* Big background DIAODEV */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center font-display font-extrabold text-[clamp(5rem,28vw,22rem)] leading-none tracking-[-0.05em] text-[#f5f1ea] select-none"
      >
        <motion.span
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="block"
        >
          D<span className="text-[#ff551f]">/</span>D
        </motion.span>
      </div>

      <div className="absolute bottom-14 left-6 right-6 sm:left-12 sm:right-12 flex items-end justify-between z-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6d6a62]"
          >
            Le monde sur un autre level
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="font-display font-bold text-2xl sm:text-3xl text-[#f5f1ea] mt-1"
          >
            DIAO<span className="text-[#ff551f]">DEV</span>
          </motion.p>
        </div>

        <div className="w-40 sm:w-60">
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-widest text-[#6d6a62] mb-2">
            <span>Loading</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Counter />
            </motion.span>
          </div>
          <div className="h-[2px] bg-[#1c1d22] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.35, ease: [0.76, 0, 0.24, 1] }}
              className="h-full bg-[#ff551f]"
            />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "left center" }}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-full bg-[#ff551f]/30"
      />
    </motion.div>
  );
}

function Counter() {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AnimatedNumber />
    </motion.span>
  );
}

import { useEffect, useState } from "react";
function AnimatedNumber() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const dur = 1350;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return <>{n.toString().padStart(3, "0")}%</>;
}
