import { useTranslations } from "next-intl";
import React from "react";

type BannerProps = {
  pageKey?: string;
  dynamicTitle?: string;
};

const Banner = ({ pageKey, dynamicTitle }: BannerProps) => {
  const t = useTranslations(pageKey ?? "Common");

  return (
    <div className="relative isolate w-full overflow-hidden bg-cream dark:bg-zinc-950">
      {/* Soft botanical glow so the ivory header has warmth and depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sage/40 blur-[100px]"
      />
      {/* Faint rotating ring motif, echoing the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full border border-forest/10 md:block animate-spin-slow"
      >
        <div className="absolute inset-8 rounded-full border border-forest/10" />
      </div>
      <div className="container relative z-10">
        <div className="flex h-32 md:h-36 lg:h-44 items-center justify-center md:justify-start text-center md:text-left">
          <div className="max-w-2xl">
            <span
              aria-hidden
              className="mx-auto mb-3 block h-1 w-12 rounded-full bg-clay md:mx-0"
            />
            <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-ink dark:text-white">
              {dynamicTitle ?? (pageKey ? t("title") : null)}
            </h1>
          </div>
        </div>
      </div>
      {/* Hairline base rule in warm sand */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-sand" />
    </div>
  );
};

export default Banner;
