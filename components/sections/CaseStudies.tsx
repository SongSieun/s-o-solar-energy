"use client";

import { useState } from "react";
import {
  Building2,
  Factory,
  Home,
  Layers,
  Shield,
  Flame,
  Columns,
  MapPin,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/lib/config";

const categoryIconMap = {
  Layers,
  Shield,
  Flame,
  Columns,
};

const itemIconMap = {
  Building2,
  Factory,
  Home,
};

export function CaseStudies() {
  const { materialCases } = siteConfig;
  const [activeCategory, setActiveCategory] = useState(
    materialCases.categories[0].id
  );

  const filteredItems = materialCases.items.filter(
    (item) => item.materialId === activeCategory
  );

  const activeCategoryData = materialCases.categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section
      id="case-studies"
      className="py-24 sm:py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 relative overflow-hidden"
      aria-labelledby="case-studies-heading"
    >
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/60 border border-primary-200/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">
              Material Cases
            </span>
          </div>
          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-neutral-900 mb-5"
          >
            {materialCases.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {materialCases.sectionSubtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sm:mb-16">
          {materialCases.categories.map((category) => {
            const IconComponent =
              categoryIconMap[category.icon as keyof typeof categoryIconMap];
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25 scale-[1.02]"
                    : "bg-white text-neutral-600 border border-neutral-200 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50/50 shadow-sm"
                }`}
                aria-pressed={isActive}
              >
                {IconComponent && (
                  <IconComponent
                    className={`w-4.5 h-4.5 ${
                      isActive
                        ? "text-white/90"
                        : "text-neutral-400 group-hover:text-primary-500"
                    } transition-colors`}
                  />
                )}
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        {activeCategoryData && (
          <div className="text-center mb-10">
            <p className="text-neutral-500 text-sm font-medium">
              {activeCategoryData.description}
            </p>
          </div>
        )}

        {/* Case Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => {
            const IconComponent =
              itemIconMap[item.icon as keyof typeof itemIconMap];

            return (
              <div
                key={`${item.materialId}-${index}`}
                className="group bg-white rounded-2xl border border-neutral-200/80 overflow-hidden hover:shadow-xl hover:border-primary-200/60 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-6 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  <div className="relative flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-primary-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-neutral-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-neutral-600" />
                          <span className="flex items-center gap-1">
                            <Zap className="w-3.5 h-3.5 text-primary-400" />
                            {item.capacity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="space-y-2.5">
                    {item.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="flex items-start gap-2.5 group/item"
                      >
                        <CheckCircle2 className="w-4.5 h-4.5 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-700 group-hover/item:text-neutral-900 transition-colors">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-neutral-400 text-sm">{materialCases.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
