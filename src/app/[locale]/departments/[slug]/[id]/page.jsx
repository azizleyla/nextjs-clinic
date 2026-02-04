import { Banner } from "@/src/components";
import React from "react";
import { apiClient } from "@/src/lib/apiClient";

// export async function generateMetadata({ params }) {
//   const { id, locale } = params;
//   console.log(locale, "l");

//   const department = await apiClient.get(`/api/departments/${id}`);

//   return createMetadata({
//     title: department.title,
//     description: department.description,
//     path: `/departments/${id}`, 
//     image: department.image || "/images/department-default.jpg", // optional
//     keywords: department?.keywords || [
//       "Elmed Hospital",
//       "Tibbi xidmətlər",
//       department.title,
//     ],
//     locale, 
//   });
// }

const DepartmentDetail = async ({ params }) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const department = await apiClient.get(`/api/departments/${id}`);

  return (
    <>
      <Banner pageKey={department.title} />
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
