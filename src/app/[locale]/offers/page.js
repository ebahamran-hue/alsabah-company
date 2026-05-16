export default function OffersPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-6xl font-black text-center mb-20">
        العروض
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-black mb-5">
            عروض الثلاجات
          </h2>

          <p className="text-zinc-400">
            خصومات قوية على جميع الثلاجات.
          </p>
        </div>

        <div className="bg-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-black mb-5">
            عروض المكيفات
          </h2>

          <p className="text-zinc-400">
            تركيب مجاني لفترة محدودة.
          </p>
        </div>

        <div className="bg-white/10 rounded-3xl p-10">
          <h2 className="text-3xl font-black mb-5">
            الصيانة
          </h2>

          <p className="text-zinc-400">
            خصومات على خدمات الصيانة السنوية.
          </p>
        </div>
      </div>
    </main>
  );
}