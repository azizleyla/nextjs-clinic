import { Geist } from "next/font/google";
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Footer, Navbar, Topbar } from "@/components";

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
