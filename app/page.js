import React from "react";
import GradientText from "./ui/OgBlueGradientText";
import { resumeLink } from "./lib/staticdata";

const Page = () => {
  return (
    <main className="my-32 w-[80%] mx-auto  text-center">
      <div className="font-bold text-2xl lg:text-5xl mb-7">
        <GradientText text={"Hey, I'm Brainy"} />
      </div>
      <h1 className="font-light lg:w-[80%] mx-auto text-3xl lg:text-5xl  text-black mb-16 capitalize">
        A passionate software enthusiast focusing on web development
      </h1>
      <a href={resumeLink} target="_blank">
        <button className="lg:w-2/12 btn bg-gradient-to-r from-blue-400 to-orange-400 rounded-3xl border-none capitalize text-black font-bold tracking-wide hover:text-white">
          see my resume
        </button>
      </a>
    </main>
  );
};

export default Page;
