"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, Loader2, AlertCircle, Mail } from "lucide-react";

type Role = "buyer" | "seller" | "both";

const ROLES: { value: Role; label: string; desc: string }[] = [
  { value: "buyer", label: "Buyer", desc: "I want to acquire assets" },
  { value: "seller", label: "Seller", desc: "I want to list assets" },
  { value: "both", label: "Both", desc: "I buy and sell" },
];

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successName, setSuccessName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [confirming, setConfirming] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!role) {
      setError("Please select whether you are a Buyer, Seller, or Both.");
      return;
    }
    setError(null);
    setConfirming(true);
  }

  async function confirmAndSend() {
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), role }),
      });
      const data = await res.json();
      if (!res.ok) {
        setConfirming(false);
        if (data.error === "duplicate") {
          setIsDuplicate(true);
          setError(data.message);
        } else {
          setError(data.error ?? "Something went wrong. Please try again.");
        }
        return;
      }
      setSuccessName(name.split(" ")[0]);
      setSuccess(true);
    } catch {
      setConfirming(false);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-[#10b981]/20 border-2 border-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-[#10b981]" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          You are on the waitlist, {successName}.
        </h3>
        <p className="text-[#94a3b8] text-sm leading-relaxed">
          We have sent a confirmation to your inbox. We will be in touch with your
          access details when Harbours360 opens on{" "}
          <strong className="text-[#0ea5e9]">1 July 2026</strong>.
        </p>
      </div>
    );
  }

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#cbd5e1]">Full Name</label>
          <input
            type="text"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Adebayo Okafor"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-[#64748b] text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-[#cbd5e1]">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-[#64748b] text-sm focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
          />
        </div>
      </div>

      {/* Role toggle */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#cbd5e1]">I am joining as a…</label>
        <div className="grid grid-cols-3 gap-2">
          {ROLES.map((r) => (
            <button
              key={r.value}
              type="button"
              onClick={() => { setRole(r.value); setError(null); }}
              className={cn(
                "relative rounded-xl px-3 py-3 text-center border transition-all duration-200 cursor-pointer",
                role === r.value
                  ? "bg-[#0ea5e9] border-[#0ea5e9] text-white shadow-lg shadow-[#0ea5e9]/30"
                  : "bg-white/5 border-white/20 text-[#94a3b8] hover:bg-white/10 hover:text-white"
              )}
            >
              <div className="text-sm font-semibold">{r.label}</div>
              <div className="text-xs mt-0.5 opacity-75 hidden sm:block">{r.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className={cn(
          "flex items-start gap-3 rounded-xl px-4 py-3 text-sm",
          isDuplicate
            ? "bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 text-[#38bdf8]"
            : "bg-[#ef4444]/10 border border-[#ef4444]/30 text-[#fca5a5]"
        )}>
          {isDuplicate ? (
            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          )}
          {error}
        </div>
      )}

      {/* Email confirmation prompt — appears after first click */}
      {confirming ? (
        <div className="bg-white/5 border border-[#0ea5e9]/25 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
            <p className="text-sm text-[#cbd5e1]">Please confirm this is your email address:</p>
          </div>
          <div className="bg-[#0f2a44] border border-[#0ea5e9]/30 rounded-lg px-4 py-3 text-[#0ea5e9] font-medium text-center text-sm tracking-wide break-all">
            {email.trim()}
          </div>
          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="border border-white/20 text-[#94a3b8] hover:text-white hover:border-white/40 py-3 rounded-xl text-sm font-medium transition-all"
            >
              Edit email
            </button>
            <button
              type="button"
              onClick={confirmAndSend}
              disabled={loading}
              className="bg-[#0ea5e9] hover:bg-[#0284c7] disabled:opacity-60 text-white font-semibold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Yes, join waitlist"}
            </button>
          </div>
        </div>
      ) : (
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-base py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#0ea5e9]/30 active:scale-[0.98] flex items-center justify-center gap-2"
        >
          Join the waitlist
        </button>
      )}

      <p className="text-center text-xs text-[#64748b]">
        We will only contact you about Harbours360. You can unsubscribe at any time.
      </p>
    </form>
  );
}
