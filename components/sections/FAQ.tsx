"use client";

import { Accordion, AccordionItem } from "@/components/ui";
import { siteConfig } from "@/lib/config";

export function FAQ() {
  const { faq } = siteConfig;

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-neutral-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
          >
            {faq.sectionTitle}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {faq.sectionSubtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <Accordion>
            {faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.question}
                defaultOpen={index === 0}
              >
                <p>{item.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
