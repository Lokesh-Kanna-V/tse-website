import Navbar from "@/shared/ui/navbar";
import ContactUs from "@/features/contactUs/ui/contactUs";

export default function About() {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <Navbar />
      <ContactUs />
    </div>
  );
}
