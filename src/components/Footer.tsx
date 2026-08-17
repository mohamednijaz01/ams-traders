import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2e1f] text-white/70 text-sm py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="inline-block">
              <span className="font-heading font-extrabold text-white text-lg tracking-[-0.03em]">AMS Traders</span>
            </Link>
            <p className="text-white/55 max-w-sm leading-relaxed text-sm">
              Trusted wholesale supplier of fresh fruits and vegetables. Serving supermarkets, hotels, restaurants, and food service partners with reliable farm-direct supply since 2003.
            </p>
          </div>

          {/* Quick Navigation - Matching Home, Product, Services, About Us, Contact Us */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/90 font-bold mb-3">Navigation</h4>
            <ul className="space-y-2 text-white/55">
              <li><Link href="#home" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="#product" className="hover:text-emerald-400 transition-colors">Product Catalog</Link></li>
              <li><Link href="#services" className="hover:text-emerald-400 transition-colors">Services &amp; Estimator</Link></li>
              <li><Link href="#about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/90 font-bold mb-3">Produce</h4>
            <ul className="space-y-2 text-white/55">
              <li><Link href="#product" className="hover:text-emerald-400 transition-colors">Fresh Fruits</Link></li>
              <li><Link href="#product" className="hover:text-emerald-400 transition-colors">Leafy Vegetables</Link></li>
              <li><Link href="#product" className="hover:text-emerald-400 transition-colors">Root Produce</Link></li>
              <li><Link href="#product" className="hover:text-emerald-400 transition-colors">Exotic Imports</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white/90 font-bold mb-3">Contact</h4>
            <ul className="space-y-2 text-white/55">
              <li className="font-semibold text-emerald-400">📞 <a href="tel:9843167650" className="hover:text-emerald-300 transition-colors">9843167650</a></li>
              <li>✉️ <a href="mailto:sabeerams01@gmail.com" className="hover:text-emerald-400 transition-colors">sabeerams01@gmail.com</a></li>
              <li>📍 No 73, Babu complex, Pavazham street, T.K. Market, Town Hall, Coimbatore, Tamil Nadu 641001</li>
              <li>🕒 Mon - Sat: 6:00 AM - 8:00 PM</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-white/40 gap-3 text-xs">
          <div>
            &copy; {new Date().getFullYear()} AMS Traders — Fruits &amp; Vegetables Wholesale. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms of Supply</a>
          </div>
        </div>

        {/* Staff Login — intentionally understated */}
        <div className="mt-4 text-center">
          <Link href="/admin" className="text-white/20 hover:text-white/40 transition-colors text-[11px]">
            Staff Login
          </Link>
        </div>

      </div>
    </footer>
  );
}
