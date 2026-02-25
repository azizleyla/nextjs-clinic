import {
  AboutSection,
  BlogsSection,
  Counter,
  Hero,
  Partners,
  DepartmentsSection,
} from "@/components";
import DoctorsSectionWrapper from "@/features/doctors/components/DoctorsSectionWrapper";
import { createMetadata } from "@/core/seo/metadata";
import { Suspense } from "react";
import Loading from "../loading";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  return createMetadata({
    title: "Ana səhifə",
    description:
      "Elmed Hospital – etibarlı səhiyyə platforması. Təcrübəli həkimlərlə tanış olun, xidmətlərimizi kəşf edin və sağlamlıq bloqlarımızla məlumatlı qalın.",
    path: "/",
    keywords: ["Səhiyyə", "Həkimlər", "Tibbi xidmətlər", "Klinikalar", "Bloqlar"],
    locale,
  });
}

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Counter isHome={true} />
      <AboutSection />
      <Suspense fallback={<Loading />}>
        <DepartmentsSection />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <DoctorsSectionWrapper />
      </Suspense>
      <BlogsSection />
      <Partners />
    </>
  );
}
