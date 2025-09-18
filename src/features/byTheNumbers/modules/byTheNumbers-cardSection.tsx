//? Config Imports
import numbers from "../config/byTheNumbers-cardSection-data";

export default function OurCoreValuesCardSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center items-stretch w-full">
      {numbers.map((item, index) => {
        return (
          <div key={index}>
            <div className="text-center">
              <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-800">
                {item.number}
              </h5>
              <p className="font-normal text-gray-500">{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
