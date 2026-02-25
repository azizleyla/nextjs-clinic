import { useTranslations } from "next-intl";
import React from "react";

type BannerProps = {
  pageKey?: string;
  dynamicTitle?: string;
};

const Banner = ({ pageKey, dynamicTitle }: BannerProps) => {
  const t = useTranslations(pageKey);

  return (
    <div className="w-full flex text-center text-lg text-white lg:text-3xl justify-center items-center h-48 font-medium bg-primary">
      {pageKey ? t("title") : dynamicTitle}
    </div>
  );
};

export default Banner;
