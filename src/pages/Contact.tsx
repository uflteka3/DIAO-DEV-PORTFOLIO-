import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FaWhatsapp, FaTiktok, FaFacebookF } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

interface FormState {
  name: string;
  email: string;
  message: string;
}
interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const update =
    (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((prev) => ({ ...prev, [k]: undefined }));
    };

  const validate = (): boolean => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Votre nom est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Un email valide est requis.";
    if (form.message.trim().length < 10)
      e.message = "Votre message doit contenir au moins 10 caractères.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 3200);
    }, 1300);
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-16">
        <section className="container-x">
          <div className="flex items-center justify-between mb-8">
            <span className="label text-[#ff551f]">
              <span className="inline-block w-8 h-px bg-[#ff551f] align-middle mr-3" />
              06 — Contact
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#6d6a62] hidden sm:block">
              / on se parle ?
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h1 className="display big leading-[0.92]">
                Parlons de votre
                <br />
                <span className="text-[#ff551f]">prochain projet.</span>
              </h1>
              <p className="mt-6 text-[#a39e93] text-[15px] leading-relaxed max-w-md">
                Une idée, un besoin, une question ? Envoyez-moi un message ou
                contactez-moi directement.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    label: "Localisation",
                    value: "Ouagadougou, Burkina Faso",
                    Icon: HiOutlineLocationMarker,
                  },
                  {
                    label: "Téléphone",
                    value: "+226 73 98 52 49",
                    href: "tel:+22673985249",
                    Icon: HiOutlinePhone,
                  },
                  {
                    label: "WhatsApp",
                    value: "+226 74 11 97 50",
                    href: "https://wa.me/22674119750",
                    Icon: FaWhatsapp,
                    accent: true,
                  },
                  {
                    label: "Email",
                    value: "Amadoudi1210@gmail.com",
                    href: "mailto:Amadoudi1210@gmail.com",
                    Icon: HiOutlineMail,
                  },
                ].map((item, i) => {
                  const Icon = item.Icon;
                  const Wrap = item.href ? "a" : "div";
                  return (
                    <Wrap
                      key={i}
                      href={item.href}
                      target={
                        item.href?.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href?.startsWith("http")
                          ? "noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 hoverable"
                    >
                      <div
                        className={`w-11 h-11 grid place-items-center border transition-colors ${
                          item.accent
                            ? "border-[#25D366] text-[#25D366] group-hover:bg-[#25D366] group-hover:text-[#07070a]"
                            : "border-[#22232a] text-[#ff551f] group-hover:bg-[#ff551f] group-hover:text-[#07070a] group-hover:border-[#ff551f]"
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="label">{item.label}</div>
                        <div className="font-display text-[#f5f1ea] text-base mt-0.5 group-hover:text-[#ff551f] transition-colors break-all">
                          {item.value}
                        </div>
                      </div>
                    </Wrap>
                  );
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-[#1c1d22]">
                <div className="label mb-4">/ réseaux</div>
                <div className="flex items-center gap-3">
                  <a
                    data-magnetic
                    href="https://tiktok.com/@diaodev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="TikTok DIAODEV"
                    className="w-11 h-11 grid place-items-center border border-[#22232a] text-[#a39e93] hover:bg-[#ff551f] hover:text-[#07070a] hover:border-transparent transition-all"
                  >
                    <FaTiktok size={14} />
                  </a>
                  <a
                    data-magnetic
                    href="https://www.facebook.com/profile.php?id=61592114285824"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook DIAODEV"
                    className="w-11 h-11 grid place-items-center border border-[#22232a] text-[#a39e93] hover:bg-[#ff551f] hover:text-[#07070a] hover:border-transparent transition-all"
                  >
                    <FaFacebookF size={14} />
                  </a>
                </div>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-[#6d6a62]">
                  @DIAODEV
                </p>
              </div>
            </div>

            {/* Form — brutalist look */}
            <div className="lg:col-span-7">
              <form
                onSubmit={submit}
                noValidate
                className="brutal-card p-6 sm:p-10"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="label">/ formulaire</div>
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#25D366]">
                    <span className="w-1.5 h-1.5 bg-[#25D366] animate-pulse" />
                    Disponible
                  </span>
                </div>

                <div className="space-y-6">
                  <FormRow
                    num="01"
                    label="Nom"
                    error={errors.name}
                  >
                    <input
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Diao Amadou"
                      className="w-full bg-transparent border-0 border-b border-[#22232a] px-0 py-3 text-[#f5f1ea] placeholder-[#6d6a62] focus:border-[#ff551f] outline-none transition-colors font-display text-lg"
                    />
                  </FormRow>

                  <FormRow
                    num="02"
                    label="Email"
                    error={errors.email}
                  >
                    <input
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="vous@exemple.com"
                      className="w-full bg-transparent border-0 border-b border-[#22232a] px-0 py-3 text-[#f5f1ea] placeholder-[#6d6a62] focus:border-[#ff551f] outline-none transition-colors font-display text-lg"
                    />
                  </FormRow>

                  <FormRow
                    num="03"
                    label="Message"
                    error={errors.message}
                  >
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={5}
                      placeholder="Parlez-moi de votre projet…"
                      className="w-full bg-transparent border-0 border-b border-[#22232a] px-0 py-3 text-[#f5f1ea] placeholder-[#6d6a62] focus:border-[#ff551f] outline-none transition-colors resize-none font-display text-base leading-relaxed"
                    />
                  </FormRow>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#6d6a62]">
                    / je réponds dans la journée
                  </p>
                  <motion.button
                    type="submit"
                    disabled={status !== "idle"}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary self-start sm:self-auto"
                  >
                    {status === "loading" && (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-[#07070a]/40 border-t-[#07070a]"
                      />
                    )}
                    {status === "success" && <HiOutlineCheckCircle size={18} />}
                    {status === "idle" && <HiOutlinePaperAirplane size={16} />}
                    {status === "idle" && "Envoyer le message"}
                    {status === "loading" && "Envoi en cours…"}
                    {status === "success" && "Message envoyé !"}
                    <span className="cut" />
                  </motion.button>
                </div>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 p-4 border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] text-sm flex items-center gap-2"
                    >
                      <HiOutlineCheckCircle size={18} />
                      Merci ! Votre message a bien été pris en compte, je vous
                      réponds au plus vite.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

function FormRow({
  num,
  label,
  error,
  children,
}: {
  num: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-1">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff551f]">
          {num}
        </span>
        <span className="label">{label}</span>
      </div>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#ff551f]"
          >
            / {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
