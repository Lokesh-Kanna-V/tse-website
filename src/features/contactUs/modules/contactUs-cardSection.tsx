//? Module Imports
import SmallCardContactUs from "@/shared/ui/smallCard-contactUs";

//? Config Imports
import contactDetails from "../config/contactUs-cardSection-data";

export default function ContactUsCardSection() {
  return (
    <div className="flex justify-center items-center gap-5">
      {contactDetails.map((details, index) => {
        const Icon = details.icon;
        return (
          <SmallCardContactUs
            key={`${details.title}-${index}`}
            title={details.title}
            content={details.content}
          >
            <div className="flex justify-center">
              <Icon className="w-6 h-6 mb-6 text-gray-800" />
            </div>
          </SmallCardContactUs>
        );
      })}
    </div>
  );
}
