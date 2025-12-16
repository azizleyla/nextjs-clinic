import React from "react";
import Button from "../../ui/button";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[350px] md:h-[550px] lg:h-[450px]">
            <div className="hidden lg:block absolute top-4 -left-3 w-[430px] h-[375px] bg-primary rounded-lg -z-10 animate-a-one"></div>

            {/* After element */}
            <div className="hidden  lg:block absolute bottom-4 -right-3 w-[430px] h-[375px] bg-primary rounded-lg -z-10 animate-a-two"></div>

            <Image
              fill
              objectFit="contain"
              alt="haqqimizda"
              className="w-full relative rounded-md lg:animate-a-seven"
              src="/images/about1.jpg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg md:text-3xl font-medium">Haqqımızda</h1>
            <p className="text-base text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Quis ipsum suspendisse ultrices gravida. Risus
              commodo viverra maecenas accumsan lacus vel facilisis.
            </p>
            <ul className="flex flex-col gap-2 mb-2">
              <li className="flex gap-3 items-center">
                <FaRegCheckCircle
                  className="text-primary"
                  fontSize="22px"
                />
                Browse Our website
              </li>
              <li className="flex gap-3 items-center">
                <FaRegCheckCircle
                  className="text-primary"
                  fontSize="22px"
                />
                Xidmət seç
              </li>
              <li className="flex gap-3 items-center">
                <FaRegCheckCircle
                  className="text-primary"
                  fontSize="22px"
                />
                Bizə yazın
              </li>
            </ul>
            <Button
              href="/about"
              variant="primary"
              className="self-start"
              label="Daha Ətraflı"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
