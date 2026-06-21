import { Network, Eye, Landmark, ArrowRight } from "lucide-react";

const POINTS = [
  {
    icon: Network,
    title: "A fragmented market",
    desc: "Vessels and equipment are traded through scattered broker networks and private contacts. Buyers rarely see the full market, and sellers struggle to reach serious counterparties.",
  },
  {
    icon: Eye,
    title: "Limited transparency",
    desc: "Without verified identities or a record of past dealings, it is difficult to know who you are transacting with, or whether an asset is as described.",
  },
  {
    icon: Landmark,
    title: "Cross-border payment risk",
    desc: "High-value transfers are often made on trust across borders, leaving both buyers and sellers exposed.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
            Why Harbours360
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-[#0f2a44] leading-[1.15]">
            The maritime asset market is overdue for change
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748b] leading-relaxed">
            Across Africa, billions of dollars in ships, equipment, and machinery
            change hands each year through channels that are fragmented, opaque,
            and difficult to trust.
          </p>
        </div>

        {/* Three points */}
        <div className="grid md:grid-cols-3 gap-px bg-[#e8edf3] rounded-2xl overflow-hidden border border-[#e8edf3]">
          {POINTS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white p-6 sm:p-8">
              <div className="w-11 h-11 rounded-xl bg-[#f1f5f9] flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-[#0f2a44]" strokeWidth={1.6} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#0f2a44] mb-2.5">{title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Solution bridge */}
        <div className="mt-6 sm:mt-8 rounded-2xl bg-[#0f2a44] p-7 sm:p-10 md:p-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
              The platform
            </p>
            <h3 className="text-xl sm:text-2xl md:text-[2rem] font-bold text-white leading-[1.2]">
              One verified platform for the entire transaction
            </h3>
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#94a3b8] leading-relaxed">
              Harbours360 brings the market together in a single place, where every
              participant is verified and every payment is protected, from first
              enquiry to final delivery.
            </p>
            <a
              href="#waitlist-form"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-[#0ea5e9] font-semibold hover:gap-3 transition-all"
            >
              Join the waitlist <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
