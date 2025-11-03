"use client";

import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

type NavLink = {
  label: string;
  href: string;
};

type HeaderProps = {
  navLinks?: NavLink[];
};

const DEFAULT_NAV_LINKS: NavLink[] = [
  { label: "Recomendados", href: "#picks" },
  { label: "Ideas", href: "#ideas" },
  { label: "Recursos", href: "#resources" },
  { label: "FAQs", href: "#faq" },
  { label: "Contacto", href: "/contact" }
];

export function Header({ navLinks = DEFAULT_NAV_LINKS }: HeaderProps) {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="top-bar">
      <div className="brand-block">
        <a className="brand-name" href="/#top">
          Omar Guerrero
        </a>
        <div className="brand-socials-inline" aria-label="Redes sociales">
          <a
            className="social-btn"
            href="https://instagram.com/omarguerrerox"
            aria-label="Instagram de Omar"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="social-btn"
            href="https://www.tiktok.com/@omarguerrerox"
            aria-label="TikTok de Omar"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            className="social-btn"
            href="https://x.com/OmarGuerreroX"
            aria-label="Twitter de Omar"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
      <button
        className={`nav-toggle ${navOpen ? "is-active" : ""}`}
        type="button"
        aria-expanded={navOpen}
        aria-controls="site-nav"
        aria-label={navOpen ? "Cerrar menu" : "Abrir menu"}
        onClick={() => setNavOpen((open) => !open)}
      >
        <span />
      </button>
      <nav id="site-nav" className={`nav ${navOpen ? "is-open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            className={`nav-link ${link.href === "/contact" ? "nav-cta" : ""}`}
            href={link.href}
            onClick={() => setNavOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
