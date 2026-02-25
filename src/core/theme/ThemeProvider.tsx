"use client";

import { ThemeProvider as Provider } from "next-themes";
import type { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <Provider attribute="class" enableSystem={true} defaultTheme="system">
      {children}
    </Provider>
  );
}
