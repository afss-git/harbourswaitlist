import { Users, Lock, FileText } from "lucide-react";

const PILLARS = [
  {
    icon: Users,
    title: "Verified participants",
    desc: "Every buyer and seller completes identity verification before transacting, so you always know who you are dealing with.",
    accent: "#0ea5e9",
  },
  {
    icon: Lock,
    title: "Protected payments",
    desc: "Funds are held securely and released only when both parties confirm the transaction is complete.",
    accent: "#10b981",
  },
  {
    icon: FileText,
    title: "Clear records and support",
    desc: "Each agreement is documented, and our team is available to help resolve any issue fairly.",
    accent: "#f59e0b",
  },
];

export default function TrustPillars() {
  return (
    <section className="bg-[#0f2a44] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
            Built on trust
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Confidence at every stage
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            High-value transactions require certainty. Harbours360 is designed to provide it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {PILLARS.map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="bg-[#091b2e] border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <div
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-5 sm:mb-6"
                style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: accent }} strokeWidth={1.5} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
