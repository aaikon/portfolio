const ProjectGridCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-2">
      <img className="aspect-16/9 w-full bg-neutral-500" />
      <div className="w-full">
        <h1>{project.title}</h1>
      </div>
      <div className="flex w-full flex-row gap-2">
        {project.tags.map((tag) => (
          <h2>{tag}</h2>
        ))}
      </div>
    </div>
  );
};

export default ProjectGridCard;
