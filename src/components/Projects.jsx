import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex h-min w-full flex-col gap-4">
      <p>projects</p>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(460px,_1fr))] gap-4">
        <Project
          title={"Malvah"}
          tags={["Next.js", "React Three Fiber", "React"]}
        />
        <Project
          title={"Studio Freight"}
          tags={["Next.js", "React Three Fiber", "React"]}
        />
        <Project
          title={"Studio Freight"}
          tags={["Next.js", "React Three Fiber", "React"]}
        />
        <Project
          title={"Studio Freight"}
          tags={["Next.js", "React Three Fiber", "React"]}
        />
        <Project
          title={"Studio Freight"}
          tags={["Next.js", "React Three Fiber", "React"]}
        />
        <Project
          title={"Studio Freight"}
          tags={["Next.js", "React Three Fiber", "React"]}
        />
      </div>
    </div>
  );
};

export default Projects;
