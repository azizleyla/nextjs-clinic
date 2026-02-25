import type { ReactNode } from "react";

export const metadata = {
  title: "Elmed Hospital | Əlaqə",
  description:
    "Elmed Hospital ilə əlaqə saxlayın, qəbul üçün yazılın və hər hansı sualınızı bizə göndərin.",
  keywords: [
    "Elmed Hospital",
    "Əlaqə",
    "Kontakt",
    "Xəstə qəbul",
    "Həkimlərlə əlaqə",
    "Klinika",
    "Qəbula yazıl",
    "Filiallar",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
