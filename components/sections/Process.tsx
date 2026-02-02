"use client";

import { FileInput, Search, FileText, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/config";

const iconMap = {
  FileInput,
  Search,
  FileText,
  MessageSquare,
};

export function Process() {
  const { process } = siteConfig;

  return (
    <section
      id="process"
      className="py-24 sm:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-sm font-medium text-primary-300">How It Works</span>
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5"
          >
            {process.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {process.sectionSubtitle}
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div
            className="hidden lg:block absolute top-24 left-[calc(12.5%+40px)] right-[calc(12.5%+40px)] h-0.5"
            aria-hidden="true"
          >
            <div className="h-full bg-gradient-to-r from-primary-500/50 via-primary-400/80 to-primary-500/50 rounded-full" />
            {/* Animated dot */}
            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-400 rounded-full animate-pulse shadow-glow" style={{ left: '50%', transform: 'translateX(-50%) translateY(-50%)' }} />
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {process.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              const isLast = index === process.steps.length - 1;

              return (
                <li key={index} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    {/* Step Number & Icon */}
                    <div className="relative mb-6">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-primary-400/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Main circle */}
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800 flex items-center justify-center border border-neutral-600/50 group-hover:border-primary-500/50 transition-all duration-500 shadow-lg">
                        {/* Inner circle with icon */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-500">
                          {IconComponent && (
                            <IconComponent
                              className="w-6 h-6 text-neutral-900"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </div>

                      {/* Step number badge */}
                      <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-neutral-900 shadow-lg border-2 border-neutral-800 z-10">
                        {step.step}
                      </div>
                    </div>

                    {/* Step Content */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-xs group-hover:text-neutral-300 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Mobile/Tablet arrow indicator */}
                    {!isLast && (
                      <div
                        className="lg:hidden mt-8 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <div className="w-8 h-8 rounded-full bg-neutral-700/50 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-primary-400 rotate-90 sm:rotate-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-4">지금 바로 무료 상담을 시작하세요</p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                const headerOffset = 80;
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-400 to-primary-500 text-neutral-900 font-semibold hover:from-primary-300 hover:to-primary-400 transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            상담 신청하기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
