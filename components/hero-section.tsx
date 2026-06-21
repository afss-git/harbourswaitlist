"use client";

import { motion } from "framer-motion";
import CountdownTimer from "./countdown-timer";
import WaitlistForm from "./waitlist-form";
import { Check } from "lucide-react";

const VALUE_POINTS = [
  "Identity-verified buyers and sellers",
  "Payments secured through escrow",
  "Coverage across African markets",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0f2a44] pt-28 pb-20 lg:pt-32 lg:pb-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 85% 20%, #0ea5e91a 0%, transparent 60%), linear-gradient(160deg, #0f2a44 0%, #091b2e 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

          {/* LEFT: copy + form */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-[#cbd5e1] text-xs font-medium px-3.5 py-1.5 rounded-full mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full" />
              Launching 1 July 2026
            </div>

            <h1 className="text-[2.2rem] sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
              Africa&apos;s marketplace for maritime and industrial assets.
            </h1>

            <p className="mt-6 text-lg text-[#94a3b8] max-w-xl leading-relaxed">
              Harbours360 brings buyers and sellers of vessels, offshore equipment,
              and port machinery onto one verified platform, with payments protected
              from offer to delivery.
            </p>

            <ul className="mt-7 space-y-2.5">
              {VALUE_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                  <span className="w-5 h-5 rounded-full bg-[#0ea5e9]/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0ea5e9]" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 max-w-xl">
              <WaitlistForm />
            </div>
          </motion.div>

          {/* RIGHT: countdown — given its own column, clean and prominent */}
          <motion.div
            className="flex flex-col items-center justify-center min-w-0 py-8 lg:py-0"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute -inset-16 bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative text-center">
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-[0.22em] mb-8">
                  Doors open in
                </p>
                <CountdownTimer />
                <div className="mt-8 inline-flex items-center gap-2.5 border border-white/10 bg-white/5 rounded-full px-5 py-2.5 text-xs text-[#94a3b8]">
                  <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full animate-pulse" />
                  1 July 2026
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
