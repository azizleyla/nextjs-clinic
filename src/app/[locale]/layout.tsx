import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/core/i18n/routing";
import enMessages from "../../../messages/en.json";
import azMessages from "../../../messages/az.json";
import ThemeProvider from "@/core/theme/ThemeProvider";
import { Footer, Navbar, Topbar } from "@/components";
import type { ReactNode } from "react";

const messagesMap = { en: enMessages, az: azMessages };

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = messagesMap[locale as keyof typeof messagesMap];

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <Topbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
