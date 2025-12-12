import React from "react";
interface ProjectCardProps {
  title?: string;
  description?: string;
  className: string;
}

const ProjectCard = ({ className, title, description }: ProjectCardProps) => {
  return (
    <>
      <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-slate-700 rounded-md shadow-xs ml-10 mt-20">
        <img
          className="rounded-base"
          src="/assets/Thumbnail-NoteCraft.png"
          alt=""
        />

        <h5 className="mt-6 mb-5 text-2xl font-semibold tracking-tight text-heading">
          NoteCraft.
        </h5>

        <a
          href="#"
          className="inline-flex items-center text-body bg-slate-800 rounded-md box-border border border-default-medium  shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 hover:border-1 hover:border-b-white hover:border-1 hover:border-r-white"
        >
          Read more
          <svg
            className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;
