import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const DoctorItem = ({ doctor, index }) => {
  return (
    <Link
      href={`/doctors/${doctor.id}`}
      key={doctor.id}
      className={`bg-white transition-all duration-400 ease-linear box-border group cursor-pointer shadow-[0_0_20px_0_#ddd] text-center rounded-xl`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          className="w-full rounded-xl"
          src={`/${doctor?.img}`}
          alt={doctor.name}
        />
        <ul className="absolute top-5 -left-12 flex flex-col gap-2 transition-all duration-300 ease-in-out group-hover:left-5">
          <li className="w-8 h-8 flex justify-center items-center shadow-md bg-white border-[1px] rounded-full">
            <FaFacebook className="text-primary" />
          </li>
          <li className="w-8 h-8 flex justify-center items-center shadow-md bg-white border-[1px] rounded-full">
            <FaInstagram className="text-primary" />
          </li>
        </ul>
      </div>
      <div className="p-4">
        <h3 className="text-lg group-hover:text-primary font-semibold">
          {doctor.name}
        </h3>
        <p className="text-sm text-gray-500">{doctor.specialty}</p>
      </div>
    </Link>
  );
};

export default DoctorItem;
