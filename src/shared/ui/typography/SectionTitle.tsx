type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Bölmə başlığı — bütün sayt boyu tək mənbə.
 * `align="center"` mərkəzləşdirir və subtitle-ın hər iki yanına xətt qoyur.
 */
export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div className={`mb-10 ${centered ? "text-center" : "max-w-xl"} ${className}`}>
      {subtitle && (
        <p
          className={`mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-clay ${
            centered ? "justify-center" : ""
          }`}
        >
          <span aria-hidden className="h-px w-6 bg-clay" />
          {subtitle}
          {centered && <span aria-hidden className="h-px w-6 bg-clay" />}
        </p>
      )}
      <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.15] tracking-tight text-ink dark:text-white">
        {title}
      </h2>
    </div>
  );
}
