import { Banner } from "@/components";
import { apiClient } from "@/core/api/apiClient";
import { FaGraduationCap, FaBriefcase, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import type { Doctor } from "@/features/doctors/types";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";

type Params = { slug: string; id: string };

export default async function DoctorDetail({ params }: { params: Promise<Params> }) {
  const { slug, id } = await params;
  const doctor = (await apiClient.get(`/api/doctors/${id}`)) as Doctor;
  const doctors = (await apiClient.get(`/api/doctors`)) as Doctor[];

  const releatedDoctors = doctors.filter(
    (item) =>
      item.department_id === doctor.department_id && item.id !== doctor.id
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
                  style={{ objectFit: "cover" }}
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
                    <FaPhone className="text-primary" />
                    {doctor?.branch?.phone?.join(", ")}
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
            {doctor?.education?.length ? (
              <>
                <h4 className="text-secondary flex items-center gap-2 text-md mb-2 font-semibold">
                  <FaGraduationCap className="text-secondary text-lg" />
                  Təhsil
                </h4>
                <ul className="list-disc">
                  {doctor.education.map((item, index) => (
                    <li key={index} className="ml-8 text-secondary text-sm">
                      {item.years} {item.place}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            {doctor?.experience?.length ? (
              <>
                <h4 className="text-secondary flex items-center gap-2 text-md my-4 font-semibold">
                  <FaBriefcase className="text-secondary text-lg" /> İş təcrübəsi
                </h4>
                <ul className="list-disc">
                  {doctor.experience.map((item, index) => (
                    <li className="ml-8 text-secondary text-sm" key={index}>
                      {item?.years} {item?.place && `- ${item.place}`}
                      {item?.position && `, ${item.position}`}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </div>
      </div>
      <DoctorsSection doctors={releatedDoctors} isReleatedDoctor={true} />
    </>
  );
}
