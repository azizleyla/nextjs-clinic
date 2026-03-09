import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-primary mb-2">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-zinc-100 mb-3">
          Səhifə tapılmadı
        </h1>
        <p className="mb-6 text-secondary/80 dark:text-zinc-400">
          Üzr istəyirik, axtardığınız səhifə mövcud deyil və ya köçürülüb.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-2.5 bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
        >
          Ana səhifəyə qayıt
        </Link>
      </div>
    </div>
  );
}
