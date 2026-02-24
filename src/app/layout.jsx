import { Geist } from "next/font/google";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollToTop from "@/shared/layout/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "Elmed Hospital",
  description: "Etibarlı səhiyyə platforması",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.className || ""} light`}
    >
      <body>
        <ScrollToTop />
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
