import { Link } from "@/core/i18n/navigation";
import { generateSlug } from "@/utils/slug";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import type { Doctor } from "../types";

type DoctorItemProps = {
  doctor: Doctor;
  index?: number;
};

export default function DoctorItem({ doctor, index }: DoctorItemProps) {
  const title = generateSlug(doctor?.name ?? "");
  const imgSrc = doctor?.img_url ? `/${doctor.img_url}` : "/images/d1.jpg";

  return (
    <Link href={`/doctors/${title}/${doctor?.id}`}>
      <div
        key={doctor.id}
        className={`bg-white dark:bg-zinc-900 dark:shadow-[0_0_20px_0_#111] transition-all duration-400 ease-linear box-border group cursor-pointer shadow-[0_0_20px_0_#ddd] text-center rounded-xl`}
      >
        <div className="relative overflow-hidden rounded-xl">
          <img
            className="w-full rounded-xl"
            src={imgSrc}
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
          <h3 className="text-lg text-black dark:text-primary group-hover:text-primary font-semibold">
            {doctor.name}
          </h3>
          <p className="text-sm text-gray-500">{doctor.specialty}</p>
        </div>
      </div>
    </Link>
  );
}
