import Image from "next/image";

/*
  ── Product Category Cards ──
  Each category shows a real photo. To swap images, replace the
  corresponding file in /public/ (e.g. /public/cat-onions.png).
*/

const categories = [
  {
    name: "Onions",
    image: "/cat-onions.png",
    description: "Fresh, firm onions in bulk — Nashik red, white, and shallot varieties available year-round.",
    badge: "Top Seller",
  },
  {
    name: "Potatoes",
    image: "/cat-potatoes.png",
    description: "Clean, graded potatoes ideal for restaurants, chips units, and retail. Multiple sizes available.",
    badge: "Top Seller",
  },
  {
    name: "Seasonal Fruits",
    image: "/cat-seasonal-fruits.png",
    description: "Mangoes, apples, oranges, bananas, grapes and more — sourced at peak ripeness every season.",
    badge: "Seasonal",
  },
  {
    name: "Leafy Vegetables",
    image: "/cat-leafy-vegetables.png",
    description: "Spinach, coriander, mint, lettuce, and methi — harvested fresh and delivered same-day.",
    badge: "Daily Fresh",
  },
  {
    name: "Exotic & Specialty",
    image: "/cat-exotic-vegetables.png",
    description: "Bell peppers, zucchini, broccoli, avocados, and imported produce for premium kitchens.",
    badge: "Premium",
  },
];

export default function ProductCatalog() {
  return (
    <section id="product" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">Product Catalog</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em] mt-4">
            What We Supply in Bulk
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Five core categories — sourced daily from farms across Tamil Nadu and beyond.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-xl hover:border-[#16a34a]/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Badge */}
                <span className="absolute top-3 left-3 text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#15803d] border border-emerald-100 shadow-sm">
                  {cat.badge}
                </span>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">
            Need something specific? Tell us your requirements.
          </p>
          <a
            href="#contact"
            className="btn-orange inline-block px-8 py-3 rounded-xl font-bold text-sm shadow-sm hover:scale-[1.02] transition-transform"
          >
            Request a Custom Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
