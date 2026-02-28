import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { LanguageSwitcher } from "@/shared/i18n/LanguageSwitcher";

const Topbar = () => {
  return (
    <div className="bg-white border border-[#f2f2f2]">
      <div className="container">
        <div className="flex justify-between  sm:flex-row  items-center p-4 flex-col gap-3">
          <div className="topbar__left">
            <ul className="flex gap-2 justify-center lg:justify-normal lg:gap-6 flex-wrap lg:flex-nowrap">
              <li>
                <a className="flex text-primary_bold items-center font-semibold text-sm gap-1">
                  <FaPhone className="text-primary text-md" />
                  Call : +07 554 332 322
                </a>
              </li>
              <li>
                <a className="flex text-primary_bold font-semibold  items-center text-sm gap-1">
                  <FaEnvelope className="text-primary text-md" />
                  hello@disin.com
                </a>
              </li>
              <li>
                <a className="flex text-primary_bold font-semibold  items-center font-medium text-sm gap-1 ">
                  <FaLocationDot className="text-primary text-md" />
                  210-27 Quadra, Canada
                </a>
              </li>
            </ul>
          </div>
          <ul className="flex gap-2 items-center">
            <li>
              <a
                className="text-white w-6 h-6 bg-primary font-medium flex items-center text-sm  justify-center"
                href=""
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                className="text-white w-6 h-6 bg-primary font-medium text-sm flex items-center justify-center"
                href=""
              >
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a
                className="text-white w-6 h-6 bg-primary font-medium text-sm flex items-center justify-center"
                href=""
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                className="text-white w-6 h-6 bg-primary text-sm flex items-center justify-center"
                href=""
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="ml-4">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
