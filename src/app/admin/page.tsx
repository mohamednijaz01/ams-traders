"use client";

import { useState, useEffect } from "react";

interface Inquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState("");

  // Try to fetch inquiries on mount (checks if already logged in via cookie)
  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const res = await fetch("/api/admin/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
        setIsLoggedIn(true);
      }
    } catch {
      // Not logged in, show login form
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsLoggedIn(true);
        setPassword("");
        fetchInquiries();
      } else {
        const data = await res.json();
        setLoginError(data.error || "Wrong password. Please try again.");
      }
    } catch {
      setLoginError("Could not connect. Please check your internet and try again.");
    } finally {
      setLoginLoading(false);
    }
  }

  async function fetchInquiries() {
    setLoading(true);
    setFetchError("");

    try {
      const res = await fetch("/api/admin/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
      } else if (res.status === 401) {
        setIsLoggedIn(false);
      } else {
        const data = await res.json();
        setFetchError(data.error || "Could not load inquiries.");
      }
    } catch {
      setFetchError("Could not connect. Please check your internet.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsLoggedIn(false);
    setInquiries([]);
    setPassword("");
  }

  function formatDate(dateStr: string) {
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  }

  // ══════════════════════════════════════
  // LOGIN SCREEN — simple, large, clear
  // ══════════════════════════════════════
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md">
          {/* Brand */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-2xl bg-emerald-600 flex items-center justify-center text-white text-4xl mx-auto shadow-md mb-5">
              🌱
            </div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              AMS Traders
            </h1>
            <p className="text-lg text-slate-500 mt-2">Owner Login</p>
          </div>

          {/* Login Card */}
          <form
            onSubmit={handleLogin}
            className="bg-white rounded-2xl border border-slate-200 shadow-md p-10 space-y-6"
          >
            <div>
              <label
                htmlFor="admin-password"
                className="block text-base font-bold text-slate-700 mb-2"
              >
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white text-lg transition-colors"
                autoFocus
              />
            </div>

            {loginError && (
              <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-700 text-base font-medium">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 shadow-md"
            >
              {loginLoading ? "Logging in…" : "Log In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ══════════════════════════════════════
  // DASHBOARD — large fonts, card layout,
  // clickable phone/email, generous spacing
  // ══════════════════════════════════════
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Bar */}
      <header className="bg-white border-b-2 border-slate-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-emerald-600 flex items-center justify-center text-white text-xl shadow-sm">
              🌱
            </div>
            <div>
              <span className="font-bold text-slate-900 text-lg">
                AMS Traders
              </span>
              <span className="text-sm text-slate-400 ml-2">Inquiries</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchInquiries}
              className="text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-5 py-2.5 rounded-xl border-2 border-emerald-200 transition-colors"
            >
              ↻ Refresh
            </button>
            <button
              onClick={handleLogout}
              className="text-sm font-bold text-white bg-red-500 hover:bg-red-600 px-5 py-2.5 rounded-xl shadow-sm transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            Customer Inquiries
          </h1>
          <p className="text-base text-slate-500 mt-1">
            {inquiries.length} total{" "}
            {inquiries.length === 1 ? "inquiry" : "inquiries"} — newest first
          </p>
        </div>

        {/* Error */}
        {fetchError && (
          <div className="mb-6 p-5 rounded-xl bg-red-50 border-2 border-red-200 text-red-700 text-base font-medium">
            {fetchError}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-20 text-slate-400 text-lg">
            Loading inquiries…
          </div>
        )}

        {/* Empty State */}
        {!loading && inquiries.length === 0 && !fetchError && (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-slate-200">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-slate-500 text-lg font-medium">
              No inquiries yet
            </p>
            <p className="text-slate-400 text-base mt-2">
              New inquiries from the website contact form will appear here.
            </p>
          </div>
        )}

        {/* Inquiry Cards — one card per inquiry, large and readable */}
        {!loading && inquiries.length > 0 && (
          <div className="space-y-5">
            {inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm"
              >
                {/* Name + Date row */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                  <h2 className="text-xl font-bold text-slate-900">
                    {inquiry.name}
                  </h2>
                  <span className="text-sm text-slate-400 font-medium">
                    {formatDate(inquiry.created_at)}
                  </span>
                </div>

                {/* Contact info — large, clickable */}
                <div className="flex flex-col sm:flex-row gap-4 mb-5">
                  <a
                    href={`tel:${inquiry.phone}`}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-emerald-50 border-2 border-emerald-200 text-emerald-800 font-bold text-base hover:bg-emerald-100 transition-colors"
                  >
                    <span className="text-xl">📞</span>
                    {inquiry.phone}
                  </a>
                  <a
                    href={`mailto:${inquiry.email}`}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-amber-50 border-2 border-amber-200 text-amber-800 font-bold text-base hover:bg-amber-100 transition-colors"
                  >
                    <span className="text-xl">✉️</span>
                    {inquiry.email}
                  </a>
                </div>

                {/* Message */}
                {inquiry.message ? (
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                    <p className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                      Message
                    </p>
                    <p className="text-base text-slate-700 leading-relaxed">
                      {inquiry.message}
                    </p>
                  </div>
                ) : (
                  <p className="text-sm text-slate-300 italic">No message provided</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
