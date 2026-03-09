import { Banner } from "@/components";
import { apiClient } from "@/core/api/apiClient";
import { generateSlug } from "@/utils/slug";
import { createMetadata } from "@/core/seo/metadata";
import Image from "next/image";

type Params = { id: string; locale: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id, locale } = await params;
  const department = (await apiClient.get(`/api/departments/${id}`)) as {
    title: Record<string, string>;
    description: string;
    id: number;
    image?: string;
    keywords?: string[];
  };
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
  const department = (await apiClient.get(`/api/departments/${id}`)) as {
    title: Record<string, string>;
    content: string;
    img_url?: string;
  };
  return (
    <>
      <Banner dynamicTitle={department?.title?.[locale]} />
      <section className="bg-slate-50/70 dark:bg-zinc-900/40 py-10 md:py-14">
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-2xl bg-white dark:bg-zinc-950/90 border border-slate-200/80 dark:border-zinc-800 shadow-sm px-4 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
              <div className="w-full lg:w-1/2 flex-none">
                <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-zinc-900">
                  <Image
                    height={420}
                    width={640}
                    alt={String(department.title)}
                    className="h-[260px] sm:h-[320px] lg:h-[380px] w-full object-cover"
                    src={`/images/${department?.img_url}`}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex-none">
                <div className="service-detail__content text-secondary dark:text-zinc-300 leading-relaxed space-y-3">
                  <div
                    dangerouslySetInnerHTML={{ __html: department.content }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
