"use client";

import { useState } from "react";

/**
 * Renders a real photo from /public/photos if present; otherwise shows the
 * designed `fallback` illustration. Drop a file at the given `src` path
 * (e.g. public/photos/harbour.jpg) to swap the illustration for a real photo.
 * No code change needed.
 */
export default function SwappablePhoto({
  src,
  alt,
  fallback,
  className = "",
}: {
  src: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Designed fallback always sits behind */}
      <div className="absolute inset-0">{fallback}</div>

      {/* Real photo on top, hides itself if the file is not there */}
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
}
