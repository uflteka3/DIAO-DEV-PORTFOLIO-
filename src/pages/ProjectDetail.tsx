import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HiOutlineArrowLeft,
  HiOutlineExternalLink,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
} from "react-icons/hi";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <div className="pt-40 pb-24 container-x text-center">
          <div className="label mb-6 text-[#ff551f]">/ erreur 404</div>
          <h1 className="display mid">Projet introuvable.</h1>
          <Link
            to="/projets"
            className="btn-primary mt-10 inline-flex"
          >
            <HiOutlineArrowLeft size={16} />
            Retour aux projets
            <span className="cut" />
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <div className="container-x">
          <Link
            to="/projets"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-[#a39e93] hover:text-[#ff551f] transition-colors"
          >
            <HiOutlineArrowLeft size={14} />
            Retour index
          </Link>
        </div>

        <section className="container-x mt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-[#1c1d22]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
            <img
              src={project.image}
              alt={`Capture d'écran du projet ${project.name}`}
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070a]/90 via-[#07070a]/10 to-[#07070a]/25" />
            <div className="absolute inset-0 speed-lines opacity-20" />
            <div className="absolute top-0 left-0 p-6 flex items-start justify-between w-full">
              <div>
                <span className="chip accent">{project.category}</span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#f5f1ea]/70">
                / étude de cas
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-10">
              <h1 className="display big text-[#f5f1ea] drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                {project.name}
              </h1>
            </div>
            {/* Big corner tag */}
            <div className="absolute bottom-0 right-0 bg-[#ff551f] text-[#07070a] px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
              {project.url.replace(/^https?:\/\//, "").split("/")[0]}
            </div>
          </motion.div>
        </section>

        <section className="container-x mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-8 space-y-14">
            <div>
              <div className="label mb-4">/ brief</div>
              <h2 className="display mid leading-[1.02]">
                {project.shortDescription}
              </h2>
              <p className="mt-8 text-[#a39e93] leading-relaxed text-[16px] max-w-2xl">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="brutal-card p-6">
                <div className="label mb-3 text-[#ff551f]">/ contexte</div>
                <p className="text-[#f5f1ea]/80 text-[15px] leading-relaxed">
                  {project.context}
                </p>
              </div>
              <div className="brutal-card p-6">
                <div className="label mb-3 text-[#ff551f]">/ objectif</div>
                <p className="text-[#f5f1ea]/80 text-[15px] leading-relaxed">
                  {project.objective}
                </p>
              </div>
            </div>

            {project.challenges.length > 0 && (
              <div>
                <div className="label mb-6">/ défis & solutions</div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {project.challenges.map((c, i) => (
                    <motion.div
                      key={c.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      className="border border-[#1c1d22] p-6 bg-[#0c0d11] relative"
                    >
                      <span className="absolute -top-px -left-px w-8 h-8 bg-[#ff551f] grid place-items-center text-[#07070a] text-[11px] font-mono font-bold">
                        0{i + 1}
                      </span>
                      <div className="flex items-center gap-2 text-[#ff551f] mb-3 mt-3">
                        <HiOutlineLightBulb size={18} />
                        <span className="font-display font-semibold text-[#f5f1ea]">
                          {c.title}
                        </span>
                      </div>
                      <p className="text-[#a39e93] text-[14px] leading-relaxed flex gap-2">
                        <HiOutlineCheckCircle
                          className="mt-0.5 shrink-0 text-[#ff551f]"
                          size={16}
                        />
                        {c.solution}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="brutal-card p-6">
                <div className="label mb-4">/ stack</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 border border-[#22232a] font-mono text-[11px] uppercase tracking-widest text-[#f5f1ea]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="brutal-card p-6">
                <div className="label mb-4">/ visiter</div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  Site en ligne
                  <HiOutlineExternalLink size={16} />
                  <span className="cut" />
                </a>
                <Link
                  to="/projets"
                  className="btn-ghost w-full justify-center mt-3"
                >
                  <HiOutlineArrowLeft size={14} />
                  Retour
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </PageTransition>
  );
}
