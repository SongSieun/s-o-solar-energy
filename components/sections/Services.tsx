"use client";

import { ClipboardCheck, BarChart3, FileSearch, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { DataChart, DocumentIllustration } from "@/components/graphics";
import { siteConfig } from "@/lib/config";

const iconMap = {
  ClipboardCheck,
  BarChart3,
  FileSearch,
};

// Modern Feasibility Check Illustration
function FeasibilityIllustration() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-auto" aria-hidden="true">
      {/* Building */}
      <rect x="30" y="50" width="60" height="50" rx="4" fill="#f5f5f5" />
      <rect x="40" y="60" width="15" height="12" rx="2" fill="#e5e5e5" />
      <rect x="65" y="60" width="15" height="12" rx="2" fill="#e5e5e5" />
      <rect x="40" y="80" width="15" height="20" rx="2" fill="#d4d4d4" />
      <rect x="65" y="80" width="15" height="12" rx="2" fill="#e5e5e5" />

      {/* Roof Solar Panels with gradient */}
      <defs>
        <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      <polygon points="30,50 60,28 90,50" fill="url(#solarGradient)" />
      <line x1="45" y1="44" x2="45" y2="34" stroke="#d97706" strokeWidth="1.5" />
      <line x1="60" y1="44" x2="60" y2="28" stroke="#d97706" strokeWidth="1.5" />
      <line x1="75" y1="44" x2="75" y2="34" stroke="#d97706" strokeWidth="1.5" />

      {/* Sun with glow effect */}
      <circle cx="150" cy="35" r="20" fill="#fef3c7" opacity="0.6" />
      <circle cx="150" cy="35" r="14" fill="#fde68a" />
      <circle cx="150" cy="35" r="10" fill="#fbbf24" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1={150 + Math.cos((angle * Math.PI) / 180) * 18}
          y1={35 + Math.sin((angle * Math.PI) / 180) * 18}
          x2={150 + Math.cos((angle * Math.PI) / 180) * 26}
          y2={35 + Math.sin((angle * Math.PI) / 180) * 26}
          stroke="#fbbf24"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}

      {/* Modern Checklist Card */}
      <rect x="108" y="62" width="76" height="52" rx="8" fill="white" filter="url(#shadow)" />
      <defs>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1" />
        </filter>
      </defs>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx="122" cy={76 + i * 14} r="5" fill="#dcfce7" />
          <path
            d={`M119 ${76 + i * 14} L121 ${78 + i * 14} L125 ${74 + i * 14}`}
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="132" y={73 + i * 14} width="44" height="6" rx="3" fill="#f5f5f5" />
        </g>
      ))}
    </svg>
  );
}

export function Services() {
  const { services } = siteConfig;

  const illustrations = [
    <FeasibilityIllustration key="feasibility" />,
    <DataChart key="chart" variant="line" />,
    <DocumentIllustration key="document" />,
  ];

  const cardColors = [
    "from-primary-50 to-orange-50/50",
    "from-blue-50/50 to-primary-50",
    "from-green-50/50 to-primary-50",
  ];

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-gradient-to-b from-white via-neutral-50/50 to-white relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/60 border border-primary-200/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">Our Services</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-5"
          >
            {services.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {services.sectionSubtitle}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.items.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={index}
                variant="elevated"
                className="group relative overflow-hidden border-0 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cardColors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Illustration Area */}
                <div className="relative bg-gradient-to-br from-neutral-50 to-primary-50/30 p-6 sm:p-8 border-b border-neutral-100/80">
                  <div className="h-32 sm:h-36 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    {illustrations[index]}
                  </div>
                </div>

                <CardHeader className="relative pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-500 shadow-sm">
                      {IconComponent && (
                        <IconComponent
                          className="w-6 h-6 text-primary-700"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative">
                  <ul className="space-y-3" role="list">
                    {service.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-neutral-600 group/item"
                      >
                        <span
                          className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:bg-primary-200 transition-colors"
                          aria-hidden="true"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        </span>
                        <span className="group-hover/item:text-neutral-900 transition-colors">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <button className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors group/link">
                      <span>자세히 알아보기</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
