import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineDownload } from "react-icons/hi";
import PageTransition from "../components/PageTransition";

const roles = [
  "Développeur Web",
  "Frontend / Full Stack",
];

export default function Home() {
  const [typed, setTyped] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 600], [0, -60]);
  const bgY = useTransform(scrollY, [0, 600], [0, 160]);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 35 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, typed.length + 1);
        setTyped(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, typed.length - 1);
        setTyped(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [typed, deleting, roleIndex]);

  return (
    <PageTransition>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-end pt-28 pb-20 overflow-hidden"
      >
        {/* Asymmetrical, non-blobby background */}
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 -z-10"
        >
          {/* Sharp diagonal speed lines */}
          <div className="absolute inset-0 speed-lines opacity-60" />
          {/* Solid rectangular block rather than blurry blob */}
          <div
            className="absolute -right-10 top-20 hidden lg:block w-[36vw] h-[70vh] bg-[#ff551f] rotate-[-6deg] origin-top-right opacity-100"
            style={{
              clipPath:
                "polygon(10% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          {/* Thin vertical rules */}
          <div className="absolute inset-x-0 top-0 bottom-0 container-x pointer-events-none">
            <div className="h-full w-full flex">
              <div className="flex-1 border-l border-[#1c1d22]/50" />
              <div className="flex-1 border-l border-[#1c1d22]/50" />
              <div className="flex-1 border-l border-[#1c1d22]/50" />
              <div className="flex-1 border-l border-[#1c1d22]/50 border-r" />
            </div>
          </div>
        </motion.div>

        <div className="container-x w-full relative z-10">
          {/* Top meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-between mb-10"
          >
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[#a39e93]">
              <span className="w-1.5 h-1.5 bg-[#ff551f]" />
              Ouagadougou · BF
              <span className="hidden sm:inline opacity-50">/</span>
              <span className="hidden sm:inline">Disponible en freelance</span>
            </div>
            <div className="hidden md:flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] text-[#6d6a62]">
              <span>01 / home</span>
              <span>——</span>
              <span>3 ans · web + IA</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            {/* LEFT — gigantic display title, asymmetrical (7 cols) */}
            <div className="lg:col-span-7 order-2 lg:order-1 pt-0 lg:pt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#ff551f] mb-5 flex items-center gap-3"
              >
                <span className="inline-block w-8 h-px bg-[#ff551f]" />
                Diao Amadou — développeur web
              </motion.div>

              <h1 className="display mega">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                  className="block overflow-hidden"
                >
                  <span className="block">DIAO</span>
                </motion.span>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  className="block overflow-hidden"
                >
                  <span className="block text-[#ff551f]">
                    AMADOU<span className="text-[#f5f1ea]">.</span>
                  </span>
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3"
              >
                <span className="caret font-mono text-[13px] tracking-wider text-[#f5f1ea]">
                  {typed}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#6d6a62] hidden sm:block">
                  · 3 ans d'expérience · web + ia
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="mt-6 max-w-xl text-[#a39e93] leading-relaxed text-[15px] sm:text-base"
              >
                <em className="text-[#f5f1ea] not-italic font-medium">
                  « Le monde sur un autre level »
                </em>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.45 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 flex-wrap"
              >
                <Link to="/projets" className="btn-primary group">
                  Voir mes projets
                  <HiOutlineArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                  <span className="cut" />
                </Link>
                <a href="#" onClick={(e) => e.preventDefault()} className="btn-ghost">
                  <HiOutlineDownload size={16} />
                  Télécharger mon CV
                </a>
              </motion.div>
            </div>

            {/* RIGHT — portrait in offset frame (5 cols, shifted) */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              <motion.div
                style={{ y: portraitY }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative mx-auto lg:ml-auto lg:mr-0 w-[78%] sm:w-[56%] lg:w-[92%] max-w-[440px] aspect-square ml-auto"
              >
                {/* Offset accent circle keeps the portrait asymmetrical without covering it. */}
                <div className="absolute -bottom-5 -left-5 w-full h-full rounded-full bg-[#ff551f]" />
                {/* Thin frame */}
                <div className="absolute inset-0 rounded-full border border-[#1c1d22] -translate-x-2 translate-y-2" />
                <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0c0d11] border-[6px] border-[#ff551f]">
                  <img
                    src="https://raw.githubusercontent.com/uflteka3/photo-profil.png/main/file_00000000a9b071f4a02650a77fc0778f%20%281%29.png"
                    alt="Diao Amadou — DIAODEV"
                    loading="eager"
                    className="w-full h-full object-cover scale-[1.12]"
                    style={{ objectPosition: "top center" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom info strip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="mt-16 pt-6 border-t border-[#1c1d22] grid grid-cols-2 md:grid-cols-4 gap-y-6"
          >
            {[
              { k: "Expérience", v: "3+ années" },
              { k: "Disponibilité", v: "Freelance / mission" },
              { k: "TikTok", v: "@DIAODEV", href: "https://tiktok.com/@diaodev" },
              { k: "Facebook", v: "DIAODEV", href: "https://www.facebook.com/profile.php?id=61592114285824" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6d6a62] w-10 shrink-0">
                  0{i + 1}
                </span>
                <div>
                  <div className="label">{item.k}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block font-display text-[#f5f1ea] text-base hover:text-[#ff551f] transition-colors link-underline mt-1"
                    >
                      {item.v}
                    </a>
                  ) : (
                    <div className="font-display text-[#f5f1ea] text-base mt-1">
                      {item.v}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </PageTransition>
  );
}
