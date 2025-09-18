import Image from "next/image";

export default function AboutUsImageSection() {
  return (
    <div className="flex justify-center items-center">
      <Image src="/sewing3.jpg" width={400} height={100} alt="Sewing" />
    </div>
  );
}
