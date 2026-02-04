// app/doctors/page.jsx (GÜNCELLENMİŞ)

import React, { Suspense } from "react"; // Suspense'i import edin
import { Banner } from "@/src/components";
// import { apiClient } from "@/lib/apiClient"; // Veri çekmeyi taşıdık, artık bu import'a gerek yok
// import CardSkeleton from "@/components/ui/shared/CardSkeleton"; // Skeleton'ı DoctorsPageContent'e taşıdık
import CardSkeleton from "@/src/components/shared/skeleton/CardSkeleton";
import DoctorsPageContent from "./DoctorsPageContent";
import { createMetadata } from "@/src/lib/metadata";

export async function generateMetadata({ params }) {
  return createMetadata({
    title: "Həkimlərimiz",
    description:
      "Elmed Hospital həkimləri ilə tanış olun. Təcrübəli və peşəkar həkimlərimizin təqdim etdiyi tibbi xidmətlər haqqında məlumat əldə edin.",
    image: "/images/doctor1.jpg",
    path: "/doctors",
    keywords: ["Həkimlərimiz", "Təcrübəli həkimlər", "Tibbi xidmətlər"],
    locale: params.locale, 
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
