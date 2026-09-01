"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { apiClient, type BackendListResponse } from "@/core/api/apiClient";
import SectionTitle from "@/shared/ui/typography/SectionTitle";

const MapContainer = dynamic(
  () => import("@/features/contact/components/GoogleMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] bg-surface dark:bg-zinc-900 animate-pulse rounded-3xl flex items-center justify-center text-secondary">
        Xəritə yüklənir...
      </div>
    ),
  }
);

type Branch = {
  id: number;
  name: string;
  address?: string;
  phone?: string[];
};

export default function Contact() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [branches, setBranches] = useState<Branch[]>([]);

  const handleClick = (item: Branch) => {
    setSelectedBranch(item);
  };

  useEffect(() => {
    async function fetchBranches() {
      const res = await apiClient.get<BackendListResponse<Branch>>("/branches");
      setBranches(res.data ?? []);
    }
    fetchBranches();
  }, []);

  return (
    <div className="py-12 md:py-16 bg-cream dark:bg-zinc-950">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle
            align="center"
            subtitle="Bizimlə əlaqə"
            title="Bizimlə əlaqə saxlayın"
            className="!mb-0"
          />
          <p className="mt-4 leading-relaxed text-secondary text-lg">
            Məlumat əldə etmək, sualınızı vermək və ya müalicə barədə
            məsləhətləşmək üçün bizimlə əlaqə saxlayın. Peşəkar komandamız
            sizə ən qısa zamanda geri dönüş edəcək.
          </p>
        </div>
        <div className="max-w-3xl mx-auto my-14 p-6 md:p-8 rounded-3xl bg-paper dark:bg-zinc-900/80 border border-sand dark:border-zinc-800/80 shadow-xl shadow-forest/5">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 contact-form">
            <div className="col-span-1">
              <label>Ad, Soyad</label>
              <input
                className="w-full"
                placeholder="Adınız və soyadınız"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <label>Email</label>
              <input placeholder="ornek@mail.com" type="email" />
            </div>
            <div className="col-span-1">
              <label>Əlaqə nömrəsi</label>
              <input placeholder="+994 __ ___ __ __" type="tel" />
            </div>
            <div className="col-span-1">
              <label>Mövzu</label>
              <input placeholder="Müraciətinizin mövzusu" type="text" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label>Mesaj</label>
              <textarea
                rows={5}
                maxLength={800}
                placeholder="Sualınızı və ya müraciətinizi yazın..."
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 ">
              <Button label="Göndər" className="w-52" variant="primary" />
            </div>
          </form>
        </div>
        <div className="flex relative flex-col lg:flex-row gap-4 border border-sand dark:border-zinc-800/80 rounded-3xl bg-paper dark:bg-zinc-900/80 overflow-hidden shadow-xl shadow-forest/5">
          <MapContainer
            branches={branches}
            selectedBranch={selectedBranch}
          />
          <div className="w-full lg:w-2/5 flex-shrink-0 flex overflow-hidden overflow-y-scroll max-h-[400px] flex-col gap-1">
            {branches?.map((item) => (
              <div
                onClick={() => handleClick(item)}
                key={item.id}
                className="w-full py-2 flex-none"
              >
                <div className="cursor-pointer py-3 px-4 transition-all duration-200 border-l-2 border-transparent hover:border-forest hover:bg-surface rounded-xl bg-paper dark:bg-zinc-900">
                  <h5 className="font-heading text-lg text-forest font-semibold">
                    {item?.name}
                  </h5>
                  <ul className="flex flex-col gap-2 my-2">
                    <li className="text-secondary dark:text-zinc-300 flex items-center gap-2 text-sm">
                      <FaLocationDot />
                      {item.address}
                    </li>
                    <li className="text-secondary dark:text-zinc-300 flex items-center gap-2 text-sm">
                      <FaPhone />
                      {item.phone?.join(", ")}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
