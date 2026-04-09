"use client";

import { useState } from "react";
import { faqItems } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div key={i} className="bg-white rounded-md overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center px-5 py-4 text-left"
          >
            <span className="text-sm text-brown-dark font-medium">{item.question}</span>
            <span className={`text-orange text-xl transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-40 pb-4" : "max-h-0"}`}>
            <p className="px-5 text-sm text-brown-text leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
