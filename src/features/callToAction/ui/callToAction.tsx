import CallToActionMainContent from "../modules/callToAction-mainContent";
import CallToActionButtonSection from "../modules/callToAction-buttonSection";

export default function CallToAction() {
  return (
    <div className="px-10 py-20 text-white bg-gray-400">
      <CallToActionMainContent />
      <CallToActionButtonSection />
    </div>
  );
}
