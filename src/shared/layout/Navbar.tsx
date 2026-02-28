"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { menuItems } from "@/utils/constants/menuItem";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/core/theme/ThemeToggle";
import { Link } from "@/core/i18n/navigation";

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const pathname = usePathname();

  const handleOpenMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  //close menu
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIsShowMenu(false);
  }, [pathname]);

  return (
    <div className="container">
      <nav className="flex items-start lg:items-center  justify-between flex-wrap py-4 px-0">
        <Link href="/">
          <Image
            className="navbar__logo"
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={32}
          />
        </Link>

        <button onClick={handleOpenMenu} className="block lg:hidden">
          {isShowMenu ? (
            <FaXmark fontSize="50px" />
          ) : (
            <FaBars fontSize="50px" />
          )}
        </button>
        <ul
          className={` basis-full mt-4 border-t border-[#eee] lg:flex lg:basis-auto gap-8 lg:mt-0 lg:border-t-0 ${
            isShowMenu
              ? "block max-h-[60vh] overflow-y-auto py-3 px-0 gap-2"
              : "hidden basis-full"
          }`}
        >
          {menuItems.map((item, idx) => (
            <li className="relative py-2 lg:py-3 group" key={idx}>
              <div className="flex items-center">
                <Link
                  className="text-secondary font-medium transition-all duration-150 hover:text-primary"
                  href={item.href}
                >
                  {item.title}
                </Link>
                {item.children && <FaChevronDown />}
              </div>

              {item.children && (
                <ul className="block z-10 bg-white py-3 shadow-[0_0_15px_0_#ddd] px-0 rounded-md relative opacity-100 visible my-2 lg:absolute lg:w-64 lg:opacity-0 lg:invisible lg:mt-0 lg:border-l-0 group-hover:lg:opacity-100 group-hover:lg:visible group-hover:lg:top-full transition-all duration-300 border-t-2 border-[#0046c0] lg:top-20 lg:left-0 lg:min-w-[250px] ">
                  {item.children.map((child, cidx) => (
                    <li key={cidx}>
                      <Link
                        className="py-2 text-secondary font-medium px-3 text-sm block hover:text-primary"
                        href={child.href}
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex gap-6 items-center">
          <form className="hidden relative lg:block">
            <input
              className="h-10 py-1 px-2 border-[1px] border-[#dee2e6] rounded-md focus:border-[#86b7fe]  focus:outline-none"
              placeholder="Axtar..."
            />
            <button className="absolute flex items-center justify-center top-0 right-0 w-10 h-full rounded bg-[#d8e0e8]">
              <FaMagnifyingGlass fontSize="18px" color="#0046c0" />
            </button>
          </form>
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
