"use client";

import { useRef } from "react";
import { freelancers } from "@/data/data";
import FreelancerCard from "@/components/cards/FreelancerCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FreelancerSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealed = useScrollReveal(sectionRef);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative z-10 py-28 lg:py-36"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-sage/70 mb-3">
              The Team
            </p>
            <h2
              id="team-heading"
              className="font-display text-4xl lg:text-5xl font-light tracking-tight text-primary"
            >
              Three disciplines.
              <br />
              <em className="italic text-primary/70">One approach.</em>
            </h2>
          </div>
          <p className="font-ui text-sm text-secondary max-w-xs leading-relaxed">
            Each specialist brings a distinct craft. Together, we cover the full
            stack of what makes a product succeed.
          </p>
        </div>

        {/* Freelancer cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {freelancers.map((freelancer, index) => (
            <div
              key={freelancer.id}
              className={`transition-all duration-700 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: revealed ? `${index * 120}ms` : "0ms" }}
            >
              <FreelancerCard freelancer={freelancer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
