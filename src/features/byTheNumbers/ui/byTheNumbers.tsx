//? Module Imports
import ByTheNumbersMainContent from "../modules/byTheNumbers-mainContent";
import ByTheNumbersCardSection from "../modules/byTheNumbers-cardSection";

export default function ByTheNumbers() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8 flex flex-col gap-20">
      <ByTheNumbersMainContent />
      <ByTheNumbersCardSection />
    </div>
  );
}
