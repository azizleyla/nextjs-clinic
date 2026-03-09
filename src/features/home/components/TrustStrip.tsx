import { FaShieldAlt, FaUserMd, FaClock } from "react-icons/fa";

const items = [
  { icon: FaShieldAlt, text: "Etibarlı səhiyyə" },
  { icon: FaUserMd, text: "Peşəkar həkim komandamız" },
  { icon: FaClock, text: "Sürətli qəbul və xidmət" },
];

export default function TrustStrip() {
  return (
    <div className="bg-primary text-white py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {items.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                <Icon className="text-lg" />
              </span>
              <span className="font-medium text-sm md:text-base">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
