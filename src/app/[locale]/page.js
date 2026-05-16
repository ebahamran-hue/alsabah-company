import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CircleMenu from "@/components/CircleMenu";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home({ params }) {
  return (
    <main className="bg-black min-h-screen">
      <Header locale={params.locale} />

      <HeroSection />

      <CircleMenu locale={params.locale} />

      <WhatsAppButton />

      <Footer />
    </main>
  );
}