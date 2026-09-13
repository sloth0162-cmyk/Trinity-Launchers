"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const disciplines = [
  {
    label: "Frontend Engineering",
    description: "React, Next.js, TypeScript — interfaces built to last.",
  },
  {
    label: "Product Design",
    description: "UX research, systems design, and motion — craft that's felt.",
  },
  {
    label: "Backend Architecture",
    description: "APIs, data models, infrastructure — foundations that hold.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealed = useScrollReveal(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 py-28 lg:py-36"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
          {/* Left: Main editorial text */}
          <div
            className={`transition-all duration-700 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-mono text-xs tracking-widest uppercase text-sage/70 mb-6">
              About Trinity Lancers
            </p>
            <h2
              id="about-heading"
              className="font-display text-5xl lg:text-6xl font-light tracking-tighter text-primary leading-tight mb-10"
            >
              A small team{" "}
              <em className="italic relative">
                building
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-sage/50" />
              </em>{" "}
              things properly.
            </h2>

            <div className="flex flex-col gap-5 text-secondary font-ui text-base leading-relaxed">
              <p>
                Trinity Lancers is an independent freelance group — three
                specialists who work together when a project demands more than
                one discipline. We don&apos;t subcontract work out to
                strangers. We build things ourselves.
              </p>
              <p>
                We cover frontend engineering, product design, and backend
                architecture. Depending on what your project needs, you work
                with one of us, or all three — the collaboration happens on our
                end, not yours.
              </p>
              <p>
                We care about quality because we&apos;re the ones signing our
                names to it. Not in a precious way — in a practical way. Things
                should work, feel right, and hold up over time.
              </p>
            </div>
          </div>

          {/* Right: Disciplines */}
          <div
            className={`transition-all duration-700 delay-200 ${
              revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-mono text-xs tracking-widest uppercase text-muted mb-8">
              What we bring
            </p>
            <div className="flex flex-col gap-0">
              {disciplines.map((item, i) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 py-6 border-t border-subtle group hover:border-medium transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-muted/50 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-ui font-medium text-sm text-primary/80 group-hover:text-primary transition-colors duration-300">
                        {item.label}
                      </h3>
                    </div>
                    <svg
                      className="w-3.5 h-3.5 text-muted/30 group-hover:text-sage/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
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
                  </div>
                  <p className="font-ui text-sm text-secondary/70 pl-8 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="border-t border-subtle" />
            </div>

            {/* Subtle quote */}
            <blockquote className="mt-10 pl-5 border-l border-sage/30">
              <p className="font-display text-lg italic font-light text-primary/50 leading-snug">
                &ldquo;We build things we&apos;d use ourselves.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
