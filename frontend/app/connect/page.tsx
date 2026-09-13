import type { Metadata } from "next";
import ConnectSection from "@/components/sections/ConnectSection";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch with Trinity Lancers. Start a conversation about your next project.",
};

export default function ConnectPage() {
  return (
    <div className="pt-16">
      <ConnectSection />
    </div>
  );
}
