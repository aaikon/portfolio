import Tag from "./Tag";

const Project = ({ title, image, tags }) => {
  return (
    <div className="h-min max-w-[calc(25%-16px)] flex-shrink flex-grow flex-col">
      <div className="aspect-4/3 flex-shrink flex-grow bg-gray-50" />
      <div className="flex h-full w-full flex-row items-center justify-center gap-[4px] pt-[8px]">
        <p className="w-full text-nowrap">{title}</p>
        {tags.map((t) => (
          <Tag key={t} text={t} />
        ))}
      </div>
    </div>
  );
};

export default Project;
