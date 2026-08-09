export default function StatsSection() {
  const stats = [
    { label: "Synthesis Speed", value: "< 18ms", description: "Sub-second response time", color: "text-cyan-400" },
    { label: "Model Intelligence", value: "Gemini 3.6", description: "High reasoning capacity", color: "text-purple-400" },
    { label: "Render Uptime", value: "99.99%", description: "Enterprise reliability", color: "text-pink-400" },
    { label: "Active Deployments", value: "250K+", description: "Production ready code", color: "text-indigo-400" }
  ];

  return (
    <section id="stats" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 text-center flex flex-col items-center justify-center hover:scale-105 transition-transform"
            >
              <span className={`text-3xl sm:text-5xl font-black tracking-tight ${stat.color} mb-2`}>
                {stat.value}
              </span>
              <span className="text-white font-bold text-base sm:text-lg mb-1">{stat.label}</span>
              <span className="text-xs text-gray-400">{stat.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
