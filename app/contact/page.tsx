import Link from "next/link";
import { Header } from "../../components/Header";
import { CONTACT_EMAIL, REACH_DETAILS } from "../../lib/site";

const SERVICES = [
  {
    title: "Integraciones en newsletter",
    bullets: [
      "1 a 2 menciones nativas por entrega con contexto accionable.",
      "Enfoque en productos que resuelven problemas reales.",
      "Seguimiento de clics y aprendizajes compartidos post campana."
    ]
  },
  {
    title: "Colaboraciones en video",
    bullets: [
      "Formatos cortos y largos en X y YouTube.",
      "Historias basadas en uso real del producto, sin guiones inflados.",
      "Entrega de analitica 7 y 30 dias despues."
    ]
  },
  {
    title: "Consultoria 1:1",
    bullets: [
      "Mapeo de funnel y de contenidos en vivo.",
      "Acceso a plantillas, dashboards y secuencias de emails.",
      "Grabacion disponible para repetir la sesion cuando quieras."
    ],
    anchor: "consultoria"
  }
];

const CONTACT_OPTIONS = [
  {
    title: "Email directo",
    detail: CONTACT_EMAIL,
    description: "Envialo con brief, objetivos y fechas estimadas. Respondo en menos de 24 horas.",
    href: `mailto:${CONTACT_EMAIL}`,
    external: false
  },
  {
    title: "Agenda consultoria",
    detail: "cal.com/omarguerrerox/45",
    description: "Sesiones de 45 minutos enfocadas en performance y sistemas de contenido.",
    href: "https://cal.com/omarguerrerox/45",
    external: true
  },
  {
    title: "Solicita media kit",
    detail: "Envio dossier 2025",
    description: "Incluye datos de audiencia, formatos disponibles y tarifas base.",
    href: `mailto:${CONTACT_EMAIL}?subject=Media%20kit%202025`,
    external: false
  }
];

const CONTACT_NAV_LINKS = [
  { label: "Alcance", href: "#alcance" },
  { label: "Colaboraciones", href: "#consultoria" },
  { label: "Inicio", href: "/" }
];

export default function ContactPage() {
  return (
    <div className="page contact-page">
      <Header navLinks={CONTACT_NAV_LINKS} />
      <section className="contact-hero" aria-labelledby="contact-page-title">
        <div className="contact-hero-body">
          <p className="eyebrow">Trabajemos juntos</p>
          <h1 id="contact-page-title">Alcance disenado para marcas y creadores serios</h1>
          <p className="lead">
            Si buscas integraciones honestas o acelerar tu estrategia de contenido, aqui tienes
            mis cifras, formatos y disponibilidad.
          </p>
          <div className="contact-cta">
            <a className="button" href={`mailto:${CONTACT_EMAIL}`}>
              Hablemos por correo
            </a>
            <Link className="link-alt" href="/">
              Volver al inicio
            </Link>
          </div>
          <p className="contact-note muted">
            Respondo personalmente. Incluye contexto y resultados esperados para avanzar mas
            rapido.
          </p>
        </div>
        <div className="contact-hero-visual">
          <div className="hero-avatar contact-avatar">
            <img src="/og-profile.JPEG" alt="Retrato de Omar Guerrero" width={200} height={200} />
          </div>
        </div>
      </section>

      <section id="alcance" className="section reach-section" aria-labelledby="reach-title">
        <div className="section-head">
          <h2 id="reach-title">Estadisticas de alcance</h2>
          <p className="muted">
            Datos actualizados trimestralmente. Todos los reportes incluyen capturas y dashboards.
          </p>
        </div>
        <div className="reach-grid">
          {REACH_DETAILS.map((item) => (
            <div className="reach-card" key={item.label}>
              <span className="reach-value">{item.value}</span>
              <span className="reach-label">{item.label}</span>
              <p className="muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="consultoria"
        className="section services-section"
        aria-labelledby="services-title"
      >
        <div className="section-head">
          <h2 id="services-title">Formas de colaborar</h2>
          <p className="muted">
            Opciones pensadas para entregar resultados medibles y material reutilizable.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((service) => (
            <div
              className="service-card"
              key={service.title}
              id={service.anchor ? `${service.anchor}-card` : undefined}
            >
              <h3>{service.title}</h3>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-options" aria-labelledby="contact-options-title">
        <div className="section-head">
          <h2 id="contact-options-title">Siguientes pasos</h2>
          <p className="muted">
            Elige el canal que prefieras y te comparto agenda, tarifas y materiales de apoyo.
          </p>
        </div>
        <div className="options-grid">
          {CONTACT_OPTIONS.map((option) => {
            const linkProps = option.external
              ? { target: "_blank", rel: "noreferrer" as const }
              : {};

            return (
              <a className="option-card" href={option.href} key={option.title} {...linkProps}>
                <h3>{option.title}</h3>
                <p className="option-detail">{option.detail}</p>
                <p className="muted">{option.description}</p>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
