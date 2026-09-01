"use client";
import React from "react";
import { FaUsers, FaFlask } from "react-icons/fa";
import { FaUserDoctor, FaLocationDot } from "react-icons/fa6";
import CountUp from "react-countup";

type CounterProps = {
  isHome?: boolean;
};

const stats = [
  { icon: FaUsers, end: 1000, label: "İşçi heyəti" },
  { icon: FaUserDoctor, end: 70, label: "Həkim" },
  { icon: FaLocationDot, end: 22, label: "Filial" },
  { icon: FaFlask, end: 3000, label: "Laborator müayinə" },
];

const Counter = ({ isHome }: CounterProps) => {
  return (
    <div className={`container ${isHome ? "-mt-10 md:-mt-14 lg:-mt-16" : "mt-20"}`}>
      <div className={`bg-paper dark:bg-zinc-900 border border-sand dark:border-zinc-800 rounded-[2rem] grid grid-cols-1 sm-custom:grid-cols-2 md:grid-cols-4 divide-y sm-custom:divide-y-0 sm-custom:divide-x divide-sand dark:divide-zinc-800 ${isHome ? "relative z-10 shadow-2xl shadow-forest/10" : ""}`}>
        {stats.map(({ icon: Icon, end, label }) => (
          <div key={label} className="group flex flex-col items-center gap-2 py-9 px-4 text-center">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-forest/10 text-forest mb-1 transition-colors group-hover:bg-clay/15 group-hover:text-clay">
              <Icon className="text-xl" />
            </span>
            <h3 className="font-heading text-ink dark:text-white font-semibold text-3xl lg:text-4xl">
              <CountUp start={0} end={end} duration={2.5} separator="," />
              <span className="text-clay">+</span>
            </h3>
            <p className="text-sm text-primary_bold font-medium">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
