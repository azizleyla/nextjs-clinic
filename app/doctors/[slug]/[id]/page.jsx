import { Banner, DoctorsSection } from "@/components";
import { apiClient } from "@/lib/apiClient";
import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const DoctorDetail = async ({ params }) => {
  const resolvedParams = await params;
  const { slug, id } = resolvedParams;
   // const doctor = await apiClient.get(`/api/doctors/${id}`); 
   // const doctors = await apiClient.get(`/api/doctors`);
    const { data: doctor, error } = await supabase
    .from('doctors')
    .select('*')
    .eq('id', Number(id))
    .single(); 

    const { data: doctors } = await supabase.from('doctors').select('*');

  return (
    <>
      <Banner title={`${doctor?.name} (${doctor?.specialty})`} />
      <div className="container my-11">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-4/12">
            <div className="shadow-custom-gray  rounded-xl">
              <div className="h-80  relative">
                <Image
                  fill
                  className="w-full rounded-xl"
                  alt={doctor.name}
                  src={`/${doctor?.img_url}`}
                />
              </div>
              <div className="py-3 px-4 lg:px-10">
                <h3 className="text-md mt-2 text-secondary font-semibold">
                  Əlaqə məlumatları
                </h3>
                <ul className="my-3 pb-3 text-sm text-secondary flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <BsFillTelephoneFill className="text-primary" />
                    +07 554 332 322
                  </li>
                  <li className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    Mərkəz filialı (4cü mərtəbə)
                  </li>
                </ul>
                <h3 className="text-md mt-2 text-secondary font-semibold">
                  İş saatları
                </h3>
                <ul className="text-secondary my-3 text-sm font-medium">
                  <li className="border-t flex justify-between py-3 border-[#eee]">
                    Monday <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="border-t py-3 flex justify-between border-[#eee]">
                    Tuesday <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="border-t flex justify-between py-3 border-[#eee]">
                    Wednesday <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="border-t flex justify-between py-3 border-[#eee]">
                    Sunday <span>9:00 AM - 8:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-8/12 shadow-custom-gray rounded-xl p-4 lg:p-10">
            <h3 className="text-primary mt-2 mb-6 text-2xl font-semibold">
              {doctor?.name} {doctor?.specialty && `(${doctor.specialty})`}
            </h3>
            <h4 className="text-primary flex items-center gap-2 text-md mb-2 font-semibold">
              <RiGraduationCapLine className="text-primary" />
              Təhsil
            </h4>
            <ul className="list-disc">
              {doctor?.education?.map((item, index) => (
                <li key={index} className="ml-8 text-secondary text-sm">
                  {item.years} {item.place}
                </li>
              ))}
            </ul>
            <h4 className="text-primary flex items-center gap-2 text-md my-4 font-semibold">
              <BsBriefcase className="text-primary" /> İş təcrübəsi
            </h4>
            <ul className="list-disc">
              {doctor?.experience?.map((item, index) => (
                <li className="ml-8 text-secondary text-sm" key={index}>
                  {item?.years} {item?.place && `- ${item.place}`}
                  {item?.position && `, ${item.position}`}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <DoctorsSection doctors={doctors} isReleatedDoctor={true} />
    </>
  );
};

export default DoctorDetail;
