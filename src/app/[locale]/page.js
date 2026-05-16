import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CircleMenu from "@/components/CircleMenu";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import { useTranslations } from "next-intl";

export default function Home({ params }) {
  const locale = params.locale;

  const t = useTranslations("Home");

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Header locale={locale} />

      <HeroSection
        company={t("company")}
        subtitle={t("subtitle")}
      />

      <CircleMenu
        locale={locale}
        terms={t("terms")}
        offers={t("offers")}
        contact={t("contact")}
      />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}