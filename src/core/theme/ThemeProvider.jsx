"use client";

import { ThemeProvider as Provider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <Provider attribute="class" enableSystem={true} defaultTheme="system">
      {children}
    </Provider>
  );
}
