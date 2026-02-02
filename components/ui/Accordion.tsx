"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between py-5 text-left",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-lg",
          "transition-colors duration-200 hover:text-primary-700"
        )}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-neutral-900 pr-4">{title}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-neutral-500 flex-shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className="pb-5 text-neutral-600 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("divide-neutral-200", className)} role="presentation">
      {children}
    </div>
  );
}
