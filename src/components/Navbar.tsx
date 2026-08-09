"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      
      {/* Top Info Bar — Tertiary (deep forest) for premium contrast */}
      <div className="bg-[#1a2e1f] py-1.5 px-4 text-xs text-white/85 flex items-center justify-between font-medium">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AMS Traders — Premium Fresh Produce Wholesale Supplier</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/70">
            <span>📞 Wholesale Desk: <a href="tel:9843167650" className="hover:text-white transition-colors">9843167650</a></span>
            <span>✉️ <a href="mailto:sabeerams01@gmail.com" className="hover:text-white transition-colors">sabeerams01@gmail.com</a></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center text-white font-bold text-xl shadow-sm">
            🌱
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2">
              AMS Traders
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold tracking-wider uppercase">
              Fruits &amp; Vegetables Wholesale
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - EXACT ORDER: Home, Product, Services, About Us, Contact Us */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <Link href="#home" className="hover:text-emerald-700 transition-colors">
            Home
          </Link>
          <Link href="#product" className="hover:text-emerald-700 transition-colors">
            Product
          </Link>
          <Link href="#services" className="hover:text-emerald-700 transition-colors">
            Services
          </Link>
          <Link href="#about" className="hover:text-emerald-700 transition-colors">
            About Us
          </Link>
          <Link href="#contact" className="hover:text-emerald-700 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Action Button - Warm Amber Highlight */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#contact"
            className="btn-orange text-sm font-bold px-5 py-2.5 rounded-lg shadow-sm"
          >
            Get Wholesale Quote
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-emerald-700 focus:outline-none"
          aria-label="Toggle Mobile Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-md">
          <Link
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-700 py-2 text-base font-semibold"
          >
            Home
          </Link>
          <Link
            href="#product"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-700 py-2 text-base font-semibold"
          >
            Product
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-700 py-2 text-base font-semibold"
          >
            Services
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-700 py-2 text-base font-semibold"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-800 hover:text-emerald-700 py-2 text-base font-semibold"
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block btn-orange font-bold py-3 rounded-lg shadow-sm text-sm"
            >
              Get Wholesale Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
