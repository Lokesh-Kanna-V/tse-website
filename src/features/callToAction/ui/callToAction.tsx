import CallToActionMainContent from "../modules/callToAction-mainContent";
import CallToActionButtonSection from "../modules/callToAction-buttonSection";

export default function CallToAction() {
  return (
    <div className="px-10 py-20 text-gray-900 bg-stone-300">
      <CallToActionMainContent />
      <div className="flex justify-center items-center mt-10">
        <CallToActionButtonSection />
      </div>
    </div>
  );
}
