"use client";

import { Clock, Target, Scale, AlertTriangle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui";

const iconMap = {
  Clock,
  Target,
  Scale,
};

const PILLARS = [
  { icon: "Clock", titleKey: "pillar1Title", descKey: "pillar1Desc" },
  { icon: "Target", titleKey: "pillar2Title", descKey: "pillar2Desc" },
  { icon: "Scale", titleKey: "pillar3Title", descKey: "pillar3Desc" },
] as const;

export function WhyUs() {
  const t = useTranslations("whyUs");

  return (
    <section
      id="why-us"
      className="py-24 sm:py-32 bg-white overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/60 border border-primary-200/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-sm font-medium text-primary-700">{t("badge")}</span>
          </div>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-neutral-900 mb-5"
          >
            {t("sectionTitle")}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            {t("sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {PILLARS.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <Card
                key={index}
                variant="bordered"
                className="text-center group hover:border-primary-300 hover:shadow-soft-lg transition-all duration-500 overflow-hidden"
              >
                <CardContent className="pt-10 pb-8 px-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="relative mx-auto mb-6 w-20 h-20">
                      <div className="absolute inset-0 rounded-full bg-primary-100 animate-pulse-slow" />
                      <div className="absolute inset-2 rounded-full bg-primary-50 border-2 border-primary-200 group-hover:border-primary-300 transition-colors duration-300" />
                      <div className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                        )}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                      {t(pillar.titleKey)}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {t(pillar.descKey)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="relative">
          <div className="bg-gradient-to-r from-amber-50 via-amber-50 to-orange-50 border border-amber-200/80 rounded-3xl p-8 sm:p-10 overflow-hidden">
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
                  {t("calloutTitle")}
                </h3>
                <p className="text-amber-800 leading-relaxed text-lg">
                  {t("calloutContent")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
