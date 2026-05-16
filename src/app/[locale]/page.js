import Header from "@/components/Header";

import HeroSection from "@/components/HeroSection";

import CircleMenu from "@/components/CircleMenu";

import Footer from "@/components/Footer";

import WhatsAppButton from "@/components/WhatsAppButton";

const content = {
  ar: {
    company: "شركة الصباح",
    subtitle:
      "حلول احترافية في عالم التبريد والتكييف بأعلى معايير الجودة والثقة.",
    offers: "العروض",
    terms: "الشروط والأحكام",
    contact: "تواصل معنا",
  },

  en: {
    company: "Al Sabah Company",
    subtitle:
      "Professional cooling solutions with premium quality and trust.",
    offers: "Offers",
    terms: "Terms & Conditions",
    contact: "Contact Us",
  },
};

export default async function Home({
  params,
}) {
  const { locale } = await params;

  const t = content[locale];

  return (
    <main className="
      relative
      bg-black
      text-white
      overflow-hidden
    ">
      <Header locale={locale} />

      <HeroSection
        company={t.company}
        subtitle={t.subtitle}
      />

      <CircleMenu
        locale={locale}
        terms={t.terms}
        offers={t.offers}
        contact={t.contact}
      />

      <Footer />

      <WhatsAppButton />
    </main>
  );
}