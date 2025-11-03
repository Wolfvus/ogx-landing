export type HeroAction = {
  label: string;
  href: string;
};

export type HeroHighlight = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  proof?: string;
  highlights?: HeroHighlight[];
  avatarSrc?: string;
  avatarAlt?: string;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
};

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  const {
    eyebrow,
    title,
    description,
    proof,
    highlights,
    primaryAction,
    secondaryAction,
    avatarSrc,
    avatarAlt
  } = content;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-top">
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="hero-title">{title}</h1>
          <p className="lead">{description}</p>
          <div className="hero-actions">
            <a className="button" href={primaryAction.href}>
              {primaryAction.label}
            </a>
            {secondaryAction ? (
              <a className="link-alt" href={secondaryAction.href}>
                {secondaryAction.label}
              </a>
            ) : null}
          </div>
          {proof ? <p className="hero-proof muted">{proof}</p> : null}
        </div>
        {avatarSrc ? (
          <div className="hero-avatar">
            <img
              src={avatarSrc}
              alt={avatarAlt ?? ""}
              width={128}
              height={128}
              loading="lazy"
            />
          </div>
        ) : null}
      </div>
      {highlights && highlights.length > 0 ? (
        <div className="hero-highlights">
          {highlights.map((item) => (
            <div className="hero-highlight" key={item.label}>
              <span className="hero-highlight-value">{item.value}</span>
              <span className="hero-highlight-label">{item.label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
