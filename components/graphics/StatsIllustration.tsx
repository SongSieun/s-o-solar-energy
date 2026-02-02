"use client";

import { useEffect, useState } from "react";

export function StatsIllustration() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Central Circle */}
      <div
        className={`absolute inset-0 m-auto w-3/5 h-3/5 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 transition-all duration-700 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      />

      {/* Stats Cards */}
      {[
        { top: "5%", left: "10%", value: "20+", label: "년 경력", delay: 200 },
        { top: "15%", right: "5%", value: "100%", label: "독립 자문", delay: 400 },
        { bottom: "20%", left: "0%", value: "PDF", label: "리포트", delay: 600 },
        { bottom: "5%", right: "10%", value: "0원", label: "사전 상담", delay: 800 },
      ].map((stat, i) => (
        <div
          key={i}
          className={`absolute bg-white rounded-xl shadow-lg p-3 sm:p-4 transition-all duration-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            top: stat.top,
            left: stat.left,
            right: stat.right,
            bottom: stat.bottom,
            transitionDelay: `${stat.delay}ms`,
          }}
        >
          <div className="text-lg sm:text-2xl font-bold text-primary-600">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-neutral-500">{stat.label}</div>
        </div>
      ))}

      {/* Connecting Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 300"
        fill="none"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#facc15" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#facc15" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[
          "M60,60 Q150,100 150,150",
          "M240,80 Q200,120 150,150",
          "M60,220 Q100,180 150,150",
          "M240,240 Q200,200 150,150",
        ].map((path, i) => (
          <path
            key={i}
            d={path}
            stroke="url(#lineGrad)"
            strokeWidth="2"
            strokeDasharray={mounted ? "none" : "200"}
            strokeDashoffset={mounted ? "0" : "200"}
            className="transition-all duration-1000"
            style={{ transitionDelay: `${300 + i * 100}ms` }}
          />
        ))}
      </svg>

      {/* Center Icon */}
      <div
        className={`absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary-500 flex items-center justify-center shadow-lg transition-all duration-700 delay-1000 ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        <svg
          className="w-8 h-8 sm:w-10 sm:h-10 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      </div>
    </div>
  );
}
