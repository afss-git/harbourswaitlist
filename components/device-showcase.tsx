"use client";

import { motion } from "framer-motion";

export default function DeviceShowcase() {
  return (
    <section className="bg-[#0C243B] pb-24 pt-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
            The platform
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            One platform, every device
          </h2>
          <p className="mt-3 text-[#64748b] max-w-lg mx-auto text-sm leading-relaxed">
            Whether you are at your desk or in the field, Harbours360 is built to work wherever you do business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          {/* Soft glow behind the image so colours blend seamlessly */}
          <div className="absolute inset-x-0 top-1/4 h-1/2 bg-[#0ea5e9]/8 blur-3xl pointer-events-none rounded-full" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/product/hero-devices.png"
            alt="Harbours360 shown on laptop, tablet, and mobile"
            className="relative w-full h-auto"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  );
}
