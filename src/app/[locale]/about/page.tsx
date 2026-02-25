import {
  AboutSection,
  Banner,
  Counter,
  DepartmentsSection,
} from "@/components";
import DoctorsSectionWrapper from "@/features/doctors/components/DoctorsSectionWrapper";
import { createMetadata } from "@/core/seo/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
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
