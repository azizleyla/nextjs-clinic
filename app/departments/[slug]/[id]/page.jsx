import { Banner } from "@/components";
import React from "react";
import { apiClient } from "@/lib/apiClient";

export async function generateMetadata({ params }) {
  const { id } = params;

  const department = await apiClient.get(`/api/departments/${id}`);

  return {
    title: `Elmed Hospital | ${department.title}`,
    description: department.description,
    keywords: department?.keywords || [
      "Elmed Hospital",
      "Tibbi xidmətlər",
      department.title,
    ],
    robots: { index: true, follow: true },
  };
}

const DepartmentDetail = async ({ params }) => {
  const { id } = params;

  const department = await apiClient.get(`/api/departments/${id}`);

  return (
    <>
      <Banner title={department.title} />
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
