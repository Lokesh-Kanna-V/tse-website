//? Module Imports
import MediumCard from "@/shared/ui/mediumCard";

//? Config Imports
import featuredCategories from "../config/featuredProductCategories-cardSection-data";

export default function WhyChooseUsCardSection() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
      {featuredCategories.map((category, index) => {
        return (
          <MediumCard
            key={`${category.title}-${index}`}
            image={category.image}
            title={category.title}
            content={category.content}
          ></MediumCard>
        );
      })}
    </div>
  );
}
