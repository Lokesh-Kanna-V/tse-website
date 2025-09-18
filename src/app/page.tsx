import Navbar from "@/shared/ui/navbar";
import Hero from "@/features/hero/ui/hero";
import WhyChooseUs from "@/features/whyChooseUs/ui/whyChooseUs";
import FeaturedProductCategories from "@/features/featuredProductCategories/ui/featuredProductCategories";
import CallToAction from "@/features/callToAction/ui/callToAction";
import Footer from "@/shared/ui/footer";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <FeaturedProductCategories />
      <CallToAction />
      <Footer />
    </div>
  );
}
