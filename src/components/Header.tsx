import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Accueil", num: "01" },
  { to: "/a-propos", label: "À propos", num: "02" },
  { to: "/services", label: "Services", num: "03" },
  { to: "/competences", label: "Compétences", num: "04" },
  { to: "/projets", label: "Projets", num: "05" },
  { to: "/contact", label: "Contact", num: "06" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#07070a]/80 backdrop-blur-xl border-b border-[#1c1d22]"
          : "bg-transparent"
      }`}
      style={{ height: "var(--header-h)" }}
    >
      <div className="container-x h-full flex items-center justify-between">
        {/* Brand — distinctive logotype */}
        <Link to="/" data-magnetic className="group flex items-center gap-3">
          <span className="relative w-10 h-10 grid place-items-center bg-[#ff551f] text-[#07070a] font-display font-extrabold text-lg leading-none -rotate-3 group-hover:rotate-0 transition-transform duration-500">
            D
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#f5f1ea]" />
          </span>
          <div className="leading-none">
            <div className="font-display font-bold text-[15px] tracking-tight text-[#f5f1ea]">
              DIAO<span className="text-[#ff551f]">DEV</span>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#6d6a62] mt-0.5">
              / portfolio
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 border border-[#1c1d22] bg-[#0c0d11]/60 backdrop-blur px-1.5 py-1.5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-[12px] font-mono uppercase tracking-widest transition-colors ${
                  isActive ? "text-[#07070a]" : "text-[#a39e93] hover:text-[#f5f1ea]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-[#ff551f] z-0"
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <span className="opacity-60">{l.num}</span>
                    {l.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex btn-primary text-sm"
        >
          Discutons
          <span className="cut" />
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="lg:hidden w-11 h-11 grid place-items-center border border-[#1c1d22] bg-[#0c0d11] text-[#f5f1ea]"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-display text-2xl leading-none"
              >
                ×
              </motion.span>
            ) : (
              <motion.span
                key="m"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-1.5"
              >
                <span className="block w-5 h-px bg-[#f5f1ea]" />
                <span className="block w-5 h-px bg-[#f5f1ea] w-3" />
                <span className="block w-5 h-px bg-[#f5f1ea]" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            id="mobile-navigation"
            className="lg:hidden absolute top-full left-0 right-0 max-h-[calc(100vh-var(--header-h))] overflow-y-auto bg-[#07070a]/98 backdrop-blur-xl border-b border-[#1c1d22]"
          >
            <nav className="container-x py-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    className={({ isActive }) =>
                      `group flex items-center justify-between px-4 py-4 border-b border-[#1c1d22] transition-colors ${
                        isActive ? "text-[#ff551f]" : "text-[#f5f1ea]"
                      }`
                    }
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-[11px] tracking-widest text-[#6d6a62]">
                        {l.num}
                      </span>
                      <span className="font-display text-xl">{l.label}</span>
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#ff551f]">
                      →
                    </span>
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="btn-primary mt-5 justify-center self-start"
              >
                Discutons
                <span className="cut" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
