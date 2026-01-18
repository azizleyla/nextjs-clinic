import { Geist } from "next/font/google";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Footer, Navbar, Topbar } from "@/src/components";
import ScrollToTop from "@/src/components/shared/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Elmed Hospital",
  description: "Etibarlı səhiyyə platforması",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.className}`}>
      <body>
        <Topbar />
        <Navbar />
        <ScrollToTop />
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
