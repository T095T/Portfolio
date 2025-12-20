"use client";
import BannerSection from "./BannerSection";
import ProfileHeader from "./ProfileHeader";
import ContentSection from "./ContentSection";
import ContentParagraph from "./ContentParagraph";
import DiagonalPattern from "./DiagonalPattern";
import Skills from "./Skills";
import Experience from "./Experience";
import SectionBorder from "./SectionBorder";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import Contact from "./Contact";

export default function NewHeroSection() {
  return (
    <div
      className="min-h-screen transition-colors duration-300 relative bg-background z-0"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <div className="relative mx-auto max-w-4xl">
        {/*Import Pattern code */}
        {/* <DiagonalPattern side="left" />
        <DiagonalPattern side="right" /> */}

        {/*Main Content */}
        <div className="mx-auto sm:w-[calc(100%-120px)] w-full max-w-4xl sm:px-0">
          {/*Banner */}
          <BannerSection bannerImage="/mountain.jpg" />

          {/*Profile Header */}
          <ProfileHeader />

          {/*Content Pose */}
          <div className="prose dark:prose-invert max-none">
            <div className="text-base">
              <ContentSection
                subtitle="Engineer | Developer"
                title=""
                className="mt-6"
              />
            </div>
          </div>

          <SectionBorder className="mt-0 pt-0" />

          {/*About Section */}
          <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
            <ContentParagraph className="mb-2 text-base sm:text-lg">
              <span className="font-medium dark:text-white text-black">
                I’m a developer
              </span>{" "}
              who enjoys working across the whole spectrum of product creation
              from frontend and backend development to full-stack workflows and
              AI-powered features. I like taking ideas from rough sketches all
              the way to fully deployed applications. For me, the fun isn’t in
              arguing about which technology is better; it’s in building useful,
              enjoyable experiences that make a difference for real users.
            </ContentParagraph>
          </ContentSection>

          <SectionBorder className="mt-6" />

          <div className="sm:px-12 py-2">
            <h2 className="text-base sm:text-sl mb-3 opacity-20 mt-4 sm:mt-6px-4">
              Professional Experience
            </h2>
            <div className="px-4">
              <Experience />
            </div>
          </div>

          {/*Technical Contri */}
          <div className="sm:px-12 py-2">
            <h2 className="text-base sm:text-xl mb-3 opacity-20 mt-4 sm:mt-6 px-4">
              Technical Contributions
            </h2>
            <div className="px-4 space-y-3 sm:space-y-4 dark:text-white/70 text-black/70 pb-4 sm:pb-6">
              <ContentParagraph className="text-sm sm:text-base">
                <span className="font-medium dark:text-white text-black">
                  At Brain-O-Vision,
                </span>{" "}
                I spent 3 months building some pretty cool stuff. I spent a good
                chunk of time building ML systems that actually did something
                meaningful in the healthcare space. Think NLP pipelines that
                decode patient symptoms, ML classifiers that predict diseases,
                and recommendation logic that ties everything together — all
                tuned until they hit around 85% diagnostic accuracy.
              </ContentParagraph>
              <ContentParagraph className="text-sm sm:text-base">
                <span className="font-medium dark:text-white text-black">
                  Here&apos;s where it gets interesting{" "}
                </span>{" "}
                To make recommendations personalized, I integrated a structured
                medical drug database and linked it to the prediction outputs so
                the agent could match conditions to appropriate medications
                instead of just throwing generic results.
              </ContentParagraph>
              <ContentParagraph className="text-sm sm:text-base">
                <span className="font-medium dark:text-white text-black">
                  <Link
                    href="https://github.com/T095T/CuraPredict"
                    target="_blank"
                    className="text-gray-600 text-sm hover:underline flex items-center gap-2"
                  >
                    View Details
                    <TbExternalLink className="w-3 h-3" />
                  </Link>
                </span>
              </ContentParagraph>
            </div>
          </div>

          <SectionBorder className="mt-6" />

          {/* Tech-Tools Section */}
          <div className="sm:px-12 py-2">
            <Skills className="w-full" />
          </div>

          <SectionBorder className="mt-6" />
          <Contact />
        </div>
      </div>
    </div>
  );
}
