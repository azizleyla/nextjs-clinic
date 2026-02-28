"use client";

import { useEffect } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { reportError } from "@/core/errors";

type ErrorProps = {
  error: Error & { digest?: string };
  reset?: () => void;
};

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    reportError(error, { digest: error.digest });
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center p-6 rounded-2xl bg-red-50 border border-red-200 shadow-sm">
      <FaTriangleExclamation className="w-12 h-12 text-red-500 mb-4" aria-hidden />
      <h2 className="text-2xl font-semibold text-red-700">Xəta baş verdi</h2>
      <p className="text-red-600 mt-3 max-w-md">{error.message}</p>
      {reset && (
        <button
          type="button"
          onClick={reset}
          className="mt-6 px-5 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Yenidən cəhd et
        </button>
      )}
    </div>
  );
}
