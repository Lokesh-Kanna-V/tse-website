import Navbar from "@/shared/ui/navbar";
import CategoryProducts from "@/features/categoryProducts/categoryProducts";
import Footer from "@/shared/ui/footer";

export default function Products() {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <Navbar />
      <CategoryProducts />
      <Footer />
    </div>
  );
}
