import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LanguageSwitcher } from "@/shared/i18n/LanguageSwitcher";

const Topbar = () => {
  return (
    <div className="bg-slate-50 dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800">
      <div className="container">
        <div className="flex justify-between sm:flex-row items-center py-2.5 px-4 flex-col gap-2">
          <div className="topbar__left">
            <ul className="flex gap-4 sm:gap-5 lg:gap-6 justify-center lg:justify-normal flex-wrap lg:flex-nowrap items-center">
              <li>
                <a
                  href="tel:+07554332322"
                  className="flex text-zinc-600 dark:text-zinc-400 items-center gap-1.5 text-xs hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaPhone className="text-primary shrink-0 text-[10px]" />
                  <span>+07 554 332 322</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@disin.com"
                  className="flex text-zinc-600 dark:text-zinc-400 items-center gap-1.5 text-xs hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <FaEnvelope className="text-primary shrink-0 text-[10px]" />
                  <span>hello@disin.com</span>
                </a>
              </li>
              <li className="text-zinc-600 dark:text-zinc-400 text-xs">
                Bakı, Azərbaycan
              </li>
            </ul>
          </div>
          <ul className="flex gap-1 items-center">
            <li>
              <a
                className="text-primary hover:bg-primary/15 w-8 h-8 rounded flex items-center justify-center transition-colors text-sm"
                href="#"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                className="text-primary hover:bg-primary/15 w-8 h-8 rounded flex items-center justify-center transition-colors text-sm"
                href="#"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                className="text-primary hover:bg-primary/15 w-8 h-8 rounded flex items-center justify-center transition-colors text-sm"
                href="#"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className="text-primary hover:bg-primary/15 w-8 h-8 rounded flex items-center justify-center transition-colors text-sm"
                href="#"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
            {/* Desktop: dil seçimi topbarda; mobil: yalnız menyuda (Seçimlər) */}
            <li className="hidden lg:flex ml-2 pl-2 border-l border-zinc-200 dark:border-zinc-700 items-center">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
