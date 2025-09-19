import { SmallCardProps } from "../types/SmallCardProps";

export default function LargeCardContactUs({
  children,
  href = "#",
  title,
  content,
}: SmallCardProps) {
  return (
    <a
      href="#"
      className="max-w-sm h-52 w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 flex flex-col justify-between"
    >
      {children}
      <div className="text-center flex-1 flex flex-col justify-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">
          {title}
        </h5>
        <p className="font-normal text-gray-500">{content}</p>
      </div>
    </a>
  );
}
