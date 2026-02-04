import {
  AboutSection,
  Banner,
  Counter,
  DepartmentsSection,
} from "@/src/components";
import DoctorsSectionWrapper from "@/src/components/features/doctors/DoctorsSectionWrapper";
import { createMetadata } from "@/src/lib/metadata";
import React from "react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;
  return createMetadata({
    title: "Haqqımızda",
    description:
      "Elmed Hospital haqqında daha çox məlumat əldə edin. Missiyamız, dəyərlərimiz və həkimlərimiz.",
    path: "/about",
    keywords: ["Haqqımızda", "Həkimlər", "Tibbi xidmətlər"],
    locale,
  });
}
export default async function About() {
  return (
    <>
      <Banner pageKey="AboutPage" />
      <div className="container">
        <AboutSection />
      </div>
      <Counter />
      <DepartmentsSection />
      <DoctorsSectionWrapper />
    </>
  );
}
