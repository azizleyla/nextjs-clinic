"use client";

import { useState } from "react";
import { Link } from "@/core/i18n/navigation";
import { generateSlug } from "@/utils/slug";
import { FaArrowRight } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import type { Doctor } from "../types";

type DoctorItemProps = {
  doctor: Doctor;
  index?: number;
};

export default function DoctorItem({ doctor }: DoctorItemProps) {
  const title = generateSlug(doctor?.name ?? "");
  const imgSrc = doctor?.img_url ? `/${doctor.img_url}` : "";
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(imgSrc) && !imgError;

  const initials = (doctor?.name ?? "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <Link href={`/doctors/${title}/${doctor?.id}`} className="block h-full group">
      <div className="h-full flex flex-col overflow-hidden rounded-3xl border border-sand dark:border-zinc-800 bg-paper dark:bg-zinc-900 transition-all duration-300 hover:-translate-y-1.5 hover:border-forest/20 hover:shadow-xl hover:shadow-forest/10">
        {/* Media — always filled, never blank white */}
        <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-sage/30 via-surface to-surface dark:from-zinc-800 dark:to-zinc-800">
          {showImage ? (
            <img
              src={imgSrc}
              alt={doctor.name}
              onError={() => setImgError(true)}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <FaUserDoctor className="text-6xl text-secondary/25" />
              {initials && (
                <span className="font-heading text-2xl font-bold tracking-wide text-secondary/30">
                  {initials}
                </span>
              )}
            </div>
          )}

          {/* Specialty — neutral chip over the media */}
          {doctor.specialty && (
            <span className="absolute bottom-3 left-3 max-w-[85%] truncate rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-secondary shadow-sm backdrop-blur dark:bg-zinc-900/80 dark:text-zinc-200">
              {doctor.specialty}
            </span>
          )}
        </div>

        {/* Footer — name + subtle action */}
        <div className="flex flex-1 items-center justify-between gap-3 p-4">
          <h3 className="font-heading text-base font-semibold text-ink dark:text-white line-clamp-1">
            {doctor.name}
          </h3>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
            <FaArrowRight className="text-xs" />
          </span>
        </div>
      </div>
    </Link>
  );
}
