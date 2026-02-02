"use client";

import { useEffect, useState } from "react";

export function SolarIllustration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Animated Sun */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {/* Sun Core */}
        <div className="relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-primary-300 via-primary-400 to-primary-500 shadow-2xl shadow-primary-400/50 animate-pulse" />

          {/* Sun Rays */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox="0 0 200 200"
            style={{ animationDuration: "30s" }}
          >
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="10"
                x2="100"
                y2="30"
                stroke="#facc15"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Solar Panels Grid */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <svg
          width="320"
          height="120"
          viewBox="0 0 320 120"
          fill="none"
          className="drop-shadow-lg"
        >
          {/* Panel Row 1 */}
          <g transform="translate(40, 0)">
            {[0, 1, 2, 3].map((i) => (
              <g key={i} transform={`translate(${i * 60}, 0)`}>
                <rect
                  x="0"
                  y="0"
                  width="55"
                  height="35"
                  rx="2"
                  fill="url(#panelGradient)"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                {/* Panel Grid Lines */}
                <line x1="18" y1="0" x2="18" y2="35" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="36" y1="0" x2="36" y2="35" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="0" y1="12" x2="55" y2="12" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="0" y1="24" x2="55" y2="24" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
              </g>
            ))}
          </g>

          {/* Panel Row 2 */}
          <g transform="translate(20, 45)">
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} transform={`translate(${i * 58}, 0)`}>
                <rect
                  x="0"
                  y="0"
                  width="52"
                  height="32"
                  rx="2"
                  fill="url(#panelGradient)"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                <line x1="17" y1="0" x2="17" y2="32" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="34" y1="0" x2="34" y2="32" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="0" y1="11" x2="52" y2="11" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="0" y1="22" x2="52" y2="22" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
              </g>
            ))}
          </g>

          {/* Panel Row 3 */}
          <g transform="translate(0, 85)">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g key={i} transform={`translate(${i * 54}, 0)`}>
                <rect
                  x="0"
                  y="0"
                  width="48"
                  height="28"
                  rx="2"
                  fill="url(#panelGradient)"
                  stroke="#1e3a5f"
                  strokeWidth="1"
                />
                <line x1="16" y1="0" x2="16" y2="28" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="32" y1="0" x2="32" y2="28" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="0" y1="9" x2="48" y2="9" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="0" y1="18" x2="48" y2="18" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
              </g>
            ))}
          </g>

          <defs>
            <linearGradient id="panelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#172554" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Energy Flow Lines */}
      <svg
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 delay-500 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Animated energy particles */}
        <circle r="3" fill="#facc15" opacity="0.8">
          <animateMotion dur="3s" repeatCount="indefinite" path="M200,180 Q250,250 200,320" />
        </circle>
        <circle r="2" fill="#fde047" opacity="0.6">
          <animateMotion dur="4s" repeatCount="indefinite" path="M180,180 Q150,250 180,320" />
        </circle>
        <circle r="2.5" fill="#facc15" opacity="0.7">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M220,180 Q270,260 220,320" />
        </circle>
      </svg>

      {/* Decorative Circles */}
      <div
        className={`absolute top-10 right-10 w-20 h-20 rounded-full border-2 border-primary-200 transition-all duration-1000 delay-700 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
      <div
        className={`absolute bottom-20 left-10 w-12 h-12 rounded-full bg-primary-100 transition-all duration-1000 delay-900 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      />
    </div>
  );
}
