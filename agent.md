SIMPLE MOBILE-FIRST LANDING (Next.js + TS, NO CSS-in-JS)

GOAL
- Single page for @OmarGuerreroX
- Easy to maintain: minimal files, no CSS-in-JS, mobile-first
- Sections: Hero, Quick Picks (referrals), Ideas/Previews, Resources (searchable), FAQ, Contact, Footer
- Data lives inline (arrays). Edit arrays to update content.
- Fast: SSG by default

------------------------------------------------------------
1) INIT (one-time)
------------------------------------------------------------
pnpm dlx create-next-app@latest omar-landing --ts --app --eslint --src-dir=false --tailwind=false
cd omar-landing

# Remove Tailwind & styled-components (not used)
# (Nothing to uninstall; we never add them.)

------------------------------------------------------------
2) FILE TREE (ONLY WHAT WE NEED)
------------------------------------------------------------
/app/layout.tsx
/app/page.tsx
/app/globals.css
/public/icons/*.svg (put any simple SVGs you want)
/public/logos/*.svg (optional)

------------------------------------------------------------
3) /app/layout.tsx
------------------------------------------------------------
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar Guerrero — Useful content. Real products.",
  description: "No-BS guides, tool picks, and field notes by @OmarGuerreroX.",
  openGraph: {
    title: "Omar Guerrero",
    description: "Useful content. Real products.",
    type: "website",
  },
  twitter: { card: "summary_large_image", creator: "@OmarGuerreroX" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

------------------------------------------------------------
4) /app/page.tsx  (ALL CONTENT + ARRAYS HERE)
------------------------------------------------------------
"use client";
import { useMemo, useState } from "react";

type LinkCard = { title: string; desc: string; href: string; icon?: string; badge?: string };
type Idea = { title: string; note: string; href?: string; tag?: string };
type Resource = { title: string; summary: string; href: string; tags: string[] };

const PICKS: LinkCard[] = [
  { title: "Primary Newsletter", desc: "Weekly no-BS notes & picks.", href: "https://your-newsletter-url", icon: "/icons/news.svg", badge: "New" },
  { title: "Top Tools I Use", desc: "Affiliates disclosed. Real value only.", href: "https://your-top-tools", icon: "/icons/tools.svg" },
  { title: "Book a Call", desc: "Signal-heavy strategy session.", href: "#contact", icon: "/icons/call.svg" },
];

const IDEAS: Idea[] = [
  { title: "Creator OS v1", note: "Simple content pipeline: capture → draft → ship.", href: "#", tag: "systems" },
  { title: "Gear Under $200", note: "Mic, lights, stands that actually matter.", href: "#", tag: "gear" },
  { title: "Rapid Reviews", note: "30-min pass: what stays, what goes.", href: "#", tag: "reviews" },
];

const RESOURCES: Resource[] = [
  { title: "Mic Shortlist 2025", summary: "Reliable mics by budget; caveats included.", href: "#", tags: ["audio","gear"] },
  { title: "Lighting 101", summary: "Three setups for small rooms.", href: "#", tags: ["video","lighting"] },
  { title: "Editing Flow", summary: "Cut faster with a reusable timeline.", href: "#", tags: ["editing","workflow"] },
  { title: "Link Tracking", summary: "UTM + sheet template for affiliates.", href: "#", tags: ["analytics","affiliates"] },
];

const FAQ = [
  { q: "Do you take paid promos?", a: "Only if I'd recommend it to a friend. If sponsored, I disclose it." },
  { q: "How often do you publish?", a: "Weekly posts; ad-hoc field notes when useful." },
  { q: "Affiliate links?", a: "Sometimes. They never change my verdict. I flag them." },
];

export default function Page() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return RESOURCES;
    return RESOURCES.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.summary.toLowerCase().includes(q) ||
      r.tags.some(t => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <>
      {/* HEADER */}
      <header className="bar">
        <div className="container row">
          <div className="brand">
            <img src="/icons/og.svg" alt="OG" width={24} height={24} />
            <span className="brand-name">OmarGuerrero</span>
          </div>
          <nav className="nav">
            <a href="#picks">Picks</a>
            <a href="#ideas">Ideas</a>
            <a href="#resources">Resources</a>
            <a className="cta" href="#contact">Book a Call</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container hero-inner">
            <div className="badge">@OmarGuerreroX — Useful content. Real products.</div>
            <h1 className="h1">Clarity for creators and operators.</h1>
            <p className="lead">
              Short playbooks, tool picks I actually use, and field notes to help you ship faster with fewer mistakes.
            </p>
            <div className="actions">
              <a className="btn-primary" href="#contact">Join the list</a>
              <a className="btn-secondary" href="#picks">See my picks</a>
            </div>
          </div>
        </section>

        {/* QUICK PICKS (REFERRALS) */}
        <section id="picks" className="section">
          <div className="container">
            <h2 className="h2">Quick Picks</h2>
            <div className="grid">
              {PICKS.map((c) => (
                <a key={c.title} className="card" href={c.href} target="_blank" rel="noreferrer">
                  <div className="card-top">
                    {c.icon && <img src={c.icon} alt="" width={24} height={24} />}
                    {c.badge && <span className="chip">{c.badge}</span>}
                  </div>
                  <div className="card-title">{c.title}</div>
                  <div className="card-desc">{c.desc}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* IDEAS / PREVIEWS */}
        <section id="ideas" className="section">
          <div className="container">
            <h2 className="h2">Ideas & Previews</h2>
            <div className="list">
              {IDEAS.map((i) => (
                <a key={i.title} className="list-item" href={i.href ?? "#"} target={i.href ? "_blank" : "_self"} rel="noreferrer">
                  <div className="list-head">
                    <span className="list-title">{i.title}</span>
                    {i.tag && <span className="chip subtle">{i.tag}</span>}
                  </div>
                  <div className="list-note">{i.note}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* RESOURCES (SEARCHABLE) */}
        <section id="resources" className="section">
          <div className="container">
            <div className="row space-between">
              <h2 className="h2">Resources</h2>
              <input
                className="search"
                placeholder="Search (e.g., lighting, audio, affiliates)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search resources"
              />
            </div>
            <div className="grid">
              {filtered.map((r) => (
                <a key={r.title} className="card" href={r.href} target="_blank" rel="noreferrer">
                  <div className="card-title">{r.title}</div>
                  <div className="card-desc">{r.summary}</div>
                  <div className="tags">
                    {r.tags.map(t => <span key={t} className="tag">#{t}</span>)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section">
          <div className="container">
            <h2 className="h2">FAQ</h2>
            <div className="accordion">
              {FAQ.map((f, idx) => (
                <details key={idx} className="acc-item">
                  <summary className="acc-q">{f.q}</summary>
                  <div className="acc-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container contact">
            <h2 className="h2">Get in touch</h2>
            <form className="form" onSubmit={(e)=>{e.preventDefault(); alert("Thanks — message received.");}}>
              <input className="input" name="name" placeholder="Name" required />
              <input className="input" type="email" name="email" placeholder="Email" required />
              <textarea className="textarea" name="message" placeholder="What do you need?" required />
              <button className="btn-primary" type="submit">Send</button>
            </form>
            <p className="muted">We respond within 24 hours.</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container row space-between wrap">
          <div className="muted">© {new Date().getFullYear()} OmarGuerrero</div>
          <div className="row gap">
            <a className="muted" href="https://x.com/OmarGuerreroX" target="_blank" rel="noreferrer">X</a>
            <a className="muted" href="#" target="_blank" rel="noreferrer">Telegram</a>
            <a className="muted" href="#" target="_blank" rel="noreferrer">Discord</a>
            <a className="muted" href="#">Privacy</a>
            <a className="muted" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}

------------------------------------------------------------
5) /app/globals.css  (CSS VARIABLES, MOBILE-FIRST)
------------------------------------------------------------
:root {
  color-scheme: dark;
  --bg: #000000;
  --bg2: #0B1120;
  --text: #FFFFFF;
  --muted: #AAAAAA;
  --cyan: #12FCFF;
  --magenta: #FF2ECC;
  --cta: #00FF7F;
  --hairline: rgba(255,255,255,0.06);
  --surface: rgba(11,17,32,0.5);
  --container: 1280px;
  --radius: 12px;
  --shadow-cyan: 0 0 40px rgba(18,252,255,0.25);
}
* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0; background: var(--bg); color: var(--text);
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
}
img, svg { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
:focus-visible { outline: 2px solid var(--cyan); outline-offset: 2px; }

/* Layout */
.container { max-width: var(--container); margin: 0 auto; padding: 0 16px; }
.row { display: flex; align-items: center; gap: 12px; }
.wrap { flex-wrap: wrap; }
.space-between { justify-content: space-between; }
.gap { gap: 12px; }
.muted { color: var(--muted); }

/* Header */
.bar {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: saturate(140%) blur(8px);
  background: linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4));
  border-bottom: 1px solid var(--hairline);
}
.brand { display: flex; align-items: center; gap: 10px; font-weight: 700; }
.brand-name { letter-spacing: 0.2px; }
.nav { display: flex; align-items: center; gap: 14px; }
.nav a { color: var(--muted); font-size: 14px; }
.nav a:hover { color: var(--text); }
.cta {
  padding: 10px 14px; border-radius: 999px; background: var(--cta); color: #000; font-weight: 700;
}
.cta:hover { filter: brightness(1.08); }

/* Hero */
.hero {
  position: relative; overflow: hidden;
  padding: 64px 0 32px;
  background:
    radial-gradient(600px 300px at 20% -10%, rgba(18,252,255,0.15), transparent 60%),
    radial-gradient(600px 300px at 80% 0%, rgba(255,46,204,0.12), transparent 60%),
    linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0));
}
.hero-inner { text-align: center; }
.badge {
  display: inline-flex; gap: 8px; align-items: center;
  font-size: 12px; color: var(--muted);
  padding: 6px 10px; border: 1px solid var(--hairline); border-radius: 999px;
  background: rgba(255,255,255,0.02);
}
.h1 { margin: 16px auto 12px; max-width: 780px; font-size: 32px; line-height: 1.06; font-weight: 800; }
.lead { margin: 0 auto 20px; max-width: 680px; color: var(--muted); }
.actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
.btn-primary, .btn-secondary {
  padding: 12px 16px; border-radius: var(--radius); font-weight: 700;
}
.btn-primary { background: var(--cta); color: #000; }
.btn-primary:hover { filter: brightness(1.08); }
.btn-secondary { border: 1px solid var(--cyan); box-shadow: var(--shadow-cyan); }
.btn-secondary:hover { background: rgba(18,252,255,0.08); }

/* Sections */
.section { padding: 48px 0; }
@media (min-width: 768px) { .section { padding: 80px 0; } }
.h2 { font-size: 24px; line-height: 1.1; margin: 0 0 16px; font-weight: 700; }
.grid {
  display: grid; gap: 16px; grid-template-columns: 1fr;
}
@media (min-width: 640px) { .grid { grid-template-columns: repeat(2,1fr); } }
@media (min-width: 1024px) { .grid { grid-template-columns: repeat(3,1fr); } }

.card {
  border: 1px solid var(--hairline); background: var(--surface);
  border-radius: var(--radius); padding: 16px; min-height: 110px;
  transition: background .2s ease, transform .2s ease, box-shadow .2s ease;
}
.card:hover { transform: translateY(-2px); box-shadow: var(--shadow-cyan); }
.card-top { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
.card-title { font-weight: 700; margin-bottom: 6px; }
.card-desc { color: var(--muted); font-size: 14px; }
.chip {
  padding: 2px 8px; border: 1px solid var(--cyan); border-radius: 999px; font-size: 11px;
}
.chip.subtle { border-color: var(--hairline); color: var(--muted); }

/* List (Ideas) */
.list { display: grid; gap: 10px; }
.list-item {
  border: 1px solid var(--hairline); border-radius: var(--radius);
  padding: 12px 14px; background: rgba(255,255,255,0.02);
}
.list-item:hover { background: rgba(255,255,255,0.04); }
.list-head { display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.list-title { font-weight: 700; }
.list-note { color: var(--muted); font-size: 14px; margin-top: 4px; }

/* Resources */
.search {
  min-width: 220px; padding: 10px 12px; border-radius: var(--radius);
  background: #111; color: #fff; border: 1px solid var(--hairline);
}
.tags { display: flex; gap: 8px; margin-top: 10px; flex-wrap: wrap; }
.tag { font-size: 12px; color: var(--muted); }

/* FAQ */
.accordion { display: grid; gap: 10px; }
.acc-item {
  border: 1px solid var(--hairline); border-radius: var(--radius);
  background: rgba(255,255,255,0.02); padding: 8px 12px;
}
.acc-q { cursor: pointer; font-weight: 700; }
.acc-a { color: var(--muted); padding-top: 6px; }

/* Contact */
.contact { max-width: 720px; }
.form { display: grid; gap: 12px; }
.input, .textarea {
  background: #111; color: #fff; border: 1px solid var(--hairline);
  border-radius: var(--radius); padding: 12px 14px;
}
.textarea { min-height: 120px; }

/* Footer */
.footer {
  border-top: 1px solid var(--hairline);
  padding: 32px 0; color: var(--muted);
}

@media (min-width: 768px) {
  .h2 { font-size: 32px; }
  .h1 { font-size: 56px; }
}
