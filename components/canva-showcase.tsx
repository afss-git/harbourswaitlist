"use client";

import { motion } from "framer-motion";

export default function CanvaShowcase() {
  return (
    <section className="bg-[#09254B] py-14 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
            In your hands
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Browse listings from anywhere
          </h2>
          <p className="mt-3 text-[#64748b] max-w-md mx-auto text-sm leading-relaxed">
            Full asset details, photographs, and verified seller information on every listing, optimised for mobile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/product/canva-presentation.png"
            alt="Harbours360 listing experience on mobile"
            className="w-full h-auto block"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}
