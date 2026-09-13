"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/data/data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealed = useScrollReveal(sectionRef);
  const projects = getAllProjects().slice(0, 3);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-10 py-28 lg:py-36"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-sage/70 mb-3">
              Selected Work
            </p>
            <h2
              id="projects-heading"
              className="font-display text-4xl lg:text-5xl font-light tracking-tight text-primary"
            >
              What we&apos;ve
              <br />
              <em className="italic">built.</em>
            </h2>
          </div>
          <p className="font-ui text-sm text-secondary max-w-xs leading-relaxed">
            A selection of recent projects across engineering, design, and
            infrastructure — built for real clients with real requirements.
          </p>
        </div>

        {/* Editorial alternating project layout */}
        <div className="flex flex-col gap-0">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.id}
                className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-subtle transition-all duration-700 ${
                  revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: revealed ? `${index * 150}ms` : "0ms",
                }}
              >
                {/* Image side */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-surface-2 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/10 transition-colors duration-500" />
                </div>

                {/* Text side */}
                <div
                  className={`flex flex-col justify-center p-10 lg:p-16 bg-surface/30 group-hover:bg-surface/50 transition-colors duration-500 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Year + index */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-xs text-muted uppercase tracking-widest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="w-8 h-px bg-subtle" />
                    <span className="font-mono text-xs text-muted uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl lg:text-4xl font-light tracking-tight text-primary mb-4">
                    {project.name}
                  </h3>
                  <p className="font-ui text-sm text-secondary leading-relaxed mb-8 max-w-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-sage/60 border border-sage/20 rounded-full px-3 py-1 tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External link */}
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-link-${project.id}`}
                    className="flex items-center gap-3 w-fit group/link"
                    aria-label={`View ${project.name} project`}
                  >
                    <span className="font-mono text-xs text-primary/60 uppercase tracking-widest group-hover/link:text-primary transition-colors duration-300">
                      View Project
                    </span>
                    <svg
                      className="w-4 h-4 text-primary/40 group-hover/link:text-sage group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 13L13 3M13 3H7M13 3v6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Bottom border */}
                <div className="lg:col-span-2 border-b border-subtle" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
