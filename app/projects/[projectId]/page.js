import React from "react";
import { FaGlobe } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import GradientText from "../../ui/OgBlueGradientText";
import { getProject } from "../../lib/dataFetches";
import Breadcrumb from "../../ui/Breadcrumb";
import { projectDetailsPageBreadcrumbs } from "../../lib/data.js";
import { notFound } from "next/navigation";
import Image from "next/image";

const ProjectDetails = async ({ params }) => {
  const project = await getProject(params.projectId);
  if (!project) {
    notFound();
  }
  const { img, name, text, gitHubLink, siteUrl } = project;

  return (
    <div className=" py-16">
      <div className="w-4/5 mx-auto max-w-screen-md">
        <Breadcrumb breadcrumbs={projectDetailsPageBreadcrumbs} />
        <div className="mt-8 text-3xl">
          <GradientText text={name} />
        </div>
        <div className="mt-8 flex justify-start gap-3 text-2xl text-orange-400">
          <a href={siteUrl} target="_blank">
            <FaGlobe className="hover:text-blue-400 transition-all duration-300" />
          </a>
          <a href={gitHubLink} target="_blank">
            <FaGithub className="hover:text-blue-400 transition-all duration-300" />
          </a>
        </div>
        <Image
          src={img}
          alt={name}
          height={300}
          width={300}
          className="mt-8 rounded-lg"
        />
        <p className="mt-8 text-base-content font-light text-lg tracking-wide">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
