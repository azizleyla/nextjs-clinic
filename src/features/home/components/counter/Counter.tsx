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
      <div className={`bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-2xl grid grid-cols-1 sm-custom:grid-cols-2 md:grid-cols-4 divide-y sm-custom:divide-y-0 sm-custom:divide-x divide-slate-100 dark:divide-zinc-800 ${isHome ? "relative z-10 shadow-xl shadow-navy/10" : ""}`}>
        {stats.map(({ icon: Icon, end, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 py-8 px-4 text-center">
            <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-1">
              <Icon className="text-xl" />
            </span>
            <h3 className="text-secondary dark:text-primary font-bold text-3xl lg:text-4xl">
              <CountUp start={0} end={end} duration={2.5} separator="," />+
            </h3>
            <p className="text-sm text-primary_bold font-medium">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
