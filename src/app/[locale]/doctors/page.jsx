// app/doctors/page.jsx (GÜNCELLENMİŞ)

import React, { Suspense } from "react"; // Suspense'i import edin
import { Banner } from "@/components";
// import { apiClient } from "@/lib/apiClient"; // Veri çekmeyi taşıdık, artık bu import'a gerek yok
// import CardSkeleton from "@/components/ui/shared/CardSkeleton"; // Skeleton'ı DoctorsPageContent'e taşıdık
import CardSkeleton from "@/shared/ui/skeleton/CardSkeleton";
import DoctorsPageContent from "./DoctorsPageContent";
import { createMetadata } from "@/core/seo/metadata";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

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

export default function DoctorsPage() {
  return (
    <>
      <Banner pageKey="DoctorPage" />
      <DoctorsPageContent />
    </>
  );
}
