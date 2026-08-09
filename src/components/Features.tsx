"use client";

import { useState } from "react";

interface Feature {
  id: string;
  category: "core" | "ai" | "performance";
  title: string;
  description: string;
  icon: string;
  badge: string;
  codeSnippet: string;
}

const featuresData: Feature[] = [
  {
    id: "f1",
    category: "core",
    title: "Next.js 16 & React 19 Core",
    description: "Leverages React Server Components, async transitions, and cutting-edge App Router paradigms.",
    icon: "🚀",
    badge: "Framework",
    codeSnippet: "export default async function Page() { ... }"
  },
  {
    id: "f2",
    category: "ai",
    title: "Gemini 3.6 Flash Intelligence",
    description: "High-speed multi-modal reasoning and dynamic code generation tailored for real-time applications.",
    icon: "🧠",
    badge: "AI Powered",
    codeSnippet: "const res = await ai.synthesize({ speed: 'high' });"
  },
  {
    id: "f3",
    category: "performance",
    title: "Sub-Millisecond Hydration",
    description: "Optimized bundles with zero-overhead inline styling and instant interaction feedback.",
    icon: "⚡",
    badge: "Performance",
    codeSnippet: "metrics.measure('TTFB', { target: '<10ms' });"
  },
  {
    id: "f4",
    category: "core",
    title: "Glassmorphic Design Tokens",
    description: "Rich backdrop filters, glowing borders, and curated dark color palettes engineered to WOW users.",
    icon: "💎",
    badge: "UI / UX",
    codeSnippet: "@import 'tailwindcss'; .glass-card { ... }"
  },
  {
    id: "f5",
    category: "ai",
    title: "Self-Healing Code Pipelines",
    description: "Continuous syntax validation, automated linting, and instant diagnostic resolution.",
    icon: "🛡️",
    badge: "Autonomous",
    codeSnippet: "pipeline.verifyAndFix({ autoFix: true });"
  },
  {
    id: "f6",
    category: "performance",
    title: "Edge Delivery Network",
    description: "Globally distributed static assets and streaming responses served with low latency.",
    icon: "🌐",
    badge: "Infrastructure",
    codeSnippet: "export const runtime = 'edge';"
  }
];

export default function Features() {
  const [filter, setFilter] = useState<"all" | "core" | "ai" | "performance">("all");
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(featuresData[0]);

  const filteredFeatures = filter === "all" ? featuresData : featuresData.filter(f => f.category === filter);

  return (
    <section id="features" className="py-24 relative bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold mb-3">
            Core Architecture & Capabilities
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient">Peak Performance</span>
          </p>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Discover the technology stack driving high-speed web apps with agentic AI intelligence.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {(["all", "core", "ai", "performance"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "glass-panel text-gray-400 hover:text-white hover:border-white/20"
                }`}
              >
                {cat === "all" ? "All Features" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedFeature(item)}
              className={`glass-card p-6 rounded-2xl cursor-pointer border transition-all ${
                selectedFeature?.id === item.id
                  ? "border-cyan-500 bg-slate-900/80 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                  : "border-white/10 hover:border-white/25"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/10">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{item.description}</p>
              
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-cyan-400 font-medium">
                <span>View Configuration</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Feature Detail Modal / Inspector Banner */}
        {selectedFeature && (
          <div className="mt-12 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{selectedFeature.icon}</span>
                <h4 className="text-xl font-bold text-white">{selectedFeature.title}</h4>
                <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">
                  {selectedFeature.category.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-300 text-sm">{selectedFeature.description}</p>
            </div>
            
            <div className="w-full md:w-auto bg-slate-900 p-4 rounded-xl border border-white/10 font-mono text-xs text-indigo-300">
              <span className="text-gray-500">// Execution snippet</span>
              <br />
              {selectedFeature.codeSnippet}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
