"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "@/shared/ui/button";
import type { HeroSlide } from "@/features/home/types";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

type HeroProps = {
  slides?: HeroSlide[];
  locale?: string;
};

const FALLBACK_IMAGE = "/images/surgeon.jpg";

function pickLocalized(
  value: Record<string, string> | undefined,
  locale: string,
): string {
  if (!value) return "";
  return value[locale] ?? value.az ?? Object.values(value)[0] ?? "";
}

/** Tək hero slaydının vizual təqdimatı (dizayn dəyişmir). */
function HeroSlideView({
  imageSrc,
  title,
  description,
  priority,
}: {
  imageSrc: string;
  title: string;
  description: string;
  priority?: boolean;
}) {
  return (
    <section className="relative isolate mt-0 overflow-hidden bg-navy">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />

      {/* Atmosphere: directional gradient so the spotlight stays visible on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />

      {/* Decorative glow */}
      <div
        aria-hidden
        className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/30 blur-[100px] animate-a-seven"
      />

      {/* Decorative ECG pulse line along the bottom edge */}
      <svg
        aria-hidden
        viewBox="0 0 400 40"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-10 text-accent/40"
      >
        <path
          d="M 0 28 L 90 28 L 110 8 L 130 32 L 150 28 L 400 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="250"
          className="animate-ecg-line"
        />
      </svg>

      <div className="container relative z-10 flex min-h-[560px] flex-col justify-center py-24 md:min-h-[620px] md:py-32 lg:min-h-[680px]">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3 animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Elmed Xəstəxanası
            </p>
          </div>

          <h1 className="animate-fade-up font-heading text-4xl font-semibold leading-[1.15] text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/80 [animation-delay:260ms] lg:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:400ms]">
            <Button href="/contact" label="Qəbula yazıl" variant="accent" size="lg" />
            <Button href="/doctors" label="Həkimi tap" variant="outline" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero({ slides = [], locale = "az" }: HeroProps) {
  const t = useTranslations("HomePage");

  const toView = (slide: HeroSlide, priority: boolean) => (
    <HeroSlideView
      imageSrc={slide.image_url?.trim() || FALLBACK_IMAGE}
      title={pickLocalized(slide.title, locale) || t("hero_title1")}
      description={pickLocalized(slide.description, locale) || t("hero_desc1")}
      priority={priority}
    />
  );

  // Slayd yoxdursa və ya backend əlçatmazdırsa — statik fallback.
  if (slides.length === 0) {
    return (
      <HeroSlideView
        imageSrc={FALLBACK_IMAGE}
        title={t("hero_title1")}
        description={t("hero_desc1")}
        priority
      />
    );
  }

  // Tək slayd üçün carousel-a ehtiyac yoxdur.
  if (slides.length === 1) {
    return toView(slides[0], true);
  }

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
      speed={700}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="hero-swiper"
      style={
        {
          "--swiper-pagination-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-color": "#ffffff",
          "--swiper-pagination-bullet-inactive-opacity": "0.4",
          "--swiper-pagination-bottom": "20px",
        } as React.CSSProperties
      }
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>{toView(slide, index === 0)}</SwiperSlide>
      ))}
    </Swiper>
  );
}
