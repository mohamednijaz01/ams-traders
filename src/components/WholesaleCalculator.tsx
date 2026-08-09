"use client";

import { useState } from "react";

export default function WholesaleCalculator() {
  const [selectedProduce, setSelectedProduce] = useState({
    name: "Organic Hass Avocados",
    basePrice: 2.15,
    unit: "kg",
    icon: "🥑"
  });

  const produceList = [
    { name: "Organic Hass Avocados", basePrice: 2.15, unit: "kg", icon: "🥑" },
    { name: "Red Vine Cluster Tomatoes", basePrice: 1.20, unit: "kg", icon: "🍅" },
    { name: "Hydroponic Baby Spinach", basePrice: 3.10, unit: "kg", icon: "🥬" },
    { name: "Crisp Fuji Apples", basePrice: 1.45, unit: "kg", icon: "🍎" },
    { name: "Bell Peppers Color Trio", basePrice: 2.40, unit: "kg", icon: "🫑" },
    { name: "Cavendish Bananas", basePrice: 0.95, unit: "kg", icon: "🍌" },
    { name: "Spanish Sweet Onions", basePrice: 0.75, unit: "kg", icon: "🧅" }
  ];

  const [quantityKg, setQuantityKg] = useState(500);
  const [deliveryFrequency, setDeliveryFrequency] = useState<"daily" | "weekly" | "one-time">("weekly");
  const [quoteLocked, setQuoteLocked] = useState(false);

  const getDiscountTier = () => {
    if (quantityKg >= 3000) return { pct: 0.15, label: "15% Enterprise Volume Discount" };
    if (quantityKg >= 1500) return { pct: 0.10, label: "10% Commercial Volume Discount" };
    if (quantityKg >= 500) return { pct: 0.05, label: "5% Tier 1 Discount" };
    return { pct: 0.0, label: "Standard Wholesale Rate" };
  };

  const discount = getDiscountTier();
  const rawSubtotal = selectedProduce.basePrice * quantityKg;
  const discountAmount = rawSubtotal * discount.pct;
  const estimatedFreight = quantityKg > 1000 ? 50 : 25;
  const finalTotal = rawSubtotal - discountAmount + estimatedFreight;

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Wholesale Services
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-3">
            Wholesale Price Estimator
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Calculate your custom bulk produce rates, volume tier discounts, and delivery logistics in real-time.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Controls */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-6 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Order Configuration</span>
              <span className="text-xs text-emerald-700 font-semibold">AMS Wholesale</span>
            </h3>

            {/* Produce Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                1. Select Produce Item
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {produceList.map((prod) => (
                  <button
                    key={prod.name}
                    onClick={() => setSelectedProduce(prod)}
                    className={`p-3 rounded-lg text-left border text-xs font-medium flex items-center gap-2.5 transition-all ${
                      selectedProduce.name === prod.name
                        ? "border-emerald-600 bg-emerald-50 text-slate-900 font-bold"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <span className="text-xl">{prod.icon}</span>
                    <div className="truncate">
                      <div className="truncate text-slate-900">{prod.name}</div>
                      <div className="text-[11px] text-emerald-700 font-semibold">${prod.basePrice.toFixed(2)} / kg</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-2">
                <span className="uppercase tracking-wider">2. Order Volume (Kg)</span>
                <span className="text-base text-emerald-700 font-bold">{quantityKg.toLocaleString()} Kg</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="50"
                value={quantityKg}
                onChange={(e) => setQuantityKg(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>100 Kg (Min)</span>
                <span>1,500 Kg</span>
                <span>5,000 Kg</span>
              </div>
            </div>

            {/* Delivery Schedule */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                3. Delivery Frequency
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Daily Delivery", value: "daily" },
                  { label: "Weekly Supply", value: "weekly" },
                  { label: "One-Time Order", value: "one-time" }
                ].map((freq) => (
                  <button
                    key={freq.value}
                    onClick={() => setDeliveryFrequency(freq.value as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                      deliveryFrequency === freq.value
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {freq.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Estimate Summary */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 flex flex-col justify-between min-h-[400px] shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedProduce.icon}</span>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{selectedProduce.name}</h4>
                    <span className="text-xs text-emerald-700 font-semibold">{deliveryFrequency.toUpperCase()} SCHEDULE</span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                  ESTIMATE SUMMARY
                </span>
              </div>

              {/* Price Breakdown */}
              <div className="mt-5 space-y-2.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Base Wholesale Price:</span>
                  <span className="font-semibold text-slate-800">${selectedProduce.basePrice.toFixed(2)} / kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Volume Weight:</span>
                  <span className="font-semibold text-slate-800">{quantityKg.toLocaleString()} kg</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-slate-800">${rawSubtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 font-medium">
                  <span>Volume Savings ({discount.label}):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Refrigerated Transport Estimate:</span>
                  <span className="font-semibold text-slate-800">${estimatedFreight.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Total Footer */}
            <div className="pt-5 border-t border-slate-100 mt-6">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">ESTIMATED WHOLESALE TOTAL</span>
                  <div className="text-[11px] text-emerald-700 font-medium">Includes Delivery Logistics</div>
                </div>
                <span className="text-3xl font-bold text-slate-900">
                  ${finalTotal.toFixed(2)}
                </span>
              </div>

              {quoteLocked ? (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center">
                  ✓ Estimate Recorded! Our team will contact you shortly to confirm order specifications.
                </div>
              ) : (
                <button
                  onClick={() => setQuoteLocked(true)}
                  className="w-full btn-orange py-3.5 rounded-lg font-bold text-xs shadow-sm hover:scale-[1.01] transition-transform"
                >
                  Submit Estimate Inquiry
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
