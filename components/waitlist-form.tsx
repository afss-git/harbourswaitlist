"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle, Loader2, AlertCircle, X, Mail } from "lucide-react";

type Role = "buyer" | "seller" | "both";

const ROLES: { value: Role; label: string }[] = [
  { value: "buyer",  label: "Buyer"  },
  { value: "seller", label: "Seller" },
  { value: "both",   label: "Both"   },
];

/* ─── Confirmation modal (portal — floats above everything) ─── */
function ConfirmModal({
  email,
  loading,
  onConfirm,
  onEdit,
}: {
  email: string;
  loading: boolean;
  onConfirm: () => void;
  onEdit: () => void;
}) {
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-5">
      {/* Blurred dark backdrop — tapping it closes the modal */}
      <div
        className="absolute inset-0 bg-black/70"
        style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
        onClick={onEdit}
      />

      {/* Card */}
      <motion.div
        className="relative bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Navy top accent */}
        <div className="h-1 bg-[#0ea5e9]" />

        <div className="p-6 sm:p-8">
          {/* Close */}
          <button
            onClick={onEdit}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[#94a3b8] hover:bg-[#f1f5f9] hover:text-[#0f2a44] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon */}
          <div className="w-12 h-12 bg-[#eff6ff] rounded-xl flex items-center justify-center mb-5">
            <Mail className="w-5 h-5 text-[#0ea5e9]" strokeWidth={1.8} />
          </div>

          <h3 className="text-[#0f2a44] font-bold text-lg leading-snug mb-1.5">
            Is this your email address?
          </h3>
          <p className="text-[#64748b] text-sm leading-relaxed mb-6">
            Double-check every character. A typo means you will not receive your access details.
          </p>

          {/* Email display — monospace so characters are unmistakable */}
          <div className="bg-[#f8fafc] border-2 border-[#0ea5e9]/35 rounded-xl px-5 py-4 mb-6 text-center">
            <p className="text-[10px] font-semibold text-[#94a3b8] uppercase tracking-widest mb-2">
              Your email
            </p>
            <p
              className="text-[#0f2a44] font-semibold text-base break-all leading-relaxed"
              style={{ fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Mono', monospace" }}
            >
              {email}
            </p>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={onEdit}
              disabled={loading}
              className="border border-[#e2e8f0] text-[#475569] hover:border-[#cbd5e1] hover:text-[#0f2a44] rounded-xl py-3.5 text-sm font-semibold transition-all"
            >
              Edit email
            </button>
            <button
              type="button"
              onClick={onConfirm}
              disabled={loading}
              className="bg-[#0ea5e9] hover:bg-[#0284c7] disabled:opacity-60 text-white font-semibold text-sm py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0ea5e9]/25"
            >
              {loading
                ? <Loader2 className="w-4 h-4 animate-spin" />
                : "Yes, join waitlist"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
}

/* ─── Main form ─── */
export default function WaitlistForm() {
  const [name,        setName]        = useState("");
  const [email,       setEmail]       = useState("");
  const [role,        setRole]        = useState<Role | null>(null);
  const [loading,     setLoading]     = useState(false);
  const [success,     setSuccess]     = useState(false);
  const [successName, setSuccessName] = useState("");
  const [error,       setError]       = useState<string | null>(null);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [confirming,  setConfirming]  = useState(false);
  const [mounted,     setMounted]     = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock body scroll while the modal is open
  useEffect(() => {
    document.body.style.overflow = confirming ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [confirming]);

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
      setConfirming(false);
      setSuccessName(name.split(" ")[0]);
      setSuccess(true);
    } catch {
      setConfirming(false);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  /* ── Success state ── */
  if (success) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-7 text-center">
        <div className="w-14 h-14 bg-[#10b981]/20 border-2 border-[#10b981] rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-7 h-7 text-[#10b981]" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">
          You are on the waitlist, {successName}.
        </h3>
        <p className="text-[#94a3b8] text-sm leading-relaxed">
          We will be in touch with your access details when Harbours360 opens on{" "}
          <strong className="text-[#0ea5e9]">1 July 2026</strong>.
        </p>
      </div>
    );
  }

  /* ── Form ── */
  return (
    <>
      <form
        id="waitlist-form"
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 sm:p-7 space-y-4"
      >
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-[#cbd5e1]">
            Full Name
          </label>
          <input
            type="text"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Adebayo Okafor"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-[#475569] text-base focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-[#cbd5e1]">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white placeholder:text-[#475569] text-base focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all"
          />
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#cbd5e1]">
            I am joining as a…
          </label>
          <div className="grid grid-cols-3 gap-2">
            {ROLES.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => { setRole(r.value); setError(null); }}
                className={cn(
                  "rounded-xl py-4 text-sm font-semibold border transition-all duration-200",
                  role === r.value
                    ? "bg-[#0ea5e9] border-[#0ea5e9] text-white shadow-lg shadow-[#0ea5e9]/30"
                    : "bg-white/5 border-white/20 text-[#94a3b8] hover:bg-white/10 hover:text-white"
                )}
              >
                {r.label}
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
            {isDuplicate
              ? <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
              : <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold text-base py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#0ea5e9]/30 active:scale-[0.98]"
        >
          Join the waitlist
        </button>

        <p className="text-center text-xs text-[#64748b]">
          We will only contact you about Harbours360. Unsubscribe at any time.
        </p>
      </form>

      {/* Confirmation modal — portal renders at document.body, above everything */}
      {mounted && confirming && (
        <ConfirmModal
          email={email.trim()}
          loading={loading}
          onConfirm={confirmAndSend}
          onEdit={() => setConfirming(false)}
        />
      )}
    </>
  );
}
