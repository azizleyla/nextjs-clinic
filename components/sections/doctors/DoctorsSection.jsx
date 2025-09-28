"use client";

import Button from "@/components/ui/components/button";
import DoctorItem from "@/components/ui/components/doctor/DoctorItem";
import SectionTitle from "@/components/ui/components/title/SectionTitle";
import { doctors } from "@/constants/doctors";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const DoctorsSection = () => {
  return (
    <section className="doctors">
      <div className="container">
        <SectionTitle title="Həkimlərimiz" />

        <Swiper
          className="overflow-visible"
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          loop={true}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide>
              <DoctorItem doctor={doctor} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="all_btn-container">
          <Button
            href="/doctors"
            variant="outline_primary"
            label="Bütün həkimlər"
          />
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
