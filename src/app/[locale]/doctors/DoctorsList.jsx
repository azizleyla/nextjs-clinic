"use client";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import React, { useEffect, useMemo, useState } from "react";
import { BsBuildingFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { Button, DoctorItem } from "@/src/components";
import { apiClient } from "@/src/lib/apiClient";
import { useDebounce } from "@/src/utils/hooks/useDebounce";
import useLoadMore from "@/src/utils/hooks/useLoadMore";
import { createSelectOptions } from "@/src/utils";
import CardSkeleton from "@/src/components/shared/skeleton/CardSkeleton";
import Loading from "../../loading";

const DoctorsList = ({ doctors }) => {
  const [allDoctors, setAllDoctors] = useState(doctors || []);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedDep, setSelectedDep] = useState({
    value: null,
    label: "Şöbələr",
  });
  const [selectedBranch, setSelectedBranch] = useState({
    value: null,
    label: "Filiallar",
  });
  const { visibleCount, handleLoadMore } = useLoadMore(4, 2);
  const [departments, setDepartments] = useState([]);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [deps, brs] = await Promise.all([
          apiClient.get("/api/departments"),
          apiClient.get("/api/branches"),
        ]);

        setDepartments(deps || []);
        setBranches(brs || []);
      } catch (error) {
      } finally {
      }
    }

    fetchData();
  }, []);

  const branchesOptions = createSelectOptions(
    branches,
    "Filiallar",
    "short_name",
  );
  const departmentsOptions = createSelectOptions(
    departments,
    "Şöbələr",
    "title",
  );

  const fetchDoctors = async () => {
    setIsLoading(true);

    try {
      const params = new URLSearchParams();

      if (selectedDep?.value) {
        params.append("department_id", selectedDep.value);
      }

      if (selectedBranch?.value) {
        params.append("branch_id", selectedBranch.value);
      }

      if (debouncedSearch) {
        params.append("name", debouncedSearch);
      }
      const res = await apiClient.get(`/api/doctors?${params.toString()}`);
      setAllDoctors(res);
    } catch (err) {
      setError("Məlumatları yükləmək mümkün olmadı");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, [selectedDep, selectedBranch, debouncedSearch]);

  useEffect(() => {
    handleLoadMore(4, 2);
  }, [selectedDep, searchQuery]);

  return (
    <div className="container">
      <div className="pt-7 lg:pt-10 ml-auto mr-auto gap-5 rounded-md -mt-16 bg-white  pb-8 flex flex-col md:flex-row px-6 lg:px-16 justify-between shadow-custom-gray">
        <div className="w-full flex-none md:w-1/3">
          <form className="w-full lg:w-10/12">
            <div className="relative  flex gap-4 items-center ">
              <FaUserDoctor className="text-4xl flex-shrink-0 text-primary" />
              <div className="flex flex-col w-full">
                <label className=" text-secondary  mb-1">Axtar</label>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full placeholder:text-[#212529] focus:outline-none font-semibold border-b border-[#ccd9f2] pb-3"
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
        <div className="flex-none w-full md:w-1/3">
          <div className="w-full lg:w-10/12 relative flex gap-4 items-center ">
            <BsBuildingFill className="text-4xl text-primary" />
            <div className="flex w-full flex-col">
              <label className=" text-[#344c5d]  mb-1">Şöbə</label>
              <Select
                placeholder="Seçin"
                options={departmentsOptions}
                onChange={setSelectedDep}
              />
            </div>
          </div>
        </div>
        <div className="flex-none w-full md:w-1/3">
          <div className="w-full lg:w-10/12 relative flex gap-4 items-center ">
            <BsBuildingFill className="text-4xl text-primary" />
            <div className="flex w-full flex-col">
              <label className=" text-[#344c5d]  mb-1">Filiallar</label>
              <Select
                placeholder="Seçin"
                options={branchesOptions}
                onChange={setSelectedBranch}
              />
            </div>
          </div>
        </div>
      </div>
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm-custom:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDoctors.slice(0, visibleCount).map((item, index) => (
              <DoctorItem key={item.id} doctor={item} index={index} />
            ))}
          </div>
        )}

        {allDoctors.length > visibleCount && (
          <div className="flex items-center justify-center my-5">
            <Button
              label="Daha çox"
              variant="outline_primary"
              onClick={handleLoadMore}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default DoctorsList;
