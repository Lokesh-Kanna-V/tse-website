import { MoveRight } from "lucide-react";

export default function HeroButtonSection() {
  return (
    <div className="w-full h-full flex justify-center items-center gap-2">
      <button
        type="button"
        className="w-full flex justify-center items-center gap-2 cursor-pointer text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Request Quotation
        <MoveRight />
      </button>
      <button
        type="button"
        className="w-full cursor-pointer text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        View Products
      </button>
    </div>
  );
}
