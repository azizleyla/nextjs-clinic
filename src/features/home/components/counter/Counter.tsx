"use client";
import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFlask } from "react-icons/fa";
import CountUp from "react-countup";

type CounterProps = {
  isHome?: boolean;
};

const Counter = ({ isHome }: CounterProps) => {
  return (
    <div className={isHome ? "container" : ""}>
      <div
        style={{
          backgroundImage:
            "url(https://disin-react.hibootstrap.com/images/map-bg.png)",
        }}
        className={`${
          isHome ? "mt-12 lg:-mt-36" : "mt-20"
        } bg-white rounded-lg shadow-[0_0_30px_0_hsla(0,0%,87%,0.651)] bg-cover bg-no-repeat relative  pt-11 pb-4 z-10 grid grid-cols-1 sm-custom:grid-cols-2 md:grid-cols-4`}
      >
        <div className="flex flex-col gap-2 mb-8 items-center">
          <FaUsers className="text-primary text-2xl lg:text-4xl" />
          <h3 className="text-primary font-bold text-3xl lg:text-5xl">
            <CountUp start={0} end={1000} duration={3} separator="," />
          </h3>
          <p className="text-sm text-secondary md:text-md font-semibold">
            İşçi heyəti
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-8 items-center">
          <FaUserDoctor className="text-primary text-2xl lg:text-4xl" />
          <h3 className="text-primary font-bold text-3xl lg:text-5xl">
            <CountUp start={0} end={70} duration={3} separator="," />
          </h3>
          <p className="text-sm md:text-md text-secondary  font-semibold">
            Həkim
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-8  items-center">
          <FaLocationDot className="text-primary text-2xl lg:text-4xl" />
          <h3 className="text-primary font-bold text-3xl lg:text-5xl">
            <CountUp start={0} end={22} duration={3} separator="," />
          </h3>
          <p className="text-sm md:text-md text-secondary  font-semibold">
            Filial
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-8 items-center">
          <FaFlask className="text-primary text-2xl lg:text-4xl" />
          <h3 className="text-primary font-bold text-3xl lg:text-5xl">
            <CountUp start={0} end={3000} duration={3} separator="," />
          </h3>
          <p className="text-sm md:text-md text-secondary font-semibold">
            Laborator müayinə
          </p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
