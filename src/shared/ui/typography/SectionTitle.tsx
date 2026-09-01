// components/SectionTitle.jsx
type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      {subtitle && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold text-secondary dark:text-primary">
        {title}
      </h2>
      <div className="w-12 h-[3px] bg-primary mt-3 rounded-full"></div>
    </div>
  );
}
