import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { RiInstagramLine } from "react-icons/ri";
import { SlSocialTwitter } from "react-icons/sl";
import { ImFacebook } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
import { LanguageSwitcher } from "@/src/LanguageSwitcher";

const Topbar = () => {
  return (
    <div className="bg-white border border-[#f2f2f2]">
      <div className="container">
        <div className="flex justify-between  sm:flex-row  items-center p-4 flex-col gap-3">
          <div className="topbar__left">
            <ul className="flex gap-2 justify-center lg:justify-normal lg:gap-6 flex-wrap lg:flex-nowrap">
              <li>
                <a className="flex text-primary_bold items-center font-semibold text-sm gap-1">
                  <FaPhoneAlt className="text-primary text-md" />
                  Call : +07 554 332 322
                </a>
              </li>
              <li>
                <a className="flex text-primary_bold font-semibold  items-center text-sm gap-1">
                  <IoMdMail className="text-primary text-md" />
                  hello@disin.com
                </a>
              </li>
              <li>
                <a className="flex text-primary_bold font-semibold  items-center font-medium text-sm gap-1 ">
                  <IoLocationSharp className="text-primary text-md" />
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
                <ImFacebook />
              </a>
            </li>
            <li>
              <a
                className="text-white w-6 h-6 bg-primary font-medium text-sm flex items-center justify-center"
                href=""
              >
                <SlSocialTwitter />
              </a>
            </li>
            <li>
              <a
                className="text-white w-6 h-6 bg-primary font-medium text-sm flex items-center justify-center"
                href=""
              >
                <RiInstagramLine />
              </a>
            </li>
            <li>
              <a
                className="text-white w-6 h-6 bg-primary text-sm flex items-center justify-center"
                href=""
              >
                <IoLogoLinkedin />
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
