import { MapPin } from "lucide-react";

export default function ContactUsLocation() {
  return (
    <div>
      <a
        href="#"
        className="w-full h-96 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 flex flex-col justify-between"
      >
        <div className="text-center flex-1 flex flex-col justify-center items-center">
          <MapPin />
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">
            Visit Our Office
          </h5>
          <p className="font-normal text-gray-500">
            No. 156/713 MMY Complex, Kamaraj Road, Tirupur - 641604
          </p>

          <p className="font-normal text-gray-600 mt-7">View On Map</p>
        </div>
      </a>
    </div>
  );
}
