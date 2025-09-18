//? Module Imports
import OurCoreValuesMainContent from "../modules/ourCoreValues-mainContent";
import OurCoreValuesCardSection from "../modules/ourCoreValues-cardSection";

export default function OurCoreValues() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8 flex flex-col gap-20">
      <OurCoreValuesMainContent />
      <OurCoreValuesCardSection />
    </div>
  );
}
