import { Link } from "react-router-dom";
import { FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#1c1d22] bg-[#0a0b0f] mt-28">
      {/* Massive brand wordmark */}
      <div className="container-x pt-16 pb-10 overflow-hidden">
        <div
          aria-hidden
          className="font-display font-extrabold text-[clamp(4rem,18vw,18rem)] leading-[0.85] tracking-[-0.06em] select-none"
        >
          <span className="text-[#f5f1ea]">DIAO</span>
          <span className="text-[#ff551f]">DEV</span>
          <span className="text-outline">.</span>
        </div>
      </div>

      <div className="container-x py-12 grid gap-10 md:grid-cols-12 border-t border-[#1c1d22]">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-3">
            <span className="w-10 h-10 grid place-items-center bg-[#ff551f] text-[#07070a] font-display font-extrabold text-lg leading-none -rotate-3">
              D
            </span>
            <div className="leading-none">
              <div className="font-display font-bold text-[15px] tracking-tight text-[#f5f1ea]">
                DIAO<span className="text-[#ff551f]">DEV</span>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#6d6a62] mt-0.5">
                / développeur web
              </div>
            </div>
          </Link>
          <p className="mt-6 text-[#a39e93] max-w-md text-[15px] leading-relaxed">
            Développeur web basé à Ouagadougou, Burkina Faso.
            <br />
            <em className="text-[#f5f1ea]">« Le monde sur un autre level. »</em>
          </p>
          <div className="mt-6 flex items-center gap-2">
            {[
              { href: "https://tiktok.com/@diaodev", Icon: FaTiktok, label: "TikTok" },
              { href: "https://www.facebook.com/profile.php?id=61592114285824", Icon: FaFacebookF, label: "Facebook" },
              { href: "https://wa.me/22674119750", Icon: FaWhatsapp, label: "WhatsApp", whatsapp: true },
            ].map(({ href, Icon, label, whatsapp }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`w-11 h-11 grid place-items-center border border-[#22232a] text-[#a39e93] hover:text-[#07070a] hover:border-transparent transition-all ${
                  whatsapp ? "hover:bg-[#25D366]" : "hover:bg-[#ff551f]"
                }`}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="label mb-5">Index</div>
          <ul className="space-y-3 text-[15px]">
            {[
              ["Accueil", "/"],
              ["À propos", "/a-propos"],
              ["Services", "/services"],
              ["Compétences", "/competences"],
              ["Projets", "/projets"],
              ["Contact", "/contact"],
            ].map(([label, to], i) => (
              <li key={to}>
                <Link
                  to={to}
                  className="group flex items-center gap-3 text-[#a39e93] hover:text-[#ff551f] transition-colors"
                >
                  <span className="font-mono text-[10px] text-[#6d6a62]">
                    0{/* */}{i + 1}
                  </span>
                  <span className="link-underline font-display text-base text-[#f5f1ea] group-hover:text-[#ff551f]">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="label mb-5">Contacts</div>
          <ul className="space-y-4 text-[15px]">
            <li className="flex items-start gap-3 text-[#a39e93]">
              <HiOutlineLocationMarker className="mt-0.5 text-[#ff551f] shrink-0" size={18} />
              Ouagadougou, Burkina Faso
            </li>
            <li>
              <a
                href="tel:+22673985249"
                className="flex items-start gap-3 text-[#a39e93] hover:text-[#ff551f] transition-colors"
              >
                <HiOutlinePhone className="mt-0.5 text-[#ff551f] shrink-0" size={18} />
                +226 73 98 52 49
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/22674119750"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-[#a39e93] hover:text-[#25D366] transition-colors"
              >
                <FaWhatsapp className="mt-0.5 text-[#ff551f] shrink-0" size={16} />
                WhatsApp : +226 74 11 97 50
              </a>
            </li>
            <li>
              <a
                href="mailto:Amadoudi1210@gmail.com"
                className="flex items-start gap-3 text-[#a39e93] hover:text-[#ff551f] transition-colors break-all"
              >
                <HiOutlineMail className="mt-0.5 text-[#ff551f] shrink-0" size={18} />
                Amadoudi1210@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1c1d22]">
        <div className="container-x py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-[#6d6a62]">
          <p>© {new Date().getFullYear()} DIAODEV. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#ff551f]" />
            Conçu & développé par Diao Amadou
          </p>
        </div>
      </div>
    </footer>
  );
}
