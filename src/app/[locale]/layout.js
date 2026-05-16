import "../globals.css";
import { Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

const cairo = Cairo({
  subsets: ["arabic"],
});

export const metadata = {
  metadataBase: new URL("https://alsabah.com"),

  title: {
    default: "شركة الصباح",
    template: "%s | شركة الصباح",
  },

  description:
    "شركة الصباح للتبريد والتكييف داخل المملكة العربية السعودية",

  keywords: [
    "شركة الصباح",
    "تبريد",
    "تكييف",
    "ثلاجات",
    "السعودية",
    "جدة",
  ],

  openGraph: {
    title: "شركة الصباح",
    description:
      "أفضل خدمات التبريد والتكييف",
    url: "https://alsabah.com",
    siteName: "Al Sabah",
    locale: "ar_SA",
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}) {
  const messages = (
    await import(`../../../messages/${params.locale}.json`)
  ).default;

  return (
    <html
      lang={params.locale}
      dir={params.locale === "ar" ? "rtl" : "ltr"}
    >
      <body className={cairo.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}