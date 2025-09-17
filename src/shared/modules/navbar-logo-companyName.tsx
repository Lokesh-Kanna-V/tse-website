import Image from "next/image";

export default function NavbarLogoCompanyName() {
  return (
    <div className="flex items-center gap-2">
      <Image src="/SOX Logo.png" alt="logo" width={50} height={50} />
      <div className="flex flex-col">
        <h1 className="text-xl font-bold">The SOX Enterprises</h1>
        <h3 className="text-sm">Exports & Imports</h3>
      </div>
    </div>
  );
}
