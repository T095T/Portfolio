import React from "react";
import Navbar from "../../components/Navbar";
import ProjectCard from "@/src/components/ProjectCard";

function Projects() {
  return (
    <>
      <Navbar />
      <section id="projects">
        <div className="w-full relative  pt-20 sm:pt-24 border ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-technor  sm:mb-8 text-center leading-tight ">
            Projects
          </h1>
        </div>
        <div className="mt-10">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg sm:text-xl md:text-2xl text-center max-w-3xl mx-auto leading-relaxed">
            A showcase of my work and side projects.
          </p>
        </div>
      </section>
      <ProjectCard className="w-full max-w-none px-2 "/>
    </>
  );
}

export default Projects;
