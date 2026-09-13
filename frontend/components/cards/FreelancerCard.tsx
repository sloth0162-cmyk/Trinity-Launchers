"use client";

import Link from "next/link";
import Image from "next/image";
import { Freelancer } from "@/data/data";

interface FreelancerCardProps {
  freelancer: Freelancer;
}

export default function FreelancerCard({ freelancer }: FreelancerCardProps) {
  return (
    <Link
      href={`/freelancers/${freelancer.id}`}
      id={`freelancer-card-${freelancer.id}`}
      className="group relative flex flex-col bg-surface border border-subtle rounded-2xl overflow-hidden hover:border-medium transition-all duration-500 hover:-translate-y-1"
      aria-label={`View ${freelancer.name}'s portfolio`}
    >
      {/* Profile image */}
      <div className="relative aspect-square overflow-hidden bg-surface-2">
        <Image
          src={freelancer.pfp}
          alt={`${freelancer.name} — ${freelancer.title}`}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-surface/10 to-transparent opacity-80" />
      </div>

      {/* Card content */}
      <div className="relative flex items-end justify-between p-6 gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-ui font-semibold text-base text-primary tracking-tight">
            {freelancer.name}
          </h3>
          <p className="font-mono text-xs text-secondary uppercase tracking-widest">
            {freelancer.title}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-subtle flex items-center justify-center group-hover:border-sage/40 group-hover:bg-sage/5 transition-all duration-300">
          <svg
            className="w-3.5 h-3.5 text-muted group-hover:text-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Skills preview strip */}
      <div className="px-6 pb-5 flex flex-wrap gap-1.5">
        {freelancer.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="font-mono text-[10px] text-muted/70 border border-subtle/50 rounded-full px-2.5 py-0.5 tracking-wider uppercase"
          >
            {skill}
          </span>
        ))}
      </div>
    </Link>
  );
}
