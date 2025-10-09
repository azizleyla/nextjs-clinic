import React from "react";
import DoctorsList from "./DoctorsList";
import { doctors } from "@/constants/doctors";
import { Banner } from "@/components";

export const metadata = {
  title: "Elmed Hospital | Həkimlərimiz",
  description:
    "Elmed Hospital həkimləri ilə tanış olun. Təcrübəli və peşəkar həkimlərimizin təqdim etdiyi tibbi xidmətlər haqqında məlumat əldə edin.",
  keywords: [
    "Elmed Hospital",
    "Həkimlərimiz",
    "Təcrübəli həkimlər",
    "Tibbi xidmətlər",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Elmed Hospital – Həkimlərimiz",
    description:
      "Təcrübəli və peşəkar həkimlərimizlə tanış olun və tibbi xidmətlərimiz haqqında məlumat əldə edin.",
    url: "https://elmed-clinic.vercel.app/doctors",
    siteName: "Elmed Hospital",
    images: [
      {
        url: "https://elmed-clinic.vercel.app/images/doctor1.jpg", // public/images/ içində yerləşdir
        width: 1200,
        height: 630,
        alt: "Elmed Hospital Həkimlərimiz",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmed Hospital – Həkimlərimiz",
    description:
      "Elmed Hospital həkimləri ilə tanış olun. Təcrübəli və peşəkar həkimlərimiz sizin sağlamlığınız üçün buradadır.",
    images: ["https://elmed-clinic.vercel.app/images/doctor1.jpg"],
  },
};

export default async function DoctorsPage() {
  return (
    <div>
      <Banner title="Həkimlərimiz" />
      <DoctorsList doctors={doctors} />
    </div>
  );
}
