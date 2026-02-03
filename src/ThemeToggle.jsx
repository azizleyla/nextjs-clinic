"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const currentTheme = mounted ? theme : "light";

  return (
    <div>
      <input
        id="theme-toggle"
        className="opacity-0 checkbox  absolute"
        type="checkbox"
        checked={currentTheme === "dark"}
        onChange={handleChange}
      />
      <label
        htmlFor="theme-toggle"
        className="checkbox-label bg-primary  w-12 h-7  rounded-full p-[5px] relative  cursor-pointer  flex justify-between items-center"
      >
        <FaMoon color="#f1c40f" />
        <FaSun color="#f39c12" />
        <span
          className={`bg-white    transform duration-200 ease-linear w-[22px] h-[22px] absolute left-[2px] top-[2px] rounded-full   ${mounted && theme === "dark" ? "translate-x-6" : ""}`}
        ></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
