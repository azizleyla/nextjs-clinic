import { Banner, DepartmentsSection } from "@/components";
import { createMetadata } from "@/core/seo/metadata";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  return createMetadata({
    title: "Şöbələr",
    description:
      "Elmed Hospital şöbələri ilə tanış olun. Tibbi xidmətlərimiz haqqında məlumat əldə edin.",
    path: "/departments",
    keywords: ["Şöbələr", "Tibbi xidmətlər", "Klinika"],
    locale,
  });
}

export default function DepartmentsPage() {
  return (
    <div>
      <Banner pageKey="DepartmentsPage" />
      <DepartmentsSection isLoadMore={true} />
    </div>
  );
}
