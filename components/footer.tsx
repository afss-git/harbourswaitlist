import Image from "next/image";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#091b2e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Image
                  src="/logo-icon.png"
                  alt="Harbours360"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Harbours<span className="text-[#0ea5e9]">360</span>
              </span>
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed">
              A trusted marketplace for maritime and industrial asset transactions
              across Africa. Launching 1 July 2026.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-[#475569] uppercase tracking-wider mb-1">Contact</p>
            <a href="mailto:info@harbours360.com" className="text-sm text-[#64748b] hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              info@harbours360.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#64748b] hover:text-white transition-colors flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#64748b] hover:text-white transition-colors flex items-center gap-2">
              <Twitter className="w-3.5 h-3.5" />
              X / Twitter
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#475569]">
            © 2026 Harbours360. All rights reserved.
          </p>
          <p className="text-xs text-[#334155]">
            Active in 15+ African markets · Nigeria · Kenya · Ghana · South Africa · and more
          </p>
        </div>
      </div>
    </footer>
  );
}
