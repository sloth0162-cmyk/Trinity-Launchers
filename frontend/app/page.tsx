import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import FreelancerSection from "@/components/sections/FreelancerSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ConnectSection from "@/components/sections/ConnectSection";

export const metadata: Metadata = {
  title: "Trinity Lancers — Freelance Development Group",
  description:
    "A freelance group bringing together frontend engineering, product design, and backend architecture to build high-quality digital products.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FreelancerSection />
      <ProjectsSection />
      <AboutSection />
      <ConnectSection />
    </>
  );
}
