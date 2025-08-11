"use client";
import { Skeleton } from "@nextui-org/react";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContactCardProps {
	title: string;
	type?: string;
	isLoading: boolean;
	icon: ReactNode;
	additionalText?: string | number | boolean;
	description?: string | number | boolean;
	className?: string;
}

const ContactCard = ({
	title,
	type = "default",
	icon,
	isLoading,
	additionalText,
	description,
	className = "",
}: ContactCardProps) => {
	return (
		<motion.div
			whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
			className={`relative flex flex-col w-full max-w-xs sm:max-w-sm border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 p-6 items-center text-center gap-3 transition-all duration-300 hover:border-primary/30 ${className}`}
		>
			{/* Icon with background */}
			<div className='p-3 mb-2 rounded-full bg-primary/10 text-primary'>
				{React.cloneElement(icon as React.ReactElement, {
					className: "w-6 h-6 sm:w-8 sm:h-8",
				})}
			</div>

			{/* Title */}
			<h3 className='text-lg sm:text-xl font-semibold text-gray-800 dark:text-white'>
				{title}
			</h3>

			{/* Content */}
			<div className='flex flex-col gap-1 w-full'>
				{isLoading ? (
					<>
						<Skeleton className='h-5 w-3/4 rounded-md bg-gray-300 dark:bg-gray-600 mx-auto' />
						<Skeleton className='h-4 w-1/2 rounded-md bg-gray-200 dark:bg-gray-700 mx-auto mt-1' />
					</>
				) : (
					<>
						{additionalText && (
							<div className='text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300'>
								{type === "tel" ? (
									<a
										href={`tel:${additionalText}`}
										className='text-primary hover:text-primary/80 transition-colors'
									>
										{additionalText}
									</a>
								) : type === "email" ? (
									<a
										href={`mailto:${additionalText}`}
										className='text-primary hover:text-primary/80 transition-colors break-all'
									>
										{additionalText}
									</a>
								) : (
									additionalText
								)}
							</div>
						)}

						{description && (
							<p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1'>
								{description}
							</p>
						)}
					</>
				)}
			</div>

			{/* Subtle accent at bottom */}
			<div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl' />
		</motion.div>
	);
};

export default ContactCard;
