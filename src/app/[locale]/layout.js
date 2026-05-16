import "../globals.css";

import { Cairo } from "next/font/google";

import { notFound } from "next/navigation";

const cairo = Cairo({
  subsets: ["arabic"],
});

const locales = ["ar", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export const metadata = {
  title: "شركة الصباح",
  description: "شركة الصباح الرسمية",
};

export default async function LocaleLayout({
  children,
  params,
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  );
}