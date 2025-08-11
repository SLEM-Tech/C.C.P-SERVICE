"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-32 pb-24'>
				<section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
					<h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
						Our Policies
					</h4>
					<h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
						C.C.P Service Retreat Limited Policies
					</h3>
					<span className='text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl'>
						At C.C.P Service Retreat Limited, we provide premium digital content
						and audiovisual media including books, movies, and multimedia
						experiences designed to entertain, educate, and inspire while
						maintaining the highest standards of content quality and customer
						service.
					</span>
					<div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "termsOfUse"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("termsOfUse")}
						>
							Terms of use
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "privacyPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("privacyPolicy")}
						>
							Privacy Policy
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "deliveryReturn"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("deliveryReturn")}
						>
							Delivery & Return
						</button>
						<button
							className={`px-2 xl:px-4 py-2 rounded-md ${
								activeTab === "refundPolicy"
									? "bg-white text-black"
									: "bg-[#F5F5F5] text-[#667085]"
							}`}
							onClick={() => handleTabClick("refundPolicy")}
						>
							Refund Policy
						</button>
					</div>
				</section>

				<div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
					{activeTab === "termsOfUse" && (
						<div id='termsOfUse' className='text-[#667085]'>
							<h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
								Terms of Use - C.C.P Service Retreat Limited
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								By accessing and purchasing digital content from C.C.P Service
								Retreat Limited, including audiovisual media, books, movies, and
								multimedia experiences, you agree to the following comprehensive
								terms and conditions:
							</p>

							<ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										Premium Digital Content Library:
									</span>{" "}
									C.C.P Service Retreat offers a curated collection of
									high-quality digital content including feature films,
									documentaries, educational videos, e-books, audiobooks,
									interactive media, and multimedia experiences designed for
									entertainment, education, and personal development.
								</li>
								<li>
									<span className='font-medium'>
										Content Licensing & Usage Rights:
									</span>{" "}
									All digital content is licensed for personal use only with
									non-exclusive, non-transferable rights. Content may not be
									redistributed, publicly performed, or used for commercial
									purposes without explicit written permission. Licensing terms
									vary by content type and are specified at purchase.
								</li>
								<li>
									<span className='font-medium'>
										Retreat & Wellness Content:
									</span>{" "}
									Our specialized content includes mindfulness videos,
									meditation guides, wellness programs, spiritual content, and
									personal development materials. These materials are for
									informational and educational purposes and do not replace
									professional advice.
								</li>
								<li>
									<span className='font-medium'>Multi-Device Access:</span>{" "}
									Licensed content can be accessed across multiple devices
									including smartphones, tablets, computers, and smart TVs using
									your account credentials. Simultaneous streaming limitations
									apply based on subscription tier and content licensing
									agreements.
								</li>
								<li>
									<span className='font-medium'>
										Content Quality Standards:
									</span>{" "}
									All audiovisual content is delivered in high-definition
									formats when available, including 4K Ultra HD, HDR, and
									immersive audio formats. E-books and digital publications are
									provided in multiple formats for optimal reading experiences
									across devices.
								</li>
								<li>
									<span className='font-medium'>
										Age Verification & Content Ratings:
									</span>{" "}
									Age-appropriate content filtering and parental controls are
									available. Some content requires age verification for access.
									Content ratings and descriptions help users make informed
									viewing and reading choices.
								</li>
								<li>
									<span className='font-medium'>
										Subscription & Purchase Options:
									</span>{" "}
									Content is available through individual purchases, rental
									options, and subscription plans. Subscription benefits include
									unlimited access to included content, early access to new
									releases, and exclusive member content and features.
								</li>
								<li>
									<span className='font-medium'>Offline Access:</span> Selected
									content can be downloaded for offline viewing and reading
									within the app. Downloaded content expires according to
									licensing terms and must be renewed for continued access.
									Storage limitations apply based on device capacity.
								</li>
								<li>
									<span className='font-medium'>
										Content Updates & Removals:
									</span>{" "}
									Our content library is regularly updated with new additions
									and occasional removals due to licensing changes. Purchased
									content remains accessible even if removed from the general
									catalog, subject to licensing agreements.
								</li>
							</ul>

							<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Digital Rights Management:</span>{" "}
								Content is protected by digital rights management (DRM)
								technology to prevent unauthorized copying and distribution.
								Attempts to circumvent DRM protection will result in account
								termination and legal action.
							</p>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<span className='font-medium'>Community Guidelines:</span> User
								reviews, ratings, and community features must comply with our
								community guidelines. Inappropriate content, spam, or abusive
								behavior will result in account restrictions or termination.
							</p>
						</div>
					)}

					{activeTab === "privacyPolicy" && (
						<div id='privacyPolicy' className='text-[#667085]'>
							<h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
								PRIVACY POLICY - C.C.P SERVICE RETREAT LIMITED
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								C.C.P Service Retreat Limited is committed to protecting the
								privacy of our digital content users while providing
								personalized audiovisual media, books, movies, and wellness
								content experiences. This policy explains our data practices for
								digital entertainment and educational services.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								DIGITAL CONTENT PLATFORM DATA COLLECTION
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
								<li>
									User account information (name, email, age verification,
									subscription preferences)
								</li>
								<li>
									Content consumption data (viewing history, reading progress,
									preferences, ratings)
								</li>
								<li>
									Device information and streaming quality preferences for
									optimal content delivery
								</li>
								<li>
									Search queries and browsing behavior within our digital
									content library
								</li>
								<li>
									Payment information and subscription management data for
									billing services
								</li>
								<li>
									Community interaction data (reviews, comments,
									recommendations, social features)
								</li>
								<li>
									Wellness and retreat content usage for personalized program
									recommendations
								</li>
								<li>
									Download and offline usage patterns for content optimization
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								PERSONALIZED CONTENT DATA USAGE
							</h4>

							<ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
								<li>
									To provide personalized content recommendations based on
									viewing and reading preferences
								</li>
								<li>
									To optimize streaming quality and delivery based on device
									capabilities and connection
								</li>
								<li>
									To curate specialized wellness and retreat content for
									personal development goals
								</li>
								<li>
									To manage subscriptions, process payments, and provide
									customer support
								</li>
								<li>
									To develop new content offerings based on user interests and
									engagement patterns
								</li>
								<li>
									To prevent unauthorized access and protect content from piracy
								</li>
								<li>
									To facilitate community features and social sharing when
									enabled by users
								</li>
								<li>
									To comply with content licensing requirements and geographic
									restrictions
								</li>
							</ul>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								CONTENT PROTECTION & USER PRIVACY
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								We implement advanced security measures to protect both user
								privacy and content integrity including encrypted streaming,
								secure account authentication, and digital rights management.
								User viewing and reading data is anonymized for analytics while
								maintaining personalization benefits. Content creator
								partnerships include privacy protection requirements for user
								data.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								CONTENT CREATOR & PARTNER DATA SHARING
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Anonymous usage statistics are shared with content creators and
								publishers to improve content offerings and licensing decisions.
								No personal information is shared without explicit user consent.
								Wellness and retreat content providers receive aggregate usage
								data to enhance program effectiveness. All partnerships maintain
								strict privacy protection standards.
							</p>

							<h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
								USER CONTROL & CONTENT PRIVACY SETTINGS
							</h4>

							<p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
								Users have comprehensive control over their content preferences,
								viewing history visibility, and recommendation settings. Content
								consumption data can be cleared, and recommendation algorithms
								can be reset. Community features and social sharing are opt-in
								only. For content privacy inquiries and account management,
								contact privacy@ccpretreat.com.ng.
							</p>
						</div>
					)}

					{activeTab === "deliveryReturn" && (
						<div id='deliveryReturn' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								DIGITAL CONTENT DELIVERY & ACCESS POLICY - C.C.P SERVICE RETREAT
								LIMITED
							</h3>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								C.C.P Service Retreat Limited ensures seamless delivery and
								access to premium digital content including audiovisual media,
								books, movies, and wellness materials with comprehensive support
								services and satisfaction guarantees for all our digital
								experiences.
							</p>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Instant Digital Content Access
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										Immediate access to purchased content upon payment
										confirmation
									</li>
									<li>
										High-speed streaming with adaptive quality based on internet
										connection
									</li>
									<li>
										Multiple format options including 4K Ultra HD, HDR, and
										standard definitions
									</li>
									<li>
										Cross-platform compatibility across all major devices and
										operating systems
									</li>
									<li>
										Offline download capabilities for mobile devices and tablets
									</li>
									<li>
										Cloud synchronization for seamless content access across
										multiple devices
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Content Library Organization
								</h4>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											Entertainment Content
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Feature films in multiple genres with detailed
												descriptions
											</li>
											<li>Documentary series and educational programming</li>
											<li>
												International content with subtitle and dubbing options
											</li>
											<li>Classic and contemporary movie collections</li>
										</ul>
									</div>
									<div>
										<h5 className='font-medium text-xs md:text-sm mb-1'>
											Wellness & Retreat Content
										</h5>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>Guided meditation and mindfulness programs</li>
											<li>Yoga and fitness instruction videos</li>
											<li>Spiritual and personal development content</li>
											<li>Wellness retreat virtual experiences</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Digital Books & Publications
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										E-books available in PDF, EPUB, and MOBI formats for
										universal compatibility
									</li>
									<li>
										Interactive enhanced e-books with multimedia elements and
										annotations
									</li>
									<li>
										Audiobook library with professional narration and chapter
										navigation
									</li>
									<li>
										Digital magazines and periodicals with automatic updates
									</li>
									<li>
										Text-to-speech functionality and accessibility features for
										inclusive reading
									</li>
									<li>
										Customizable reading experience with font size, background,
										and lighting options
									</li>
								</ul>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Subscription & Membership Benefits
								</h4>
								<div className='space-y-3'>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Premium Membership:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>
												Unlimited access to entire content library with new
												releases
											</li>
											<li>Ad-free streaming and reading experience</li>
											<li>
												Exclusive member-only content and early access
												privileges
											</li>
											<li>
												Enhanced download limits for offline content consumption
											</li>
										</ul>
									</div>
									<div>
										<p className='font-medium text-xs md:text-sm'>
											Individual Purchases:
										</p>
										<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
											<li>Lifetime access to purchased individual titles</li>
											<li>
												Rental options for temporary access with competitive
												pricing
											</li>
											<li>
												Bundle deals and collection packages for thematic
												content
											</li>
											<li>
												Gift purchasing options for sharing content with others
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className='mb-6'>
								<h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
									Technical Support & Content Guarantee
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>
										24/7 technical support for streaming and download issues
									</li>
									<li>
										Content quality guarantee with free replacement for
										defective files
									</li>
									<li>Device compatibility assistance and setup support</li>
									<li>
										Regular content updates and quality improvements at no
										additional cost
									</li>
									<li>
										User account recovery and content restoration services
									</li>
									<li>
										Comprehensive help center with tutorials and troubleshooting
										guides
									</li>
								</ul>
							</div>

							<div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Content Support Contact
								</h4>
								<ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>Technical Support: support@ccpretreat.com.ng</li>
									<li>Content Issues: content@ccpretreat.com.ng</li>
									<li>Subscriptions: subscriptions@ccpretreat.com.ng</li>
									<li>Wellness Programs: wellness@ccpretreat.com.ng</li>
									<li>Phone: +234-801-234-5007</li>
									<li>Website: www.ccpretreat.com.ng</li>
								</ul>
							</div>
						</div>
					)}

					{activeTab === "refundPolicy" && (
						<div id='refundPolicy' className='text-[#667085]'>
							<h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
								REFUND POLICY - C.C.P SERVICE RETREAT LIMITED
							</h3>
							<p className='text-xs md:text-sm xl:text-base mb-4'>
								Effective Date: {new Date().toLocaleDateString("en-GB")}
							</p>

							<p className='text-xs md:text-sm xl:text-base mb-4'>
								At C.C.P Service Retreat Limited, we are committed to providing
								exceptional digital content and audiovisual media experiences
								that entertain, educate, and inspire. Our comprehensive refund
								policy ensures customer satisfaction while respecting content
								creators&apos; rights and licensing agreements.
							</p>

							<ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
								<li>
									<span className='font-medium'>
										1. Digital Content Purchase Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											48-hour refund window for individual content purchases if
											technical issues prevent access
										</li>
										<li>
											Full refund for content that doesn&apos;t match
											description or advertised quality
										</li>
										<li>
											Immediate refund for duplicate purchases made within 24
											hours
										</li>
										<li>
											Content quality refunds for audiovisual media with
											technical defects
										</li>
										<li>
											Format compatibility refunds if content cannot play on
											supported devices
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										2. Subscription Service Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Prorated refunds for unused subscription periods with
											30-day advance notice
										</li>
										<li>
											Full refund for first subscription month if cancelled
											within 7 days
										</li>
										<li>
											Service disruption refunds for significant platform
											downtime or technical issues
										</li>
										<li>
											Content library changes refund if major content removal
											affects subscription value
										</li>
										<li>
											Billing error refunds processed immediately upon
											verification
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										3. Wellness & Retreat Content Refunds
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Program completion refunds if wellness content
											doesn&apos;t meet advertised outcomes
										</li>
										<li>
											Guided experience refunds for meditation and retreat
											programs with technical issues
										</li>
										<li>
											Instructor-led content refunds if sessions are cancelled
											or significantly delayed
										</li>
										<li>
											Personal development program refunds for content that
											doesn&apos;t match skill level
										</li>
										<li>
											Therapeutic content disclaimer refunds for misrepresented
											professional services
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										4. Non-Refundable Digital Content
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Content successfully downloaded and accessed beyond
											preview timeframe
										</li>
										<li>
											Rental content viewed to completion or past 50% of total
											runtime
										</li>
										<li>
											Gift purchases that have been redeemed and accessed by
											recipients
										</li>
										<li>
											Content downloaded for offline use and available in user
											library
										</li>
										<li>
											Community-generated content and user-uploaded materials
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>5. Refund Request Process</span>
									<p className='mt-1'>To request a digital content refund:</p>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>Email: refunds@ccpretreat.com.ng</li>
										<li>Live Chat: Available 24/7 through customer portal</li>
										<li>Phone: +234-801-234-5007</li>
										<li>
											Provide purchase confirmation and detailed issue
											description
										</li>
										<li>
											Include screenshots or error messages for technical issues
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										6. Content Quality Assessment
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Technical team reviews all content quality refund requests
											within 24 hours
										</li>
										<li>
											Content creator consultation for program effectiveness
											disputes
										</li>
										<li>
											User experience testing for reported compatibility issues
										</li>
										<li>
											Independent quality verification for disputed content
											standards
										</li>
										<li>
											Platform performance analysis for service disruption
											claims
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										7. Alternative Resolution Options
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Content exchange for equivalent value items in our library
										</li>
										<li>
											Platform credits with extended validity for future content
											purchases
										</li>
										<li>
											Subscription upgrades or extended access periods as
											compensation
										</li>
										<li>
											Exclusive content access or early release privileges
										</li>
										<li>
											Technical support priority for ongoing platform
											optimization
										</li>
									</ul>
								</li>

								<li>
									<span className='font-medium'>
										8. Content Creator Protection & Licensing
									</span>
									<ul className='list-disc pl-5 mt-1 space-y-1'>
										<li>
											Refunds processed in compliance with content licensing
											agreements
										</li>
										<li>
											Content access revoked immediately upon refund approval
										</li>
										<li>
											Creator revenue protection through fair refund evaluation
										</li>
										<li>
											Anti-fraud measures to prevent refund abuse and content
											piracy
										</li>
									</ul>
								</li>
							</ul>

							{/* <div className='mt-6 pt-4 border-t border-gray-200'>
								<h4 className='font-semibold text-xs md:text-sm xl:text-base mb-2'>
									Contact Information
								</h4>
								<p className='text-xs md:text-sm xl:text-base'>
									For digital content refunds and support:
								</p>
								<ul className='list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm xl:text-base'>
									<li>C.C.P Service Retreat Limited</li>
									<li>Email: refunds@ccpretreat.com.ng</li>
									<li>Customer Support: support@ccpretreat.com.ng</li>
									<li>Phone: +234-801-234-5007</li>
									<li>Website: www.ccpretreat.com.ng</li>
								</ul>
							</div> */}
						</div>
					)}
				</div>
			</main>
		</AppLayout>
	);
};

export default Page;
