"use client";

import Image from "next/image";
import { ClipboardCheck, BarChart3, FileSearch, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { siteConfig } from "@/lib/config";

const iconMap = {
  ClipboardCheck,
  BarChart3,
  FileSearch,
};

export function Services() {
  const { services, images } = siteConfig;

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
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-neutral-900 mb-5"
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

                {/* Image Area */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={images.services}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent" />

                  {/* Icon badge on image */}
                  <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    {IconComponent && (
                      <IconComponent
                        className="w-7 h-7 text-primary-600"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </div>

                <CardHeader className="relative pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-500 shadow-sm">
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
