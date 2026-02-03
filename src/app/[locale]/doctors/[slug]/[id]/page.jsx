import { Banner, DoctorsSection } from "@/src/components";
import { apiClient } from "@/src/lib/apiClient";
import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const DoctorDetail = async ({ params }) => {
  const { slug, id } = params;
  const doctor = await apiClient.get(`/api/doctors/${id}`);
  const doctors = await apiClient.get(`/api/doctors`);

  //useMemo
  const releatedDoctors = doctors.filter(
    (item) =>
      item.department_id === doctor.department_id && item.id !== doctor.id,
  );

 
  return (
    <>
      <Banner pageKey={`${doctor?.name} (${doctor?.specialty})`} />
      <div className="container my-11">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-1/4">
            <div className="shadow-custom-gray  rounded-xl">
              <div className="h-60  relative">
                <Image
                  fill
                  objectFit="cover"
                  className="w-full rounded-xl"
                  alt={doctor.name}
                  src="/images/d1.jpg"
                />
              </div>
              <div className="py-3 px-4 lg:px-10">
                <h3 className="text-md mt-2 text-secondary font-semibold">
                  Əlaqə məlumatları
                </h3>
                <ul className="my-3 pb-3 text-sm text-secondary flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <BsFillTelephoneFill className="text-primary" />
                    {doctor?.branch?.phone.join(", ")}
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    {doctor?.branch?.short_name}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/4 shadow-custom-gray rounded-xl p-4 lg:p-10">
            <h3 className="text-secondary mt-2 mb-6 text-2xl font-semibold">
              {doctor?.name} {doctor?.specialty && `(${doctor.specialty})`}
            </h3>
            {doctor?.education?.length > 0 && (
              <>
                <h4 className="text-secondary flex items-center gap-2 text-md mb-2 font-semibold">
                  <RiGraduationCapLine className="text-secondary text-lg" />
                  Təhsil
                </h4>
                <ul className="list-disc">
                  {doctor?.education?.map((item, index) => (
                    <li
                      key={index}
                      className="ml-8 text-secondary text-sm"
                    >
                      {item.years} {item.place}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {doctor?.experience?.length > 0 && (
              <>
                <h4 className="text-secondary flex items-center gap-2 text-md my-4 font-semibold">
                  <BsBriefcase className="text-secondary text-lg" /> İş
                  təcrübəsi
                </h4>
                <ul className="list-disc">
                  {doctor?.experience?.map((item, index) => (
                    <li
                      className="ml-8 text-secondary text-sm"
                      key={index}
                    >
                      {item?.years} {item?.place && `- ${item.place}`}
                      {item?.position && `, ${item.position}`}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
      <DoctorsSection doctors={releatedDoctors} isReleatedDoctor={true} />
    </>
  );
};

export default DoctorDetail;
