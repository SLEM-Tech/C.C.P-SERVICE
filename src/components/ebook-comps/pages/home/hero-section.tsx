"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const slides = [
  {
    id: 1,
    title: "Eric-Cantonna Schmitt",
    description:
      "Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions...",
    tag: "Author of august",
    image: "/ccp-limited/book.png",
    topLabel: "Autographed books + 30% discount",
    bottomLabel: "*within the stock limit",
  },
  {
    id: 2,
    title: "Another Featured Author",
    description: "Short description about this author or promotion.",
    tag: "Author of the week",
    image: "/ccp-limited/book.png",
    topLabel: "Free ebook with hardcopy",
    bottomLabel: "*while offer lasts",
  },
  {
    id: 3,
    title: "Upcoming Book Fair",
    description: "Join the biggest book fair event this season...",
    tag: "Event highlight",
    image: "/ccp-limited/book.png",
    topLabel: "Tickets available now",
    bottomLabel: "*limited seats",
  },
  {
    id: 4,
    title: "Upcoming Book Fair",
    description: "Join the biggest book fair event this season...",
    tag: "Event highlight",
    image: "/ccp-limited/book.png",
    topLabel: "Tickets available now",
    bottomLabel: "*limited seats",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full md:py-10 py-6 bg-white relative overflow-hidden">
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 md:flex hidden flex-col items-center space-y-4 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-[2px] h-10 cursor-pointer transition-all duration-300 ${
              current === index ? "bg-blue-600" : "bg-blue-200"
            }`}
          />
        ))}
      </div>

      <div className="md:hidden flex justify-center space-x-2 mb-4">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-6 h-[2px] cursor-pointer transition-all duration-300 ${
              current === index ? "bg-blue-600" : "bg-blue-200"
            }`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4 text-center md:text-left">
          <span className="inline-block text-xs text-red-500 border border-red-400 px-3 py-1 rounded-full">
            {slides[current].tag}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            {slides[current].title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            {slides[current].description}
          </p>

          <Link
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition text-sm sm:text-base">
            View his books
          </Link>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute top-2 left-2 text-xs text-gray-700 uppercase tracking-wide z-10">
            {slides[current].topLabel}
          </div>

          <Image
            src={slides[current].image}
            alt={slides[current].title}
            width={250}
            height={350}
            className="relative z-0 object-contain"
          />

          <div className="absolute bottom-2 right-2 text-xs text-gray-600">
            {slides[current].bottomLabel}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-10">
        <button
          onClick={prevSlide}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
          <BiChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
          <BiChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
