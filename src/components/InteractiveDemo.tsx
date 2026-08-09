"use client";

import { useState } from "react";

export default function InteractiveDemo() {
  const [componentType, setComponentType] = useState<"card" | "badge" | "button">("card");
  const [themeColor, setThemeColor] = useState<"cyan" | "purple" | "pink">("cyan");
  const [blurAmount, setBlurAmount] = useState(16);
  const [borderRadius, setBorderRadius] = useState(16);
  const [glowIntensity, setGlowIntensity] = useState(60);
  const [copied, setCopied] = useState(false);

  const getGradientStyle = () => {
    switch (themeColor) {
      case "cyan":
        return "from-cyan-500 to-indigo-600 shadow-cyan-500/30";
      case "purple":
        return "from-purple-500 to-indigo-700 shadow-purple-500/30";
      case "pink":
        return "from-pink-500 to-rose-600 shadow-pink-500/30";
    }
  };

  const getBorderColor = () => {
    switch (themeColor) {
      case "cyan":
        return "rgba(6, 182, 212, 0.4)";
      case "purple":
        return "rgba(139, 92, 246, 0.4)";
      case "pink":
        return "rgba(236, 72, 153, 0.4)";
    }
  };

  const generatedCss = `background: rgba(15, 23, 42, 0.7);
backdrop-filter: blur(${blurAmount}px);
border-radius: ${borderRadius}px;
border: 1px solid ${getBorderColor()};
box-shadow: 0 15px 30px -10px rgba(0, 0, 0, ${glowIntensity / 100});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="py-24 relative bg-slate-900/60 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Interactive UI Engine
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4">
            Live Component <span className="text-gradient">Playground</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Customize parameters in real time and watch the agentic styling engine compute live CSS variables.
          </p>
        </div>

        {/* Studio Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left 5 Cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center justify-between">
              <span>Configuration Controls</span>
              <span className="text-xs text-gray-400 font-mono">React 19 State</span>
            </h3>

            {/* Component Type Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                Target Element
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(["card", "badge", "button"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setComponentType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all ${
                      componentType === type
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "bg-slate-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Palette */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                Accent Palette
              </label>
              <div className="flex gap-3">
                {(["cyan", "purple", "pink"] as const).map((color) => (
                  <button
                    key={color}
                    onClick={() => setThemeColor(color)}
                    className={`flex-1 py-2 rounded-xl text-xs font-semibold capitalize flex items-center justify-center gap-2 border transition-all ${
                      themeColor === color
                        ? "border-white bg-white/10 text-white shadow-lg"
                        : "border-white/5 bg-slate-800/50 text-gray-400"
                    }`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full ${
                        color === "cyan" ? "bg-cyan-400" : color === "purple" ? "bg-purple-400" : "bg-pink-400"
                      }`}
                    />
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Sliders */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
                  <span>Glass Blur Filter</span>
                  <span className="font-mono text-cyan-400">{blurAmount}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={blurAmount}
                  onChange={(e) => setBlurAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
                  <span>Border Radius</span>
                  <span className="font-mono text-cyan-400">{borderRadius}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="32"
                  value={borderRadius}
                  onChange={(e) => setBorderRadius(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-gray-300 mb-1">
                  <span>Glow & Elevation</span>
                  <span className="font-mono text-cyan-400">{glowIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={glowIntensity}
                  onChange={(e) => setGlowIntensity(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>
            </div>

          </div>

          {/* Render & Output Panel (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Canvas Box */}
            <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[320px] relative overflow-hidden bg-mesh">
              <div className="absolute top-3 left-4 text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Live Render Output
              </div>

              {/* Dynamic Render Target */}
              {componentType === "card" && (
                <div
                  style={{
                    backdropFilter: `blur(${blurAmount}px)`,
                    borderRadius: `${borderRadius}px`,
                    borderColor: getBorderColor(),
                    boxShadow: `0 20px 40px -10px rgba(6, 182, 212, ${glowIntensity / 200})`
                  }}
                  className="p-6 sm:p-8 max-w-md w-full bg-slate-950/70 border text-left transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300">
                      Component #104
                    </span>
                    <span className="text-xs text-gray-400 font-mono">Status: Active</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Antigravity AI Engine</h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                    Dynamic component synthesized in real time with high visual polish and zero layout shift.
                  </p>
                  <button className={`w-full py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r ${getGradientStyle()} shadow-lg`}>
                    Action Trigger
                  </button>
                </div>
              )}

              {componentType === "badge" && (
                <div
                  style={{
                    backdropFilter: `blur(${blurAmount}px)`,
                    borderRadius: `${borderRadius}px`,
                    borderColor: getBorderColor(),
                  }}
                  className="px-6 py-3 bg-slate-950/80 border text-white font-semibold text-sm flex items-center gap-3 shadow-xl transition-all"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>Gemini 3.6 Flash Engine Stream</span>
                </div>
              )}

              {componentType === "button" && (
                <button
                  style={{
                    backdropFilter: `blur(${blurAmount}px)`,
                    borderRadius: `${borderRadius}px`,
                    borderColor: getBorderColor(),
                  }}
                  className={`px-8 py-4 bg-gradient-to-r ${getGradientStyle()} text-white font-bold text-sm shadow-xl hover:scale-105 transition-all`}
                >
                  Synthesize Component Now
                </button>
              )}
            </div>

            {/* CSS Code Snippet Output */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-white/10 font-mono text-xs text-gray-300 relative">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <span className="text-gray-400 uppercase tracking-wider text-[10px]">Computed CSS Output</span>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-1 rounded bg-indigo-600/30 hover:bg-indigo-600 text-indigo-300 hover:text-white transition-colors text-[11px] font-semibold flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      <span>Copy CSS</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="text-cyan-300 leading-relaxed overflow-x-auto">
                <code>{generatedCss}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
