"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Projects", href: "/#projects" },
  { label: "About Us", href: "/#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-obsidian/80 backdrop-blur-md border-b border-subtle"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo + Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Trinity Lancers home"
          >
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Trinity Lancers logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-ui font-semibold text-sm tracking-widest uppercase text-primary/90 group-hover:text-primary transition-colors duration-300">
              Trinity Lancers
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase text-secondary hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sage group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/#connect"
              className="font-mono text-xs tracking-widest uppercase text-sage border border-sage/30 hover:border-sage/70 hover:bg-sage/5 px-4 py-2 rounded-full transition-all duration-300"
            >
              Connect
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            id="nav-mobile-toggle"
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`w-5 h-px bg-primary transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-primary transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-5 h-px bg-primary transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-lg flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-display text-4xl font-light text-primary/80 hover:text-primary transition-colors duration-300 tracking-tight"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/#connect"
          onClick={() => setMenuOpen(false)}
          className="font-display text-4xl font-light text-sage/80 hover:text-sage transition-colors duration-300 tracking-tight"
        >
          Connect
        </Link>
      </div>
    </>
  );
}
