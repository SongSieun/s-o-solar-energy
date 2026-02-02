"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = ["hero", "services", "process", "why-us", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-soft border-b border-neutral-100/50"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="주요 내비게이션"
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="S&O Solar Energy 홈"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center transition-all duration-300 group-hover:shadow-glow group-hover:scale-105">
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl text-neutral-900 leading-tight">
                {siteConfig.company.name}
              </span>
              <span className="text-[10px] text-neutral-500 font-medium tracking-wider hidden sm:block">
                SOLAR CONSULTING
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-neutral-100/60 rounded-full p-1">
              {siteConfig.nav.items.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-neutral-900 bg-white shadow-sm"
                        : "text-neutral-600 hover:text-neutral-900"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              size="md"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  const headerOffset = 80;
                  const elementPosition = contactSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="btn-gradient group"
            >
              <span>{siteConfig.nav.ctaLabel}</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn(
              "md:hidden relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
              isMenuOpen
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span className="sr-only">{isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
            {isMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden fixed inset-x-0 top-16 bottom-0 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-out",
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
          aria-hidden={!isMenuOpen}
        >
          <div className="h-full overflow-y-auto px-6 py-8">
            <div className="space-y-2">
              {siteConfig.nav.items.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "block px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300",
                      "animate-fade-in-up",
                      isActive
                        ? "bg-primary-50 text-primary-700 border border-primary-200"
                        : "text-neutral-700 hover:bg-neutral-50"
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-100">
              <Button
                size="lg"
                className="w-full btn-gradient group"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    setTimeout(() => {
                      const headerOffset = 80;
                      const elementPosition = contactSection.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - headerOffset;
                      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }, 100);
                  }
                }}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span>{siteConfig.nav.ctaLabel}</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Contact info in mobile menu */}
              <div className="mt-8 text-center">
                <p className="text-sm text-neutral-500 mb-2">문의 전화</p>
                <a
                  href={`tel:${siteConfig.company.phone.replace(/-/g, "")}`}
                  className="text-lg font-semibold text-neutral-900 hover:text-primary-600 transition-colors"
                >
                  {siteConfig.company.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
