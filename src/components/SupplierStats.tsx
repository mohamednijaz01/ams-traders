export default function SupplierStats() {
  const stats = [
    { value: "50,000+", label: "Tons Supplied Annually", description: "Fresh produce shipped", color: "text-emerald-700" },
    { value: "1,500+", label: "Farm Partners", description: "Direct grower network", color: "text-emerald-700" },
    { value: "99.8%", label: "On-Time Delivery", description: "Temperature-controlled fleet", color: "text-emerald-700" },
    { value: "1,200+", label: "Commercial Clients", description: "Supermarkets & Hotels", color: "text-emerald-700" }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 text-center shadow-xs">
              <div className={`text-3xl sm:text-4xl font-bold tracking-tight ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-slate-900 font-bold text-sm mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
