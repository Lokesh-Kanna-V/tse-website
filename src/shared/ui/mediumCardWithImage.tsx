import { MediumImageCardProps } from "../types/MediumImageCardProps";
import SmallButtonDarkOutlined from "./smallButtonDarkOutlined";

export default function MediumCardWithImage({
  image,
  href = "#",
  title,
  content,
}: MediumImageCardProps) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500">{content}</p>
        <SmallButtonDarkOutlined text="Explore Category" />
      </div>
    </div>
  );
}
