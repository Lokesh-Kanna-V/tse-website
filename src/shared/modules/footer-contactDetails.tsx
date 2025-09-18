import { Phone, Mail, MapPin, Globe } from "lucide-react";

export default function FooterContactDetails() {
  return (
    <div>
      <h5 className="text-xl text-gray-800 font-bold mb-2">Contact Info</h5>
      <ul className="flex flex-col gap-2">
        <li className="text-gray-600 text-sm flex justify-start items-center gap-3">
          <Phone height={20} />
          +91 7418285050
        </li>
        <li className="text-gray-600 text-sm flex justify-start items-center gap-3">
          <Mail height={20} />
          thesox.sales@gmail.com
        </li>
        <li className="text-gray-600 text-sm flex justify-start items-center gap-3">
          <MapPin height={20} />
          Tirupur, Tamil Nadu, India
        </li>
        <li className="text-gray-600 text-sm flex justify-start items-center gap-3">
          <Globe height={20} />2 Countries Served
        </li>
      </ul>
    </div>
  );
}
