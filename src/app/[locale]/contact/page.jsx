"use client";
import dynamic from "next/dynamic";
import { categoryOptions } from "@/src/utils/constants/categories";
import React, { useEffect, useState } from "react";
import { Button } from "@/src/components";
import { IoLocationOutline } from "react-icons/io5";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { TiPhoneOutline } from "react-icons/ti";
import MapContainer from "@/src/components/GoogleMap";
import { apiClient } from "@/src/lib/apiClient";

const Contact = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [branches, setBranches] = useState([]);
  const handleClick = (item) => {
    setSelectedBranch(item);
  };
  useEffect(() => {
    async function fetchBranches() {
      const data = await apiClient.get("/api/branches");
      setBranches(data);
      console.log(data);
    }
    fetchBranches();
  }, []);

  return (
    <div className="py-10">
      <div className="container">
        <div className=" max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-secondary">
            Qəbul üçün yazılın
          </h2>
          <p className="my-2 leading-relaxed text-secondary">
            Həkim qəbuluna yazılaraq sağlamlığınızı vaxtında nəzarətdə
            saxlayın. Peşəkar komandamızla dəqiq diaqnoz və effektiv
            müalicə üçün ilk addımı indi atın.
          </p>
        </div>
        <div className="shadow-custom-gray max-w-3xl mx-auto my-16 p-5 rounded-md">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 contact-form">
            <div className="col-span-1">
              <label>Ad</label>
              <input
                className="w-full"
                placeholder="Ad/Soyad"
                type="text"
              />
            </div>
            <div className="col-span-1">
              <label>Email</label>
              <input placeholder="Ad/Soyad" type="text" />
            </div>
            <div className="col-span-1">
              <label>Əlaqə nömrəsi</label>
              <input placeholder="Ad/Soyad" type="text" />
            </div>
            <div className="col-span-1">
              <label>Həkim seçin</label>
              <Select options={categoryOptions} />
            </div>
            <div className="col-span-1">
              <label>Tarix</label>
              <input type="date" placeholder="Tarix" />
            </div>
            <div className="col-span-1">
              <label>Başlama saatı</label>
              <input type="time" placeholder="Başlama saatı" />
            </div>
            <div className="col-span-1">
              <label>Bitmə saatı</label>
              <input type="time" placeholder="Bitmə saatı" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label>Mesaj</label>
              <textarea
                rows="5"
                maxLength="800"
                placeholder="Sualınızı yazın..."
              />
            </div>
            <div className="flex justify-center col-span-1 md:col-span-2 ">
              <Button label="Göndər" className="w-52" variant="primary" />
            </div>
          </form>
        </div>
        <div className="flex relative flex-col lg:flex-row gap-4 border">
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
                <div className="shadow-custom-gray cursor-pointer py-3 px-3 transition-all duration-500 border-l-2 hover:border-l-2 hover:border-primary rounded-md">
                  <h5 className="text-mg text-primary font-semibold">
                    {item?.name}
                  </h5>
                  <ul className="flex flex-col gap-2 my-2">
                    <li className="text-secondary flex items-center gap-2 text-sm">
                      <IoLocationOutline />
                      {item.address}
                    </li>
                    <li className="text-secondary flex items-center gap-2 text-sm">
                      <TiPhoneOutline />
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
};

export default Contact;
