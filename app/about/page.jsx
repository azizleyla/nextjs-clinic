import AboutSection from "@/components/sections/about/AboutSection";
import Counter from "@/components/sections/counter/Counter";
import DoctorsSection from "@/components/sections/doctors/DoctorsSection";
import Services from "@/components/sections/services/ServicesSection";
import Banner from "@/components/ui/components/banner";
import dynamic from "next/dynamic";
import React from "react";

const About = () => {
  return (
    <div>
      <Banner title="Haqqımızda" />
      <div className="container">
        <AboutSection />
      </div>

      <Counter />
      <Services />
      <DoctorsSection />
    </div>
  );
};

export default About;
