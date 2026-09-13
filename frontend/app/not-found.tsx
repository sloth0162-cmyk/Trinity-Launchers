import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found — Trinity Lancers",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <p className="font-mono text-xs tracking-widest uppercase text-sage/60">
          404
        </p>
        <h1 className="font-display text-5xl font-light tracking-tight text-primary">
          Page not found.
        </h1>
        <p className="font-ui text-base text-secondary leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <Link
          href="/"
          id="not-found-home-link"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-widest hover:text-primary transition-colors duration-300 group mt-4"
        >
          <svg
            className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-300"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M13 8H3M7 12l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
