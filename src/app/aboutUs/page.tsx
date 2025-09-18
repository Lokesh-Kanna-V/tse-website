import Navbar from "@/shared/ui/navbar";
import AboutUs from "@/features/aboutUs/ui/aboutUs";
import Footer from "@/shared/ui/footer";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
}
