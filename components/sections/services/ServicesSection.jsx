import React from "react";
import { services } from "@/constants/services";
import SectionTitle from "@/components/ui/components/title/SectionTitle";
import Link from "next/link";

const Services = () => {
  return (
    <section>
      <div className="container">
        <SectionTitle title="Xidmətlərimiz" />
        <div className="grid gap-6  grid-cols-1 sm:grid-cols-2 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                href={`/services/${service.id}`}
                key={index}
                className="flex shadow-custom-gray py-5 px-3 gap-3 flex-col items-center text-center cursor-pointer"
              >
                <Icon className="text-primary" fontSize="50px" />
                <h3 className="font-medium text-md">{service.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
