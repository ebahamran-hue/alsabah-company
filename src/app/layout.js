import "./globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "شركة الصباح للتبريد والتكييف",
  description:
    "شركة الصباح للتبريد والتكييف في المملكة العربية السعودية",
  keywords:
    "ثلاجات, مكيفات, تبريد, السعودية, جدة, شركة الصباح",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  );
}