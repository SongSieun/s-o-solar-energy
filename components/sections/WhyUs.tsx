"use client";

import { Clock, Target, Scale, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui";
import { siteConfig } from "@/lib/config";

const iconMap = {
  Clock,
  Target,
  Scale,
};

export function WhyUs() {
  const { whyUs } = siteConfig;

  return (
    <section
      id="why-us"
      className="py-24 sm:py-32 bg-white overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/60 border border-primary-200/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">Why Choose Us</span>
          </div>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-neutral-900 mb-5"
          >
            {whyUs.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {whyUs.sectionSubtitle}
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {whyUs.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <Card
                key={index}
                variant="bordered"
                className="text-center group hover:border-primary-300 hover:shadow-soft-lg transition-all duration-500 overflow-hidden"
              >
                <CardContent className="pt-10 pb-8 px-6 relative">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative">
                    {/* Icon with double ring */}
                    <div className="relative mx-auto mb-6 w-20 h-20">
                      <div className="absolute inset-0 rounded-full bg-primary-100 animate-pulse-slow" />
                      <div className="absolute inset-2 rounded-full bg-primary-50 border-2 border-primary-200 group-hover:border-primary-300 transition-colors duration-300" />
                      <div className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent
                            className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-300"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Important Callout */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-r from-amber-50 via-amber-50 to-orange-50 border border-amber-200/80 rounded-3xl p-8 sm:p-10 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-amber-200/30 rounded-full blur-2xl" aria-hidden="true" />
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl" aria-hidden="true" />

            <div className="relative flex items-start gap-5">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shadow-lg">
                  <AlertTriangle className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">
                  {whyUs.callout.title}
                </h3>
                <p className="text-amber-800 leading-relaxed text-lg">
                  {whyUs.callout.content}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Do / What We Don't */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* What We Do */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Card variant="bordered" className="border-green-200 bg-gradient-to-br from-green-50/80 to-white overflow-hidden h-full">
              <CardContent className="p-8 relative">
                {/* Decorative icon */}
                <div className="absolute -right-8 -top-8 w-32 h-32 text-green-100/80">
                  <CheckCircle2 className="w-full h-full" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800">
                      {whyUs.whatWeDo.title}
                    </h3>
                  </div>

                  <ul className="space-y-4" role="list">
                    {whyUs.whatWeDo.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-green-900 group/item"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-green-200 transition-colors">
                          <CheckCircle2
                            className="w-4 h-4 text-green-600"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What We Don't */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Card variant="bordered" className="border-red-200 bg-gradient-to-br from-red-50/80 to-white overflow-hidden h-full">
              <CardContent className="p-8 relative">
                {/* Decorative icon */}
                <div className="absolute -right-8 -top-8 w-32 h-32 text-red-100/80">
                  <XCircle className="w-full h-full" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-500" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-red-800">
                      {whyUs.whatWeDont.title}
                    </h3>
                  </div>

                  <ul className="space-y-4" role="list">
                    {whyUs.whatWeDont.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-red-900 group/item"
                      >
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-red-200 transition-colors">
                          <XCircle
                            className="w-4 h-4 text-red-500"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
