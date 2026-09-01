import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LanguageSwitcher } from "@/shared/i18n/LanguageSwitcher";

const Topbar = () => {
  return (
    <div className="relative z-[60] bg-navy text-white/85 border-b border-white/5">
      <div className="container">
        <div className="flex items-center justify-between gap-3 py-2">
          <ul className="flex items-center gap-3 sm:gap-5 lg:gap-6 min-w-0">
            <li className="min-w-0">
              <a
                href="tel:+07554332322"
                className="flex items-center gap-1.5 text-[11px] sm:text-xs hover:text-white transition-colors"
              >
                <FaPhone className="shrink-0 text-[10px] text-accent" />
                <span className="truncate">+07 554 332 322</span>
              </a>
            </li>
            <li className="hidden md:block">
              <a
                href="mailto:hello@disin.com"
                className="flex items-center gap-1.5 text-xs hover:text-white transition-colors"
              >
                <FaEnvelope className="shrink-0 text-[10px] text-accent" />
                <span>hello@disin.com</span>
              </a>
            </li>
            <li className="hidden lg:flex items-center gap-1.5 text-xs">
              <FaLocationDot className="shrink-0 text-[10px] text-accent" />
              <span>Bakı, Azərbaycan</span>
            </li>
            <li className="hidden sm:flex items-center gap-1.5 text-[11px] sm:text-xs">
              <FaClock className="shrink-0 text-[10px] text-accent" />
              <span>B.e – Ş: 09:00–16:00</span>
            </li>
          </ul>
          <div className="flex items-center shrink-0">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
