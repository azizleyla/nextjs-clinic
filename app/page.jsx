import {
  AboutSection,
  BlogsSection,
  Counter,
  DoctorsSection,
  Hero,
  Partners,
  ServicesSection,
} from "@/components";

export const metadata = {
  title: "Elmed Hospital | Ana səhifə",
  description:
    "Elmed Hospital – etibarlı səhiyyə platforması. Təcrübəli həkimlərlə tanış olun, xidmətlərimizi kəşf edin və sağlamlıq bloqlarımızla məlumatlı qalın.",
  keywords: [
    "Elmed Hospital",
    "Səhiyyə",
    "Həkimlər",
    "Tibbi xidmətlər",
    "Klinikalar",
    "Bloqlar",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Elmed Hospital – Etibarlı səhiyyə platforması",
    description:
      "Peşəkar həkimlər, etibarlı tibbi xidmətlər və sağlamlıq mövzularında bloqlar – hamısı Elmed Hospital-də.",
    url: "https://disin-clinic.vercel.app/",
    siteName: "Elmed Hospital",
    images: [
      {
        url: "https://disin-clinic.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Elmed Hospital Ana Səhifə",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elmed Hospital – Etibarlı səhiyyə platforması",
    description:
      "Peşəkar həkimlər və etibarlı tibbi xidmətlərlə sağlamlığınızı qoruyun. Elmed Hospital sizin üçün buradadır.",
    images: ["https://disin-clinic.vercel.app/images/logo.png"],
  },
};

export default async function Home() {
  return (
    <>
      <Hero />
      <Counter isHome={true} />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <BlogsSection />
      <Partners />
    </>
  );
}
