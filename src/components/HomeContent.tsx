"use client";
import BannerSection from "./BannerSection";
import ProfileHeader from "./ProfileHeader";
import ContentSection from "./ContentSection";
import ContentParagraph from "./ContentParagraph";
import DiagonalPattern from "./DiagonalPattern";
import Skills from "./Skills";

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative bg-background z-0" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      <div className="relative mx-auto max-w-4xl">
        {/*Import Pattern code */}
        <DiagonalPattern side="left" />

        <DiagonalPattern side="right" />

        {/*Main Content */}
        <div className="mx-auto sm:w-[calc(!00%-120px)] w-full max-w-4xl sm:px-0">
          {/*Banner */}
          <BannerSection bannerImage="/mountain.jpg" />
        </div>
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


        
        {/*About Section */}
        <ContentSection className="pb-6 sm:pb-8 pt-4 sm:pt-6 px-2 sm:px-0">
          <ContentParagraph className="mb-2 text-base sm:text-lg">
            <span className="font-medium dark:text-white text-black">
              I’m a developer
            </span>{" "}
             who enjoys working across the whole spectrum of
            product creation from frontend and backend development to full-stack
            workflows and AI-powered features. I like taking ideas from rough
            sketches all the way to fully deployed applications. For me, the fun
            isn’t in arguing about which technology is better; it’s in building
            useful, enjoyable experiences that make a difference for real users.
          </ContentParagraph>
        </ContentSection>
        <Skills className="ml-[0.6] "/>
      </div>
    </div>
  );
}
