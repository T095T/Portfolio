"use client";
import BannerSection from "./BannerSection";
import ProfileHeader from "./ProfileHeader";
import ContentSection from "./ContentSection";

export default function NewHeroSection() {
  return (
    <div className="min-h-screen transition-colors duration-300 relative style={{ fontFamily: 'var(--font-geist-sans)' }}">
      <div className="relative mx-auto max-w-4xl">
        {/*Import Pattern code */}

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
                <ContentSection subtitle="Engineer | Developer"
                title="" className="mt-6"/>
            </div>
        </div>
      </div>
    </div>
  );
}
