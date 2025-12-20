import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

// Define the types for the component props for better type-safety
interface ProjectCardProps {
  title: string;
  className?: string;
  link: string;
  imgsrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  className,
  link,
  imgsrc,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 ${className} border-2 solid`}
    >
     
      <div className="relative w-full mt-2 rounded-md aspect-video">
        {imgsrc ? (
          <Image
            src={imgsrc}
            alt={`Screenshot of ${title}`}
            fill
            style={{ objectFit: "contain" }}
            className="transition-transform duration-500 group-hover:scale-105  "
          />
        ) : (
         
          <div className="w-full h-full bg-neutral-200   flex items-center justify-center">
            <p className="text-neutral-500">No Image</p>
          </div>
        )}
      </div>

      {/* Content container */}
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-center p-2">
          <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
          {link && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
              <FaArrowRight />
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
