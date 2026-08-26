import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineGlobeAlt,
  HiOutlineShoppingBag,
  HiOutlineDesktopComputer,
  HiOutlineCheck,
  HiOutlineArrowRight,
} from "react-icons/hi";
import PageTransition from "../components/PageTransition";

const services = [
  {
    Icon: HiOutlineGlobeAlt,
    number: "01",
    title: "Création de site web vitrine",
    description:
      "Un site élégant, rapide et responsive pour présenter votre activité, vos services et attirer de nouveaux clients.",
    features: [
      "Design sur-mesure moderne",
      "100% responsive mobile/tablette",
      "SEO de base optimisé",
      "Hébergement & mise en ligne",
    ],
    rotate: "-rotate-[0.8deg]",
  },
  {
    Icon: HiOutlineShoppingBag,
    number: "02",
    title: "Création de site e-commerce",
    description:
      "Une boutique en ligne performante avec catalogue, panier, paiement et gestion des commandes pour vendre partout.",
    features: [
      "Catalogue produits dynamique",
      "Panier & paiement en ligne",
      "Espace client & commandes",
      "Interface d'administration",
    ],
    rotate: "rotate-[0.4deg]",
    big: true,
  },
  {
    Icon: HiOutlineDesktopComputer,
    number: "03",
    title: "Développement d'application web",
    description:
      "Développement d'applications web sur-mesure (SaaS, dashboard, plateformes) pensées pour votre métier.",
    features: [
      "Analyse & conception UX/UI",
      "Développement React / Next.js",
      "API & base de données",
      "Déploiement & maintenance",
    ],
    rotate: "-rotate-[0.3deg]",
  },
];

export default function Services() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <section className="container-x">
          <div className="flex items-center justify-between mb-8">
            <span className="label text-[#ff551f]">
              <span className="inline-block w-8 h-px bg-[#ff551f] align-middle mr-3" />
              03 — Services
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6d6a62] hidden sm:block">
              / ce que je fabrique
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="lg:col-span-7">
              <h1 className="display big">
                Ce que je peux
                <br />
                <span className="text-[#ff551f]">construire pour vous.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#a39e93] text-[15px] leading-relaxed max-w-lg">
                Du site vitrine à l'application sur-mesure : des solutions web
                modernes, performantes et pensées pour vos utilisateurs.
              </p>
            </div>
          </div>

          {/* Cards grid — uneven sizes */}
          <div className="mt-20 grid gap-6 md:grid-cols-6">
            {services.map((s, i) => {
              const Icon = s.Icon;
              const span =
                i === 1
                  ? "md:col-span-4 md:row-span-2"
                  : i === 0
                  ? "md:col-span-3"
                  : "md:col-span-3";
              return (
                <motion.article
                  key={s.number}
                  initial={{
                    opacity: 0,
                    x: i === 0 ? -34 : i === 2 ? 34 : 0,
                    scale: i === 1 ? 0.96 : 1,
                  }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                  whileHover={{
                    y: -6,
                    rotate: 0,
                    borderColor: "rgba(255,85,31,0.7)",
                    boxShadow: "0 26px 70px -48px rgba(255,85,31,0.75)",
                  }}
                  className={`relative brutal-card p-7 sm:p-9 ${s.rotate} ${span} group transition-transform duration-500 ${
                    s.big ? "bg-[#0c0d11] md:min-h-[460px]" : ""
                  }`}
                >
                  {s.big && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#ff551f]" />
                  )}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 260 }}
                      className={`w-14 h-14 grid place-items-center border ${
                        s.big
                          ? "bg-[#ff551f] text-[#07070a] border-[#ff551f]"
                          : "border-[#22232a] text-[#ff551f]"
                      }`}
                    >
                      <Icon size={24} />
                    </motion.div>
                    <span className="font-mono text-[11px] tracking-widest text-[#6d6a62]">
                      / {s.number}
                    </span>
                  </div>

                  <h3
                    className={`mt-8 font-display text-[#f5f1ea] font-bold ${
                      s.big ? "text-4xl sm:text-5xl" : "text-3xl"
                    } leading-[0.95]`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-4 text-[#a39e93] leading-relaxed ${
                      s.big ? "text-base max-w-md" : "text-sm max-w-xs"
                    }`}
                  >
                    {s.description}
                  </p>

                  <ul className={`mt-7 space-y-2.5 ${s.big ? "mt-8" : ""}`}>
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-[#f5f1ea]/80">
                        <span
                          className={`mt-0.5 w-5 h-5 grid place-items-center shrink-0 ${
                            s.big
                              ? "bg-[#ff551f] text-[#07070a]"
                              : "border border-[#ff551f] text-[#ff551f]"
                          }`}
                        >
                          <HiOutlineCheck size={12} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`mt-8 inline-flex items-center gap-2 font-display font-medium group/link ${
                      s.big ? "btn-primary mt-10" : "text-[#f5f1ea] hover:text-[#ff551f]"
                    }`}
                  >
                    {s.big ? (
                      <>
                        Demander un devis
                        <HiOutlineArrowRight size={16} />
                        <span className="cut" />
                      </>
                    ) : (
                      <>
                        <span className="link-underline">Demander un devis</span>
                        <HiOutlineArrowRight
                          size={14}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </Link>
                </motion.article>
              );
            })}
          </div>

          {/* Big CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-24 relative border border-[#1c1d22] p-8 sm:p-14 overflow-hidden"
          >
            <div className="absolute inset-0 speed-lines opacity-60" />
            <div className="relative grid md:grid-cols-2 gap-8 items-end">
              <div>
                <div className="label mb-4">/ une idée en tête ?</div>
                <h2 className="display mid leading-none">
                  Un projet en tête ? <span className="text-[#ff551f]">Discutons-en.</span>
                </h2>
                <p className="mt-4 text-[#a39e93] max-w-md">
                  Chaque projet est unique. Contactez-moi pour un échange gratuit
                  et un devis adapté à vos besoins.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link to="/contact" className="btn-primary text-base">
                  Me contacter
                  <HiOutlineArrowRight size={16} />
                  <span className="cut" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
}
