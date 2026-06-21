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
      {/* Subtle background, restrained */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 0%, #0ea5e918 0%, transparent 55%), linear-gradient(160deg, #0f2a44 0%, #091b2e 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">
          {/* LEFT, copy + form */}
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 text-[#cbd5e1] text-xs font-medium px-3.5 py-1.5 rounded-full mb-6 tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full" />
              Launching 1 August 2026
            </div>

            <h1 className="text-[2rem] sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight">
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

            <div className="mt-9">
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748b] mb-4">
                Doors open in
              </p>
              <CountdownTimer />
            </div>

            <div className="mt-9 max-w-xl">
              <WaitlistForm />
            </div>
          </div>

          {/* RIGHT, real product mockup */}
          <div className="relative min-w-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#0ea5e9]/15 rounded-full blur-3xl" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/product/hero-devices.png"
              alt="Harbours360 shown on laptop, tablet, and mobile"
              className="relative w-full h-auto drop-shadow-2xl"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
