"use client";

import Image from "next/image";
import { Building2, Factory, Home, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";

const iconMap = {
  Building2,
  Factory,
  Home,
};

export function Gallery() {
  const { gallery, images } = siteConfig;

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-neutral-900 relative overflow-hidden"
      aria-labelledby="gallery-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-sm font-medium text-primary-300">Project Gallery</span>
          </div>
          <h2
            id="gallery-heading"
            className="text-3xl sm:text-4xl lg:text-4xl font-bold text-white mb-5"
          >
            {gallery.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {gallery.sectionSubtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            const isLarge = index === 0 || index === 4; // First and 5th items are larger

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl ${
                  isLarge ? 'sm:col-span-2 sm:row-span-2' : ''
                } h-64 ${isLarge ? 'sm:h-full' : ''}`}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={images.gallery || images.hero}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-neutral-900/20 group-hover:from-neutral-900/70 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  {/* Icon badge */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      )}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base mb-3">
                    {item.description}
                  </p>

                  {/* Location and capacity */}
                  <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-neutral-600" />
                    <span>{item.capacity}</span>
                  </div>
                </div>

                {/* Hover indicator */}
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

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">
            {gallery.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
