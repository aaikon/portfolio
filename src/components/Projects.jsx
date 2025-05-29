import { useState } from "react";
import ProjectGridCard from "./ProjectGridCard";
import ProjectListCard from "./ProjectListCard";

const Projects = ({ projects }) => {
  const [view, setView] = useState("grid");
  return (
    <div className="flex h-fit w-full flex-col gap-2">
      <div className="flex h-fit w-full flex-row items-end justify-between">
        <h1>PROJECTS</h1>
        <div className="flex flex-row gap-2">
          <button
            className={`${view === "grid" ? "text-white" : "text-neutral-500"}`}
            onClick={() => setView("grid")}
          >
            GRID
          </button>
          <button
            className={`${view === "list" ? "text-white" : "text-neutral-500"}`}
            onClick={() => setView("list")}
          >
            LIST
          </button>
        </div>
      </div>
      {view === "grid" ? (
        <div className="grid h-fit w-full grid-cols-[repeat(auto-fit,_minmax(600px,_1fr))] gap-x-2 gap-y-16">
          {projects.map((project) => (
            <ProjectGridCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="flex h-fit w-full flex-col gap-1">
          {projects.map((project) => (
            <ProjectListCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
