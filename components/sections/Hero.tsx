"use client";

import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";
import { siteConfig } from "@/lib/config";

export function Hero() {
  const { hero, images } = siteConfig;

  const handleCtaClick = (href: string) => {
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Full screen background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        {/* Gradient overlay - 왼쪽은 읽기 쉽게, 오른쪽은 이미지 보이게 */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/70 to-neutral-900/40 lg:from-neutral-900/85 lg:via-neutral-900/50 lg:to-transparent" />
        {/* 하단 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-neutral-900/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" aria-hidden="true" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-primary-300/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-24">
        <div className="max-w-2xl">
          {/* English Tagline with icon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300 tracking-wide">
              {hero.subheadlineEnglish}
            </span>
          </div>

          {/* Main Headline - Company Name */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up"
          >
            <span className="bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              {hero.headline}
            </span>
          </h1>

          {/* Subheadline - Expertise */}
          <p className="text-xl sm:text-2xl md:text-3xl text-primary-300 font-semibold mb-6 animate-fade-in-up animation-delay-100">
            {hero.subheadline}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-300 mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up animation-delay-300">
            <Button
              size="lg"
              onClick={() => handleCtaClick(hero.ctaPrimary.href)}
              className="w-full sm:w-auto btn-gradient shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {hero.ctaPrimary.label}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleCtaClick(hero.ctaSecondary.href)}
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              {hero.ctaSecondary.label}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce-soft"
        aria-hidden="true"
      >
        <span className="text-xs text-white/60 font-medium">스크롤</span>
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2 bg-white/5 backdrop-blur-sm">
          <ChevronDown className="w-4 h-4 text-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
