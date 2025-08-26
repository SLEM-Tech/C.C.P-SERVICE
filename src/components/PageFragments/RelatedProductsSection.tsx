import React, { useRef, useState, useEffect, useCallback } from "react";
import CustomSwiper from "../CustomSwiper";
import HomeApplianceCard from "../Cards/HomeApplianceCard";
import { Product, homeApplianceProductData } from "@constants";
import { useGetProductQuery } from "../config/features/api";
import { useCategories, useProductsByCategory } from "../lib/woocommerce";
import ProductCard2 from "../Cards/ProductCard2";
import { Loader } from "@src/app/(Home)/_components/SortedProducts";
import Carousel from "../Reusables/Carousel";

interface RelatedProductsSectionProps {
	productCategoryId: string;
}

const RelatedProductsSection = ({
	productCategoryId,
}: RelatedProductsSectionProps) => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [maxScrollTotal, setMaxScrollTotal] = useState(0);
	const [scrollLeftTotal, setScrollLeftTotal] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleItems, setVisibleItems] = useState(1);
	const [scrollDistance, setScrollDistance] = useState(300);

	// Woo commerce API Product
	const {
		data: categoryProducts,
		isLoading: categoryProductsWpIsLoading,
		isError: categoryProductsIsError,
	} = useProductsByCategory(productCategoryId);

	const CategoryProducts: ProductType[] = categoryProducts;
	const TotalCategoryProducts = CategoryProducts?.length || 0;

	// Calculate responsive values based on screen size
	const calculateResponsiveValues = useCallback(() => {
		const screenWidth = window.innerWidth;
		
		let items = 1;
		let distance = 280;
		
		if (screenWidth >= 1536) { // 2xl
			items = 5;
			distance = 320;
		} else if (screenWidth >= 1280) { // xl
			items = 4;
			distance = 320;
		} else if (screenWidth >= 1024) { // lg
			items = 3;
			distance = 300;
		} else if (screenWidth >= 768) { // md
			items = 2;
			distance = 280;
		} else if (screenWidth >= 640) { // sm
			items = 2;
			distance = 260;
		} else {
			items = 1;
			distance = 240;
		}
		
		setVisibleItems(items);
		setScrollDistance(distance);
	}, []);

	// Handle resize events
	useEffect(() => {
		calculateResponsiveValues();
		
		const handleResize = () => {
			calculateResponsiveValues();
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [calculateResponsiveValues]);

	// Update scroll calculations when slider content changes
	const updateScrollCalculations = useCallback(() => {
		if (sliderRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
			const maxScroll = scrollWidth - clientWidth;
			setScrollLeftTotal(scrollLeft);
			setMaxScrollTotal(maxScroll);
		}
	}, []);

	const handleNext = useCallback(() => {
		if (sliderRef.current) {
			updateScrollCalculations();
			
			const maxIndex = Math.max(0, TotalCategoryProducts - visibleItems);
			if (currentIndex < maxIndex) {
				sliderRef.current.scrollLeft += scrollDistance;
				setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
			}
		}
	}, [currentIndex, TotalCategoryProducts, visibleItems, scrollDistance, updateScrollCalculations]);

	const handlePrev = useCallback(() => {
		if (sliderRef.current) {
			updateScrollCalculations();
			
			if (currentIndex > 0) {
				sliderRef.current.scrollLeft -= scrollDistance;
				setCurrentIndex(prev => Math.max(prev - 1, 0));
			}
		}
	}, [currentIndex, scrollDistance, updateScrollCalculations]);

	// Handle scroll events for better UX
	const handleScroll = useCallback(() => {
		updateScrollCalculations();
	}, [updateScrollCalculations]);

	// Touch/swipe support for mobile
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchEnd(null);
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		
		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe) {
			handleNext();
		} else if (isRightSwipe) {
			handlePrev();
		}
	};

	// Loading state
	if (categoryProductsWpIsLoading) {
		return (
			<div className='bg-white mt-3 lg:mt-6 w-full pt-2 pb-8 px-3 lg:px-6 mb-24'>
				<h4 className='text-secondary-200 uppercase text-xs lg:text-sm font-bold leading-[1.5] pt-6 pb-3'>
					Related products
				</h4>
				<div className=''>
					<hr className='text-[#E0E0E0]' />
					<hr className='text-primary font-bold w-2/12' />
				</div>
				<div className='mt-6'>
					<Loader />
				</div>
			</div>
		);
	}

	// Error state
	if (categoryProductsIsError) {
		return (
			<div className='bg-white mt-3 lg:mt-6 w-full pt-2 pb-8 px-3 lg:px-6 mb-24'>
				<h4 className='text-secondary-200 uppercase text-xs lg:text-sm font-bold leading-[1.5] pt-6 pb-3'>
					Related products
				</h4>
				<div className=''>
					<hr className='text-[#E0E0E0]' />
					<hr className='text-primary font-bold w-2/12' />
				</div>
				<div className='mt-6 text-center py-8'>
					<p className='text-gray-500 text-sm'>Unable to load related products</p>
				</div>
			</div>
		);
	}

	// No products state
	if (!CategoryProducts || CategoryProducts.length === 0) {
		return (
			<div className='bg-white mt-3 lg:mt-6 w-full pt-2 pb-8 px-3 lg:px-6 mb-24'>
				<h4 className='text-secondary-200 uppercase text-xs lg:text-sm font-bold leading-[1.5] pt-6 pb-3'>
					Related products
				</h4>
				<div className=''>
					<hr className='text-[#E0E0E0]' />
					<hr className='text-primary font-bold w-2/12' />
				</div>
				<div className='mt-6 text-center py-8'>
					<p className='text-gray-500 text-sm'>No related products found</p>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-white mt-3 lg:mt-6 w-full pt-2 pb-8 px-3 sm:px-4 lg:px-6 mb-24'>
			{/* Header */}
			<h4 className='text-secondary-200 uppercase text-xs sm:text-sm lg:text-base font-bold leading-[1.5] pt-4 sm:pt-6 pb-3'>
				Related products
			</h4>
			
			{/* Divider */}
			<div className=''>
				<hr className='text-[#E0E0E0]' />
				<hr className='text-primary font-bold w-2/12 sm:w-1/12' />
			</div>

			{/* Products Carousel */}
			<div className='mt-4 sm:mt-6 relative'>
				<Carousel
					totalDataNumber={TotalCategoryProducts}
					maxScrollTotal={maxScrollTotal}
					scrollLeftTotal={scrollLeftTotal}
					handleNext={handleNext}
					handlePrev={handlePrev}
				>
					<div
						ref={sliderRef}
						onScroll={handleScroll}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
						className={`
							flex overflow-x-auto scroll-smooth overflow-y-hidden no-scrollbar
							gap-3 sm:gap-4 lg:gap-6
							snap-x snap-mandatory
						`}
						style={{
							scrollbarWidth: 'none',
							msOverflowStyle: 'none',
						}}
					>
						{CategoryProducts.map((product, index) => (
							<div 
								key={product?.id || index}
								className={`
									flex-shrink-0 snap-center
									w-[calc(100vw-3rem)] 
									sm:w-[calc(50vw-2.5rem)] 
									md:w-[calc(50vw-3rem)] 
									lg:w-[calc(33.333vw-2.5rem)] 
									xl:w-[calc(25vw-2rem)] 
									2xl:w-[calc(20vw-1.5rem)]
									max-w-[280px] min-w-[240px]
								`}
							>
								<ProductCard2
									id={product?.id}
									image={product?.images?.[0]?.src || '/placeholder-image.jpg'}
									oldAmount={product?.regular_price}
									newAmount={product?.price}
									description={product?.name}
								/>
							</div>
						))}
					</div>
				</Carousel>

				{/* Mobile pagination dots (optional) */}
				<div className='flex justify-center mt-4 sm:hidden'>
					<div className='flex space-x-2'>
						{Array.from({ length: Math.ceil(TotalCategoryProducts / visibleItems) }).map((_, index) => (
							<div
								key={index}
								className={`
									w-2 h-2 rounded-full transition-colors duration-200
									${Math.floor(currentIndex / visibleItems) === index 
										? 'bg-primary' 
										: 'bg-gray-300'
									}
								`}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Optional: Show total count on larger screens */}
			<div className='hidden lg:block mt-4 text-center'>
				<p className='text-xs text-gray-500'>
					Showing {Math.min(visibleItems, TotalCategoryProducts)} of {TotalCategoryProducts} products
				</p>
			</div>
		</div>
	);
};

export default RelatedProductsSection;