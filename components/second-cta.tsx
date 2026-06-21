"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function SecondCta() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: email.split("@")[0], email: email.trim(), role: "buyer" }),
      });
      const data = await res.json();
      if (!res.ok && data.error !== "duplicate") {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#091b2e] py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
          Be ready for launch
        </h2>
        <p className="text-base sm:text-lg text-[#94a3b8] mb-8 sm:mb-10 leading-relaxed">
          Join the waitlist and we will notify you the moment Harbours360 opens on
          1 July 2026.
        </p>

        {done ? (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle className="w-10 h-10 sm:w-11 sm:h-11 text-[#10b981]" />
            <p className="font-semibold text-base sm:text-lg text-white">You are on the waitlist.</p>
            <p className="text-sm text-[#94a3b8]">Please check your inbox for a confirmation email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 border border-white/15 bg-white/5 rounded-xl px-4 sm:px-5 py-3.5 sm:py-4 text-sm text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-colors duration-200 flex items-center gap-2 justify-center whitespace-nowrap disabled:opacity-60"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Join the waitlist"}
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-sm text-[#fca5a5]">{error}</p>}
      </div>
    </section>
  );
}
