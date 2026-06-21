"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Star, Award } from "lucide-react";

const PERKS = [
  {
    icon: ArrowUpRight,
    title: "Priority access",
    desc: "Be among the first to use Harbours360 when the platform opens on 1 July 2026.",
  },
  {
    icon: Star,
    title: "Featured placement for early sellers",
    desc: "Sellers who join the waitlist early will receive a featured listing at launch.",
  },
  {
    icon: Award,
    title: "Founding member status",
    desc: "Recognition as an early member of the Harbours360 network.",
  },
];

function LiveCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d) => setCount(d.count ?? null))
      .catch(() => {});
  }, []);

  if (count === null || count < 1) return null;

  return (
    <div className="mt-10 sm:mt-12 inline-flex items-center gap-2.5 bg-white border border-[#e8edf3] rounded-full px-4 sm:px-5 py-2.5 text-sm text-[#475569] shadow-sm">
      <span className="w-2 h-2 bg-[#10b981] rounded-full" />
      <span>
        <strong className="text-[#0f2a44]">{count.toLocaleString()}</strong> maritime professionals are already on the waitlist
      </span>
    </div>
  );
}

export default function WhyJoinEarly() {
  return (
    <section className="bg-[#f8fafc] py-16 sm:py-24 border-y border-[#eef2f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-widest mb-3">
            Early access
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2a44] leading-tight">
            Benefits of joining early
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#64748b] leading-relaxed">
            Members who join before launch receive a head start when the platform
            opens on 1 July 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {PERKS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-[#e8edf3] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0f2a44] flex items-center justify-center mb-4 sm:mb-5">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0ea5e9]" strokeWidth={1.7} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#0f2a44] mb-2 sm:mb-2.5">{title}</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <LiveCount />
      </div>
    </section>
  );
}
