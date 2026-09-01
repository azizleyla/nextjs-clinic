import SectionTitle from "@/shared/ui/typography/SectionTitle";
import { apiClient } from "@/core/api/apiClient";
import { generateSlug } from "@/utils/slug";
import { pickLocalizedText } from "@/services/departmentService";
import { createMetadata } from "@/core/seo/metadata";
import Image from "next/image";
import Breadcrumb from "@/shared/ui/breadcrumb/Breadcrumb";

type Params = { id: string; locale: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id, locale } = await params;
  const res = await apiClient.get<{
    data: {
      title: Record<string, string>;
      description: string;
      id: number;
      image?: string;
      keywords?: string[];
    };
  }>(`/departments/${id}`);
  const department = res.data;
  return createMetadata({
    title: department.title?.[locale] ?? "",
    description: department.description,
    path: `/departments/${generateSlug(department?.title?.[locale])}/${department.id}`,
    image: department.image || "/images/department-default.jpg",
    keywords: department?.keywords || [
      "Elmed Hospital",
      "Tibbi xidmətlər",
      String(department.title),
    ],
    locale,
  });
}

export default async function DepartmentDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id, locale } = await params;
  const res = await apiClient.get<{
    data: {
      title: Record<string, string>;
      content: string | Record<string, string>;
      img_url?: string;
    };
  }>(`/departments/${id}`);
  const department = res.data;
  // content text sütunudur; köhnə qeydlərdə JSON string ola bilər — helper açır.
  const contentHtml = pickLocalizedText(department.content, locale);
  return (
    <>
      <section className="bg-cream dark:bg-zinc-900/40 pt-6 pb-12 md:pt-8 md:pb-16">
        <div className="container">
          <Breadcrumb
            className="mb-5"
            items={[
              { label: "Əsas", href: "/" },
              { label: "Şöbələr", href: "/departments" },
              { label: department?.title?.[locale] ?? "" },
            ]}
          />
          <div className="mx-auto max-w-5xl">
            <SectionTitle
              subtitle="Şöbə"
              title={department?.title?.[locale] ?? ""}
              className="!mb-6"
            />
          </div>
          <div className="mx-auto max-w-5xl rounded-3xl bg-paper dark:bg-zinc-950/90 border border-sand dark:border-zinc-800 shadow-xl shadow-forest/5 px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="w-full lg:w-1/2 flex-none">
                <div className="overflow-hidden rounded-2xl bg-sage/20 dark:bg-zinc-900 ring-1 ring-sand">
                  <Image
                    height={420}
                    width={640}
                    alt={String(department.title)}
                    className="h-[260px] sm:h-[320px] lg:h-[380px] w-full object-cover"
                    src={`/images/${department?.img_url}`}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 min-w-0">
                <div className="service-detail__content text-secondary dark:text-zinc-300 leading-relaxed space-y-3 break-words overflow-x-auto [&_img]:max-w-full [&_img]:h-auto [&_table]:w-full [&_table]:block [&_table]:overflow-x-auto">
                  <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
