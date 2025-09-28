import AboutSection from "@/components/sections/about/AboutSection";
import BlogsSection from "@/components/sections/blogs/BlogsSection";
import Counter from "@/components/sections/counter/Counter";
import DoctorsSection from "@/components/sections/doctors/DoctorsSection";
import Hero from "@/components/sections/hero/Hero";
import Partners from "@/components/sections/partners/Partners";
import Services from "@/components/sections/services/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Counter isHome={true} />

      <AboutSection />
      <Services />
      <DoctorsSection />
      <BlogsSection />

      <Partners />
    </>
  );
}
