"use client";

import { projects } from "@/app/lib/projects";
import ProjectDetails from "../ui-elements/projects/details";

const Projects = () => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectDetails key={project.id} data={project} />
      ))}
    </div>
  );
};

export default Projects;
