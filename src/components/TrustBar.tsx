export default function TrustBar() {
  const stats = [
    { value: "20+", label: "Years in Business", icon: "🏆" },
    { value: "10K+", label: "Tons Shipped Monthly", icon: "📦" },
    { value: "500+", label: "Commercial Clients Served", icon: "🤝" },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 justify-center sm:justify-start"
            >
              <span className="text-3xl">{stat.icon}</span>
              <div>
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-[#15803d] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
