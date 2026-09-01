import { Button } from "@/components";
import Image from "next/image";
import { FaRegCheckCircle, FaUserMd, FaHeartbeat, FaShieldAlt } from "react-icons/fa";
import SectionTitle from "@/shared/ui/typography/SectionTitle";

const points = [
  "Peşəkar həkim və tibbi personal",
  "Müasir diagnostika və müalicə",
  "Xəstə təhlükəsizliyi və keyfiyyət",
  "7/24 xidmət və dəstək",
];

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-cream dark:bg-zinc-900 overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Şəkil */}
          <div className="relative order-2 lg:order-1">
            {/* Warm clay panel peeking behind the portrait */}
            <div
              aria-hidden
              className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2.5rem] bg-clay/10 lg:block"
            />
            <div className="relative aspect-[4/3] max-h-[420px] rounded-[2.5rem] overflow-hidden bg-sage/20 dark:bg-zinc-800 shadow-2xl shadow-forest/15 ring-1 ring-forest/10">
              <Image
                fill
                src="/images/about1.jpg"
                alt="Elmed Xəstəxanası"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 flex w-24 h-24 rounded-3xl bg-forest items-center justify-center shadow-xl shadow-forest/25 animate-float-slow">
              <FaHeartbeat className="text-cream text-4xl" />
            </div>
          </div>

          {/* Mətn */}
          <div className="order-1 lg:order-2">
            <SectionTitle
              subtitle="Haqqımızda"
              title="Səhiyyənizə etibar edəcəyiniz məkanda"
              className="!mb-6"
            />
            <p className="text-secondary leading-relaxed mb-7 text-sm md:text-lg">
              Elmed-də xəstələrimizin sağlamlığı üçün müasir standartlar və peşəkar komandamızla
              xidmət göstəririk. Diagnostikadan müalicəyə qədər hər addımda keyfiyyət və
              təhlükəsizlik əsas prioritetimizdir.
            </p>
            <ul className="space-y-3.5 mb-9">
              {points.map((item, i) => (
                <li key={i} className="flex gap-3 items-center text-secondary">
                  <FaRegCheckCircle className="text-forest shrink-0 text-lg" />
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
        <div className="mt-20 pt-14 border-t border-sand dark:border-zinc-700 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[
            { icon: FaUserMd, title: "Təcrübəli mütəxəssislər", sub: "Peşəkar həkim komandamız" },
            { icon: FaShieldAlt, title: "Təhlükəsizlik", sub: "Beynəlxalq standartlar" },
            { icon: FaHeartbeat, title: "Səhiyyə üçün", sub: "Xəstə mərkəzli yanaşma" },
          ].map(({ icon: Icon, title, sub }) => (
            <div key={title} className="group">
              <div className="inline-flex w-16 h-16 rounded-3xl bg-forest/10 items-center justify-center mb-4 transition-colors group-hover:bg-clay/15">
                <Icon className="text-forest text-2xl transition-colors group-hover:text-clay" />
              </div>
              <p className="font-heading text-base md:text-xl font-semibold text-ink dark:text-white">{title}</p>
              <p className="text-sm text-primary_bold mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
