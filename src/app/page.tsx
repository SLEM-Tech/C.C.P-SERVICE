import AppLayout from "@src/components/AppLayout";
import AllCategorySection from "@src/components/PageFragments/AllCategorySection";
import SortedProducts from "./(Home)/_components/SortedProducts";
import { SEODATA } from "@constants/seoContants";
import { Metadata } from "next";
import MiddleBanner from "./(Home)/_components/MiddleBanner";
import DisplayBanner from "./(Home)/_components/DisplayBanner";
import ContactCards from "./contact-us/_components/ContactCards";

const { description, title } = SEODATA.home;
export const metadata: Metadata = {
	title: title,
	description: description,
	icons: SEODATA.defaultOGImage,
	openGraph: {
		images: [
			{
				url: SEODATA.defaultOGImage,
			},
		],
	},
};

const page = () => {
	return (
		<AppLayout className='pt-20 lg:pt-0 mx-auto lg:mt-24 pb-12'>
			<div className='relative'>
				<AllCategorySection />
			</div>
			<div className='mt-8 sm:mt-10 max-w-[1256px] mx-auto'>
				<SortedProducts />
			</div>
			<section className='bg-white mx-auto w-full mt-4 md:mt-5 pt-4'>
				<h3 className='font-semibold text-xl sm:text-2xl slg:text-3xl tracking-tighter text-center mt-10'>
					Contact Us
				</h3>

				<div className='flex flex-wrap w-full justify-center gap-8 mt-10 px-4 slg:px-0'>
					<ContactCards />
				</div>
			</section>
		</AppLayout>
	);
};

export default page;
