"use client";
import React from "react";
import * as Iconbi from "react-icons/bi";
import { motion } from "framer-motion";
import FooterCard from "../Cards/FooterCard";
import Link from "next/link";
import { ChatServiceIconSvg, FileIconSvg, RocketIconSvg } from "../SvgIcons";
import useToken from "../hooks/useToken";
import { signOut } from "@utils/lib";
import { CompanyName, filterCustomersByEmail } from "@constants";
import { useCustomer } from "../lib/woocommerce";
import { LogoImage } from "@utils/function";

interface footerDataProps {
	title: string;
	links: {
		label: string;
		href: string;
		function?: () => void;
	}[];
}

const Footer = () => {
	const { email } = useToken();
	const currentYear = new Date().getFullYear();
	const { data: customer, isLoading, isError } = useCustomer("");
	const wc_customer2_info: Woo_Customer_Type[] = customer;
	const wc_customer_info: Woo_Customer_Type | undefined =
		filterCustomersByEmail(wc_customer2_info, email);
	const firstName = wc_customer_info?.first_name;
	const footer1socialMediaIcons = [
		{
			id: 1,
			icon: <Iconbi.BiLogoFacebook className='text-lg text-white' />,
			link: "http://facebook.com",
			backgroundColor: "bg-[#365493]",
		},

		{
			id: 3,
			icon: <Iconbi.BiLogoLinkedin className='text-lg text-white' />,
			link: "http://instagram.com",
			backgroundColor: "bg-[#0274B3]",
		},
	];

	const footerCardData = [
		{
			icon: <RocketIconSvg />,
			name: "Delivery Assistance",
			description: "Seller Online Delivery",
		},
		{
			icon: <FileIconSvg />,
			name: "Secure Purchase",
			description: "100% Secure Payment",
		},
		{
			icon: <ChatServiceIconSvg />,
			name: "Unmatched Service",
			description: "Dedicated Support",
		},
	];

	const footerData: footerDataProps[] = [
		{
			title: "Account",
			links: [
				{
					label: firstName ? "Update Account" : "Create Account",
					href: firstName ? "/user/account-details" : "/user/register",
				},
				{
					label: firstName ? "Log Out" : "Login",
					href: firstName ? "" : "/user/login",
					function: firstName ? signOut : () => {},
				},
				{
					label: firstName ? "Change Password" : "Forget Password",
					href: firstName ? "/user/change-password" : "/user/forget-password",
				},
			],
		},
		{
			title: "Information",
			links: [
				{ label: "FAQ", href: "/faq" },
				{ label: "Support", href: "/contact-us" },
			],
		},
		{
			title: "Legal",
			links: [
				{ label: "Terms of Use", href: "/terms-of-use?terms-of-use" },
				{ label: "Privacy Policy", href: "/terms-of-use?privacy-policy" },
				{ label: "Delivery & Shipping", href: "/terms-of-use?delivery-return" },
				{ label: "Refund Policy", href: "/terms-of-use?refund-policy" },
			],
		},
	];

	const productCards = footerCardData.map((item, index) => (
		<FooterCard
			key={index}
			icon={item.icon}
			name={item.name}
			description={item.description}
			borderRight={index !== footerCardData.length - 1}
		/>
	));

	const staggerDelay = 0.2;

	return (
		<footer className='bg-white dark:bg-gray-900 w-full border-t border-gray-100 dark:border-gray-800'>
			<div className='mx-auto max-w-7xl px-6 py-5 lg:pt-20 lg:pb-4'>
				{/* Main Footer Grid */}
				<div className='grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 pb-8'>
					{/* Brand Column - Wider */}
					<div className='md:col-span-2 space-y-6'>
						<LogoImage className='w-[60px] lg:w-[70px]' />
						<p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-md'>
							Premium e-commerce solutions for the modern shopper. Quality
							products, exceptional service.
						</p>
					</div>

					{/* Links Columns */}
					{footerData.map((section, index) => (
						<div key={index} className='space-y-4'>
							<h3 className='text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider'>
								{section.title}
							</h3>
							<ul className='space-y-3'>
								{section.links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link
											href={link.href}
											className='text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2 group'
										>
											<span className='group-hover:translate-x-1 transition-transform'>
												{link.label}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Divider with Pattern */}
				<div className='relative py-2'>
					<div className='absolute inset-0 flex items-center'>
						<div className='w-full border-t border-gray-200 dark:border-gray-800'></div>
					</div>
					<div className='relative flex justify-center'>
						<span className='bg-white dark:bg-gray-900 px-4 text-xs text-gray-500'>
							Premium Shopping Experience
						</span>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='flex flex-col md:flex-row justify-between items-center gap-6 pt-1'>
					{/* Copyright and Legal Links */}
					<div className='flex flex-col md:flex-row items-center gap-4 text-xs text-gray-500 dark:text-gray-400'>
						<span>
							© {currentYear} {CompanyName}. All rights reserved.
						</span>
					</div>

					{/* Payment Methods and Social Icons */}
					<div className='flex flex-col items-center md:items-end gap-4'>
						{/* Social Icons */}
						<div className='flex gap-3'>
							{footer1socialMediaIcons.map((item, index) => (
								<motion.a
									href={item.link}
									key={index}
									whileHover={{ y: -2 }}
									whileTap={{ scale: 0.95 }}
									className={`p-2 rounded-full ${item.backgroundColor} text-white hover:bg-opacity-90 transition-all duration-200`}
									aria-label={item.link}
								>
									{item.icon}
								</motion.a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
