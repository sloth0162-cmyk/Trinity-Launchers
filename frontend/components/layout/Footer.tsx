import Link from "next/link";

const footerLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About Us", href: "/#about" },
  { label: "Connect", href: "/#connect" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-subtle mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-muted mb-2">
                Independent Studio
              </p>
              <h2 className="font-display text-2xl font-light tracking-tight text-primary">
                Trinity Lancers
              </h2>
            </div>
            <p className="font-ui text-sm text-secondary max-w-xs leading-relaxed">
              A freelance group building digital products with care, craft, and
              technical precision.
            </p>
          </div>

          {/* Nav column */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs tracking-widest uppercase text-muted">
              Navigation
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-ui text-sm text-secondary hover:text-primary transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs tracking-widest uppercase text-muted">
              Get in touch
            </p>
            <a
              href="mailto:hello@trinitylancers.com"
              className="font-ui text-sm text-secondary hover:text-sage transition-colors duration-300 w-fit"
            >
              hello@trinitylancers.com
            </a>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="font-mono text-xs text-muted hover:text-primary transition-colors duration-300"
              >
                GitHub
              </a>
              <span className="text-muted/30">·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="font-mono text-xs text-muted hover:text-primary transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-subtle/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="font-mono text-xs text-muted">
            © {year} Trinity Lancers. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted/60">
            Crafted with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
