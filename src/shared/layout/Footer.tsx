import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "@/core/i18n/navigation";

const footerHeading =
  "text-sm font-semibold uppercase tracking-wide text-white/90 mb-4";

const Footer = () => {
  return (
    <footer
      className="py-10 lg:py-14 mt-20 text-white relative bg-primary dark:bg-zinc-950"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm-custom:grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          <div>
            <h3 className={footerHeading}>İş vaxtları</h3>
            <div className="flex flex-col gap-2 text-sm text-white/90">
              <p>Bazar ertəsi - Şənbə</p>
              <p>09:00 - 16:00</p>
              <ul className="flex gap-2 mt-3">
                <li>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-primary hover:border-white transition-colors text-xs"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-primary hover:border-white transition-colors text-xs"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white hover:text-primary hover:border-white transition-colors text-xs"
                    aria-label="YouTube"
                  >
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className={footerHeading}>Sayt xəritəsi</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90 footer__links">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Əsas səhifə
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link href="/doctors" className="hover:text-white transition-colors">
                  Həkimlərimiz
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">
                  Bloq
                </Link>
              </li>
              <li>
                <Link href="/departments" className="hover:text-white transition-colors">
                  Şöbələr
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Bizimlə əlaqə
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={footerHeading}>Şöbələrimiz</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/90 footer__links">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Kardiologiya
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Cərrahiyə
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Terapiya
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Radiologiya
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Stomatologiya
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Otorinolarinqologiya
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Oftalmologiya
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={footerHeading}>Əlaqə</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/90">
              <li className="flex gap-3 items-start">
                <FaEnvelope className="text-base shrink-0 mt-0.5 text-white/80" />
                <div className="flex flex-col gap-0.5">
                  <Link href="mailto:disin@gmail.com" className="hover:text-white transition-colors">
                    disin@gmail.com
                  </Link>
                  <Link href="mailto:disin@gmail.com" className="hover:text-white transition-colors">
                    disin@gmail.com
                  </Link>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <FaPhone className="text-base shrink-0 mt-0.5 text-white/80" />
                <div className="flex flex-col gap-0.5">
                  <Link href="tel:+994124304303" className="hover:text-white transition-colors">
                    (+99412) 430 43 03
                  </Link>
                  <Link href="tel:+994124304303" className="hover:text-white transition-colors">
                    (+99412) 430 43 03
                  </Link>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-white/90">Bakı, Azərbaycan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
