"use client";

import { useTranslations } from "next-intl";
import { Accordion, AccordionItem } from "@/components/ui";

const FAQ_ITEMS = [
  { qKey: "q1", aKey: "a1" },
  { qKey: "q2", aKey: "a2" },
  { qKey: "q3", aKey: "a3" },
  { qKey: "q4", aKey: "a4" },
  { qKey: "q5", aKey: "a5" },
  { qKey: "q6", aKey: "a6" },
  { qKey: "q7", aKey: "a7" },
  { qKey: "q8", aKey: "a8" },
] as const;

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-neutral-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 sm:mb-16">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4"
          >
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {t("sectionSubtitle")}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          <Accordion>
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                title={t(item.qKey)}
                defaultOpen={index === 0}
              >
                <p>{t(item.aKey)}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
