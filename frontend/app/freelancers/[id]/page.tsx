import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getFreelancerById,
  getProjectsByFreelancerId,
  freelancers,
} from "@/data/data";

interface FreelancerPageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for all freelancer IDs
export async function generateStaticParams() {
  return freelancers.map((f) => ({ id: String(f.id) }));
}

export async function generateMetadata({
  params,
}: FreelancerPageProps): Promise<Metadata> {
  const { id } = await params;
  const freelancer = getFreelancerById(Number(id));
  if (!freelancer) return { title: "Not Found" };
  return {
    title: `${freelancer.name} — ${freelancer.title}`,
    description: freelancer.bio,
  };
}

export default async function FreelancerPage({ params }: FreelancerPageProps) {
  const { id } = await params;
  const freelancer = getFreelancerById(Number(id));

  if (!freelancer) notFound();

  const projects = getProjectsByFreelancerId(freelancer.id);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Back link */}
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted uppercase tracking-widest hover:text-primary transition-colors duration-300 mb-16 group"
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
          Back to Team
        </Link>

        {/* Profile header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          {/* Profile image */}
          <div className="relative aspect-square max-w-md overflow-hidden rounded-2xl border border-subtle">
            <Image
              src={freelancer.pfp}
              alt={`${freelancer.name} — ${freelancer.title}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />
          </div>

          {/* Profile info */}
          <div className="flex flex-col gap-8 pt-4">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-sage/70 mb-3">
                {freelancer.title}
              </p>
              <h1 className="font-display text-5xl lg:text-6xl font-light tracking-tight text-primary leading-tight">
                {freelancer.name}
              </h1>
            </div>

            <p className="font-ui text-base text-secondary leading-relaxed max-w-md">
              {freelancer.bio}
            </p>

            {/* Skills */}
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-4">
                Specialisms
              </p>
              <div className="flex flex-wrap gap-2">
                {freelancer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-sage/70 border border-sage/20 rounded-full px-3 py-1.5 tracking-wider uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Socials */}
            {freelancer.socials && (
              <div className="flex flex-wrap gap-4 pt-2">
                {freelancer.socials.github && (
                  <a
                    href={freelancer.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`social-github-${freelancer.id}`}
                    className="font-mono text-xs text-muted hover:text-primary uppercase tracking-widest transition-colors duration-300 flex items-center gap-1.5"
                  >
                    GitHub ↗
                  </a>
                )}
                {freelancer.socials.linkedin && (
                  <a
                    href={freelancer.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`social-linkedin-${freelancer.id}`}
                    className="font-mono text-xs text-muted hover:text-primary uppercase tracking-widest transition-colors duration-300 flex items-center gap-1.5"
                  >
                    LinkedIn ↗
                  </a>
                )}
                {freelancer.socials.website && (
                  <a
                    href={freelancer.socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`social-website-${freelancer.id}`}
                    className="font-mono text-xs text-muted hover:text-primary uppercase tracking-widest transition-colors duration-300 flex items-center gap-1.5"
                  >
                    Website ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Projects section */}
        {projects.length > 0 && (
          <div>
            <div className="flex items-center gap-6 mb-12 border-t border-subtle pt-12">
              <p className="font-mono text-xs tracking-widest uppercase text-muted">
                Projects
              </p>
              <span className="font-mono text-xs text-muted/40">
                ({projects.length})
              </span>
            </div>

            <div className="flex flex-col gap-0">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-subtle hover:border-medium transition-colors duration-300"
                >
                  {/* Project image */}
                  <div className="relative aspect-[16/9] lg:aspect-[4/3] overflow-hidden bg-surface-2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-obsidian/10 transition-colors duration-500" />
                  </div>

                  {/* Project text */}
                  <div className="flex flex-col justify-center p-10 lg:p-14 bg-surface/20 group-hover:bg-surface/40 transition-colors duration-500">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-xs text-muted uppercase tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="w-6 h-px bg-subtle" />
                      <span className="font-mono text-xs text-muted uppercase tracking-widest">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl lg:text-3xl font-light tracking-tight text-primary mb-4">
                      {project.name}
                    </h2>
                    <p className="font-ui text-sm text-secondary leading-relaxed mb-4 max-w-sm">
                      {project.description}
                    </p>
                    <p className="font-ui text-sm text-secondary/60 leading-relaxed mb-8 max-w-sm">
                      {project.longDescription}
                    </p>

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

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`project-detail-link-${project.id}`}
                      className="flex items-center gap-3 w-fit group/link"
                    >
                      <span className="font-mono text-xs text-primary/50 uppercase tracking-widest group-hover/link:text-primary transition-colors duration-300">
                        View Live
                      </span>
                      <svg
                        className="w-4 h-4 text-muted/40 group-hover/link:text-sage transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden="true"
                      >
                        <path d="M3 13L13 3M13 3H7M13 3v6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>

                  <div className="lg:col-span-2 border-b border-subtle" />
                </div>
              ))}
            </div>
          </div>
        )}

        {projects.length === 0 && (
          <div className="border-t border-subtle pt-12 text-center py-20">
            <p className="font-mono text-sm text-muted uppercase tracking-widest">
              No public projects yet.
            </p>
          </div>
        )}

        {/* Connect CTA */}
        <div className="mt-24 pt-12 border-t border-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">
              Work with {freelancer.name.split(" ")[0]}
            </p>
            <p className="font-display text-2xl font-light text-primary/60">
              Have a project in mind?
            </p>
          </div>
          <Link
            href="/#connect"
            id={`freelancer-connect-cta-${freelancer.id}`}
            className="inline-flex items-center gap-2 font-ui font-medium text-sm text-obsidian bg-primary px-7 py-3.5 rounded-full hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            Get in Touch
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
    </div>
  );
}
