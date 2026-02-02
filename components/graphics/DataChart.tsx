"use client";

import { useEffect, useState } from "react";

interface DataChartProps {
  variant?: "bar" | "line" | "pie";
}

export function DataChart({ variant = "bar" }: DataChartProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (variant === "bar") {
    return (
      <svg
        viewBox="0 0 200 120"
        className="w-full h-auto"
        aria-label="발전량 분석 차트"
      >
        {/* Grid Lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="30"
            y1={20 + i * 20}
            x2="190"
            y2={20 + i * 20}
            stroke="#e5e5e5"
            strokeWidth="1"
          />
        ))}

        {/* Y Axis */}
        <line x1="30" y1="20" x2="30" y2="100" stroke="#d4d4d4" strokeWidth="2" />

        {/* Bars */}
        {[
          { x: 45, height: 60, delay: 0 },
          { x: 75, height: 75, delay: 100 },
          { x: 105, height: 55, delay: 200 },
          { x: 135, height: 70, delay: 300 },
          { x: 165, height: 45, delay: 400 },
        ].map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={mounted ? 100 - bar.height : 100}
            width="20"
            height={mounted ? bar.height : 0}
            rx="2"
            fill="url(#barGradient)"
            className="transition-all duration-700 ease-out"
            style={{ transitionDelay: `${bar.delay}ms` }}
          />
        ))}

        {/* Month Labels */}
        {["1월", "2월", "3월", "4월", "5월"].map((label, i) => (
          <text
            key={i}
            x={55 + i * 30}
            y="115"
            textAnchor="middle"
            className="text-[8px] fill-neutral-500"
          >
            {label}
          </text>
        ))}

        <defs>
          <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === "line") {
    return (
      <svg
        viewBox="0 0 200 120"
        className="w-full h-auto"
        aria-label="수익성 분석 차트"
      >
        {/* Grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={i}
            x1="20"
            y1={20 + i * 20}
            x2="180"
            y2={20 + i * 20}
            stroke="#e5e5e5"
            strokeWidth="1"
            strokeDasharray="4 2"
          />
        ))}

        {/* Line Path */}
        <path
          d="M20,80 Q50,60 70,65 T120,45 T160,30 L180,35"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{
            strokeDasharray: mounted ? "none" : "500",
            strokeDashoffset: mounted ? "0" : "500",
          }}
        />

        {/* Area Fill */}
        <path
          d="M20,80 Q50,60 70,65 T120,45 T160,30 L180,35 L180,100 L20,100 Z"
          fill="url(#areaGradient)"
          className={`transition-opacity duration-1000 delay-300 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Data Points */}
        {[
          { x: 20, y: 80 },
          { x: 70, y: 65 },
          { x: 120, y: 45 },
          { x: 160, y: 30 },
          { x: 180, y: 35 },
        ].map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={mounted ? 4 : 0}
            fill="#facc15"
            stroke="#fff"
            strokeWidth="2"
            className="transition-all duration-500"
            style={{ transitionDelay: `${400 + i * 100}ms` }}
          />
        ))}

        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#facc15" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#facc15" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Pie chart variant
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-full h-auto"
      aria-label="비용 구성 차트"
    >
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="20"
      />

      {/* Pie Segments */}
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="#facc15"
        strokeWidth="20"
        strokeDasharray={mounted ? "180 283" : "0 283"}
        strokeDashoffset="0"
        transform="rotate(-90 60 60)"
        className="transition-all duration-1000"
      />
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="20"
        strokeDasharray={mounted ? "70 283" : "0 283"}
        strokeDashoffset="-180"
        transform="rotate(-90 60 60)"
        className="transition-all duration-1000 delay-200"
      />
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="#d97706"
        strokeWidth="20"
        strokeDasharray={mounted ? "33 283" : "0 283"}
        strokeDashoffset="-250"
        transform="rotate(-90 60 60)"
        className="transition-all duration-1000 delay-400"
      />

      {/* Center */}
      <circle cx="60" cy="60" r="30" fill="white" />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        className="text-lg font-bold fill-neutral-800"
      >
        ROI
      </text>
      <text
        x="60"
        y="72"
        textAnchor="middle"
        className="text-[10px] fill-neutral-500"
      >
        분석
      </text>
    </svg>
  );
}
