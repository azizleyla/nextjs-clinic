import { Banner } from "@/src/components";
import React from "react";
import { apiClient } from "@/src/lib/apiClient";
import { generateSlug } from "@/src/utils/slug";
import { createMetadata } from "@/src/lib/metadata";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { id, locale } = resolvedParams;

  const department = await apiClient.get(`/api/departments/${id}`);

  return createMetadata({
    title: department.title,
    description: department.description,
    path: `/departments/${generateSlug(department?.title[locale])}/${
      department.id
    }`,
    image: department.image || "/images/department-default.jpg",
    keywords: department?.keywords || [
      "Elmed Hospital",
      "Tibbi xidmətlər",
      department.title,
    ],
    locale,
  });
}

const DepartmentDetail = async ({ params }) => {
  const resolvedParams = await params;
  const { id, locale } = resolvedParams;
  const department = await apiClient.get(`/api/departments/${id}`);

  return (
    <>
      <Banner dynamicTitle={department?.title[locale]} />
      <section>
        <div className="container">
          <div className="flex flex-col gap-1 lg:flex-row justify-center items-start">
            <div className="text-secondary mt-1 w-full service-detail__content lg:w-1/2 flex-none">
              <div
                dangerouslySetInnerHTML={{ __html: department.content }}
              />
            </div>
            <div className="w-full lg:w-1/2 flex-none">
              <img
                alt={department.title}
                className="rounded-md h-[400px] w-full object-contain"
                src={`/images/${department?.img_url}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DepartmentDetail;
