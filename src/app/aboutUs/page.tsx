import Navbar from "@/shared/ui/navbar";
import AboutUs from "@/features/aboutUs/ui/aboutUs";
import OurCoreValues from "@/features/ourCoreValues/ui/ourCoreValues";
import ByTheNumbers from "@/features/byTheNumbers/ui/byTheNumbers";
import Footer from "@/shared/ui/footer";
import PartnerWithUs from "@/features/partnerWithUs/ui/partnerWithUs";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <Navbar />
      <AboutUs />
      <OurCoreValues />
      <ByTheNumbers />
      <PartnerWithUs />
      <Footer />
    </div>
  );
}
