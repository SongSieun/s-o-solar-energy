"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export function LanguageSwitcher({ isScrolled = false }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "ko" | "en") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1 rounded-full p-0.5 bg-neutral-100/60">
      <button
        onClick={() => switchLocale("ko")}
        className={cn(
          "px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200",
          locale === "ko"
            ? "bg-white text-neutral-900 shadow-sm"
            : isScrolled
            ? "text-neutral-500 hover:text-neutral-700"
            : "text-neutral-500 hover:text-neutral-700"
        )}
        aria-label="한국어"
      >
        KO
      </button>
      <button
        onClick={() => switchLocale("en")}
        className={cn(
          "px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-200",
          locale === "en"
            ? "bg-white text-neutral-900 shadow-sm"
            : isScrolled
            ? "text-neutral-500 hover:text-neutral-700"
            : "text-neutral-500 hover:text-neutral-700"
        )}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
