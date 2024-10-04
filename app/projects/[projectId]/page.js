import React from "react";
import { FaGlobe } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import GradientText from "../../ui/OgBlueGradientText";
import { getProject } from "../../lib/dataFetches";

const ProjectDetails = async ({ params }) => {
  const project = await getProject(params.projectId);
  if (!project) {
    //learn not found and throw not found here
    return <h1>not found</h1>;
  }
  const { img, name, text, gitHubLink, siteUrl } = project;

  return (
    <div className="bg-white py-16">
      <div className="w-4/5 mx-auto max-w-screen-md">
        <div className="mt-8 text-3xl">
          <GradientText text={name} />
        </div>
        <div className="mt-8 flex justify-start gap-3 text-2xl">
          <a href={siteUrl} target="_blank">
            <FaGlobe className="hover:text-blue-600 transition-all duration-300" />
          </a>
          <a href={gitHubLink} target="_blank">
            <FaGithub className="hover:text-blue-600 transition-all duration-300" />
          </a>
        </div>
        <img
          src={img}
          alt={"Project image"}
          className="mt-8 w-3/4 h-64 object-cover rounded-lg"
        />
        <p className="mt-8 text-black font-light text-lg tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
