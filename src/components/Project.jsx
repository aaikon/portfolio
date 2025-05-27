import Tag from "./Tag";

const Project = ({ title, image, tags }) => {
  return (
    <div className="w-full">
      <div className="aspect-[4/3] w-full bg-gray-50" />
      <div className="flex flex-row items-center justify-center gap-[4px] pt-2">
        <p className="w-full text-nowrap">{title}</p>
        {tags.map((t) => (
          <Tag key={t} text={t} />
        ))}
      </div>
    </div>
  );
};

export default Project;
