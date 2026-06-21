"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("waitlist-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <Image
              src="/logo-icon.png"
              alt="Harbours360"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              scrolled ? "text-[#0f2a44]" : "text-white"
            )}
          >
            Harbours<span className="text-[#0ea5e9]">360</span>
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToForm}
          className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#0ea5e9]/30 active:scale-95"
        >
          Join the waitlist
        </button>
      </div>
    </header>
  );
}
