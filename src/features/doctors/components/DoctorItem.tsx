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
    <Link href={`/doctors/${title}/${doctor?.id}`} className="block h-full">
      <div
        key={doctor.id}
        className="h-full bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group border border-slate-100 dark:border-zinc-800"
      >
        <div className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-zinc-800 overflow-hidden shrink-0">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            src={imgSrc}
            alt={doctor.name}
          />
          <ul className="absolute top-2 left-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li className="w-7 h-7 flex justify-center items-center rounded-full bg-white/90 shadow text-primary hover:bg-primary hover:text-white transition-colors">
              <FaFacebook className="text-xs" />
            </li>
            <li className="w-7 h-7 flex justify-center items-center rounded-full bg-white/90 shadow text-primary hover:bg-primary hover:text-white transition-colors">
              <FaInstagram className="text-xs" />
            </li>
          </ul>
        </div>
        <div className="p-3 text-center">
          <h3 className="text-base font-semibold text-secondary dark:text-primary group-hover:text-primary transition-colors line-clamp-1">
            {doctor.name}
          </h3>
          <p className="text-xs text-primary_bold mt-0.5 line-clamp-2">{doctor.specialty}</p>
        </div>
      </div>
    </Link>
  );
}
