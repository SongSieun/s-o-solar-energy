"use client";

import { Quote, Star, Building2, Factory, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import { siteConfig } from "@/lib/config";

const iconMap = {
  Building2,
  Factory,
  Home,
};

export function Testimonials() {
  const { testimonials } = siteConfig;

  return (
    <section
      id="testimonials"
      className="py-24 sm:py-32 bg-gradient-to-b from-white to-neutral-50 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/60 border border-primary-200/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">Testimonials</span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-neutral-900 mb-5"
          >
            {testimonials.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {testimonials.sectionSubtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <Card
                key={index}
                variant="bordered"
                className="group hover:border-primary-300 hover:shadow-soft-lg transition-all duration-500 overflow-hidden"
              >
                <CardContent className="p-6 sm:p-8 relative">
                  {/* Quote icon background */}
                  <div className="absolute -right-4 -top-4 text-primary-100/60">
                    <Quote className="w-24 h-24" />
                  </div>

                  <div className="relative">
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary-400 text-primary-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-neutral-700 leading-relaxed mb-6">
                      "{item.quote}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-primary-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900">{item.author}</p>
                        <p className="text-sm text-neutral-500">{item.role}</p>
                      </div>
                    </div>

                    {/* Project type badge */}
                    <div className="mt-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full">
                        {item.projectType}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 text-sm">
            {testimonials.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
