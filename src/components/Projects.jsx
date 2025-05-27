import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="flex h-min w-full flex-col gap-4">
      <h3 className="font-blur">PROJECTS</h3>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(460px,_1fr))] gap-x-4 gap-y-32">
        {projects.map((p) => (
          <Project
            title={p.title}
            image={p.image}
            tags={p.tags}
            link={p.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
