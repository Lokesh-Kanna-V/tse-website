import AboutUsOurStory from "../modules/aboutUs-ourStory";
import AboutUsTheSoxEnterprises from "../modules/aboutUs-theSoxEnterprises";
import AboutUsImageSection from "../modules/aboutUs-imageSection";
import AboutUsMissionAndVision from "../modules/aboutUs-missionAndVision";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-20">
      <AboutUsTheSoxEnterprises />
      <div className="grid grid-cols-2 mx-30">
        <AboutUsOurStory />
        <AboutUsImageSection />
      </div>
      <AboutUsMissionAndVision />
    </div>
  );
}
