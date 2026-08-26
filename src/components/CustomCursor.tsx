import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const ringRotate = useMotionValue(0);

  const ringXSpring = useSpring(ringX, { stiffness: 250, damping: 28, mass: 0.4 });
  const ringYSpring = useSpring(ringY, { stiffness: 250, damping: 28, mass: 0.4 });
  const ringRotateSpring = useSpring(ringRotate, {
    stiffness: 180,
    damping: 24,
    mass: 0.35,
  });

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const lastPoint = useRef({ x: 0, y: 0 });
  const magneticTarget = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resetMagnetic = () => {
      if (!magneticTarget.current) return;
      magneticTarget.current.style.setProperty("--magnetic-x", "0px");
      magneticTarget.current.style.setProperty("--magnetic-y", "0px");
      magneticTarget.current = null;
    };

    const move = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);

      const dx = e.clientX - lastPoint.current.x;
      const dy = e.clientY - lastPoint.current.y;
      if (Math.abs(dx) + Math.abs(dy) > 1) {
        ringRotate.set(Math.atan2(dy, dx) * (180 / Math.PI));
      }
      lastPoint.current = { x: e.clientX, y: e.clientY };

      if (reducedMotion) return;
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        ".btn-primary, .btn-ghost, [data-magnetic]"
      );

      if (!target) {
        resetMagnetic();
        return;
      }

      if (magneticTarget.current && magneticTarget.current !== target) {
        resetMagnetic();
      }

      magneticTarget.current = target;
      const rect = target.getBoundingClientRect();
      const offsetX = e.clientX - (rect.left + rect.width / 2);
      const offsetY = e.clientY - (rect.top + rect.height / 2);
      target.style.setProperty("--magnetic-x", `${offsetX * 0.12}px`);
      target.style.setProperty("--magnetic-y", `${offsetY * 0.12}px`);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el?.closest(
        "a, button, [role=button], input, textarea, select, label, .hoverable"
      );
      if (ringRef.current) {
        if (interactive) ringRef.current.classList.add("big");
        else ringRef.current.classList.remove("big");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("blur", resetMagnetic);
    return () => {
      resetMagnetic();
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("blur", resetMagnetic);
    };
  }, [dotX, dotY, ringRotate, ringX, ringY]);

  return (
    <>
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{
          translateX: ringXSpring,
          translateY: ringYSpring,
          rotate: ringRotateSpring,
        }}
      />
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ translateX: dotX, translateY: dotY }}
      />
    </>
  );
}
