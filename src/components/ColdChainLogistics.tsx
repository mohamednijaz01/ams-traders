export default function ColdChainLogistics() {
  const pillars = [
    {
      title: "Direct Farm Sourcing",
      description: "We work directly with certified organic growers and local farms to deliver fresh harvest straight to your business.",
      icon: "🌱",
      badge: "Direct Sourcing"
    },
    {
      title: "Temperature-Controlled Transport",
      description: "Modern refrigerated fleet maintaining strict climate control throughout transport to preserve maximum freshness.",
      icon: "🚛",
      badge: "Cold-Chain Fleet"
    },
    {
      title: "Competitive Wholesale Pricing",
      description: "Direct-from-farm supply chain eliminates unnecessary intermediaries, passing volume savings to commercial buyers.",
      icon: "💰",
      badge: "Transparent Rates"
    },
    {
      title: "Rigorous Quality Audits",
      description: "Every shipment undergoes inspection for size, grade, and appearance before dispatch to ensure Grade-A quality.",
      icon: "🔍",
      badge: "Quality Inspected"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            About AMS Traders
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-3">
            Why Choose AMS Traders
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Dedicated to supplying high-grade fresh fruits and vegetables to commercial partners with reliability and integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2 rounded-lg bg-white border border-slate-200">{item.icon}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
