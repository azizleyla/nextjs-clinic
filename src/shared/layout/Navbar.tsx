"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { menuItems } from "@/utils/constants/menuItem";
import { usePathname } from "next/navigation";
import DarkModeToggle from "@/core/theme/ThemeToggle";
import { LanguageSwitcher } from "@/shared/i18n/LanguageSwitcher";
import { Link } from "@/core/i18n/navigation";
import Button from "@/shared/ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const path = pathname || "/";
    const normalizedHref = href === "/" ? "/" : href.replace(/^\/+/, "");
    // Drop locale segment: /az/about -> about / about/...
    const pathWithoutLeadingSlash = path.replace(/^\/+/, "");
    const segments = pathWithoutLeadingSlash.split("/");
    const withoutLocale = segments.slice(1).join("/"); // "" for home, "about", "about/xyz", etc.

    if (href === "/") {
      // Ana səhifə: yalnız locale-dən sonra heç nə yoxdursa aktiv olsun
      return withoutLocale === "";
    }

    return (
      withoutLocale === normalizedHref ||
      withoutLocale.startsWith(normalizedHref + "/")
    );
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Mobil menyu açıq olanda Tawk chat balonu "Tema" sırasının üzərinə düşür — gizlədirik
  useEffect(() => {
    const tawkApi = (window as Window & {
      Tawk_API?: { hideWidget?: () => void; showWidget?: () => void };
    }).Tawk_API;

    if (menuOpen) {
      tawkApi?.hideWidget?.();
    } else {
      tawkApi?.showWidget?.();
    }

    return () => {
      tawkApi?.showWidget?.();
    };
  }, [menuOpen]);

  return (
    <header className="bg-paper/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-sand dark:border-zinc-800 sticky top-0 z-50">
    <div className="container relative">
      <nav className="flex items-center justify-between py-4 px-0 gap-6">
        <Link href="/" className="shrink-0">
          <Image
            className="navbar__logo"
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={32}
          />
        </Link>

        {/* Desktop: mərkəzdə menyu */}
        <ul className="hidden lg:flex items-center gap-8">
          {menuItems.map((item, idx) => (
            <li className="relative py-3 group" key={idx}>
              <div className="flex items-center gap-1">
                <Link
                  className={`font-medium transition-colors border-b-2 py-1 ${
                    isActive(item.href)
                      ? "text-forest border-forest"
                      : "text-secondary border-transparent hover:text-forest"
                  }`}
                  href={item.href}
                >
                  {item.title}
                </Link>
                {item.children && <FaChevronDown className="text-xs text-secondary" />}
              </div>
              {item.children && (
                <ul className="absolute left-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 bg-paper dark:bg-zinc-900 py-3 shadow-xl shadow-forest/10 rounded-2xl border border-sand dark:border-zinc-800">
                  {item.children.map((child, cidx) => (
                    <li key={cidx}>
                      <Link
                        className="py-2 px-4 text-secondary text-sm block hover:text-forest hover:bg-surface dark:hover:bg-zinc-800"
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

        <div className="flex items-center gap-3 lg:gap-4">
          <form className="hidden xl:block relative" role="search">
            <label htmlFor="navbar-search" className="sr-only">
              Axtar
            </label>
            <input
              id="navbar-search"
              className="h-10 py-1 pl-4 pr-11 w-44 border border-sand dark:border-zinc-600 rounded-full bg-surface dark:bg-zinc-800 text-secondary focus:border-forest focus:outline-none transition-colors"
              placeholder="Axtar..."
            />
            <button
              type="submit"
              className="absolute right-1 top-1 h-8 w-8 flex items-center justify-center rounded-full bg-forest text-cream hover:bg-primary-dark transition-colors"
              aria-label="Axtar"
            >
              <FaMagnifyingGlass className="text-base" />
            </button>
          </form>

          <div className="hidden lg:block">
            <DarkModeToggle />
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
            label="Əlaqə saxlayın"
          />

          {/* Mobil: yalnız menyu düyməsi — dark mode menyu içində */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-sand dark:border-zinc-600 text-secondary hover:bg-surface hover:text-forest dark:hover:bg-zinc-800 transition-colors"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Menyunu bağla" : "Menyunu aç"}
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </nav>

      {/* Mobil menyu: sağdan sürüşən panel */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div
          className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[280px] bg-paper dark:bg-zinc-900 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-sand dark:border-zinc-800">
            <span className="font-heading text-lg font-semibold text-ink dark:text-white">Menyu</span>
            <button
              type="button"
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface hover:text-forest dark:hover:bg-zinc-800 text-secondary transition-colors"
              aria-label="Bağla"
            >
              <FaTimes className="text-lg" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto py-2 pb-6">
            {menuItems.map((item, idx) => (
              <li key={idx} className="border-b border-sand/70 dark:border-zinc-800/80">
                <Link
                  className={`block py-3.5 px-5 font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-forest bg-surface dark:bg-zinc-800/60"
                      : "text-secondary dark:text-primary hover:text-forest hover:bg-surface dark:hover:bg-zinc-800/50"
                  }`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <ul className="pb-2">
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <Link
                          className="block py-2.5 px-5 pl-7 text-sm text-primary_bold dark:text-zinc-400 hover:text-forest hover:bg-surface dark:hover:bg-zinc-800/50 transition-colors"
                          href={child.href}
                          onClick={closeMenu}
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
          <div className="p-4 pb-24 border-t border-sand dark:border-zinc-800 bg-surface dark:bg-zinc-800/30">
            <p className="text-xs font-semibold text-primary_bold dark:text-zinc-400 uppercase tracking-wider mb-3">Seçimlər</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary dark:text-primary">Dil</span>
                <LanguageSwitcher />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary dark:text-primary">Tema</span>
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Navbar;
