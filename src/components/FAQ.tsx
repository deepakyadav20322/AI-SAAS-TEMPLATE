"use client";
import React, { useState } from "react";
import { FAQItem } from "@/types/Faq";
import { Container } from "@/components/Container";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <div className="bg-neutral-950 text-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Frequently Asked Questions{" "}
          <IconArrowNarrowRight className="inline-block" stroke={2} />
        </h2>
        {items.map((item, index) => (
          <div key={index} className="mb-4 border-b border-gray-700">
            <div
              className=" group  cursor-pointer py-2 text-lg font-semibold text-gray-100 hover:text-gray-400 flex justify-between items-center"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <div className=" pr-3">
              <IconArrowNarrowRight className="inline-block group-hover:translate-x-1" stroke={2} />
              </div>
            </div>
            {openIndex === index && (
              <div className="py-2 text-gray-300">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQ;