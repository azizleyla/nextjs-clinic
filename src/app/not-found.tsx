import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Səhifə tapılmadı</h2>
      <p className="mb-6">
        Üzr istəyirik, axtardığınız səhifə mövcud deyil.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Ana Səhifəyə Qayıt
      </Link>
    </div>
  );
}
