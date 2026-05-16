export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-bold mb-10">
        الشروط والأحكام
      </h1>

      <div className="space-y-6 text-lg leading-9">
        <p>
          جميع المنتجات تخضع لسياسة الضمان الخاصة بالشركة.
        </p>

        <p>
          يمكن الاسترجاع والاستبدال خلال الفترة المحددة وفق سياسة الشركة.
        </p>

        <p>
          يجب الاحتفاظ بالفاتورة الأصلية عند طلب الصيانة أو الاستبدال.
        </p>

        <p>
          الشركة غير مسؤولة عن سوء الاستخدام بعد الاستلام.
        </p>
      </div>
    </main>
  );
}