"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/core/i18n/navigation";
import { FaArrowRight } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import type { HeroSlide } from "@/features/home/types";

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

/**
 * Clean, simple clinical hero. Strong type hierarchy, generous whitespace, one
 * confident image with a single floating "appointment" card. Bright and calm —
 * the opposite of the dark, busy carousels rivals use.
 */
export default function Hero({ slides = [], locale = "az" }: HeroProps) {
  const t = useTranslations("HomePage");

  const slide = slides[0];
  const imageSrc = slide?.image_url?.trim() || FALLBACK_IMAGE;
  const title = pickLocalized(slide?.title, locale) || t("hero_title1");
  const description =
    pickLocalized(slide?.description, locale) || t("hero_desc1");

  return (
    <section className="relative isolate overflow-hidden bg-cream">
      {/* One soft, calm glow — no clutter */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-sage/35 blur-[130px]"
      />

      <div className="container relative z-10">
        <div className="grid items-center gap-10 pt-8 pb-12 md:pt-10 md:pb-16 lg:grid-cols-2 lg:gap-14">
          {/* ── Left: the pitch ──────────────────────────────────── */}
          <div>
            <div className="mb-6 inline-flex animate-fade-up items-center gap-2.5 rounded-full border border-forest/15 bg-paper py-1.5 pl-2 pr-4 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-forest">
                Elmed Hospital · Bakı
              </span>
            </div>

            <h1 className="max-w-xl animate-fade-up font-heading text-[2rem] font-bold leading-[1.1] tracking-tight text-ink [animation-delay:120ms] sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-md animate-fade-up text-base leading-relaxed text-secondary/90 [animation-delay:240ms]">
              {description}
            </p>

            <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-4 [animation-delay:360ms]">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream shadow-lg shadow-forest/25 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Bizimlə əlaqə saxlayın
                <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/doctors"
                className="inline-flex items-center gap-2 rounded-full border border-forest/25 bg-paper px-6 py-3.5 text-base font-semibold text-forest transition-colors hover:border-forest/50 hover:bg-surface"
              >
                <FaUserDoctor className="text-accent" />
                Həkimi tap
              </Link>
            </div>

          </div>

          {/* ── Right: one clean image, fills the column ─────────── */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative h-[380px] w-full overflow-hidden rounded-[2.5rem] bg-sage/25 shadow-2xl shadow-forest/20 ring-1 ring-forest/10 sm:h-[460px] lg:h-[520px]">
              <Image
                src={imageSrc}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
