//? Module Imports
import SmallCard from "@/shared/ui/smallCard";

//? Config Imports
import coreValues from "../config/ourCoreValues-cardSection-data";

export default function OurCoreValuesCardSection() {
  return (
    // <div className="flex justify-center items-center gap-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center items-stretch w-full">
      {coreValues.map((value, index) => {
        const Icon = value.icon;
        return (
          <SmallCard
            key={`${value.title}-${index}`}
            title={value.title}
            content={value.content}
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
