"use client";
import dynamic from "next/dynamic";

import Banner from "@/components/ui/components/banner";
import { categoryOptions } from "@/constants/categories";
import React from "react";
import Button from "@/components/ui/components/button";
const Select = dynamic(() => import("react-select"), { ssr: false });

const Contact = () => {
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
              <input type="date" placeholder="Başlama saatı" />
            </div>
            <div className="col-span-1">
              <label>Bitmə saatı</label>
              <input type="date" placeholder="Bitmə saatı" />
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
      </div>
    </div>
  );
};

export default Contact;
