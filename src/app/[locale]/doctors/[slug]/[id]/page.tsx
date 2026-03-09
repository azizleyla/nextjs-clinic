import { Banner } from "@/components";
import { apiClient } from "@/core/api/apiClient";
import {
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";
import Image from "next/image";
import { Link } from "@/core/i18n/navigation";
import type { Doctor } from "@/features/doctors/types";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";

type Params = { slug: string; id: string };

export default async function DoctorDetail({ params }: { params: Promise<Params> }) {
  const { slug, id } = await params;
  const doctor = (await apiClient.get(`/api/doctors/${id}`)) as Doctor;
  const doctorsRes = (await apiClient.get(`/api/doctors?page=1&per_page=50`)) as {
    data: Doctor[];
  };
  const doctors = doctorsRes?.data ?? [];

  const relatedDoctors = doctors.filter(
    (item) =>
      item.department_id === doctor.department_id && item.id !== doctor.id
  );

  const doctorImageSrc = doctor?.img_url ? `/${doctor.img_url}` : "/images/d1.jpg";
  const hasContact =
    (doctor?.branch?.phone?.length ?? 0) > 0 || doctor?.branch?.short_name;

  return (
    <>
      <Banner dynamicTitle={`${doctor?.name}${doctor?.specialty ? ` — ${doctor.specialty}` : ""}`} />
      <div className="container py-10 lg:py-14">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-8 hover:underline"
        >
          <FaArrowLeft className="text-xs" />
          Həkimlərə qayıt
        </Link>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Sidebar - foto və əlaqə */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="rounded-2xl overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-lg bg-white dark:bg-zinc-900">
              <div className="relative aspect-[3/4] max-h-[420px] bg-slate-100 dark:bg-zinc-800">
                <Image
                  fill
                  sizes="(max-width: 1024px) 100vw, 320px"
                  style={{ objectFit: "cover" }}
                  alt={doctor?.name ?? "Həkim"}
                  src={doctorImageSrc}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-secondary dark:text-primary">
                  {doctor?.name}
                </h2>
                {doctor?.specialty && (
                  <p className="text-primary_bold text-sm mt-1">{doctor.specialty}</p>
                )}
                {hasContact && (
                  <>
                    <hr className="my-4 border-slate-200 dark:border-zinc-700" />
                    <h3 className="text-sm font-semibold text-secondary dark:text-primary mb-3">
                      Əlaqə məlumatları
                    </h3>
                    <ul className="space-y-3 text-sm text-secondary">
                      {doctor?.branch?.phone?.length ? (
                        <li className="flex items-start gap-3">
                          <FaPhone className="text-primary mt-0.5 shrink-0" />
                          <span className="break-all">
                            {doctor.branch.phone.join(", ")}
                          </span>
                        </li>
                      ) : null}
                      {doctor?.branch?.short_name ? (
                        <li className="flex items-start gap-3">
                          <FaMapMarkerAlt className="text-primary mt-0.5 shrink-0" />
                          <span>{doctor.branch.short_name}</span>
                        </li>
                      ) : null}
                    </ul>
                  </>
                )}
                <Link
                  href="/contact"
                  className="mt-6 block w-full text-center py-3 px-4 rounded-xl bg-primary text-white font-medium text-sm hover:bg-primary_bold transition-colors"
                >
                  Qeydiyyat / Əlaqə
                </Link>
              </div>
            </div>
          </aside>

          {/* Əsas məzmun - təhsil və təcrübə */}
          <div className="flex-1 min-w-0">
            <div className="rounded-2xl border border-slate-100 dark:border-zinc-800 shadow-lg bg-white dark:bg-zinc-900 p-6 lg:p-10">
              <h3 className="text-xl font-semibold text-secondary dark:text-primary mb-2">
                {doctor?.name}
                {doctor?.specialty && (
                  <span className="text-primary_bold font-normal text-base ml-1">
                    — {doctor.specialty}
                  </span>
                )}
              </h3>

              {doctor?.education?.length ? (
                <section className="mb-8">
                  <h4 className="flex items-center gap-2 text-secondary dark:text-primary font-semibold mb-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FaGraduationCap className="text-primary text-sm" />
                    </span>
                    Təhsil
                  </h4>
                  <ul className="space-y-2 ml-10">
                    {doctor.education.map((item, index) => (
                      <li
                        key={index}
                        className="text-secondary text-sm leading-relaxed flex flex-wrap gap-1"
                      >
                        {item.years && <span className="font-medium">{item.years}</span>}
                        {item.place}
                        {item.position && `, ${item.position}`}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {doctor?.experience?.length ? (
                <section>
                  <h4 className="flex items-center gap-2 text-secondary dark:text-primary font-semibold mb-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FaBriefcase className="text-primary text-sm" />
                    </span>
                    İş təcrübəsi
                  </h4>
                  <ul className="space-y-2 ml-10">
                    {doctor.experience.map((item, index) => (
                      <li
                        key={index}
                        className="text-secondary text-sm leading-relaxed"
                      >
                        {item?.years}
                        {item?.place && ` — ${item.place}`}
                        {item?.position && `, ${item.position}`}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {!doctor?.education?.length && !doctor?.experience?.length && (
                <p className="text-secondary text-sm">
                  Bu həkim haqqında əlavə məlumat tezliklə əlavə ediləcək.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <DoctorsSection doctors={relatedDoctors} isReleatedDoctor={true} />
    </>
  );
}
