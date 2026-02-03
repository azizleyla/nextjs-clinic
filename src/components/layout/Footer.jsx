import React from "react";
import {
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "@/src/i18n/navigation";

const Footer = () => {
  return (
    <footer
      className="py-12 lg:pt-28 pb-16 mt-28 text-white bg-cover background-bg-center relative bg-[#0843aa]"
      style={{
        backgroundImage:
          "url('https://disin-react.hibootstrap.com/images/footer-bg.png')",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 sm-custom:grid-cols-2 gap-y-4 lg:grid-cols-4">
          <div>
            <h3 className="text-lg md:text-2xl mb-5 font-semibold">İş vaxtları</h3>
            <div className="flex flex-col gap-3">
              <p>Bazar ertəsi - Şənbə</p>
              <p>09:00 - 16:00</p>
              <ul className="flex gap-2">
                <li className="group">
                  <Link
                    href="/"
                    className="leading-10 group-hover:bg-white w-10 transition-colors duration-500 flex items-center justify-center h-10 border-[1px] rounded-full text-center   border-[#ffffff38]"
                  >
                    <CiFacebook className="group-hover:text-primary text-md" />
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/"
                    className="leading-10 w-10 flex group-hover:bg-white transition-colors items-center justify-center h-10 border-[1px] rounded-full text-center   border-[#ffffff38]"
                  >
                    <FaInstagram className="group-hover:text-primary text-md" />
                  </Link>
                </li>
                <li className="group">
                  <Link
                    href="/"
                    className="leading-10 w-10 group-hover:bg-white transition-colors flex items-center justify-center h-10 border-[1px] rounded-full text-center   border-[#ffffff38]"
                  >
                    <FaYoutube className="group-hover:text-primary text-md" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-2xl mb-5 font-semibold">Sayt xəritəsi</h3>

            <ul className="flex flex-col gap-y-3 md:gap-y-4 footer__links">
              <li>
                <Link href="/">Əsas səhifə</Link>
              </li>
              <li>
                <Link href="/about">Haqqımızda</Link>
              </li>
              <li>
                <Link href="/doctors">Həkimlərimiz</Link>
              </li>
              <li>
                <Link href="/blogs">Bloq</Link>
              </li>
              <li>
                <Link href="/departments">Şöbələr</Link>
              </li>
              <li>
                <Link href="/contact">Bizimlə əlaqə</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-5">Şöbələrimiz</h3>
            <ul className="flex flex-col gap-y-3 md:gap-y-4 footer__links">
              <li>
                <Link href="/">Kardiologiya</Link>
              </li>
              <li>
                <Link href="/">Cərrahiyə</Link>
              </li>
              <li>
                <Link href="/">Terapiya</Link>
              </li>
              <li>
                <Link href="/">Radiologiya</Link>
              </li>
              <li>
                <Link href="/">Stomatologiya</Link>
              </li>
              <li>
                <Link href="/">Otorinolarinqologiya</Link>
              </li>
              <li>
                <Link href="/">Oftalmologiya</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-2xl mb-5 font-semibold">Əlaqə</h3>
            <ul className="flex flex-col gap-y-3 md:gap-y-4">
              <li className="flex gap-3 items-center">
                <CgMail className="text-3xl md:text-4xl" />
                <div className="flex flex-col">
                  <Link href="/">disin@gmail.com</Link>
                  <Link href="/">disin@gmail.com</Link>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <MdOutlinePhoneAndroid className="text-3xl md:text-4xl" />
                <div className="flex flex-col">
                  <Link href="/">(+99412) 430 43 03</Link>
                  <Link href="/">(+99412) 430 43 03</Link>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <FaLocationDot className="text-3xl md:text-4xl" />
                <span>210-27 Quadra, Market Street, Victoria Canada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
