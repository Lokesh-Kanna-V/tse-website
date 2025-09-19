//? Module Imports
import ContactUsMainContent from "../modules/contactUs-mainContent";
import ContactUsCardSection from "../modules/contactUs-cardSection";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8 flex flex-col gap-20">
      <ContactUsMainContent />
      <ContactUsCardSection />
    </div>
  );
}
