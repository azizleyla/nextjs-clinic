"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Image from "next/image";

const languages = [
  { value: "en", label: "EN", flag: "/images/en-flag.png" },
  { value: "az", label: "AZ", flag: "/images/az-flag.png" },
];

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const changeLocale = (newLocale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  const currentLang = languages.find((l) => l.value === currentLocale);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative  inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border rounded-md shadow-sm bg-white hover:bg-gray-100 focus:outline-none"
      >
        <Image
          width={25}
          height={25}
          alt="flag"
          src={currentLang.flag}
          className="mr-2"
        />
        <span className="font-medium text-black">{currentLang.label}</span>
        {open ? (
          <IoChevronUp className="text-black" />
        ) : (
          <IoChevronDown className="text-black" />
        )}
      </button>

      {open && (
        <div className="absolute  right-0 mt-2 w-full bg-white border rounded-md shadow-lg z-10">
          {languages
            .filter((lang) => lang.value !== currentLocale)
            .map((lang) => (
              <button
                key={lang.value}
                onClick={() => changeLocale(lang.value)}
                className="flex items-center gap-2 w-full px-3 py-1 hover:bg-gray-100"
              >
                <Image
                  alt="flag"
                  height={25}
                  width={25}
                  src={lang.flag}
                  className="mr-2"
                />
                <span className="text-black">{lang.label}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};
