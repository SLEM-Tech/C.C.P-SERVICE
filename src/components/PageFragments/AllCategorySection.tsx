"use client";
import React, { useEffect, useState } from "react";
import Picture from "../picture/Picture";
import {
	book,
	heroZion1,
	heroZion2,
	heroZion3,
	heroZion4,
	heroZion5,
	heroZion6,
} from "@public/images";

import Link from "next/link";
import { useCategories, useProduct } from "../lib/woocommerce";
import {
	FaAward,
	FaBook,
	FaBookOpen,
	FaBoxOpen,
	FaHeart,
	FaRegClock,
	FaShieldAlt,
	FaShippingFast,
	FaShoppingBag,
	FaTruck,
} from "@node_modules/react-icons/fa";

const AllCategorySection = () => {
	const benefits = [
		{
			icon: <FaBookOpen className='text-2xl' />, // From react-icons/fa
			title: "Curated Collections",
			subtitle:
				"Handpicked titles for every taste, from classics to hidden gems.",
		},
		{
			icon: <FaAward className='text-2xl' />,
			title: "Quality Guarantee",
			subtitle: "Every book is inspected for condition and authenticity.",
		},
		{
			icon: <FaHeart className='text-2xl' />,
			title: "Reader Rewards",
			subtitle: "Earn points for reviews and unlock exclusive discounts.",
		},
	];

	const {
		data: productsData,
		isLoading: productWpIsLoading,
		isError: productIsError,
	} = useProduct("");

	const ProductsData: ProductType[] = productsData;

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Get first 3 products with images
	const featuredProducts = ProductsData?.filter(
		(product) => product?.images?.length > 0,
	).slice(0, 3);

	useEffect(() => {
		if (featuredProducts?.length > 1) {
			const interval = setInterval(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % featuredProducts?.length,
				);
			}, 5000); // Change image every 5 seconds

			return () => clearInterval(interval);
		}
	}, [featuredProducts?.length]);

	return (
		<>
			<section className='flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-12 items-center px-3 lg:px-6 gap-6 lg:min-h-[80vh] overflow-hidden bg-gray-400 max-w-[1350px] mx-auto rounded-b-2xl'>
				{/* LEFT TEXT CONTENT */}
				<div className='lg:col-span-6 z-10 text-black space-y-2 lg:space-y-8 h-full text-center lg:text-start flex flex-col justify-center p-5'>
					{/* Subtitle: Warm, inviting tone */}
					<span className='text-primaryColor-300 font-serif italic'>
						Discover Your Next Adventure
					</span>

					{/* Title: Classic bookish feel with serif font */}
					<h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wide font-serif font-bold leading-tight md:leading-tight'>
						Curated Books for{" "}
						<span className='text-primaryColor-300'>Every Reader</span>.
					</h1>

					{/* Description: Cozy, literary phrasing */}
					<p className='text-gray-700 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0'>
						Explore our collection of timeless classics, bestsellers, and hidden
						gems.
					</p>

					{/* CTA: Warm, earthy button with book icon */}
					<Link
						href='/books'
						className='bg-primaryColor-300 hover:bg-primaryColor-400 shadow-lg text-sm lg:text-base px-6 lg:px-8 py-3 flex items-center mx-auto lg:mx-0 gap-2 text-white rounded-sm w-fit transition-all hover:scale-105'
					>
						<span className='capitalize'>Browse Books</span>
						<FaBook className='text-lg' />{" "}
						{/* Replaced shopping bag with book icon */}
					</Link>
				</div>

				<div className='lg:col-span-6 relative flex items-center justify-center h-full lg:overflow-hidden'>
					{/* Background circle - responsive sizing */}
					<div className='bg-secondary-600 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full absolute -top-12 sm:-top-20 md:-top-28 lg:-top-36 hidden lg:block' />

					{/* Carousel container - responsive sizing */}
					<div className='relative z-10 w-full xs:w-[80%] sm:w-[70%] md:w-[65%] lg:w-[60%] h-[200px] xs:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mx-auto'>
						{featuredProducts?.map((product, index) => (
							<div
								key={product?.id}
								className={`
      ${
				typeof window !== "undefined" && window.innerWidth < 1024
					? // Mobile: only show current image (no absolute positioning)
					  index === currentImageIndex
						? "block"
						: "hidden"
					: // Desktop: normal carousel behavior
					  `absolute inset-0 transition-opacity duration-1000 ease-in-out ${
							index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
					  }`
			}
    `}
							>
								<Picture
									src={product?.images[0]?.src}
									alt={product?.name}
									className='w-[200px] h-[200px] lg:w-full lg:h-full object-contain'
									sizes='(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 60vw'
								/>
							</div>
						))}
					</div>

					{/* Mobile navigation dots - only shows on small screens */}
					<div className='lg:hidden flex justify-center gap-2 absolute bottom-4 left-0 right-0 z-20'>
						{featuredProducts?.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentImageIndex(index)}
								className={`w-2 h-2 rounded-full transition-all ${
									index === currentImageIndex
										? "bg-primary scale-125"
										: "bg-white/50"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</section>
			<div className='flex flex-wrap justify-center gap-10 py-6 text-gray-800 w-fit mx-auto rounded-2xl px-2 lg:px-5'>
				{benefits.map((benefit, idx) => (
					<div
						key={idx}
						className='flex items-start gap-4 p-3 hover:bg-amber-50/50 rounded-lg transition-colors'
					>
						{/* Icon with a warm, bookish tone */}
						<div className='p-2 bg-amber-100/70 rounded-full text-amber-600'>
							{benefit.icon}
						</div>

						<div className='flex-1'>
							{/* Title: Emphasize clarity with a serif/sans-serif mix */}
							<h4 className='font-serif font-bold text-gray-800'>
								{benefit.title}
							</h4>

							{/* Subtitle: Soft, descriptive text */}
							<p className='text-sm text-gray-600 mt-1'>{benefit.subtitle}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default AllCategorySection;
