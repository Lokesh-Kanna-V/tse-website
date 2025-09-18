//? Module Imports
import MediumCardWithImage from "@/shared/ui/mediumCardWithImage";

//? Config Imports
import featuredCategories from "../config/featuredProductCategories-cardSection-data";

export default function WhyChooseUsCardSection() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
      {featuredCategories.map((category, index) => {
        return (
          <MediumCardWithImage
            key={`${category.title}-${index}`}
            image={category.image}
            title={category.title}
            content={category.content}
          ></MediumCardWithImage>
        );
      })}
    </div>
  );
}
