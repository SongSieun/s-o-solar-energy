"use client";

import { Sun, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const t = useTranslations("footer");
  const { company } = siteConfig;

  return (
    <footer className="bg-neutral-900 text-neutral-300" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                <Sun className="w-6 h-6 text-neutral-900" aria-hidden="true" />
              </div>
              <span className="font-semibold text-xl text-white">
                {company.name}
              </span>
            </div>
            <p className="text-neutral-400 max-w-md mb-4 leading-relaxed">
              {t("description")}
            </p>
            <p className="font-mono text-sm text-primary-400">
              {t("motto")}
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("contactTitle")}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${company.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-neutral-500 group-hover:text-primary-500 transition-colors" aria-hidden="true" />
                  <span>{company.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-neutral-500 group-hover:text-primary-500 transition-colors" aria-hidden="true" />
                  <span>{company.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-4 h-4 text-neutral-500 mt-1 flex-shrink-0" aria-hidden="true" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-6 border-t border-neutral-800">
          <p className="text-xs text-neutral-500 leading-relaxed">
            {t("disclaimer")}
          </p>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            {`\u00A9 ${new Date().getFullYear()} S&O Solar Energy. All rights reserved.`}
          </p>
          <nav aria-label={t("footerLinks")}>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {t("privacyPolicy")}
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  {t("termsOfUse")}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
