"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center pt-16"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-8 animate-fade-in">
            {/* Status badge */}
            <div className="flex">
              <div
                id="hero-status-badge"
                className="flex items-center gap-2.5 bg-surface/70 border border-subtle backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase text-sage/80">
                  Available for new projects
                </span>
              </div>
            </div>

            {/* Main heading */}
            <div className="flex flex-col gap-3">
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-primary leading-[0.9]">
                Trinity
              </h1>
              <div className="flex items-baseline gap-4">
                <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-primary leading-[0.9]">
                  <em className="italic text-primary/90 relative">
                    Lancers
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-px bg-sage/60"
                      aria-hidden="true"
                    />
                  </em>
                </h1>
              </div>
            </div>

            {/* Supporting statement */}
            <p className="font-ui text-base lg:text-lg text-secondary leading-relaxed max-w-md">
              A freelance group bringing together frontend engineering, product
              design, and backend architecture — to build digital products that
              actually work.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              aria-label="Call to action buttons"
            >
              <Link
                id="hero-cta-projects"
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 bg-primary text-obsidian font-ui font-medium text-sm px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                id="hero-cta-connect"
                href="/#connect"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-primary font-ui font-medium text-sm px-7 py-3.5 rounded-full border border-medium hover:border-primary/40 hover:bg-surface transition-all duration-300"
              >
                Connect With Us
              </Link>
            </div>

            {/* Subtle meta info */}
            <div className="flex items-center gap-6 pt-4 border-t border-subtle">
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-lg font-light text-primary">3</span>
                <span className="font-mono text-xs text-muted uppercase tracking-widest">
                  Specialists
                </span>
              </div>
              <div className="w-px h-8 bg-subtle" />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-lg font-light text-primary">12+</span>
                <span className="font-mono text-xs text-muted uppercase tracking-widest">
                  Projects
                </span>
              </div>
              <div className="w-px h-8 bg-subtle" />
              <div className="flex flex-col gap-0.5">
                <span className="font-mono text-lg font-light text-primary">2</span>
                <span className="font-mono text-xs text-muted uppercase tracking-widest">
                  Years Active
                </span>
              </div>
            </div>
          </div>

          {/* Right: Hero Visual */}
          <div className="relative flex items-center justify-center animate-fade-in-delay">
            {/* Orbital ring decorations */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-[420px] h-[420px] rounded-full border border-sage/8 absolute animate-spin-very-slow" />
              <div className="w-[520px] h-[520px] rounded-full border border-sage/5 absolute animate-spin-very-slow-reverse" />
              <div className="w-[320px] h-[320px] rounded-full border border-primary/5 absolute" />
            </div>

            {/* Hero image container */}
            <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] lg:w-[460px] lg:h-[460px] rounded-full overflow-hidden border border-subtle/50">
              <Image
                src="/hero.png"
                alt="Trinity Lancers — building quality digital products"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 460px"
              />
              {/* Subtle vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
            </div>

            {/* Futuristic indicator dot */}
            <div
              className="absolute bottom-8 right-8 flex items-center gap-2"
              aria-hidden="true"
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-full border border-sage/30 animate-ping-slow" />
                <div className="absolute inset-2 rounded-full bg-sage/60" />
              </div>
              <span className="font-mono text-[10px] text-sage/60 uppercase tracking-widest">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
