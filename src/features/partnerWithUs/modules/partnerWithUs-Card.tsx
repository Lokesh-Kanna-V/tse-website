import SmallButtonDarkOutlined from "@/shared/ui/smallButtonDarkOutlined";

import { MoveRight } from "lucide-react";

export default function PartnerWithUsCard() {
  return (
    <div className="px-60">
      <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8">
        <h5 className="mb-2 text-3xl font-bold text-gray-900">
          Partner with Us
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg ">
          Join our global network of retailers and experience the difference of
          working with a trusted, quality-focused partner.
        </p>
        <div className="flex justify-center items-center">
          <div className="w-1/2 flex items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <button
              type="button"
              className="w-full flex justify-center items-center gap-2 cursor-pointer text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Get Started
              <MoveRight />
            </button>
            <button
              type="button"
              className="w-full cursor-pointer text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              View Capabilities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
