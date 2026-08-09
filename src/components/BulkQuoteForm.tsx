"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function BulkQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim()
    ) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    try {
      // Insert into Supabase table `inquiries`
      const { data, error } = await supabase.from("inquiries").insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) {
        console.error("Supabase Error:", JSON.stringify(error, null, 2));
        setErrorMessage(
          `Failed to send inquiry: ${error.message || JSON.stringify(error)}`
        );
      } else {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      }
    } catch (err: any) {
      console.error("Inquiry Error:", err);
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-center mb-8">
            <span className="section-tag">
              Get In Touch
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-[-0.02em] mt-4">
              Request a Wholesale Quote
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              Tell us what you need — our team responds within 2 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-xl bg-[#f0fdf4] border border-emerald-200 text-center space-y-3">
              <span className="text-4xl">🎉</span>
              <h3 className="font-heading text-xl font-bold text-slate-900">
                Inquiry Received!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you! Our team will contact you shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 rounded-lg btn-green font-bold text-xs"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a]/20 focus:bg-white text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a]/20 focus:bg-white text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email ID *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a]/20 focus:bg-white text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a]/20 focus:bg-white text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-orange py-3.5 rounded-lg font-bold text-sm shadow-sm hover:scale-[1.01] transition-transform disabled:opacity-50 tracking-wide"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
