"use client";

import { useRef, useCallback } from "react";
import Button from "@/shared/ui/button";
import DoctorItem from "@/features/doctors/components/DoctorItem";
import SectionTitle from "@/shared/ui/typography/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import type { Doctor } from "../types";

import "swiper/css";
import "swiper/css/autoplay";

type DoctorsSectionProps = {
  doctors: Doctor[];
  isReleatedDoctor?: boolean;
};

const ChevronLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function DoctorsSection({
  doctors,
  isReleatedDoctor = false,
}: DoctorsSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const title = isReleatedDoctor
    ? "Digər şöbə həkimlərimiz"
    : "Həkimlərimiz";

  const hasDoctors = Array.isArray(doctors) && doctors.length > 0;
  const useSwiper = hasDoctors && doctors.length >= 3;

  const goPrev = useCallback(() => swiperRef.current?.slidePrev(), []);
  const goNext = useCallback(() => swiperRef.current?.slideNext(), []);

  return (
    <section className="doctors py-16 md:py-20 bg-slate-50/80 dark:bg-zinc-900/50 overflow-x-hidden">
      <div className="container relative">
        {/* Başlıq + oxlar eyni sətirdə */}
        <div className="flex flex-nowrap items-center justify-between gap-4 mb-8">
          <SectionTitle title={title} />
          {useSwiper && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={goPrev}
                className="w-11 h-11 rounded-full border-2 border-primary text-primary bg-white dark:bg-zinc-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                aria-label="Əvvəlki"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="w-11 h-11 rounded-full border-2 border-primary text-primary bg-white dark:bg-zinc-800 hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                aria-label="Növbəti"
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </div>

        {hasDoctors ? (
          useSwiper ? (
            <div className="overflow-hidden">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onBeforeDestroy={() => {
                  swiperRef.current = null;
                }}
                className="doctors-swiper"
                spaceBetween={24}
                slidesPerGroup={1}
                speed={500}
                watchOverflow
                grabCursor
                loop={doctors.length >= 3}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay]}
              >
                {doctors.map((doctor, index) => (
                  <SwiperSlide key={doctor?.id}>
                    <DoctorItem doctor={doctor} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {doctors.map((doctor, index) => (
                <DoctorItem key={doctor?.id} doctor={doctor} index={index} />
              ))}
            </div>
          )
        ) : (
          <p className="text-secondary text-center py-12">
            Həkimlər siyahısı hazırda göstərilə bilmir.
          </p>
        )}

        {!isReleatedDoctor && hasDoctors && (
          <div className="flex justify-center mt-10">
            <Button
              href="/doctors"
              variant="outline_primary"
              size="sm"
              label="Bütün həkimlər"
            />
          </div>
        )}
      </div>
    </section>
  );
}
