import { useTranslations } from "next-intl";
import React from "react";

type BannerProps = {
  pageKey?: string;
  dynamicTitle?: string;
};

const Banner = ({ pageKey, dynamicTitle }: BannerProps) => {
  const t = useTranslations(pageKey ?? "Common");

  return (
    <div className="w-full border-b border-slate-100/80 dark:border-zinc-800/80 bg-gradient-to-r from-primary to-primary/90 dark:from-zinc-950 dark:to-zinc-900">
      <div className="container">
        <div className="flex h-40 md:h-44 lg:h-52 items-center justify-center md:justify-start text-center md:text-left">
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            {dynamicTitle ?? (pageKey ? t("title") : null)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
