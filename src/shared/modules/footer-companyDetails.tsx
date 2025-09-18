import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function FooterCompanyDetails() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Image src="/SOX Logo.png" alt="logo" width={50} height={50} />
        <div className="flex flex-col text-gray-800">
          <h1 className="text-xl font-bold">The SOX Enterprises</h1>
          <h3 className="text-sm">Exports & Imports</h3>
        </div>
      </div>
      <div className="mt-5 mb-3">
        <p className="text-gray-600">
          Leading wholesale exporter of premium baby products, clothes and more,
          serving international markets with quality, comfort, and style since
          2024.
        </p>
      </div>

      <div className="flex gap-3 text-gray-600">
        <Facebook />
        <Instagram />
        <Linkedin />
        <Twitter />
      </div>
    </div>
  );
}
