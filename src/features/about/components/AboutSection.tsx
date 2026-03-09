import { Button } from "@/components";
import Image from "next/image";
import { FaRegCheckCircle, FaUserMd, FaHeartbeat, FaShieldAlt } from "react-icons/fa";

const points = [
  "Peşəkar həkim və tibbi personal",
  "Müasir diagnostika və müalicə",
  "Xəstə təhlükəsizliyi və keyfiyyət",
  "7/24 xidmət və dəstək",
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-900 overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Şəkil */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] max-h-[400px] lg:max-h-[420px] rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-800 shadow-lg">
              <Image
                fill
                src="/images/about1.jpg"
                alt="Elmed Xəstəxanası"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="hidden lg:flex absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-primary/90 items-center justify-center shadow-xl">
              <FaHeartbeat className="text-white text-4xl" />
            </div>
          </div>

          {/* Mətn */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Haqqımızda
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary dark:text-primary mb-4">
              Səhiyyənizə etibar edəcəyiniz məkanda
            </h2>
            <p className="text-secondary leading-relaxed mb-6">
              Elmed-də xəstələrimizin sağlamlığı üçün müasir standartlar və peşəkar komandamızla
              xidmət göstəririk. Diagnostikadan müalicəyə qədər hər addımda keyfiyyət və
              təhlükəsizlik əsas prioritetimizdir.
            </p>
            <ul className="space-y-3 mb-8">
              {points.map((item, i) => (
                <li key={i} className="flex gap-3 items-center text-secondary">
                  <FaRegCheckCircle className="text-primary shrink-0 text-lg" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              href="/about"
              variant="primary"
              className="self-start"
              label="Daha ətraflı"
            />
          </div>
        </div>

        {/* Qısa stat / etibar sətiri */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-zinc-700 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="inline-flex w-14 h-14 rounded-xl bg-primary/10 items-center justify-center mb-3">
              <FaUserMd className="text-primary text-2xl" />
            </div>
            <p className="text-2xl font-bold text-secondary dark:text-primary">Təcrübəli mütəxəssislər</p>
            <p className="text-sm text-primary_bold mt-1">Peşəkar həkim komandamız</p>
          </div>
          <div>
            <div className="inline-flex w-14 h-14 rounded-xl bg-primary/10 items-center justify-center mb-3">
              <FaShieldAlt className="text-primary text-2xl" />
            </div>
            <p className="text-2xl font-bold text-secondary dark:text-primary">Təhlükəsizlik</p>
            <p className="text-sm text-primary_bold mt-1">Beynəlxalq standartlar</p>
          </div>
          <div>
            <div className="inline-flex w-14 h-14 rounded-xl bg-primary/10 items-center justify-center mb-3">
              <FaHeartbeat className="text-primary text-2xl" />
            </div>
            <p className="text-2xl font-bold text-secondary dark:text-primary">Səhiyyə üçün</p>
            <p className="text-sm text-primary_bold mt-1">Xəstə mərkəzli yanaşma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
