import Tag from "./Tag";

const Project = ({ title, imgage, tags }) => {
  return (
    <div className="flex aspect-[1.15/1] h-[292.65px] w-[340px] flex-col">
      <div className="aspect-4/3 h-[255px] w-[340px] bg-gray-50" />
      <div className="flex h-full w-full flex-row items-center justify-center gap-[4px]">
        <p className="w-full">{title}</p>
        {tags.map((t) => (
          <Tag key={t} text={t} />
        ))}
      </div>
    </div>
  );
};

export default Project;
