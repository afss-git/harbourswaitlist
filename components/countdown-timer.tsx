"use client";

import { useEffect, useState } from "react";

const LAUNCH = new Date("2026-07-01T00:00:00Z").getTime();

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = LAUNCH - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center shadow-lg">
          <span className="text-2xl sm:text-4xl font-bold text-white tabular-nums tracking-tight">
            {pad(value)}
          </span>
        </div>
      </div>
      <span className="mt-2 text-xs sm:text-sm text-[#94a3b8] uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span className="text-2xl sm:text-3xl font-bold text-[#0ea5e9] mb-5 select-none">
      :
    </span>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-end gap-3 sm:gap-4 justify-center">
        {["Days", "Hours", "Mins", "Secs"].map((label) => (
          <div key={label} className="flex flex-col items-center">
            <div className="bg-white/10 border border-white/20 rounded-xl w-16 h-16 sm:w-24 sm:h-24" />
            <span className="mt-2 text-xs text-[#94a3b8] uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2 sm:gap-4 justify-center">
      <TimeUnit value={time.days} label="Days" />
      <Colon />
      <TimeUnit value={time.hours} label="Hours" />
      <Colon />
      <TimeUnit value={time.minutes} label="Mins" />
      <Colon />
      <TimeUnit value={time.seconds} label="Secs" />
    </div>
  );
}
