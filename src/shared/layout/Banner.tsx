import { useTranslations } from "next-intl";
import React from "react";

type BannerProps = {
  pageKey?: string;
  dynamicTitle?: string;
};

const Banner = ({ pageKey, dynamicTitle }: BannerProps) => {
  const t = useTranslations(pageKey ?? "Common");

  return (
    <div className="w-full border-b-4 border-primary bg-navy dark:bg-zinc-950">
      <div className="container">
        <div className="flex h-32 md:h-36 lg:h-40 items-center justify-center md:justify-start text-center md:text-left">
          <h1 className="text-white text-xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
            {dynamicTitle ?? (pageKey ? t("title") : null)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
