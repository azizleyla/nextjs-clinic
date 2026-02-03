import { useTranslations } from "next-intl";
import React from "react";

const Banner = ({ pageKey }) => {
  const t = useTranslations(pageKey);

  return (
    <div className="w-full flex text-center text-lg text-white lg:text-3xl justify-center items-center h-48 font-medium bg-primary">
      {t("title")}
    </div>
  );
};

export default Banner;
