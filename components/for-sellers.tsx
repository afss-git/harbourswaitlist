"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "./fade-in";

const POINTS = [
  "List in minutes, at no cost",
  "Receive enquiries only from verified buyers",
  "Settle securely through escrow on completion",
];

export default function ForSellers() {
  return (
    <section className="bg-[#091b2e] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Copy */}
          <FadeIn direction="left">
            <div className="min-w-0">
              <span className="inline-block text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
                For Sellers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Reach verified buyers across Africa
              </h2>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#94a3b8] leading-relaxed">
                List your vessels and equipment once, and present them to a qualified,
                pan-African audience of verified buyers.
              </p>

              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0ea5e9]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#0ea5e9]" strokeWidth={3} />
                    </span>
                    <span className="text-[#cbd5e1] text-sm sm:text-base">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 sm:mt-7 text-sm text-[#64748b] leading-relaxed border-l-2 border-[#0ea5e9]/40 pl-4">
                Sellers who join the waitlist early will receive featured placement
                for their first listing when the platform opens.
              </p>

              <a href="#waitlist-form" className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-[#0ea5e9] font-semibold hover:gap-3 transition-all">
                Join as a seller <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          {/* Real seller dashboard, 3D tilted with scroll entrance */}
          <div className="relative min-w-0 mt-4 lg:mt-0" style={{ perspective: "1600px" }}>
            {/* Ambient glow */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#0ea5e9]/15 to-transparent rounded-3xl blur-3xl pointer-events-none" />

            <motion.div
              className="relative rounded-xl overflow-hidden"
              initial={{ opacity: 0, rotateY: -30, rotateX: 6 }}
              whileInView={{ opacity: 1, rotateY: -13, rotateX: 4, rotate: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                boxShadow: [
                  "0 30px 70px rgba(0,0,0,0.7)",
                  "6px 12px 0 rgba(14,165,233,0.14)",
                  "12px 22px 0 rgba(14,165,233,0.06)",
                  "inset 0 1px 0 rgba(255,255,255,0.14)",
                  "inset -2px 0 0 rgba(0,0,0,0.3)",
                ].join(", "),
              }}
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent pointer-events-none z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/product/seller-listings.png"
                alt="Harbours360 seller dashboard showing listings and their status"
                className="block w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
