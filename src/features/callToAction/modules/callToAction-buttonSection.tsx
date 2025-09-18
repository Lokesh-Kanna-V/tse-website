import { MoveRight } from "lucide-react";

export default function CallToActionButtonSection() {
  return (
    <div className="w-1/2 h-full flex justify-center items-center gap-2">
      <button
        type="button"
        className="w-full flex justify-center items-center gap-2 cursor-pointer text-gray-900 hover:text-white border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Request Quotation
        <MoveRight />
      </button>
      <button
        type="button"
        className="w-full cursor-pointer text-gray-900 hover:text-white border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        View Products
      </button>
    </div>
  );
}
