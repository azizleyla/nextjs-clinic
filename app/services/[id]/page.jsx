import Banner from "@/components/ui/components/banner";
import Image from "next/image";
import React from "react";

const ServiceDetails = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <Banner title="Nevrologiya" />
      <section>
        <div className="container">
          <div className="flex flex-col gap-1 lg:flex-row justify-center items-start">
            <div className="text-secondary mt-1 w-full service-detail__content lg:w-1/2 flex-none">
              <p>
                <span>
                  <span>
                    Urologiya – tibbin kişi və qadın sidik-ifrazat
                    sisteminin xəstəlikləri ilə məşğul olan sahəsidir.
                    Urologiya sahəsində kişilərdə və qadınlarda
                    böyrəklərin, sidik
                  </span>
                  <span>
                    axarlarının, sidik kisəsinin, urethra və kişilərdə
                    prostat və cinsiyyət orqanlarının xəstəlikləri
                    daxildir.
                  </span>
                </span>
              </p>
              <p>
                <span>
                  Urologiya şöbəsində aşağıdakı xəstəliklərin müayinə və
                  müalicəsi həyata keçirilir:
                </span>
              </p>
              <p>
                <span>
                  Sidik yolları iltihabı xəstəlikləri (uretrit, sistit,
                  piyelonefrit, qlomerulonetrit, prostatit )
                </span>
              </p>
              <p>
                <span>
                  Böyrək daşlarının cərrahi və medikamentoz müalicəsi
                </span>
              </p>
              <p>
                <span>
                  Nevrozlar (nevrasteniya, isteriya, sayrışan hallar);
                </span>
              </p>
              <p>
                <span>Qorxu və həyəcan halları;</span>
              </p>
              <p>
                <span>Beyin-damar xəstəlikləri;</span>
              </p>
              <p>
                <span>
                  Doğru və düzgün müalicə üsulunun seçilməsi üçün
                  klinikamızda Beyin KT, MRT, boyun damarlarının doppleri
                  kimi müayinə üsulları da həyata keçirilir.
                </span>
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex-none">
              <img
                alt=""
                className="rounded-md h-[400px] w-full object-contain"
                src="https://admin.westhospital.az/uploads/images/departments/photo--1666870697.webp"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
