import { Banner } from "@/components";
import React from "react";
import { services } from "@/utils/constants/services"; // services array-ində id, title, description, image
import { apiClient } from "@/lib/apiClient";

export async function generateMetadata({ params }) {
  const { id } = params;

  // xidməti tap
  const service = services.find((s) => s.id == id);

  return {
    title: `Elmed Hospital | ${service.title}`,
    description: service.description,
    keywords: service.keywords || [
      "Elmed Hospital",
      "Tibbi xidmətlər",
      service.title,
    ],
    robots: { index: true, follow: true },
  };
}

const ServiceDetails = async ({ params }) => {
  const { id } = params;
  const service = await apiClient.get(`/api/services/${id}`);

  console.log(service);

  return (
    <>
      <Banner title={service.title} />
      <section>
        <div className="container">
          <div className="flex flex-col gap-1 lg:flex-row justify-center items-start">
            <div className="text-secondary mt-1 w-full service-detail__content lg:w-1/2 flex-none">
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
            </div>
            <div className="w-full lg:w-1/2 flex-none">
              <img
                alt={service.title}
                className="rounded-md h-[400px] w-full object-contain"
                src={`/images/${service?.img_url}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
