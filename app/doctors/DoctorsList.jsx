"use client";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), { ssr: false });
import DoctorItem from "@/components/ui/components/doctor/DoctorItem";
import { categoryOptions } from "@/constants/categories";
import React from "react";
import { BsBuildingFill } from "react-icons/bs";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";

const DoctorsList = ({ doctors }) => {
  const handleChange = (option) => {
    console.log(option);
  };

  return (
    <div className="container">
      <div className="pt-10 ml-auto mr-auto gap-5 rounded-md -mt-16 bg-white max-w-[970px] pb-8 flex flex-col md:flex-row px-16 justify-between shadow-custom-gray">
        <div className="w-full flex-none md:w-1/2">
          <form className="w-full lg:w-10/12">
            <div className="relative  flex gap-4 items-center ">
              <FaUserDoctor className="text-4xl flex-shrink-0 text-primary" />
              <div className="flex flex-col w-full">
                <label className=" text-secondary  mb-1">Axtar</label>
                <input
                  className="placeholder:text-[#212529] focus:outline-none font-semibold border-b border-[#ccd9f2] pb-3"
                  placeholder="Həkim adı"
                  type="text"
                />
              </div>
              <button className="absolute bottom-3 right-0" type="submit">
                <IoSearch className="text-secondary text-md" />
              </button>
            </div>
          </form>
        </div>
        <div className="flex-none w-full md:w-1/2">
          <div className="w-full lg:w-10/12 relative flex gap-4 items-center ">
            <BsBuildingFill className="text-4xl text-primary" />
            <div className="flex w-full flex-col">
              <label className=" text-[#344c5d]  mb-1">Şöbə</label>
              <Select
                placeholder="Seçin"
                onChange={handleChange}
                options={categoryOptions}
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="grid grid-cols-1  sm-custom:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((item, index) => (
            <DoctorItem key={item.id} doctor={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DoctorsList;
