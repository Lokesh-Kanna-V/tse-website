import Navbar from "@/shared/ui/navbar";
import ContactUs from "@/features/contactUs/ui/contactUs";
import Footer from "@/shared/ui/footer";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
}
