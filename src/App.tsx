import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import BrandSignature from "./components/BrandSignature";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:slug" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#07070a] text-[#f5f1ea] relative grain">
        <AnimatePresence>{loading && <Loader />}</AnimatePresence>

        <CustomCursor />
        <BrandSignature />
        <Header />

        <main className="relative">
          <ScrollToTop />
          <AnimatedRoutes />
        </main>

        <Footer />
        <FloatingButtons />
      </div>
    </MotionConfig>
  );
}
