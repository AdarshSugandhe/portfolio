import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";

const WorkItem = (props) => {
  const { href, category, img, title } = props;
  return (
    <Link href={href} target="_blank" className="group">
      <div className="m-full h-[300px] p-8 rounded-[30px] flex items-center justify-center mb-6 relative overflow-hidden bg-[#f4f4f4]">
        <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
          {category}
        </Badge>

        <Image
          src={img}
          fill
          alt="project"
          priority
          quality={100}
          className="object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>

      <div className="flex items-center justify-around">
        <div>
          <h3 className="h3 text-white">{title}</h3>
        </div>
        <button className="bg-accent text-white rounded-full w-[48px] h-[48px] flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500">
          <FiArrowRight className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default WorkItem;
