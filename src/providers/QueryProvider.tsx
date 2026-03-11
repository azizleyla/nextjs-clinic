"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  // QueryClient-i useState daxilində yaradırıq ki, 
  // Next.js render zamanı hər dəfə yeni client yaratmasın (singleton pattern)
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // Datanı 1 dəqiqə "təzə" say
            gcTime: 1000 * 60 * 60 * 24, // Keşi 24 saat saxla
            retry: 1, // Xəta olsa 1 dəfə təkrar yoxla
            refetchOnWindowFocus: false, // Başqa taba keçib qayıdanda dərhal sorğu atma
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* Devtools: Brauzerdə dataları izləmək üçün çox faydalıdır (yalnız development-də) */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}