"use client";

import { useEffect, useMemo, useState } from "react";
import { Hero, type HeroContent } from "../components/Hero";
import { CONTACT_EMAIL, CORE_REACH } from "../lib/site";

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

const HERO: HeroContent = {
  eyebrow: "Contenido sin humo para creadores serios",
  title: "Aprende a lanzar, monetizar y crecer con lo que ya tienes.",
  description:
    "Cada semana comparto procesos reales, herramientas y guiones listos para aplicar en tus contenidos y productos digitales.",
  proof: "Respaldo de mas de 48k creadores, consultores y emprendedores que confian en mi trabajo.",
  highlights: CORE_REACH,
  avatarSrc: "/og-profile.svg",
  avatarAlt: "Retrato de Omar Guerrero",
  primaryAction: {
    label: "Recibe el playbook semanal",
    href: "https://your-newsletter-url"
  },
  secondaryAction: {
    label: "Ver media kit",
    href: "/contact"
  }
};

const PICKS: LinkCard[] = [
  {
    title: "Newsletter principal",
    desc: "Notas directas y tacticas accionables cada semana.",
    href: "https://your-newsletter-url",
    icon: "/icons/news.svg",
    badge: "Nuevo"
  },
  {
    title: "Herramientas que uso",
    desc: "Sin humo: software y equipo con enlaces transparentes.",
    href: "https://your-top-tools",
    icon: "/icons/tools.svg"
  },
  {
    title: "Agenda una sesion",
    desc: "Estrategia enfocada y directa en 45 minutos.",
    href: "/contact#consultoria",
    icon: "/icons/call.svg"
  }
];

const IDEAS: Idea[] = [
  {
    title: "Creator OS v1",
    note: "Flujo completo: capturar -> depurar -> publicar.",
    href: "#",
    tag: "sistemas"
  },
  {
    title: "Setup debajo de $200",
    note: "Micros, luces y soportes que realmente suman.",
    href: "#",
    tag: "equipo"
  },
  {
    title: "Auditorias expres",
    note: "Diagnostico rapido: que escalar y que cortar.",
    href: "#",
    tag: "reviews"
  }
];

const RESOURCES: Resource[] = [
  {
    title: "Microfonos recomendados 2025",
    summary: "Opciones confiables por presupuesto con notas claras.",
    href: "#",
    tags: ["audio", "equipo"]
  },
  {
    title: "Iluminacion simple",
    summary: "Tres esquemas para espacios reducidos.",
    href: "#",
    tags: ["video", "luz"]
  },
  {
    title: "Workflow de edicion",
    summary: "Plantilla de timeline para editar mas rapido.",
    href: "#",
    tags: ["edicion", "flujo"]
  },
  {
    title: "Tracking de enlaces",
    summary: "UTM + hoja de control para colaboraciones.",
    href: "#",
    tags: ["analytics", "afiliados"]
  }
];

const FAQ: FaqItem[] = [
  {
    q: "Aceptas colaboraciones pagadas?",
    a: "Solo con marcas que usaria personalmente. Si es sponsor, se senala claro."
  },
  {
    q: "Con que frecuencia publicas?",
    a: "Newsletter semanal y notas tacticas cuando hay aprendizajes reales."
  },
  {
    q: "Usas enlaces de afiliado?",
    a: "A veces. No afecta mis recomendaciones y siempre los etiqueto."
  }
];

export default function Page() {
  const [query, setQuery] = useState("");
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
      <section className="hero-band" id="top">
        <div className="hero-band-content">
          <header className="top-bar">
        <div className="brand-block">
          <a className="brand-name" href="#top">
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
              IG
            </a>
            <a
              className="social-btn"
              href="https://www.tiktok.com/@omarguerrerox"
              aria-label="TikTok de Omar"
              target="_blank"
              rel="noreferrer"
            >
              TT
            </a>
            <a
              className="social-btn"
              href="https://x.com/OmarGuerreroX"
              aria-label="Twitter de Omar"
              target="_blank"
              rel="noreferrer"
            >
              X
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
        <nav
          id="site-nav"
          className={`nav ${navOpen ? "is-open" : ""}`}
        >
          <a
            className="nav-link"
            href="#picks"
            onClick={() => setNavOpen(false)}
          >
            Recomendados
          </a>
          <a
            className="nav-link"
            href="#ideas"
            onClick={() => setNavOpen(false)}
          >
            Ideas
          </a>
          <a
            className="nav-link"
            href="#resources"
            onClick={() => setNavOpen(false)}
          >
            Recursos
          </a>
          <a
            className="nav-link"
            href="#faq"
            onClick={() => setNavOpen(false)}
          >
            FAQs
          </a>
          <a
            className="nav-link nav-cta"
            href="/contact"
            onClick={() => setNavOpen(false)}
          >
            Contacto
          </a>
        </nav>
          </header>
          <Hero content={HERO} />
        </div>
      </section>

      <main className="content">

        <section id="picks" aria-labelledby="picks-title" className="section">
          <div className="section-head">
            <h2 id="picks-title">Recomendados al instante</h2>
            <p className="muted">Lo primero que comparto cuando alguien busca recursos.</p>
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
            <h2 id="ideas-title">Ideas y avances</h2>
            <p className="muted">Lo que estoy construyendo ahora mismo.</p>
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
                <span aria-hidden="true">-></span>
              </a>
            ))}
          </div>
        </section>

        <section id="resources" aria-labelledby="resources-title" className="section">
          <div className="section-head">
            <h2 id="resources-title">Recursos</h2>
            <p className="muted">Busca por tema, herramienta o resultado.</p>
          </div>
          <label className="search">
            <span className="sr-only">Buscar recursos</span>
            <input
              type="search"
              name="resource-search"
              placeholder="Prueba luz o flujo"
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
                Aun no hay coincidencias. Escribeme lo que buscas y lo sumo pronto.
              </p>
            )}
          </div>
        </section>

        <section id="faq" aria-labelledby="faq-title" className="section">
          <div className="section-head">
            <h2 id="faq-title">Preguntas frecuentes</h2>
            <p className="muted">Respuestas rapidas a lo que mas me preguntan.</p>
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
          <h2 id="contact-title">Contacto directo</h2>
          <p className="muted">
            Agenda consultorias, propuestas de marca o colaboraciones. Leo cada mensaje.
          </p>
          <a className="button secondary" href={`mailto:${CONTACT_EMAIL}`}>
            Escribe a {CONTACT_EMAIL}
          </a>
          <p className="muted">
            Tambien puedes ver mis metricas de alcance en <a href="/contact">esta pagina</a>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>Copyright {new Date().getFullYear()} Omar Guerrero. Sitio construido con Next.js.</p>
        <a href="https://x.com/OmarGuerreroX" target="_blank" rel="noreferrer">
          Sigueme en X
        </a>
      </footer>
    </div>
  );
}
