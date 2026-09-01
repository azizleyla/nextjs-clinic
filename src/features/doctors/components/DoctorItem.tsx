import { Link } from "@/core/i18n/navigation";
import { generateSlug } from "@/utils/slug";
import { FaArrowRight } from "react-icons/fa";
import type { Doctor } from "../types";

type DoctorItemProps = {
  doctor: Doctor;
  index?: number;
};

export default function DoctorItem({ doctor }: DoctorItemProps) {
  const title = generateSlug(doctor?.name ?? "");
  const imgSrc = doctor?.img_url ? `/${doctor.img_url}` : "/images/d1.jpg";

  return (
    <Link href={`/doctors/${title}/${doctor?.id}`} className="block h-full group">
      <div className="h-full flex flex-col bg-white dark:bg-zinc-900 rounded-xl overflow-hidden border border-slate-200/80 dark:border-zinc-800 transition-shadow duration-300 hover:shadow-md">
        <div className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-zinc-800 overflow-hidden shrink-0">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            src={imgSrc}
            alt={doctor.name}
          />
        </div>
        <div className="flex flex-col flex-1 p-4">
          <h3 className="text-base font-semibold text-secondary dark:text-primary group-hover:text-primary transition-colors line-clamp-1">
            {doctor.name}
          </h3>
          <span className="inline-flex self-start mt-2 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium line-clamp-1">
            {doctor.specialty}
          </span>
          <div className="flex items-center justify-between pt-4 mt-auto">
            <span className="flex items-center gap-2 text-sm font-semibold text-primary">
              Profilə bax
              <FaArrowRight className="text-xs" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
