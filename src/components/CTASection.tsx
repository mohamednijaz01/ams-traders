"use client";

import { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-white/15 text-center shadow-2xl relative bg-mesh">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/20 px-4 py-1.5 rounded-full border border-cyan-500/30 inline-block mb-6">
            Get Started Today
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Build Your Next <span className="text-gradient">High-Impact</span> Web Application?
          </h2>

          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl mx-auto">
            Join thousands of developers using Antigravity AI and Gemini 3.6 Flash to ship ultra-fast React & Next.js projects.
          </p>

          {subscribed ? (
            <div className="mt-8 p-4 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-semibold text-sm max-w-md mx-auto">
              🎉 Thank you for subscribing! Check your inbox for exclusive platform updates.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="flex-1 px-5 py-3.5 rounded-xl bg-slate-900/90 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
              />
              <button
                type="submit"
                className="glow-btn px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform text-sm"
              >
                Access Platform
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400 font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instant setup
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Full source export
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
