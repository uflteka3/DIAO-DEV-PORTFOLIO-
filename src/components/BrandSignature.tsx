import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function BrandSignature() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.35,
  });
  const markY = useTransform(progress, [0, 1], [0, 88]);

  return (
    <div
      aria-hidden="true"
      className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 xl:flex h-44 w-5 flex-col items-center pointer-events-none"
    >
      <span className="font-display text-[10px] font-bold tracking-[-0.08em] text-[#ff551f] [writing-mode:vertical-rl] rotate-180">
        D/D
      </span>
      <div className="relative mt-3 h-28 w-px bg-[#2a2b31]">
        <motion.span
          className="absolute left-1/2 top-0 h-5 w-1 -translate-x-1/2 bg-[#ff551f]"
          style={{ y: markY }}
        />
      </div>
      <span className="mt-3 h-1.5 w-1.5 rotate-45 bg-[#ff551f]" />
    </div>
  );
}