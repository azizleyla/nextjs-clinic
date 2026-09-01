import Hero from "./Hero";
import { fetchHeroSlides } from "@/features/home/api";
import type { HeroSlide } from "@/features/home/types";

type HeroSectionWrapperProps = {
  locale?: string;
};

export default async function HeroSectionWrapper({
  locale = "az",
}: HeroSectionWrapperProps) {
  // Xəta halında boş massiv → Hero statik fallback göstərir.
  const slides: HeroSlide[] = await fetchHeroSlides().catch(() => []);

  return <Hero slides={slides} locale={locale} />;
}
