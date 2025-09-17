import { CardProps } from "../types/CardProps";

export default function Card({
  children,
  href = "#",
  title,
  content,
}: CardProps) {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
    >
      {children}
      <div className="text-center">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
    </a>
  );
}
