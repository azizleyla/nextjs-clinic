import {
  AboutSection,
  Banner,
  Counter,
  DepartmentsSection,
} from "@/src/components";
import DoctorsSectionWrapper from "@/src/components/features/doctors/DoctorsSectionWrapper";
import React from "react";

export const metadata = {
  title: "Elmed Hospital | Haqqımızda",
  description:
    "Elmed Hospital haqqında daha çox məlumat əldə edin. Bizim missiyamız, dəyərlərimiz və təcrübəli həkimlərimizlə tanış olun.",
  keywords: [
    "Elmed Hospital",
    "Haqqımızda",
    "Tibbi xidmətlər",
    "Həkimlər",
    "Qəbula yazıl",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Elmed Hospital – Haqqımızda",
    description:
      "Elmed Hospital-in missiyası, dəyərləri və təcrübəli həkimləri ilə tanış olun.",
    url: "https://elmed-clinic.vercel.app/about",
    siteName: "Elmed Hospital",
    images: [
      {
        url: "https://elmed-clinic.vercel.app/images/logo.png",
        width: 800,
        height: 600,
        alt: "Elmed Hospital Haqqımızda",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmed Hospital – Haqqımızda",
    description:
      "Missiyamız, dəyərlərimiz və təcrübəli həkimlərimizlə tanış olun. Elmed Hospital sizin üçün buradadır.",
    images: ["https://elmed-clinic.vercel.app/images/logo.png"],
  },
};

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
