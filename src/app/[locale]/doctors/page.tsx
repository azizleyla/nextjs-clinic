import { Banner } from "@/components";
import DoctorsPageContent from "./DoctorsPageContent";
import { createMetadata } from "@/core/seo/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createMetadata({
    title: "Həkimlərimiz",
    description:
      "Elmed Hospital həkimləri ilə tanış olun. Təcrübəli və peşəkar həkimlərimizin təqdim etdiyi tibbi xidmətlər haqqında məlumat əldə edin.",
    image: "/images/doctor1.jpg",
    path: "/doctors",
    keywords: ["Həkimlərimiz", "Təcrübəli həkimlər", "Tibbi xidmətlər"],
    locale,
  });
}

export default async function DoctorsPage({ searchParams }: PageProps) {
  const params = await searchParams;
  return (
    <>
      <Banner pageKey="DoctorPage" />
      <DoctorsPageContent searchParams={params} />
    </>
  );
}
