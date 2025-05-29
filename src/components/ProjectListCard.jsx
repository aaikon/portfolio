const ProjectListCard = ({ project }) => {
  return (
    <div className="flex w-full gap-2">
      <h1>{project.title}</h1>
      {project.tags.map((tag) => (
        <h2 key={tag}>{tag}</h2>
      ))}
    </div>
  );
};

export default ProjectListCard;
