import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[580px] lg:min-h-[680px] flex items-center justify-center overflow-hidden"
    >
      {/*
        ── Hero Background Image ──
        Source: AI-generated produce image (saved in /public/hero-bg.png)
        To swap with your own photo, replace /public/hero-bg.png with a
        high-resolution (1920×1080+) image of fresh produce/market.
        Free alternatives: https://unsplash.com/s/photos/fresh-produce
      */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('/hero-bg.png')`,
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay — hero section only (approx 25% opacity) */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-32">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 backdrop-blur-sm border border-white/20 text-xs font-semibold text-white/95 mb-7 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Coimbatore&apos;s Trusted Produce Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white leading-[1.1] drop-shadow-xl">
            20+ Years Powering{" "}
            <span className="text-amber-300 drop-shadow-md">Fresh Produce</span>{" "}
            at Wholesale Scale
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-sm font-medium">
            Daily bulk supply of premium fruits &amp; vegetables to supermarkets,
            hotels, restaurants &amp; caterers — sourced direct from farms, zero middlemen.
          </p>

          {/* Single CTA */}
          <div className="mt-10">
            <Link
              href="#contact"
              className="btn-orange px-10 py-4 rounded-xl font-bold text-base shadow-xl hover:scale-[1.03] transition-transform inline-block tracking-wide"
            >
              Get a Wholesale Quote →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
