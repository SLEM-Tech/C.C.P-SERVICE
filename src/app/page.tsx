"use client"; 

import { fallbackBooks, mustBuyBooks } from "@constants/fallback-data";
import AppLayout from "@src/components/AppLayout";
import AboutUs from "@src/components/ebook-comps/pages/home/about";
import BenefitsSection from "@src/components/ebook-comps/pages/home/benefit-section";
import BookCarousel, {
  ProductType,
} from "@src/components/ebook-comps/pages/home/book-carousel";
import HeroBanner from "@src/components/ebook-comps/pages/home/hero-section";

import { useProduct } from "@src/components/lib/woocommerce";
import BookCardSkeleton from "@src/components/Reusables/bookskeleton";

const adaptApiToProductType = (apiProduct: any): ProductType => {
  
  const authorAttribute = apiProduct.attributes.find(
    (attr: any) => attr.name === "Author"
  );

  return {
    id: apiProduct.id,
    title: apiProduct.name,
    author: authorAttribute ? authorAttribute.options[0] : "Unknown Author",
    price: `NGN${apiProduct.price}`, 
    image: apiProduct.images[0]?.src || "/placeholder-image.png", 
    description: apiProduct.short_description?.replace(/<p>|<\/p>/g, ""), 
    permalink: `/product/${apiProduct.slug}`, 
  };
};

const EbookHomePage = () => {
  const {
    data: featuredApiProducts,
    isLoading: isLoadingFeatured,
    isError: isErrorFeatured,
  } = useProduct("featured");

  const {
    data: mustBuyApiProducts,
    isLoading: isLoadingMustBuy,
    isError: isErrorMustBuy,
  } = useProduct("must-buy");

  const selectedBooks =
    !isLoadingFeatured &&
    !isErrorFeatured &&
    featuredApiProducts &&
    featuredApiProducts.length > 0
      ? featuredApiProducts.map(adaptApiToProductType)
      : fallbackBooks;

  const mustBuyEBooks =
    !isLoadingMustBuy &&
    !isErrorMustBuy &&
    mustBuyApiProducts &&
    mustBuyApiProducts.length > 0
      ? mustBuyApiProducts.map(adaptApiToProductType)
      : mustBuyBooks;

  const skeletons = new Array(5).fill(null); 

  return (
    <AppLayout className="pt-20 lg:pt-0 overflow-hidden mx-auto lg:mt-0 pb-12">
      <div className=" relative">
        <HeroBanner />
      </div>
      <BenefitsSection />

      {isLoadingFeatured ? (
        <div className="flex gap-4 px-4 overflow-x-auto">
          {skeletons.map((_, index) => (
            <BookCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <BookCarousel title="Selected for you" books={selectedBooks} />
      )}
      <div className="mt-4 sm:mt-10 max-w-[1256px] mx-auto">
        {isLoadingMustBuy ? (
          <div className="flex gap-4 px-4 overflow-x-auto">
            {skeletons.map((_, index) => (
              <BookCardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <BookCarousel title="You must buy this now" books={mustBuyEBooks} />
        )}
      </div>

      <div className="mt-4 sm:mt-10 max-w-[1256px] mx-auto">
        <AboutUs />
      </div>
    </AppLayout>
  );
};
export default EbookHomePage;
