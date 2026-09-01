import { apiClient, type BackendListResponse } from "@/core/api/apiClient";
import {
  FaGraduationCap,
  FaBriefcase,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "@/core/i18n/navigation";
import type { Doctor } from "@/features/doctors/types";
import DoctorsSection from "@/features/doctors/components/DoctorsSection";
import DoctorImage from "@/features/doctors/components/DoctorImage";
import Breadcrumb from "@/shared/ui/breadcrumb/Breadcrumb";

type Params = { slug: string; id: string };

export default async function DoctorDetail({ params }: { params: Promise<Params> }) {
  const { slug, id } = await params;
  const doctorRes = await apiClient.get<{ data: Doctor }>(`/doctors/${id}`);
  const doctor = doctorRes.data;
  const doctorsRes = await apiClient.get<BackendListResponse<Doctor>>(
    `/doctors?page=1&limit=50`,
  );
  const doctors = doctorsRes?.data ?? [];

  const relatedDoctors = doctors.filter(
    (item) =>
      item.department_id === doctor.department_id && item.id !== doctor.id
  );

  const doctorImageSrc = doctor?.img_url ? `/${doctor.img_url}` : "";
  const hasContact =
    (doctor?.branch?.phone?.length ?? 0) > 0 || doctor?.branch?.short_name;

  return (
    <>
      <div className="container pt-6 pb-10 lg:pt-8 lg:pb-14">
        <Breadcrumb
          className="mb-8"
          items={[
            { label: "Əsas", href: "/" },
            { label: "Həkimlər", href: "/doctors" },
            { label: doctor?.name ?? "" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Sidebar - foto və əlaqə */}
          <aside className="w-full lg:w-[340px] shrink-0">
            <div className="lg:sticky lg:top-24 rounded-3xl overflow-hidden border border-sand dark:border-zinc-800 shadow-xl shadow-forest/10 bg-paper dark:bg-zinc-900">
              {/* Portrait with name overlay */}
              <div className="relative aspect-[4/5] bg-sage/20 dark:bg-zinc-800">
                <DoctorImage
                  src={doctorImageSrc}
                  name={doctor?.name}
                  sizes="(max-width: 1024px) 100vw, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  {doctor?.specialty && (
                    <span className="inline-flex mb-2 px-3 py-1 rounded-full bg-accent/90 text-navy text-xs font-semibold">
                      {doctor.specialty}
                    </span>
                  )}
                  <h2 className="font-heading text-2xl font-bold leading-tight text-cream">
                    {doctor?.name}
                  </h2>
                </div>
              </div>

              <div className="p-5">
                {hasContact && (
                  <ul className="space-y-3 text-sm text-secondary">
                    {doctor?.branch?.phone?.length ? (
                      <li className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest/8 text-forest">
                          <FaPhone className="text-xs" />
                        </span>
                        <span className="break-all font-medium text-ink dark:text-zinc-200">
                          {doctor.branch.phone.join(", ")}
                        </span>
                      </li>
                    ) : null}
                    {doctor?.branch?.short_name ? (
                      <li className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest/8 text-forest">
                          <FaMapMarkerAlt className="text-xs" />
                        </span>
                        <span className="font-medium text-ink dark:text-zinc-200">
                          {doctor.branch.short_name}
                        </span>
                      </li>
                    ) : null}
                  </ul>
                )}
                <Link
                  href="/contact"
                  className="mt-5 flex w-full items-center justify-center gap-2 py-3 px-4 rounded-full bg-forest text-cream font-semibold text-sm shadow-lg shadow-forest/20 hover:bg-primary-dark transition-colors"
                >
                  <FaMapMarkerAlt className="text-xs" />
                  Xəritədə baxın
                </Link>
              </div>
            </div>
          </aside>

          {/* Əsas məzmun - təhsil və təcrübə */}
          <div className="flex-1 min-w-0">
            <div className="rounded-3xl border border-sand dark:border-zinc-800 shadow-xl shadow-forest/10 bg-paper dark:bg-zinc-900 p-6 lg:p-10">
              <h3 className="font-heading text-2xl font-semibold text-ink dark:text-primary mb-2">
                {doctor?.name}
                {doctor?.specialty && (
                  <span className="text-primary_bold font-normal text-base ml-1">
                    — {doctor.specialty}
                  </span>
                )}
              </h3>

              {doctor?.education?.length ? (
                <section className="mb-8">
                  <h4 className="flex items-center gap-2 text-ink dark:text-primary font-semibold mb-3">
                    <span className="w-9 h-9 rounded-xl bg-forest/10 flex items-center justify-center">
                      <FaGraduationCap className="text-forest text-sm" />
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
                  <h4 className="flex items-center gap-2 text-ink dark:text-primary font-semibold mb-3">
                    <span className="w-9 h-9 rounded-xl bg-forest/10 flex items-center justify-center">
                      <FaBriefcase className="text-forest text-sm" />
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
