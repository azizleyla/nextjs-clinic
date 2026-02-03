import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import enMessages from "../../../messages/en.json";
import azMessages from "../../../messages/az.json";
import { Footer, Navbar, Topbar } from "../../components";
import ThemeProvider from "@/src/ThemeProvider";

const messagesMap = { en: enMessages, az: azMessages };


export default async function LocaleLayout({ children, params }) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = messagesMap[locale];

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
