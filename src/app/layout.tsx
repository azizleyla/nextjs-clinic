import { Lora, Source_Sans_3 } from "next/font/google";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollToTop from "@/shared/layout/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";
import Script from "next/script";

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Elmed Hospital",
  description: "Etibarlı səhiyyə platforması",
} as const;

type RootLayoutProps = { children: ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lora.variable} ${sourceSans.variable} ${sourceSans.className} light`}
    >
      <body>
        <ScrollToTop />
        {children}
        <Script id="tawk-chat" strategy="afterInteractive">
  {`
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    Tawk_API.onLoad = function() {
      // Səhifə açılarkən avtomatik minimizə olsun
      Tawk_API.minimize();
    };
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/69aef6c77f3b731c37a6b273/1jj9n7v02";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  `}
</Script>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
