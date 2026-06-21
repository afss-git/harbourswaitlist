import { Check, ArrowRight } from "lucide-react";

const POINTS = [
  "List in minutes, at no cost",
  "Receive enquiries only from verified buyers",
  "Settle securely through escrow on completion",
];

export default function ForSellers() {
  return (
    <section className="bg-[#091b2e] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <div className="min-w-0">
            <span className="inline-block text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
              For Sellers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Reach verified buyers across Africa
            </h2>
            <p className="mt-4 text-lg text-[#94a3b8] leading-relaxed">
              List your vessels and equipment once, and present them to a qualified,
              pan-African audience of verified buyers.
            </p>

            <ul className="mt-8 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#0ea5e9]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#0ea5e9]" strokeWidth={3} />
                  </span>
                  <span className="text-[#cbd5e1]">{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-sm text-[#64748b] leading-relaxed border-l-2 border-[#0ea5e9]/40 pl-4">
              Sellers who join the waitlist early will receive featured placement
              for their first listing when the platform opens.
            </p>

            <a href="#waitlist-form" className="mt-8 inline-flex items-center gap-2 text-[#0ea5e9] font-semibold hover:gap-3 transition-all">
              Join as a seller <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Real seller dashboard, slightly tilted */}
          <div className="relative min-w-0" style={{ perspective: "1800px" }}>
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#0ea5e9]/12 to-transparent rounded-3xl blur-3xl" />
            <div
              className="relative rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-black/50"
              style={{ transform: "rotateY(-13deg) rotateX(4deg) rotate(1deg)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/product/seller-listings.png"
                alt="Harbours360 seller dashboard showing listings and their status"
                className="block w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
