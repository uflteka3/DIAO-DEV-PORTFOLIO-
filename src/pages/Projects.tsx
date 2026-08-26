import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink, HiOutlineArrowRight } from "react-icons/hi";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <section className="container-x">
          <div className="flex items-center justify-between mb-8">
            <span className="label text-[#ff551f]">
              <span className="inline-block w-8 h-px bg-[#ff551f] align-middle mr-3" />
              05 — Travaux
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6d6a62] hidden sm:block">
              / sélection 2021—2026
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <h1 className="display big">
                Une sélection de mes
                <br />
                <span className="text-[#ff551f]">réalisations.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[#a39e93] text-[15px] leading-relaxed">
                Chaque projet est une histoire — voici quelques-unes des
                plateformes que j'ai construites récemment.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-12">
            {projects.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -36 : 36,
                  rotate: i % 2 === 0 ? -1.5 : 1.5,
                }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className={`group relative ${
                  i % 2 === 0
                    ? "md:col-span-7 md:mt-0"
                    : "md:col-span-5 md:mt-16"
                }`}
              >
                {/* Project index */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] tracking-widest text-[#ff551f]">
                    / 0{i + 1}
                  </span>
                  <span className="chip">{p.category}</span>
                </div>

                {/* Cover — hard-edged frame */}
                <Link
                  to={`/projets/${p.slug}`}
                  className="block relative aspect-[4/3] overflow-hidden border border-[#1c1d22] bg-[#0c0d11]"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.gradient} transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06]`}
                  />
                  <img
                    src={p.image}
                    alt={`Capture d'écran du projet ${p.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/90 via-transparent to-transparent" />
                  <div className="absolute inset-0 speed-lines opacity-20" />
                  {/* Orange corner mark */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#ff551f] transition-transform duration-500 group-hover:scale-125 origin-top-right">
                    <div className="absolute inset-0 bg-[#07070a] translate-x-1/2 translate-y-1/2 rotate-45" />
                  </div>
                  <div className="absolute inset-0 flex items-end p-6 sm:p-8">
                    <div>
                      <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#f5f1ea] leading-[0.95] drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                </Link>

                {/* Body */}
                <div className="mt-5 grid grid-cols-12 gap-4">
                  <div className="col-span-12 sm:col-span-8">
                    <p className="text-[#a39e93] text-[15px] leading-relaxed">
                      {p.shortDescription}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest border border-[#22232a] text-[#a39e93]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-12 sm:col-span-4 flex sm:justify-end items-start gap-2 flex-wrap sm:flex-nowrap">
                    <Link
                      to={`/projets/${p.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-display font-medium text-[#f5f1ea] hover:text-[#ff551f] transition-colors link-underline"
                    >
                      Détails
                      <HiOutlineArrowRight size={14} />
                    </Link>
                    <a
                      data-magnetic
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#22232a] text-[#f5f1ea] text-xs font-mono uppercase tracking-widest hover:bg-[#ff551f] hover:text-[#07070a] hover:border-[#ff551f] transition-all"
                    >
                      Voir le site
                      <HiOutlineExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Next-up block */}
          <div className="mt-20 brutal-card p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-6 items-end">
              <div>
                <div className="label mb-4">/ à venir</div>
                <h2 className="display mid leading-none">
                  D'autres projets <span className="text-[#ff551f]">arrivent bientôt.</span>
                </h2>
              </div>
              <p className="text-[#a39e93] text-[15px] leading-relaxed md:text-right">
                La liste s'enrichit régulièrement.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
