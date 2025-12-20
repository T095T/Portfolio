import React from "react";
import Navbar from "../../components/Navbar";
import ProjectCard from "@/src/components/ProjectCard";
import Contact from "../../components/Contact";

function Projects() {
  const projects = [
    {
      title: "NoteCraft",

      className: " hover:shadow-xl",
      link: "https://github.com/T095T/NoteCraft",
      imgsrc: '/Thumbnail-NoteCraft.png'
    },
    {
      title: "Nexara",

      className: "hover:shadow-xl",
      link: "https://nexara-five.vercel.app/",
      imgsrc: '/nexara-pic.png'
    },
    {
      title: "Smart Surveillance and Crime Detection using AI",

      className: " hover:shadow-xl",
      link: "https://github.com/T095T/Smart_Surveillance_And_Crime_Detection_Using_AI",
      imgsrc: '/smart2.png'
    },
    {
      title: "Coming soon",
      imgsrc: '/progr.png',
      link: '#',
      className: " hover:shadow-xl",
    }
  ];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            className={project.className}
            link={project.link}
            imgsrc={project.imgsrc}
          />
        ))}
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default Projects;
