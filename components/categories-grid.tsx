import {
  Ship,
  Waves,
  Anchor,
  Package,
  Settings,
  Navigation,
  Factory,
  Wrench,
} from "lucide-react";

const CATEGORIES = [
  { icon: Ship, label: "Ships & Vessels", desc: "Bulk carriers, tankers, general cargo" },
  { icon: Waves, label: "Offshore Assets", desc: "Platforms, FPSOs, jack-up rigs" },
  { icon: Anchor, label: "Marine Equipment", desc: "Mooring, deck, lifting gear" },
  { icon: Package, label: "Cargo Equipment", desc: "Containers, cranes, forklifts" },
  { icon: Settings, label: "Port Machinery", desc: "Terminal & harbour machinery" },
  { icon: Navigation, label: "Navigation Systems", desc: "Radar, AIS, ECDIS, comms" },
  { icon: Factory, label: "Industrial Assets", desc: "Generators, compressors, pumps" },
  { icon: Wrench, label: "Spare Parts", desc: "Engine, hull, propulsion parts" },
];

export default function CategoriesGrid() {
  return (
    <section className="bg-[#091b2e] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
            Asset categories
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            What you can trade on Harbours360
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            From ocean-going vessels to spare parts, every maritime and industrial
            asset class, all on one platform.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group bg-[#0f2a44] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col items-start gap-2 sm:gap-3 hover:border-[#0ea5e9]/50 hover:bg-[#122d47] transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ea5e9]/10"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#0ea5e9]/10 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-[#0ea5e9]/20 transition-colors">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0ea5e9]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-white leading-snug">{label}</div>
                <div className="text-xs text-[#64748b] mt-0.5 leading-relaxed hidden sm:block">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
