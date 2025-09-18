import MediumTextCard from "@/shared/ui/mediumTextCard";
import { missionAndVision } from "../config/aboutUs-MissionAndVision-data";

export default function AboutUsMissionAndVision() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-8">
      <div className="flex justify-between">
        {missionAndVision.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`${item.title}-${index}`}>
              <MediumTextCard title={item.title} content={item.content}>
                <div className="flex justify-start">
                  <Icon className="w-6 h-6 mb-6 text-gray-800" />
                </div>
              </MediumTextCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
