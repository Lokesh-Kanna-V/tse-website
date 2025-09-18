import { SmallCardProps } from "../types/SmallCardProps";

export default function SmallCard({
  children,
  href = "#",
  title,
  content,
}: SmallCardProps) {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
    >
      {children}
      <div className="text-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">
          {title}
        </h5>
        <p className="font-normal text-gray-500">{content}</p>
      </div>
    </a>
  );
}
