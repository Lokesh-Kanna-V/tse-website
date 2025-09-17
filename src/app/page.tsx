import Navbar from "@/shared/ui/navbar";
import Hero from "@/features/hero/ui/hero";
import WhyChooseUs from "@/features/whyChooseUs/ui/whyChooseUs";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <Navbar />
      <Hero />
      <WhyChooseUs />
    </div>
  );
}
