import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineCode,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import PageTransition from "../components/PageTransition";
import CountUp from "../components/CountUp";

const timeline = [
  {
    period: "2007 — 2013",
    title: "École primaire publique de Salemboaré",
    detail: "Obtention du CEP",
    Icon: HiOutlineBookOpen,
  },
  {
    period: "2013 — 2014",
    title: "6ème — Lycée Départemental de Yondé",
    detail: "Entrée au secondaire",
    Icon: HiOutlineAcademicCap,
  },
  {
    period: "2015 — 2016",
    title: "5ème et 4ème — Collège Départemental de Salemboaré",
    detail: "Poursuite du 1er cycle",
    Icon: HiOutlineAcademicCap,
  },
  {
    period: "2017 — 2018",
    title:
      "3ème puis obtention du BEPC — Collège de Salemboaré puis Lycée Départemental de Yondé",
    detail: "Diplômé du BEPC",
    Icon: FaGraduationCap,
  },
  {
    period: "2019 — 2020",
    title: "Seconde C et Première — Lycée Municipal de Tenkodogo",
    detail: "Filière scientifique",
    Icon: HiOutlineAcademicCap,
  },
  {
    period: "2021",
    title:
      "Arrêt du système scolaire classique, découverte du développement web en autodidacte",
    detail: "Formation continue depuis 2021",
    Icon: HiOutlineSparkles,
    highlight: true,
  },
  {
    period: "Aujourd'hui",
    title: "3 ans d'expérience en développement web & IA",
    detail: "Basé à Ouagadougou",
    Icon: HiOutlineCode,
    highlight: true,
  },
];

const stats = [
  { end: 12, suffix: "+", label: "Projets réalisés", num: "01" },
  { end: 10, suffix: "+", label: "Clients satisfaits", num: "02" },
  { end: 3, suffix: "+", label: "Années d'expérience", num: "03" },
  { end: 11, suffix: "", label: "Technos maîtrisées", num: "04" },
];

const infos = [
  { label: "Nom", value: "Diao Amadou" },
  { label: "Localisation", value: "Ouagadougou, Burkina Faso", Icon: HiOutlineLocationMarker },
  { label: "Expérience", value: "3 ans (Web & IA)", Icon: HiOutlineCode },
  { label: "Disponibilité", value: "Freelance / mission", Icon: HiOutlineSparkles },
  { label: "Email", value: "Amadoudi1210@gmail.com", Icon: HiOutlineMail },
];

export default function About() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <section className="container-x">
          {/* Section label row */}
          <div className="flex items-center justify-between mb-8">
            <span className="label text-[#ff551f]">
              <span className="inline-block w-8 h-px bg-[#ff551f] align-middle mr-3" />
              02 — À propos
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6d6a62] hidden sm:block">
              / chapitre deuxième
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-8">
              <h1 className="display big">
                Autodidacte, curieux,
                <br />
                <span className="text-[#ff551f]">passionné de code.</span>
              </h1>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.28em] text-[#6d6a62]">
                Depuis Ouagadougou · disponible dans le monde entier
              </p>
              <div className="mt-10 space-y-5 text-[#a39e93] leading-relaxed text-[16px] max-w-2xl">
                <p>
                  Je m'appelle <strong className="text-[#f5f1ea] font-medium">Diao Amadou</strong>,
                  développeur web basé à Ouagadougou, Burkina Faso. J'ai arrêté le
                  système scolaire classique en <strong className="text-[#f5f1ea]">2021</strong>{" "}
                  après avoir suivi un parcours scientifique jusqu'en Première.
                </p>
                <p>
                  À partir de là, j'ai commencé à explorer le web par curiosité — et
                  très vite, j'y ai découvert une véritable passion : le{" "}
                  <strong className="text-[#f5f1ea]">développement web</strong>. Depuis,
                  je me forme en continu, chaque jour, en autodidacte : documentation,
                  projets personnels, veille technologique.
                </p>
                <p>
                  Aujourd'hui, avec plus de{" "}
                  <strong className="text-[#f5f1ea]">3 ans d'expérience</strong> dans le
                  développement web et l'IA, je conçois et construis des sites et
                  applications modernes, rapides et pensés pour l'utilisateur. Mon
                  slogan résume ma démarche :{" "}
                  <em className="text-[#ff551f] not-italic font-medium">
                    « Le monde sur un autre level. »
                  </em>
                </p>
              </div>
            </div>

            {/* Vertical info card (brutal style) */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="brutal-card p-6 md:p-7"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="label">/ Fiche signalétique</span>
                  <span className="w-2 h-2 bg-[#ff551f]" />
                </div>
                <ul className="space-y-5">
                  {infos.map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      {item.Icon ? (
                        <div className="w-9 h-9 grid place-items-center border border-[#22232a] text-[#ff551f] shrink-0">
                          <item.Icon size={16} />
                        </div>
                      ) : (
                        <div className="w-9 h-9 grid place-items-center border border-[#22232a] text-[#ff551f] font-mono text-[11px] shrink-0">
                          0{i + 1}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="label">{item.label}</div>
                        <div className="text-[#f5f1ea] font-display text-[15px] mt-0.5 break-words">
                          {item.value}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats — not a clean 4-col grid but with big numbers and a running line */}
        <section className="container-x mt-28">
          <div className="flex items-center justify-between mb-8">
            <span className="label text-[#ff551f]">
              <span className="inline-block w-8 h-px bg-[#ff551f] align-middle mr-3" />
              En chiffres
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative border-t border-b border-[#1c1d22] py-12 grid grid-cols-2 lg:grid-cols-4"
          >
            <div className="absolute inset-y-0 left-0 right-0 container-x pointer-events-none hidden lg:flex">
              <div className="flex-1 border-l border-[#1c1d22] first:border-l-0" />
              <div className="flex-1 border-l border-[#1c1d22]" />
              <div className="flex-1 border-l border-[#1c1d22]" />
              <div className="flex-1 border-l border-[#1c1d22]" />
            </div>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="px-4 py-3 relative"
                style={{
                  transform: i % 2 ? "translateY(14px)" : "none",
                }}
              >
                <div className="label mb-4">
                  <span className="text-[#ff551f]">{s.num}</span> — {s.label}
                </div>
                <div className="big-num text-[clamp(3rem,7vw,5.5rem)] text-[#f5f1ea]">
                  <CountUp end={s.end} suffix={s.suffix} />
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Timeline — asymmetrical, hard-edged */}
        <section className="container-x mt-28 max-w-5xl">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="label text-[#ff551f]">
                <span className="inline-block w-8 h-px bg-[#ff551f] align-middle mr-3" />
                03 — Parcours
              </span>
              <h2 className="display mid mt-3">
                Mon parcours scolaire & <span className="text-[#ff551f]">autodidacte</span>
              </h2>
            </div>
          </div>

          <div className="relative mt-12">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-[#1c1d22]"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 1.6, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] bg-[#ff551f]"
            />

            <ul className="space-y-8">
              {timeline.map((item, i) => {
                const Icon = item.Icon;
                const isHighlight = item.highlight;
                return (
                  <motion.li
                    key={item.period + i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.04 }}
                    className="relative pl-20 sm:pl-24"
                  >
                    <div
                      className={`absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 grid place-items-center ${
                        isHighlight
                          ? "bg-[#ff551f] text-[#07070a] border-[#ff551f]"
                          : "bg-[#0c0d11] border-[#ff551f] text-[#ff551f]"
                      } border-2`}
                    >
                      <Icon size={22} />
                    </div>

                    <div
                      className={`relative p-5 sm:p-6 border ${
                        isHighlight
                          ? "border-[#ff551f] bg-[#0c0d11]"
                          : "border-[#1c1d22] bg-[#0a0b0f]"
                      }`}
                    >
                      {isHighlight && (
                        <>
                          <div className="absolute top-0 right-0 w-3 h-3 bg-[#ff551f]" />
                          <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#ff551f]" />
                        </>
                      )}
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#ff551f]">
                          {item.period}
                        </span>
                      </div>
                      <h3 className="font-display text-[#f5f1ea] font-semibold text-lg leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-[#a39e93] text-sm leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
