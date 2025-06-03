const ProjectGridCard = ({ project }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative group" tabIndex={0}>
        <img className="aspect-16/9 w-full bg-neutral-900 " />
        <a className="absolute inset-0" href={project.link} target="_blank"></a>
      </div>
      <div className="w-full grid grid-cols-2">
        <h1>{project.title}</h1>
        <h1>{project.date}</h1>
      </div>
      <div className="flex w-full flex-row gap-2">
        {project.tags.map((tag) => (
          <h2 key={tag}>{tag}</h2>
        ))}
      </div>
    </div>
  );
};

export default ProjectGridCard;
