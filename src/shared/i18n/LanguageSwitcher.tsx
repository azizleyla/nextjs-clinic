"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const languages = [
  { value: "en", label: "EN", flag: "/images/en-flag.png" },
  { value: "az", label: "AZ", flag: "/images/az-flag.png" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
    setOpen(false);
  };

  const currentLang = languages.find((l) => l.value === currentLocale) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border border-slate-200 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors min-w-[72px] justify-between"
      >
        <Image
          width={20}
          height={20}
          alt=""
          src={currentLang.flag}
          className="rounded-sm shrink-0"
        />
        <span className="font-medium text-secondary dark:text-primary text-sm">{currentLang.label}</span>
        {open ? (
          <FaChevronUp className="text-primary text-xs shrink-0" />
        ) : (
          <FaChevronDown className="text-primary text-xs shrink-0" />
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[72px] bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-600 rounded-lg shadow-lg z-50 py-1">
          {languages
            .filter((lang) => lang.value !== currentLocale)
            .map((lang) => (
              <button
                key={lang.value}
                type="button"
                onClick={() => changeLocale(lang.value)}
                className="flex items-center gap-2 w-full px-3 py-2 hover:bg-slate-50 dark:hover:bg-zinc-700 text-secondary dark:text-primary text-sm"
              >
                <Image alt="" height={20} width={20} src={lang.flag} className="rounded-sm" />
                <span>{lang.label}</span>
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
