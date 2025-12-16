"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Swiper as SwiperCore } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Button from "../../ui/button";
SwiperCore.use([Navigation, Pagination]);

export default function Hero() {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide className="hero-slide">
          <div
            style={{
              backgroundImage: "url('/images/home-slider-bg.jpg')",
            }}
            className="relative lg:h-[730px]  bg-cover bg-center text-center h-full text-white flex items-center lg:py-0 md:py-32 py-20"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-primary opacity-80" />
            <div className="container">
              <div className="relative flex flex-col text-center items-center lg:text-left lg:items-start">
                <div className="flex relative order-2  z-10 items-center lg:items-start justify-center max-w-[600px] flex-col gap-4">
                  <h1 className="text-2xl md:text-[46px] leading-[1.4] font-semibold capitalize">
                    Sağlamlığınız Sağlamlığımızdır!
                  </h1>
                  <p className="leading-relaxed my-2">
                    Diamed Klinikası olaraq, 1999-cu ildən etibarən müasir
                    tibbi xidmətlər və peşəkar həkim komandamızla
                    sağlamlığınızı ən yüksək standartlarda qoruyuruq. Hər
                    addımda yanınızdayıq, sağlam gələcəyiniz üçün ən son
                    texnologiyalardan istifadə edirik.
                  </p>
                  <div className="flex gap-5 my-10">
                    <Button
                      variant="secondary"
                      href="/contact"
                      label="Qəbula yazıl"
                    />

                    <Button
                      label="Ətraflı bax"
                      href="/about"
                      variant="outline"
                    />
                  </div>
                </div>
                <div className="hero-slide__img flex lg:block">
                  <img
                    className="lg:absolute order-1 relative top-0 lg:top-28 xl:top-10 left-0 right-0 max-w-72 xl:-right-24 ml-auto mr-auto lg:mr-0 mb-4 md:max-w-xl lg:max-w-[520px] xl:max-w-[730px]"
                    src="/images/home-slider1.png"
                    alt="Slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="relative lg:h-[730px] h-full text-white flex items-center lg:py-0 md:py-32 py-20 text-center">
            <Image
              src="/images/home-slider-bg.jpg"
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-0 right-0 w-full h-full bg-primary opacity-80" />
            <div className="container">
              <div className="relative flex flex-col text-center items-center lg:text-left lg:items-start">
                <div className="flex relative order-2  z-10 items-center lg:items-start justify-center max-w-[570px] flex-col gap-4">
                  <h1 className="text-2xl md:text-5xl leading-6 font-semibold capitalize">
                    Sağlamlığınız Sağlamlığımızdır!
                  </h1>{" "}
                  <p className="leading-relaxed my-2">
                    Diamed Klinikası olaraq, 1999-cu ildən etibarən müasir
                    tibbi xidmətlər və peşəkar həkim komandamızla
                    sağlamlığınızı ən yüksək standartlarda qoruyuruq. Hər
                    addımda yanınızdayıq, sağlam gələcəyiniz üçün ən son
                    texnologiyalardan istifadə edirik.
                  </p>
                  <div className="flex gap-5 my-10">
                    <Button
                      href="/contact"
                      variant="secondary"
                      label="Qəbula yazıl"
                    />

                    <Button
                      label="Ətraflı bax"
                      href="/about"
                      variant="outline"
                    />
                  </div>
                </div>
                <div className="hero-slide__img flex lg:block">
                  <img
                    className="lg:absolute order-1 relative top-0 lg:top-28 xl:top-16 left-0 right-0 max-w-72 xl:-right-24 ml-auto mr-auto lg:mr-0 mb-4 md:max-w-xl lg:max-w-[520px] xl:max-w-[730px]"
                    src="/images/home-slider2.png"
                    alt="Slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hero-slide">
          <div
            style={{
              backgroundImage: "url('/images/home-slider-bg.jpg')",
            }}
            className="relative lg:h-[730px]  bg-cover bg-center text-center h-full text-white flex items-center lg:py-0 md:py-32 py-20"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-primary opacity-80" />
            <div className="container">
              <div className="relative flex flex-col text-center items-center lg:text-left lg:items-start">
                <div className="flex relative order-2  z-10 items-center lg:items-start justify-center max-w-[600px] flex-col gap-4">
                  <h1 className="text-2xl md:text-5xl leading-6 font-semibold capitalize">
                    Sağlamlığınız Sağlamlığımızdır!
                  </h1>{" "}
                  <p className="leading-relaxed my-2">
                    Diamed Klinikası olaraq, 1999-cu ildən etibarən müasir
                    tibbi xidmətlər və peşəkar həkim komandamızla
                    sağlamlığınızı ən yüksək standartlarda qoruyuruq. Hər
                    addımda yanınızdayıq, sağlam gələcəyiniz üçün ən son
                    texnologiyalardan istifadə edirik.
                  </p>
                  <div className="flex gap-5 my-10">
                    <Button
                      href="/contact"
                      variant="secondary"
                      label="Qəbula yazıl"
                    />
                    <Button
                      href="/about"
                      label="Ətraflı bax"
                      variant="outline"
                    />
                  </div>
                </div>
                <div className="hero-slide__img flex lg:block">
                  <img
                    className="lg:absolute order-1 relative top-0 lg:top-28 xl:top-16  left-0 right-0 max-w-72 xl:-right-24 ml-auto mr-auto lg:mr-0 mb-4 md:max-w-xl lg:max-w-[520px] xl:max-w-[730px]"
                    src="/images/home-slider3.png"
                    alt="Slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
