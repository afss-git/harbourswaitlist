/**
 * Golden-hour African harbour scene, designed SVG, not a photo.
 * Looks intentional and premium on its own; used as the default visual
 * and as the fallback behind any real photo dropped into /public/photos.
 */
export default function HarbourScene({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2a44" />
          <stop offset="45%" stopColor="#1e3a5f" />
          <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0f2a44" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="330" fill="url(#sky)" />
      {/* Sun glow */}
      <circle cx="560" cy="240" r="160" fill="url(#sun)" />
      <circle cx="560" cy="245" r="46" fill="#fde68a" opacity="0.9" />

      {/* Distant skyline / port silhouette */}
      <g fill="#0b1f33" opacity="0.85">
        <rect x="40" y="210" width="30" height="120" />
        <rect x="80" y="180" width="22" height="150" />
        <rect x="110" y="230" width="40" height="100" />
        <rect x="690" y="200" width="28" height="130" />
        <rect x="730" y="225" width="34" height="105" />
      </g>

      {/* Gantry cranes */}
      <g stroke="#0b1f33" strokeWidth="5" fill="none" opacity="0.95">
        <path d="M180 330 V150 H320 V330" />
        <path d="M180 150 L150 130 M320 150 L350 130" />
        <line x1="150" y1="130" x2="350" y2="130" strokeWidth="6"/>
        <line x1="250" y1="150" x2="250" y2="220" strokeWidth="3"/>
        <rect x="240" y="220" width="20" height="14" fill="#0b1f33"/>

        <path d="M430 330 V165 H560 V330" />
        <path d="M430 165 L405 148 M560 165 L588 148" />
        <line x1="405" y1="148" x2="588" y2="148" strokeWidth="6"/>
        <line x1="495" y1="165" x2="495" y2="225" strokeWidth="3"/>
        <rect x="486" y="225" width="18" height="12" fill="#0b1f33"/>
      </g>

      {/* Container stacks */}
      <g opacity="0.92">
        {[
          { x: 60, c: "#0ea5e9" }, { x: 96, c: "#10b981" }, { x: 132, c: "#f59e0b" },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y="300" width="34" height="14" fill={b.c} />
            <rect x={b.x} y="314" width="34" height="14" fill="#0b1f33" opacity="0.6" />
          </g>
        ))}
      </g>

      {/* Cargo ship */}
      <g>
        <path d="M250 320 L290 286 L600 286 L640 320 L620 348 L270 348 Z" fill="#0b2236" />
        <rect x="430" y="256" width="70" height="30" fill="#13314f" />
        {[0,1,2,3].map(i => <rect key={i} x={438 + i*15} y="262" width="9" height="8" fill="#0ea5e9" opacity="0.8"/>)}
        {/* deck containers */}
        {[
          { x: 300, c: "#0ea5e9" }, { x: 332, c: "#f59e0b" }, { x: 364, c: "#10b981" }, { x: 396, c: "#0ea5e9" },
        ].map((b, i) => <rect key={i} x={b.x} y="270" width="28" height="16" fill={b.c} />)}
      </g>

      {/* Water */}
      <rect y="330" width="800" height="170" fill="url(#water)" />
      {/* Sun reflection */}
      <g fill="#fde68a" opacity="0.35">
        <rect x="540" y="345" width="44" height="4" rx="2" />
        <rect x="535" y="360" width="54" height="4" rx="2" />
        <rect x="545" y="376" width="36" height="4" rx="2" />
        <rect x="530" y="394" width="64" height="5" rx="2.5" />
      </g>
      {/* ship reflection */}
      <path d="M270 350 L620 350 L600 372 L290 372 Z" fill="#0b2236" opacity="0.3" />
    </svg>
  );
}
