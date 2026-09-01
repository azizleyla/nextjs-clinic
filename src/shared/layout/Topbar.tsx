import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { LanguageSwitcher } from "@/shared/i18n/LanguageSwitcher";

const Topbar = () => {
  return (
    <div className="bg-navy text-white/90">
      <div className="container">
        <div className="flex justify-between sm:flex-row items-center py-2.5 flex-col gap-2">
          <ul className="flex gap-4 sm:gap-5 lg:gap-6 justify-center lg:justify-normal flex-wrap lg:flex-nowrap items-center">
            <li>
              <a
                href="tel:+07554332322"
                className="flex items-center gap-1.5 text-xs hover:text-white transition-colors"
              >
                <FaPhone className="shrink-0 text-[10px]" />
                <span>+07 554 332 322</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@disin.com"
                className="hidden sm:flex items-center gap-1.5 text-xs hover:text-white transition-colors"
              >
                <FaEnvelope className="shrink-0 text-[10px]" />
                <span>hello@disin.com</span>
              </a>
            </li>
            <li className="hidden md:flex items-center gap-1.5 text-xs">
              <FaLocationDot className="shrink-0 text-[10px]" />
              <span>Bakı, Azərbaycan</span>
            </li>
            <li className="flex items-center gap-1.5 text-xs">
              <FaClock className="shrink-0 text-[10px]" />
              <span>B.e – Ş: 09:00–16:00</span>
            </li>
          </ul>
          <div className="flex items-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
