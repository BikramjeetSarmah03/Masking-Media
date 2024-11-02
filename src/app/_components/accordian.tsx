"use client";
import Image from "next/image";
import { useState } from "react";

import MinusIcon from "../../assets/minus.svg";
import PlusIcon from "../../assets/plus.svg";

export interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [accordionItems, setAccordionItems] = useState<AccordionItem[]>(items);

  const toggleAccordionItem = (index: number) => {
    const updatedAccordionItems = accordionItems.map((item, i) => ({
      ...item,
      isOpen: i === index ? !item.isOpen : false, // Close others when one is opened
    }));
    setAccordionItems(updatedAccordionItems);
  };

  return (
    <div>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          toggleAccordion={() => toggleAccordionItem(index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  title,
  content,
  isOpen,
  toggleAccordion,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}) {
  return (
    <div className="border-b border-redPrimary pb-4 md:pb-8 mt-8">
      <div
        className="p-2 cursor-pointer flex justify-between items-center text-gray"
        onClick={toggleAccordion}
      >
        <h2
          className={`font-medium customTransition md:text-[25px] hover:text-redPrimary ${
            isOpen ? "text-redPrimary" : "text-white"
          }`}
        >
          {title}
        </h2>
        {isOpen ? (
          <button>
            <Image src={MinusIcon} alt="minus" height={0} width={20} />
          </button>
        ) : (
          <button>
            <Image src={PlusIcon} alt="minus" height={0} width={20} />
          </button>
        )}
      </div>

      {/* Accordion content with smooth height transition */}
      <div
        className={`transition-all duration-1000 md:leading-8 overflow-hidden text-white  text-xs font-medium md:text-[25px] ${
          isOpen ? "h-auto max-h-[1000px]" : "h-0 max-h-0"
        }`}
      >
        <div className="p-2">{content}</div>
      </div>
    </div>
  );
}
