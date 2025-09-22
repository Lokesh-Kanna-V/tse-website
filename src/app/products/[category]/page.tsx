import Navbar from "@/shared/ui/navbar";
import CategoryProducts from "@/features/categoryProducts/ui/categoryProducts";
import Footer from "@/shared/ui/footer";

export default function Products() {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <CategoryProducts />
      <Footer />
    </div>
  );
}
