import { useState } from "react";
import Tag from "./Tag";

const Project = ({ title, image, tags, link }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full">
      <a
        className="relative w-full"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        href={link}
        target="_blank"
      >
        <img className="aspect-[4/3] w-full bg-gray-50" src={image} />
        {active && (
          <p className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/50">
            See more
          </p>
        )}
      </a>
      <div className="flex flex-row items-center justify-center gap-1 pt-4">
        <p className="w-full text-nowrap">{title}</p>
        {tags.map((t) => (
          <Tag key={t} text={t} />
        ))}
      </div>
    </div>
  );
};

export default Project;
