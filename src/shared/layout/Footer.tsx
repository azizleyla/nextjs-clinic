import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "@/core/i18n/navigation";
import Button from "@/shared/ui/button";

const footerHeading =
  "text-sm font-semibold uppercase tracking-wide text-white/90 mb-4";

const Footer = () => {
  return (
    <footer className="mt-20 relative">
      {/* Təcili yardım çağırışı */}
      <div className="relative bg-gradient-to-r from-forest via-forest to-moss dark:from-forest dark:to-moss">
        <div aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-accent/70" />
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-center sm:text-left">
            <div className="flex items-center gap-3.5 text-white">
              <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/15 text-accent shrink-0">
                <FaPhone className="text-lg" />
              </span>
              <div>
                <p className="font-semibold">Təcili tibbi yardım: +07 554 332 322</p>
                <p className="text-sm text-white/80">7/24 xəstəxanamızla əlaqə saxlaya bilərsiniz</p>
              </div>
            </div>
            <Button href="/contact" variant="outline" label="Bizimlə əlaqə saxlayın" />
          </div>
        </div>
      </div>

      <div className="py-10 lg:py-14 text-white bg-navy dark:bg-zinc-950">
        <div className="container">
          <div className="grid grid-cols-1 sm-custom:grid-cols-2 gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-6">
            <div>
              <p className="font-heading text-2xl font-semibold text-white">
                Elmed <span className="text-accent">Hospital</span>
              </p>
              <p className="text-sm text-white/70 mt-3 leading-relaxed max-w-xs">
                1999-cu ildən etibarən müasir tibbi xidmətlər və peşəkar həkim
                komandamızla sağlamlığınızı qoruyuruq.
              </p>
              <div className="flex flex-col gap-2 text-sm text-white/90 mt-5">
                <span className="flex items-center gap-2">
                  <FaClock className="text-accent shrink-0" />
                  B.e – Ş: 09:00 – 16:00
                </span>
              </div>
              <ul className="flex gap-2 mt-5">
                <li>
                  <Link
                    href="/"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-accent hover:text-navy hover:border-accent transition-colors text-sm"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-accent hover:text-navy hover:border-accent transition-colors text-sm"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-accent hover:text-navy hover:border-accent transition-colors text-sm"
                    aria-label="YouTube"
                  >
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={footerHeading}>Sayt xəritəsi</h3>
              <ul className="flex flex-col gap-2 text-sm text-white/80 footer__links">
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
              <ul className="flex flex-col gap-2 text-sm text-white/80 footer__links">
                <li>
                  <Link href="/departments" className="hover:text-white transition-colors">
                    Kardiologiya
                  </Link>
                </li>
                <li>
                  <Link href="/departments" className="hover:text-white transition-colors">
                    Cərrahiyə
                  </Link>
                </li>
                <li>
                  <Link href="/departments" className="hover:text-white transition-colors">
                    Terapiya
                  </Link>
                </li>
                <li>
                  <Link href="/departments" className="hover:text-white transition-colors">
                    Radiologiya
                  </Link>
                </li>
                <li>
                  <Link href="/departments" className="hover:text-white transition-colors">
                    Stomatologiya
                  </Link>
                </li>
                <li>
                  <Link href="/departments" className="hover:text-white transition-colors">
                    Otorinolarinqologiya
                  </Link>
                </li>
                <li>
                  <Link href="/departments" className="hover:text-white transition-colors">
                    Oftalmologiya
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={footerHeading}>Əlaqə</h3>
              <ul className="flex flex-col gap-3 text-sm text-white/80">
                <li className="flex gap-3 items-start">
                  <FaLocationDot className="text-base shrink-0 mt-0.5 text-accent" />
                  <span>Bakı, Azərbaycan</span>
                </li>
                <li className="flex gap-3 items-start">
                  <FaPhone className="text-base shrink-0 mt-0.5 text-accent" />
                  <Link href="tel:+994124304303" className="hover:text-white transition-colors">
                    (+99412) 430 43 03
                  </Link>
                </li>
                <li className="flex gap-3 items-start">
                  <FaEnvelope className="text-base shrink-0 mt-0.5 text-accent" />
                  <Link href="mailto:hello@disin.com" className="hover:text-white transition-colors">
                    hello@disin.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-center sm:text-left">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Elmed Hospital. Bütün hüquqlar qorunur.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
