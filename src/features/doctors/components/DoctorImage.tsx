"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUserDoctor } from "react-icons/fa6";

type DoctorImageProps = {
  src?: string;
  name?: string;
  sizes?: string;
};

/**
 * Doctor portrait that never renders blank. Falls back to a branded
 * placeholder (icon + initials) when the image is missing or fails to load.
 */
export default function DoctorImage({ src, name, sizes }: DoctorImageProps) {
  const [error, setError] = useState(false);
  const showImage = Boolean(src) && !error;

  const initials = (name ?? "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  if (!showImage) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-sage/30 via-surface to-surface dark:from-zinc-800 dark:to-zinc-800">
        <FaUserDoctor className="text-7xl text-secondary/25" />
        {initials && (
          <span className="font-heading text-3xl font-bold tracking-wide text-secondary/30">
            {initials}
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      fill
      sizes={sizes ?? "(max-width: 1024px) 100vw, 340px"}
      style={{ objectFit: "cover" }}
      alt={name ?? "Həkim"}
      src={src as string}
      onError={() => setError(true)}
    />
  );
}
