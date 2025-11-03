"use client";

import { useMemo, useState } from "react";

type LinkCard = {
  title: string;
  desc: string;
  href: string;
  icon?: string;
  badge?: string;
};

type Idea = {
  title: string;
  note: string;
  href?: string;
  tag?: string;
};

type Resource = {
  title: string;
  summary: string;
  href: string;
  tags: string[];
};

type FaqItem = {
  q: string;
  a: string;
};

const PICKS: LinkCard[] = [
  {
    title: "Primary Newsletter",
    desc: "Weekly no-BS notes & picks.",
    href: "https://your-newsletter-url",
    icon: "/icons/news.svg",
    badge: "New"
  },
  {
    title: "Top Tools I Use",
    desc: "Affiliates disclosed. Real value only.",
    href: "https://your-top-tools",
    icon: "/icons/tools.svg"
  },
  {
    title: "Book a Call",
    desc: "Signal-heavy strategy session.",
    href: "#contact",
    icon: "/icons/call.svg"
  }
];

const IDEAS: Idea[] = [
  {
    title: "Creator OS v1",
    note: "Simple content pipeline: capture → draft → ship.",
    href: "#",
    tag: "systems"
  },
  {
    title: "Gear Under $200",
    note: "Mic, lights, stands that actually matter.",
    href: "#",
    tag: "gear"
  },
  {
    title: "Rapid Reviews",
    note: "30-min pass: what stays, what goes.",
    href: "#",
    tag: "reviews"
  }
];

const RESOURCES: Resource[] = [
  {
    title: "Mic Shortlist 2025",
    summary: "Reliable mics by budget; caveats included.",
    href: "#",
    tags: ["audio", "gear"]
  },
  {
    title: "Lighting 101",
    summary: "Three setups for small rooms.",
    href: "#",
    tags: ["video", "lighting"]
  },
  {
    title: "Editing Flow",
    summary: "Cut faster with a reusable timeline.",
    href: "#",
    tags: ["editing", "workflow"]
  },
  {
    title: "Link Tracking",
    summary: "UTM + sheet template for affiliates.",
    href: "#",
    tags: ["analytics", "affiliates"]
  }
];

const FAQ: FaqItem[] = [
  {
    q: "Do you take paid promos?",
    a: "Only if I'd recommend it to a friend. If sponsored, I disclose it."
  },
  {
    q: "How often do you publish?",
    a: "Weekly posts; ad-hoc field notes when useful."
  },
  {
    q: "Affiliate links?",
    a: "Sometimes. They never change my verdict. I flag them."
  }
];

const CONTACT_EMAIL = "hey@omarguerrerox.com";

export default function Page() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return RESOURCES;
    return RESOURCES.filter((resource) => {
      if (resource.title.toLowerCase().includes(q)) return true;
      if (resource.summary.toLowerCase().includes(q)) return true;
      return resource.tags.some((tag) => tag.toLowerCase().includes(q));
    });
  }, [query]);

  return (
    <div className="page">
      <header className="top-bar">
        <a className="brand" href="#top">
          <img src="/icons/og.svg" alt="OG mark" width={28} height={28} />
          <span className="brand-name">@OmarGuerreroX</span>
        </a>
        <nav className="nav">
          <a href="#picks">Picks</a>
          <a href="#ideas">Ideas</a>
          <a href="#resources">Resources</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className="content">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Creator. Builder. Operator.</p>
          <h1 id="hero-title">Useful content. Real products.</h1>
          <p className="lead">
            Field-tested guides, gear picks, and frameworks so you can ship faster without
            the fluff.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://your-newsletter-url">
              Start with the newsletter
            </a>
            <a className="link-alt" href="#contact">
              Book a strategy call
            </a>
          </div>
        </section>

        <section id="picks" aria-labelledby="picks-title" className="section">
          <div className="section-head">
            <h2 id="picks-title">Quick Picks</h2>
            <p className="muted">What I send to most people first.</p>
          </div>
          <div className="cards-grid">
            {PICKS.map((pick) => (
              <a className="card" href={pick.href} key={pick.title}>
                <div className="card-icon">
                  {pick.icon ? <img src={pick.icon} alt="" width={40} height={40} /> : null}
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <span>{pick.title}</span>
                    {pick.badge ? <span className="badge">{pick.badge}</span> : null}
                  </div>
                  <p>{pick.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="ideas" aria-labelledby="ideas-title" className="section">
          <div className="section-head">
            <h2 id="ideas-title">Ideas & Previews</h2>
            <p className="muted">Snapshots of what&apos;s on deck.</p>
          </div>
          <div className="stack">
            {IDEAS.map((idea) => (
              <a className="idea" href={idea.href ?? "#"} key={idea.title}>
                <div>
                  <p className="idea-title">
                    {idea.title}
                    {idea.tag ? <span className="chip">{idea.tag}</span> : null}
                  </p>
                  <p className="muted">{idea.note}</p>
                </div>
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

        <section id="resources" aria-labelledby="resources-title" className="section">
          <div className="section-head">
            <h2 id="resources-title">Resources</h2>
            <p className="muted">Search by topic, tool, or outcome.</p>
          </div>
          <label className="search">
            <span className="sr-only">Search resources</span>
            <input
              type="search"
              name="resource-search"
              placeholder="Try “lighting” or “workflow”"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <div className="stack">
            {filtered.length > 0 ? (
              filtered.map((resource) => (
                <a className="resource" href={resource.href} key={resource.title}>
                  <div>
                    <h3>{resource.title}</h3>
                    <p className="muted">{resource.summary}</p>
                  </div>
                  <div className="tags">
                    {resource.tags.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))
            ) : (
              <p className="muted">
                No matches yet. Ping me with what you need and I&apos;ll add it next.
              </p>
            )}
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="section">
          <div className="section-head">
            <h2 id="faq-title">FAQ</h2>
            <p className="muted">The quick answers I send most.</p>
          </div>
          <div className="faq">
            {FAQ.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="section contact">
          <h2 id="contact-title">Contact</h2>
          <p className="muted">
            Book consults, send questions, or pitch a collaboration. I read every note.
          </p>
          <a className="button secondary" href={`mailto:${CONTACT_EMAIL}`}>
            Email {CONTACT_EMAIL}
          </a>
          <p className="muted">DMs are open on X as well.</p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Omar Guerrero. Built with Next.js.</p>
        <a href="https://x.com/OmarGuerreroX" target="_blank" rel="noreferrer">
          Follow on X
        </a>
      </footer>
    </div>
  );
}
