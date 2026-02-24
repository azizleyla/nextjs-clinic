import React from "react";
import CardSkeleton from "./CardSkeleton";
import SectionTitle from "../typography/SectionTitle";

export default function ListSkeletonWrapper({
  count = 4,
  gridClasses = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}) {
  return (
    <div className="container py-10">
      <SectionTitle title="Şöbələr" />

      <div className={`grid gap-8 ${gridClasses}`}>
        {Array.from({ length: count }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
