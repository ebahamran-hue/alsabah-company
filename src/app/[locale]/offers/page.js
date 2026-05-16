export default function OffersPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-5xl font-black mb-14 text-center">
        العروض
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            عرض الثلاجات
          </h2>

          <p className="text-zinc-300">
            خصومات قوية على جميع أنواع الثلاجات.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            عرض المكيفات
          </h2>

          <p className="text-zinc-300">
            تركيب مجاني لفترة محدودة.
          </p>
        </div>

        <div className="bg-white/10 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">
            الصيانة
          </h2>

          <p className="text-zinc-300">
            خصم على خدمات الصيانة السنوية.
          </p>
        </div>
      </div>
    </main>
  );
}