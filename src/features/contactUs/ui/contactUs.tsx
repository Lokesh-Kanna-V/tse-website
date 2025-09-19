//? Module Imports
import ContactUsMainContent from "../modules/contactUs-mainContent";
import ContactUsCardSection from "../modules/contactUs-cardSection";
import ContactUsLocation from "../modules/cotactUs-Location";
import ContactUsOfficeHours from "../modules/contactUs-OfficeHours";
import ContactUsFaQ from "../modules/contactUs-faq";

export default function ContactUs() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8 flex flex-col gap-20">
      <ContactUsMainContent />
      <ContactUsCardSection />
      <div className="w-full grid grid-cols-2">
        <ContactUsLocation />
        <ContactUsOfficeHours />
      </div>
      <ContactUsFaQ />
    </div>
  );
}
