"use client";

import { TrendingUp, Users, Award, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const iconMap = {
  TrendingUp,
  Users,
  Award,
  Zap,
};

const STAT_KEYS = [
  { icon: "TrendingUp", value: "200+", labelKey: "stat1Label", descKey: "stat1Desc" },
  { icon: "Award", value: "15%", labelKey: "stat2Label", descKey: "stat2Desc" },
  { icon: "Users", value: "98%", labelKey: "stat3Label", descKey: "stat3Desc" },
  { icon: "Zap", value: "50MW+", labelKey: "stat4Label", descKey: "stat4Desc" },
] as const;

export function Stats() {
  const t = useTranslations("stats");

  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-b from-neutral-900 to-neutral-800 relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 id="stats-heading" className="sr-only">{t("heading")}</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STAT_KEYS.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary-400/50 transition-all duration-500 hover:bg-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400/0 to-primary-500/0 group-hover:from-primary-400/10 group-hover:to-primary-500/10 rounded-xl transition-all duration-500" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary-400/10 flex items-center justify-center mb-4 group-hover:bg-primary-400/20 transition-colors duration-500">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-primary-400" aria-hidden="true" />
                    )}
                  </div>

                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-500">
                    {stat.value}
                  </div>

                  <div className="text-sm sm:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors duration-500">
                    {t(stat.labelKey)}
                  </div>

                  <div className="text-xs text-neutral-500 mt-2">
                    {t(stat.descKey)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500">{t("note")}</p>
        </div>
      </div>
    </section>
  );
}
