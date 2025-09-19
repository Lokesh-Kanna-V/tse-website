import { Clock } from "lucide-react";

export default function ContactUsOfficeHours() {
  return (
    <div>
      <a
        href="#"
        className="w-full h-96 p-6 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col justify-between"
      >
        <div className="text-center flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-7">
            <Clock />
            <h5 className="text-xl font-bold tracking-tight text-gray-800">
              Office Hours
            </h5>
          </div>
          <div className="flex justify-between items-center p-3 mb-5 border-b border-gray-300">
            <p className="text-md text-gray-500">Monday - Friday</p>
            <p className="text-md text-gray-700">9:00 AM - 6:00 PM IST</p>
          </div>
          <div className="flex justify-between items-center p-3 mb-5 border-b border-gray-300">
            <p className="text-md text-gray-500">Saturday</p>
            <p className="text-md text-gray-700">9:00 AM - 4:00 PM IST</p>
          </div>
          <div className="flex justify-between items-center p-3 mb-10 border-b border-gray-300">
            <p className="text-md text-gray-500">Sunday</p>
            <p className="text-md text-gray-700">Closed</p>
          </div>

          <div className="flex flex-col justify-start items-start">
            <p className="text-sm text-gray-500">
              Time Zone: India Standard Time (IST)
            </p>
            <p className="text-sm text-gray-500">
              Note: We also accommodate international calls outside business
              hours by appointment.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
