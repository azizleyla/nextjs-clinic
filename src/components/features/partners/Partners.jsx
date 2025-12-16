"use client";

import SectionTitle from "@/src/components/shared/title/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
SwiperCore.use([Navigation, Autoplay]);

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <SectionTitle title="Sığorta tərəfdaşlarımız" />
        <Swiper
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
            <div className="border flex justify-center border-[#eee] p-4">
              <img
                className="h-14 object-center"
                src="/images/pasha-logo.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex justify-center  border-[#eee] p-4">
              <img
                className="h-14 object-center"
                src="/images/xalq-logo.png"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border flex justify-center  border-[#eee] p-4">
              <img
                className="h-14 object-center"
                src="/images/senaye-sigorta-logo.png"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border flex justify-center  border-[#eee] p-4">
              <img
                className="h-14 object-center"
                src="/images/Icbari-Tibbi-Sigorta.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex justify-center  border-[#eee] p-4">
              <img
                className="h-14 object-center"
                src="/images/ata-sigorta.png"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border flex justify-center border-[#eee] p-4">
              <img
                className="h-14 object-center"
                src="/images/mega-sigorta.png"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
