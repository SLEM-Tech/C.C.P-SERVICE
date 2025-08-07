"use client";

import { BiHeart, BiX } from "react-icons/bi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCart } from "react-use-cart"; // Import useCart
import Link from "next/link"; // Import Link for navigation

// The Book type should now match the structure of your actual product data from the API
// Let's rename it to ProductType for consistency.
export type ProductType = {
  id: number; // Add ID for the cart
  title: string;
  author: string; // This might come from a custom attribute
  price: string;
  image: string;
  description?: string;
  permalink: string; // Add permalink for navigation
};

export default function BookCarousel({
  title = "Selected for you",
  books = [], // Let's keep the prop name 'books' for simplicity
}: {
  title?: string;
  books: ProductType[];
}) {
  const [selectedBook, setSelectedBook] = useState<ProductType | null>(null);
  const { addItem } = useCart(); // Get the addItem function from the cart

  useEffect(() => {
    if (selectedBook) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedBook]);

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 py-12 bg-white max-w-7xl mx-auto relative z-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        modules={[Navigation]}
        className="group">
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className="flex flex-col h-full bg-white border rounded-lg p-3 shadow-sm hover:shadow-md transition">
              {/* Make the image clickable for quick view */}
              <div
                onClick={() => setSelectedBook(book)}
                className="cursor-pointer">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="mx-auto rounded w-full h-auto object-cover"
                />
              </div>

              <div className="mt-4 space-y-1 flex-grow">
                {/* Link the title to the product's page */}
                <Link href={book.permalink}>
                  <h3 className="text-sm font-semibold text-gray-800 hover:text-blue-600">
                    {book.title}
                  </h3>
                </Link>
                <p className="text-xs text-gray-500">{book.author}</p>
                <p className="text-sm font-medium text-gray-800">
                  {book.price}
                </p>
              </div>

              <div className="flex items-center justify-between mt-3">
                {/* Make the Add to Cart button functional */}
                <button
                  onClick={() =>
                    addItem({
                      ...book,
                      id: String(book.id),
                      price: Number(book.price),
                    })
                  }
                  className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to cart
                </button>
                <Link href="/wishlist">
                  <BiHeart className="text-blue-600 w-5 h-5" />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal (Now with a functional Add to Cart button) */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedBook(null)}>
              <BiX size={24} />
            </button>

            <Image
              src={selectedBook.image}
              alt={selectedBook.title}
              width={250}
              height={350}
              className="mx-auto rounded mb-4"
            />

            <h3 className="text-xl font-bold text-gray-800">
              {selectedBook.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{selectedBook.author}</p>
            <p className="text-sm text-gray-600 mb-4">
              {selectedBook.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-blue-600">
                {selectedBook.price}
              </span>
              <button
                onClick={() => {
                  addItem({
                    ...selectedBook,
                    id: String(selectedBook.id),
                    price: Number(selectedBook.price),
                  });
                  setSelectedBook(null); // Close modal after adding to cart
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
