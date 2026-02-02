"use client";

import { useEffect, useState } from "react";

export function DocumentIllustration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <svg
      viewBox="0 0 200 160"
      className="w-full h-auto"
      aria-label="계약서 검증 일러스트"
    >
      {/* Shadow */}
      <ellipse
        cx="100"
        cy="150"
        rx="70"
        ry="8"
        fill="#e5e5e5"
        className={`transition-all duration-500 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Back Document */}
      <g
        className={`transition-all duration-700 delay-100 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transform: mounted ? "translateY(0)" : "translateY(16px)" }}
      >
        <rect
          x="55"
          y="15"
          width="100"
          height="125"
          rx="4"
          fill="#f5f5f5"
          stroke="#e5e5e5"
          strokeWidth="1"
        />
        {/* Lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="65"
            y={30 + i * 16}
            width={60 + (i % 2) * 20}
            height="6"
            rx="2"
            fill="#e5e5e5"
          />
        ))}
      </g>

      {/* Middle Document */}
      <g
        className={`transition-all duration-700 delay-200 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transform: mounted ? "translateY(0)" : "translateY(16px)" }}
      >
        <rect
          x="45"
          y="20"
          width="100"
          height="125"
          rx="4"
          fill="#fafafa"
          stroke="#d4d4d4"
          strokeWidth="1"
        />
        {/* Lines */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={i}
            x="55"
            y={35 + i * 16}
            width={50 + ((i + 1) % 2) * 25}
            height="6"
            rx="2"
            fill="#e5e5e5"
          />
        ))}
      </g>

      {/* Front Document */}
      <g
        className={`transition-all duration-700 delay-300 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transform: mounted ? "translateY(0)" : "translateY(16px)" }}
      >
        <rect
          x="35"
          y="25"
          width="100"
          height="125"
          rx="4"
          fill="white"
          stroke="#d4d4d4"
          strokeWidth="1"
          className="drop-shadow-md"
        />

        {/* Header */}
        <rect x="45" y="35" width="60" height="8" rx="2" fill="#facc15" />

        {/* Content Lines */}
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x="45"
            y={55 + i * 14}
            width={70 - (i % 2) * 15}
            height="5"
            rx="1.5"
            fill="#e5e5e5"
          />
        ))}

        {/* Checkbox Items */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x="45"
              y={115 + i * 12}
              width="8"
              height="8"
              rx="1"
              stroke="#22c55e"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d={mounted ? "M47 119 L49 121 L52 117" : "M47 119 L47 119"}
              stroke="#22c55e"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300"
              style={{ transitionDelay: `${600 + i * 150}ms` }}
            />
            <rect
              x="58"
              y={117 + i * 12}
              width={40 + i * 8}
              height="4"
              rx="1"
              fill="#d4d4d4"
            />
          </g>
        ))}
      </g>

      {/* Magnifying Glass */}
      <g
        className={`transition-all duration-500 delay-700 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
        style={{
          transformOrigin: "140px 50px",
          transform: mounted ? "scale(1)" : "scale(0.75)",
        }}
      >
        <circle
          cx="140"
          cy="50"
          r="22"
          fill="white"
          stroke="#facc15"
          strokeWidth="4"
          className="drop-shadow-lg"
        />
        <circle
          cx="140"
          cy="50"
          r="16"
          fill="none"
          stroke="#fef9c3"
          strokeWidth="2"
        />
        <line
          x1="156"
          y1="66"
          x2="172"
          y2="82"
          stroke="#facc15"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Sparkle */}
        <circle cx="133" cy="43" r="3" fill="#fef9c3" />
      </g>
    </svg>
  );
}
