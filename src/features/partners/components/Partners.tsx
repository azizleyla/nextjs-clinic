"use client";

import SectionTitle from "@/shared/ui/typography/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <SectionTitle subtitle="Etibarlı tərəfdaşlar" title="Sığorta tərəfdaşlarımız" />
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
          slidesPerView={5}
          loop={true}
          speed={5000}
          freeMode={true}
          grabCursor={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="flex h-24 items-center justify-center rounded-2xl border border-sand dark:border-zinc-700 p-5 bg-paper dark:bg-zinc-900 transition-shadow hover:shadow-lg hover:shadow-forest/5">
              <img
                className="h-12 object-center transition-transform duration-300 hover:scale-105"
                src="/images/pasha-logo.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-24 items-center justify-center rounded-2xl border border-sand dark:border-zinc-700 p-5 bg-paper dark:bg-zinc-900 transition-shadow hover:shadow-lg hover:shadow-forest/5">
              <img
                className="h-12 object-center transition-transform duration-300 hover:scale-105"
                src="/images/xalq-logo.png"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex h-24 items-center justify-center rounded-2xl border border-sand dark:border-zinc-700 p-5 bg-paper dark:bg-zinc-900 transition-shadow hover:shadow-lg hover:shadow-forest/5">
              <img
                className="h-12 object-center transition-transform duration-300 hover:scale-105"
                src="/images/senaye-sigorta-logo.png"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex h-24 items-center justify-center rounded-2xl border border-sand dark:border-zinc-700 p-5 bg-paper dark:bg-zinc-900 transition-shadow hover:shadow-lg hover:shadow-forest/5">
              <img
                className="h-12 object-center transition-transform duration-300 hover:scale-105"
                src="/images/Icbari-Tibbi-Sigorta.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-24 items-center justify-center rounded-2xl border border-sand dark:border-zinc-700 p-5 bg-paper dark:bg-zinc-900 transition-shadow hover:shadow-lg hover:shadow-forest/5">
              <img
                className="h-12 object-center transition-transform duration-300 hover:scale-105"
                src="/images/ata-sigorta.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex h-24 items-center justify-center rounded-2xl border border-sand dark:border-zinc-700 p-5 bg-paper dark:bg-zinc-900 transition-shadow hover:shadow-lg hover:shadow-forest/5">
              <img
                className="h-12 object-center transition-transform duration-300 hover:scale-105"
                src="/images/mega-sigorta.png"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
