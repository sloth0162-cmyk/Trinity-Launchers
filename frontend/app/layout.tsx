import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarfieldBackground from "@/components/background/StarfieldBackground";

export const metadata: Metadata = {
  title: {
    default: "Trinity Lancers — Freelance Development Group",
    template: "%s | Trinity Lancers",
  },
  description:
    "Trinity Lancers is a freelance group bringing together frontend engineering, product design, and backend architecture to build high-quality digital products.",
  keywords: [
    "freelance",
    "development",
    "design",
    "frontend",
    "backend",
    "React",
    "Next.js",
    "TypeScript",
    "UX design",
  ],
  openGraph: {
    type: "website",
    siteName: "Trinity Lancers",
    title: "Trinity Lancers — Freelance Development Group",
    description:
      "A freelance group building digital products with care, craft, and technical precision.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen bg-obsidian text-primary font-ui antialiased overflow-x-hidden">
        {/* Atmospheric background — canvas-based, fixed */}
        <StarfieldBackground />

        {/* Site content — above the canvas */}
        <div className="relative z-10">
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
