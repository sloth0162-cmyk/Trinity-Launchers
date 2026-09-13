import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import ConnectSection from "@/components/sections/ConnectSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Trinity Lancers — a freelance group bringing together frontend engineering, product design, and backend architecture.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <ConnectSection />
    </div>
  );
}
