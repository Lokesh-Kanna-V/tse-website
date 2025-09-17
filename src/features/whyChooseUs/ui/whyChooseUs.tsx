//? Module Imports
import WhyChooseUsMainContent from "../modules/whyChooseUs-mainContent";
import WhyChooseUsCardSection from "../modules/whyChooseUs-cardSection";

export default function WhyChooseUs() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8 flex flex-col gap-20">
      <WhyChooseUsMainContent />
      <WhyChooseUsCardSection />
    </div>
  );
}
