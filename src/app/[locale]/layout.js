import "../globals.css";

import { Cairo } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";

const cairo = Cairo({
  subsets: ["arabic"],
});

export const metadata = {
  title: "شركة الصباح",
  description: "شركة الصباح الرسمية",
};

export default async function LocaleLayout({
  children,
  params,
}) {
  const messages = (
    await import(`../../messages/${params.locale}.json`)
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