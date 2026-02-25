import { Banner } from "@/components";
import { apiClient } from "@/core/api/apiClient";
import { generateSlug } from "@/utils/slug";
import { createMetadata } from "@/core/seo/metadata";

type Params = { id: string; locale: string; slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { id, locale } = await params;
  const department = await apiClient.get(`/api/departments/${id}`) as {
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
    keywords: department?.keywords || ["Elmed Hospital", "Tibbi xidmətlər", String(department.title)],
    locale,
  });
}

export default async function DepartmentDetail({ params }: { params: Promise<Params> }) {
  const { id, locale } = await params;
  const department = await apiClient.get(`/api/departments/${id}`) as {
    title: Record<string, string>;
    content: string;
    img_url?: string;
  };
  return (
    <>
      <Banner dynamicTitle={department?.title?.[locale]} />
      <section>
        <div className="container">
          <div className="flex flex-col gap-1 lg:flex-row justify-center items-start">
            <div className="text-secondary mt-1 w-full service-detail__content lg:w-1/2 flex-none">
              <div dangerouslySetInnerHTML={{ __html: department.content }} />
            </div>
            <div className="w-full lg:w-1/2 flex-none">
              <img
                alt={String(department.title)}
                className="rounded-md h-[400px] w-full object-contain"
                src={`/images/${department?.img_url}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
