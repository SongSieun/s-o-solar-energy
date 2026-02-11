"use client";

import Image from "next/image";
import { Building2, Factory, Home, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";

const iconMap = {
  Building2,
  Factory,
  Home,
};

const GALLERY_ITEMS = [
  { icon: "Building2", titleKey: "item1Title", descKey: "item1Desc", locationKey: "item1Location", capacity: "500kW" },
  { icon: "Factory", titleKey: "item2Title", descKey: "item2Desc", locationKey: "item2Location", capacity: "300kW" },
  { icon: "Home", titleKey: "item3Title", descKey: "item3Desc", locationKey: "item3Location", capacity: "10kW" },
  { icon: "Factory", titleKey: "item4Title", descKey: "item4Desc", locationKey: "item4Location", capacity: "200kW" },
  { icon: "Building2", titleKey: "item5Title", descKey: "item5Desc", locationKey: "item5Location", capacity: "1MW" },
  { icon: "Building2", titleKey: "item6Title", descKey: "item6Desc", locationKey: "item6Location", capacity: "50kW" },
] as const;

export function Gallery() {
  const t = useTranslations("gallery");
  const { images } = siteConfig;

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-neutral-900 relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-sm font-medium text-primary-300">{t("badge")}</span>
          </div>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-5">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {t("sectionSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            const isLarge = index === 0 || index === 4;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl ${isLarge ? 'sm:col-span-2 sm:row-span-2' : ''} h-64 ${isLarge ? 'sm:h-full' : ''}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={images.gallery || images.hero}
                    alt={t(item.titleKey)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-neutral-900/20 group-hover:from-neutral-900/70 transition-all duration-500" />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
                      {IconComponent && <IconComponent className="w-6 h-6 text-primary-600" />}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{t(item.titleKey)}</h3>
                  <p className="text-neutral-300 text-sm sm:text-base mb-3">{t(item.descKey)}</p>
                  <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{t(item.locationKey)}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-neutral-600" />
                    <span>{item.capacity}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">{t("disclaimer")}</p>
        </div>
      </div>
    </section>
  );
}
