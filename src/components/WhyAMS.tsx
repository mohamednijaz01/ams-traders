export default function WhyAMS() {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">About Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.02em] mt-4">
            Our Story — From T.K. Market to City-Wide Supply
          </h2>
        </div>


        {/* What We're Proud Of — 4 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-14">
          {[
            {
              icon: "🌱",
              title: "Direct Farm Sourcing",
              description:
                "80+ verified growers across 3 states — no middlemen, fresher produce, better prices.",
            },
            {
              icon: "🚛",
              title: "Cold-Chain Delivery Fleet",
              description:
                "12 refrigerated trucks maintain strict temperature control from warehouse to doorstep.",
            },
            {
              icon: "💰",
              title: "Transparent Wholesale Pricing",
              description:
                "Farm-direct supply chain means volume savings passed straight to you — no hidden markups.",
            },
            {
              icon: "✅",
              title: "Hand-Graded Quality",
              description:
                "Every crate is inspected for grade, size, and freshness before it leaves our warehouse.",
            },
          ].map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#16a34a]/40 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-slate-900 mb-1.5">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
