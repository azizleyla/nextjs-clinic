// components/SectionTitle.jsx
type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }:SectionTitleProps) {
  return (
    <div className=" mb-8">
      {subtitle && (
        <p className="text-sm text-gray-500 dark:text-primary  uppercase tracking-wider">
          {subtitle}
        </p>
      )}
      <h2 className="text-md  md:text-2xl font-bold text-gray-800 dark:text-primary ">
        {title}
      </h2>
      <div className="w-20 h-1 bg-primary  mt-2 rounded"></div>
    </div>
  );
}
