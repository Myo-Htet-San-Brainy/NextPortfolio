import React from "react";
import { getProjects } from "../lib/dataFetches";
import ProjectCard from "../ui/ProjectCard";

const page = async () => {
  const projects = await getProjects();
  // if (projects.length === 0) {
  //   return <main>No projects</main>;
  // }
  return (
    <main>
      <div className="w-[80%] max-w-screen-xl mx-auto py-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => {
          return <ProjectCard key={project._id} {...project} />;
        })}
      </div>
    </main>
  );
};

export default page;
