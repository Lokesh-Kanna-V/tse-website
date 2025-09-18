//? Module Imports
import SmallCard from "@/shared/ui/smallCard";

//? Config Imports
import reasons from "../config/whyChooseUs-cardSection-data";

export default function WhyChooseUsCardSection() {
  return (
    <div className="flex justify-center items-center gap-5">
      {reasons.map((reason, index) => {
        const Icon = reason.icon;
        return (
          <SmallCard
            key={`${reason.title}-${index}`}
            title={reason.title}
            content={reason.content}
          >
            <div className="flex justify-center">
              <Icon className="w-6 h-6 mb-6 text-gray-800" />
            </div>
          </SmallCard>
        );
      })}
    </div>
  );
}
