const ProjectListCard = ({ project }) => {
  return (
    <a
      className="flex w-full gap-2 cursor-pointer"
      href={project.link}
      target="_blank"
    >
      <h1>{project.title}</h1>
      {project.tags.map((tag) => (
        <h2 key={tag}>{tag}</h2>
      ))}
    </a>
  );
};

export default ProjectListCard;
