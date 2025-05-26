import Project from "./Project";

const Projects = () => {
  return (
    <div className="flex h-min w-full flex-wrap gap-[16px]">
      <p>projects</p>
      <div className="flex w-full gap-[16px]">
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
      </div>
    </div>
  );
};

export default Projects;
