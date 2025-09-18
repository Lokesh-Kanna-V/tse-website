import { MediumTextCardProps } from "../types/MediumTextCardProps";

export default function MediumTextCard({
  image,
  href,
  title,
  content,
  children,
}: MediumTextCardProps) {
  return (
    <div className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        {children}
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800">
          {title}
        </h5>
      </a>
      <p className="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">
        {content}
      </p>
    </div>
  );
}
