"use client";

import Image from "next/image";
import { Award, Clock, Target, ShieldCheck, Lightbulb, Users } from "lucide-react";
import { siteConfig } from "@/lib/config";

const iconMap = {
  Award,
  Clock,
  Target,
  ShieldCheck,
  Lightbulb,
  Users,
};

export function About() {
  const { about, images } = siteConfig;

  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-100/50 to-transparent rounded-3xl" />

            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={images.about || images.hero}
                  alt={about.founder.name}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />

                {/* Experience badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center shadow-lg">
                        <span className="text-xl font-bold text-white">20+</span>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-neutral-900">년 현업 경력</p>
                        <p className="text-sm text-neutral-500">태양광 전문 컨설턴트</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/60 border border-primary-200/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-medium text-primary-700">About</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-5"
            >
              {about.sectionTitle}
            </h2>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              {about.sectionSubtitle}
            </p>

            {/* Founder Info */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                {about.founder.name}
              </h3>
              <p className="text-primary-600 font-medium mb-4">
                {about.founder.title}
              </p>
              <p className="text-neutral-600 leading-relaxed">
                {about.founder.bio}
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.keyPoints.map((point, index) => {
                const IconComponent = iconMap[point.icon as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      {IconComponent && (
                        <IconComponent className="w-5 h-5 text-primary-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{point.title}</p>
                      <p className="text-sm text-neutral-500">{point.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
