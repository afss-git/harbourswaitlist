import { Search, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    step: "01",
    title: "Find the right asset",
    desc: "Browse verified listings with full specifications, photographs, and pricing in one place.",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Engage directly",
    desc: "Contact sellers, arrange inspections, and agree terms within the platform, knowing each party is verified.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Pay securely",
    desc: "Funds are held in escrow and released only once you confirm the asset.",
  },
];

export default function ForBuyers() {
  return (
    <section className="bg-[#f8fafc] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="inline-block text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
            For Buyers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a44] leading-tight">
            Source assets with confidence
          </h2>
          <p className="mt-4 text-lg text-[#64748b] leading-relaxed">
            Access a verified marketplace of maritime and industrial assets, with
            every payment protected until delivery is confirmed.
          </p>
        </div>

        {/* Step flow */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative">
              {/* connector line on desktop */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+2.5rem)] right-[-1.5rem] lg:right-[-2rem] h-px bg-[#d8e0ea]" />
              )}
              <div className="relative bg-white border border-[#e8edf3] rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#0f2a44] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#0ea5e9]" strokeWidth={1.6} />
                  </div>
                  <span className="text-2xl font-bold text-[#e2e8f0]">{step}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0f2a44] mb-2">{title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#waitlist-form" className="mt-10 inline-flex items-center gap-2 text-[#0ea5e9] font-semibold hover:gap-3 transition-all">
          Join as a buyer <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
