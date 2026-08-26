import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPython,
} from "react-icons/si";
import { DiCss3, DiReact } from "react-icons/di";
import PageTransition from "../components/PageTransition";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  level: number;
  Icon: IconType;
  color: string;
}

const skills: Skill[] = [
  { name: "HTML5", level: 98, Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", level: 95, Icon: DiCss3, color: "#1572B6" },
  { name: "JavaScript", level: 92, Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", level: 85, Icon: SiTypescript, color: "#3178C6" },
  { name: "React", level: 93, Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", level: 88, Icon: SiNextdotjs, color: "#ffffff" },
  { name: "React Native", level: 80, Icon: DiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", level: 95, Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Git", level: 88, Icon: SiGit, color: "#F05032" },
  { name: "GitHub", level: 90, Icon: SiGithub, color: "#ffffff" },
  { name: "Python", level: 78, Icon: SiPython, color: "#3776AB" },
];

function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setDisplayLevel(skill.level), 120 + index * 70);
    return () => clearTimeout(t);
  }, [inView, skill.level, index]);

  const Icon = skill.Icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.04 }}
      className="group grid grid-cols-[64px_1fr_auto] sm:grid-cols-[88px_1fr_120px_60px] gap-4 sm:gap-6 items-center py-5 border-b border-[#1c1d22] last:border-b-0"
    >
      {/* Logo */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0c0d11] border border-[#1c1d22] grid place-items-center group-hover:border-[#ff551f] transition-colors">
        <motion.div
          whileHover={{ rotate: -6, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 260 }}
          style={{ color: skill.color }}
        >
          {skill.name === "Python" ? (
            <span className="relative block h-[26px] w-[26px]">
              <SiPython
                size={26}
                className="absolute inset-0 text-[#3776AB] [clip-path:inset(0_0_48%_0)]"
              />
              <SiPython
                size={26}
                className="absolute inset-0 text-[#FFD43B] [clip-path:inset(52%_0_0_0)]"
              />
            </span>
          ) : (
            <Icon size={26} />
          )}
        </motion.div>
      </div>

      {/* Name + bar */}
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="font-display font-semibold text-[17px] sm:text-lg text-[#f5f1ea]">
            {skill.name}
          </span>
        </div>
        <div className="mt-3 h-[3px] bg-[#1c1d22] w-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${displayLevel}%` }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="h-full"
            style={{
              background: skill.color,
              boxShadow: `0 0 10px ${skill.color}66`,
            }}
          />
        </div>
      </div>

      {/* Level number (hidden on mobile, replaced by absolute %) */}
      <div className="hidden sm:block">
        <div className="font-mono text-[11px] uppercase tracking-widest text-[#6d6a62]">
          Maîtrise
        </div>
        <div className="font-display text-2xl text-[#f5f1ea] leading-none mt-1">
          {displayLevel}
          <span className="text-[#ff551f]">%</span>
        </div>
      </div>

      <div className="sm:hidden text-right">
        <div className="font-display text-xl text-[#f5f1ea] leading-none">
          {displayLevel}
          <span className="text-[#ff551f] text-base">%</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <section className="container-x">
          <div className="flex items-center justify-between mb-8">
            <span className="label text-[#ff551f]">
              <span className="inline-block w-8 h-px bg-[#ff551f] align-middle mr-3" />
              04 — Stack
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6d6a62] hidden sm:block">
              / boîte à outils
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1 className="display big">
                Ma stack
                <br />
                <span className="text-[#ff551f]">technique.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[#a39e93] text-[15px] leading-relaxed">
                Les technologies avec lesquelles je construis des sites et
                applications web modernes, robustes et rapides.
              </p>
            </div>
          </div>

          {/* Detailed list */}
          <div className="mt-14 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="label mb-6">/ compétences détaillées</div>
              <div className="border-t border-[#1c1d22]">
                {skills.map((s, i) => (
                  <SkillRow key={s.name} skill={s} index={i} />
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="brutal-card p-6 sticky top-28">
                <div className="label mb-4">/ note</div>
                <p className="text-[#f5f1ea] font-display text-xl leading-tight">
                  Formation continue
                </p>
                <p className="mt-4 text-[13px] text-[#a39e93] leading-relaxed">
                  Je me forme en continu — chaque projet est l'occasion
                  d'apprendre, d'affiner ma pratique et d'ajouter de nouveaux
                  outils à ma boîte à outils. Actuellement, j'explore également
                  l'intégration de l'IA dans les interfaces web.
                </p>
                <div className="mt-6 pt-6 border-t border-[#1c1d22] flex items-center gap-3">
                  <span className="w-10 h-10 bg-[#ff551f] grid place-items-center text-[#07070a] font-display font-extrabold">
                    +
                  </span>
                  <span className="text-[13px] text-[#a39e93]">
                    De nouvelles compétences au fil des projets.
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
