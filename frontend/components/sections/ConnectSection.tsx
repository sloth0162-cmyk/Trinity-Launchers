"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactOptions = [
  {
    id: "contact-email",
    label: "Email Us Directly",
    description: "For project enquiries, partnerships, or questions.",
    action: "hello@trinitylancers.com",
    href: "mailto:hello@trinitylancers.com",
    type: "email",
  },
  {
    id: "contact-github",
    label: "See Our Work",
    description: "Browse our open-source work and contributions.",
    action: "github.com/trinitylancers",
    href: "https://github.com",
    type: "link",
  },
  {
    id: "contact-linkedin",
    label: "Connect on LinkedIn",
    description: "Follow our work and updates.",
    action: "linkedin.com/trinitylancers",
    href: "https://linkedin.com",
    type: "link",
  },
];

export default function ConnectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const revealed = useScrollReveal(sectionRef);

  return (
    <section
      id="connect"
      ref={sectionRef}
      className="relative z-10 py-28 lg:py-36"
      aria-labelledby="connect-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`mb-20 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-mono text-xs tracking-widest uppercase text-sage/70 mb-6">
            Get in Touch
          </p>
          <h2
            id="connect-heading"
            className="font-display text-5xl lg:text-6xl font-light tracking-tighter text-primary leading-tight max-w-2xl"
          >
            Have something{" "}
            <em className="italic relative">
              worth
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-sage/50" />
            </em>{" "}
            building?
          </h2>
          <p className="font-ui text-base text-secondary mt-6 max-w-lg leading-relaxed">
            We&apos;re available for new projects. If you have something in
            mind — a product, a feature, or a problem worth solving — let&apos;s
            talk about it.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactOptions.map((option, i) => (
            <a
              key={option.id}
              id={option.id}
              href={option.href}
              target={option.type === "link" ? "_blank" : undefined}
              rel={option.type === "link" ? "noopener noreferrer" : undefined}
              className={`group flex flex-col justify-between p-8 bg-surface border border-subtle rounded-2xl hover:border-medium hover:-translate-y-1 transition-all duration-500 ${
                revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: revealed ? `${i * 100}ms` : "0ms",
              }}
            >
              <div className="flex flex-col gap-3 mb-8">
                <h3 className="font-ui font-medium text-base text-primary">
                  {option.label}
                </h3>
                <p className="font-ui text-sm text-secondary leading-relaxed">
                  {option.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sage/70 group-hover:text-sage transition-colors duration-300">
                  {option.action}
                </span>
                <svg
                  className="w-4 h-4 text-muted/40 group-hover:text-sage group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
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
            </a>
          ))}
        </div>

        {/* Closing statement */}
        <div
          className={`mt-20 pt-10 border-t border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all duration-700 delay-300 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="font-display text-2xl font-light text-primary/40 italic max-w-sm leading-snug">
            &ldquo;Let&apos;s build something useful.&rdquo;
          </p>
          <Link
            id="connect-cta-primary"
            href="mailto:hello@trinitylancers.com"
            className="inline-flex items-center gap-2 font-ui font-medium text-sm text-obsidian bg-primary px-7 py-3.5 rounded-full hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Start a Conversation
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
        </div>
      </div>
    </section>
  );
}
