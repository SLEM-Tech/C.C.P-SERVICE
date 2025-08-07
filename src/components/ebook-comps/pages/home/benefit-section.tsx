"use client";

import { BiBookOpen, BiStar } from "@node_modules/react-icons/bi";
import { BsTruck } from "@node_modules/react-icons/bs";

const benefits = [
  {
    icon: <BsTruck className="text-blue-600 w-6 h-6" />,
    text: "Free shipping over $50",
  },
  {
    icon: <BiStar className="text-blue-600 w-6 h-6" />,
    text: "Save with loyalty points",
  },
  {
    icon: <BiBookOpen className="text-blue-600 w-6 h-6" />,
    text: "Read a few pages",
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-white py-6 border-y">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 relative">
            {benefit.icon}
            <span className="text-gray-700 text-sm font-medium">
              {benefit.text}
            </span>
            {index !== benefits.length - 1 && (
              <div className="hidden sm:block absolute right-[-15px] h-6 w-px bg-blue-500"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
