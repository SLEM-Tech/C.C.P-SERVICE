"use client";

import React from "react";
import Link from "next/link";
import { useProduct } from "@src/components/lib/woocommerce";
import ProductCard from "./ProductCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { fallbackProducts } from "@constants/fallback-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface DealsSectionProps {
  title: string;
  highlightedText: string;
  categorySlug: string;
}

const DealsSection: React.FC<DealsSectionProps> = ({
  title,
  highlightedText,
  categorySlug,
}) => {
  const { data: apiProducts, isLoading, isError } = useProduct(categorySlug);

  const productsToDisplay =
    !apiProducts || apiProducts.length === 0 || isError
      ? fallbackProducts
      : apiProducts;

  if (!productsToDisplay || productsToDisplay.length === 0) {
    return null;
  }

  return (
    <section className="my-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4 mb-6">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
          {title} <span className="text-cyan-600">{highlightedText}</span>
          <div className="mt-1 h-1 w-24 bg-cyan-500 rounded"></div>
        </h2>
        <Link
          href={`/product-category/${categorySlug}`}
          className="flex items-center gap-1 text-sm font-medium text-cyan-600 transition hover:text-cyan-800">
          View All <FaChevronRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Swiper Carousel */}
      <div className="relative">
        {/* Left Button (Desktop only) */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <div className="swiper-button-prev-custom bg-white border rounded-full p-2 shadow hover:bg-cyan-50 transition">
            <FaChevronLeft className="text-cyan-600 w-4 h-4" />
          </div>
        </div>

        {/* Right Button (Desktop only) */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <div className="swiper-button-next-custom bg-white border rounded-full p-2 shadow hover:bg-cyan-50 transition">
            <FaChevronRight className="text-cyan-600 w-4 h-4" />
          </div>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.3}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation]}
          className="py-2">
          {productsToDisplay.map((product: any, index: number) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} isHighlighted={index === 1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DealsSection;
