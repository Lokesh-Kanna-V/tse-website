//? Module Imports
import WhyChooseUsMainContent from "../modules/featuredProductCategories-mainContent";
import WhyChooseUsCardSection from "../modules/featuredProductCategories-cardSection";

export default function FeaturedProductCategories() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8 flex flex-col gap-20">
      <WhyChooseUsMainContent />
      <WhyChooseUsCardSection />
    </div>
  );
}
