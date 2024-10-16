import React from "react";
import { getProjects } from "../lib/dataFetches";
import ProjectCard from "../ui/ProjectCard";
import WarningAlert from "../ui/WarningAlert";

export const revalidate = 3600;

const page = async () => {
  const projects = await getProjects();
  if (projects.length === 0) {
    return (
      <main className="py-40">
        <h1 className="text-xl text-center text-orange-400 ">
          No Projects For Now
        </h1>
      </main>
    );
  }
  return (
    <main>
      <div className="w-[80%] max-w-screen-xl mx-auto py-12">
        <WarningAlert
          warningText={
            "Some of the projects may take a while to spin up because their APIs are hosted on free platform."
          }
        />
        <div className=" mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project) => {
            return <ProjectCard key={project._id} {...project} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default page;
