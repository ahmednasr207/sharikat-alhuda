"use client"

export default function RealEstateArticle() {
  const sections = [
    {
      title: "مقدمة عن العقارات",
      content: "العقارات تعتبر أحد أهم أنواع الاستثمارات على مر العصور، حيث توفر أمانًا نسبيًا ومرونة في إدارة الأموال. الاستثمار العقاري يمكن أن يكون طويل الأمد ويحقق أرباحًا ثابتة مع الوقت."
    },
    {
      title: "أنواع العقارات",
      content: "هناك أنواع متعددة من العقارات تشمل السكنية، التجارية، والصناعية."
    },
    {
      title: "مميزات الاستثمار العقاري",
      content: "عائد ثابت وطويل الأمد، حماية من التضخم، إمكانية الاستفادة من زيادة قيمة العقار مع مرور الوقت."
    },
    {
      title: "نصائح قبل شراء العقار",
      content: "دراسة الموقع الجغرافي بعناية، فحص الأوراق القانونية، تقدير الميزانية وعدم الاستعجال."
    },
    {
      title: "خاتمة",
      content: "الاستثمار العقاري خيار ذكي لمن يبحث عن استقرار مالي وتنمية رأس المال."
    }
  ]

  return (
    <div className=" bg-gray-50 text-gray-800 flex flex-col  rounded-[10px]" dir="rtl">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16  selection:bg-green-300 ">

        <h1 className="text-4xl font-bold text-center mb-12">العقارات الحديثة وأهميتها في الاستثمار</h1>

        <ol className="space-y-8">
          {sections.map((section, idx) => (
            <li key={idx} className="flex gap-4">
              
              <span className="font-bold text-lg">{idx + 1}.</span>
              
              <div>
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <p className="mt-1">{section.content}</p>
              </div>
            </li>
          ))}
        </ol>
      </main>

 
    </div>
  )
}
