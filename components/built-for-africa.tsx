import SwappablePhoto from "./swappable-photo";
import HarbourScene from "./illustrations/harbour-scene";
import { Globe2, Anchor, Coins, Wifi } from "lucide-react";

const FEATURES = [
  { icon: Globe2, title: "Built for African trade", desc: "Designed around the markets, currencies, and regulations of the continent." },
  { icon: Anchor, title: "Maritime focused", desc: "Built around how ships and equipment are actually bought and sold." },
  { icon: Coins, title: "Multi-currency", desc: "Transact in USD, EUR, GBP, and major local currencies." },
  { icon: Wifi, title: "Reliable access", desc: "Fast and dependable, including on port-side connections." },
];

export default function BuiltForAfrica() {
  return (
    <section className="relative bg-[#091b2e]">
      {/* Photo band */}
      <div className="relative h-[360px] sm:h-[460px]">
        <SwappablePhoto
          src="/photos/harbour.jpg"
          alt="Container vessel being loaded at a commercial port"
          fallback={<HarbourScene className="w-full h-full" />}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#091b2e] via-[#091b2e]/55 to-[#091b2e]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#091b2e]/85 via-[#091b2e]/30 to-transparent" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <p className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
                Across the continent
              </p>
              <h2 className="text-3xl sm:text-[2.75rem] font-bold text-white leading-[1.12]">
                Built for African maritime trade
              </h2>
              <p className="mt-5 text-lg text-[#cbd5e1] leading-relaxed">
                From Lagos to Mombasa, Tema to Durban, Harbours360 connects the people,
                assets, and capital that keep the continent&apos;s maritime economy moving.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <div className="inline-flex w-11 h-11 rounded-xl bg-white/5 border border-white/10 items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[#0ea5e9]" strokeWidth={1.6} />
              </div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="text-sm text-[#94a3b8] mt-1.5 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
