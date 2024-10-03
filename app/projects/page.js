import React from "react";
import { getProjects } from "../lib/dataFetches";

const page = async () => {
  const projects = await getProjects();

  return <div>page</div>;
};

export default page;
