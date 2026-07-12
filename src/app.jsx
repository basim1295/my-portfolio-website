/* eslint-disable */
const { useState, useRef, useEffect } = React;
const DS = window.BasimShabirDesignSystem_41feaf;
const {
  TopNav,
  IconButton,
  MStripe,
  Button,
  TextLink,
  StatCell,
  CarouselArrow,
  CtaBand,
} = DS;

// Local project card — same silhouette as DS ProjectCard but without the
// DS's nested-<a> bug (its href wraps a child TextLink).
function ProjectCard({ image, imageAlt = "", name, specs, description, href }) {
  const Wrap = ({ children }) =>
    href && href !== "#" ? (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", color: "var(--on-dark)", textDecoration: "none" }}
      >
        {children}
      </a>
    ) : (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>{children}</div>
    );

  return (
    <Wrap>
      {image ? (
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 10",
            background: `#000 url(${image}) center/cover no-repeat`,
            border: "1px solid var(--hairline-strong)",
          }}
          role="img"
          aria-label={imageAlt || name}
        />
      ) : null}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
        <h3 style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--fs-display-md)",
          fontWeight: 700,
          lineHeight: "var(--lh-display-md)",
          letterSpacing: "var(--ls-display)",
          textTransform: "uppercase",
          color: "var(--on-dark)",
          margin: 0,
        }}>
          {name}
        </h3>
        {specs ? (
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--fs-body-sm)",
            fontWeight: 300,
            color: "var(--body)",
          }}>
            {specs}
          </div>
        ) : null}
      </div>
      {description ? (
        <p style={{
          margin: 0,
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-body-md)",
          fontWeight: 300,
          lineHeight: 1.6,
          color: "var(--body)",
          maxWidth: "56ch",
          textAlign: "justify",
        }}>
          {description}
        </p>
      ) : null}
      {href && href !== "#" ? (
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--fs-label)",
          fontWeight: 700,
          letterSpacing: "var(--ls-label)",
          textTransform: "uppercase",
          color: "var(--on-dark)",
        }}>
          {window.PortfolioData.copy.projectCard.linkLabel}
        </span>
      ) : null}
    </Wrap>
  );
}

const D = window.PortfolioData;
const C = D.copy;

// ─────────────────────────────────────────────────────────────
// Contact modal — opened from the "Contact" button in the top nav
// ─────────────────────────────────────────────────────────────
function ContactModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const options = [
    {
      label: "Email",
      value: D.profile.email,
      href: `mailto:${D.profile.email}`,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="0" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: D.profile.linkedinUrl.replace(/^https?:\/\//, ""),
      href: D.profile.linkedinUrl,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h4v16H4z" />
          <circle cx="6" cy="4.5" r="1" fill="currentColor" stroke="none" />
          <path d="M10 9h4v2c.7-1.3 2-2.2 3.5-2.2 3 0 3.5 2 3.5 4.5V20h-4v-6c0-1.3-.5-2-1.8-2s-1.7.8-1.7 2.2V20h-4V9z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Contact"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-xl)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 560,
          background: "var(--surface-soft)",
          border: "1px solid var(--hairline)",
          padding: "var(--space-xxl)",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "var(--space-md)",
            right: "var(--space-md)",
            background: "transparent",
            border: "none",
            color: "var(--on-dark)",
            cursor: "pointer",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <p style={{ ...eyebrow, color: "var(--body)" }}>Contact</p>
        <h2 style={{ ...h2, fontSize: "var(--fs-display-md)", marginTop: "var(--space-sm)" }}>Get in touch</h2>
        <div style={{ marginTop: "var(--space-md)" }}>
          <MStripe width={120} />
        </div>
        <p style={{ ...body, marginTop: "var(--space-lg)", maxWidth: "44ch" }}>
          Happy to hear from you :)
        </p>

        <div style={{ marginTop: "var(--space-xl)", display: "grid", gridTemplateColumns: "1fr", gap: 1, background: "var(--hairline-strong)", border: "1px solid var(--hairline-strong)" }}>
          {options.map((o) => (
            <a
              key={o.label}
              href={o.href}
              target={o.href.startsWith("http") ? "_blank" : undefined}
              rel={o.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-lg)",
                padding: "var(--space-lg)",
                background: "var(--surface-card)",
                color: "var(--on-dark)",
                textDecoration: "none",
                transition: "background var(--duration-base) var(--ease-standard)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-elevated)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--surface-card)"; }}
            >
              <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--canvas)", border: "1px solid var(--hairline-strong)", flexShrink: 0 }}>
                {o.icon}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <p style={{ ...eyebrow, color: "var(--muted)" }}>{o.label}</p>
                <p style={{ ...body, marginTop: "var(--space-xxs)", color: "var(--on-dark)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {o.value}
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: "var(--body)" }}>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Shared style tokens
// ─────────────────────────────────────────────────────────────
const eyebrow = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--fs-label)",
  fontWeight: 700,
  letterSpacing: "var(--ls-label)",
  textTransform: "uppercase",
  color: "var(--body)",
  margin: 0,
};

const h2 = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--fs-display-lg)",
  fontWeight: 700,
  lineHeight: "var(--lh-display-tight)",
  letterSpacing: "var(--ls-display)",
  textTransform: "uppercase",
  color: "var(--on-dark)",
  margin: 0,
};

const h3 = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--fs-display-sm)",
  fontWeight: 700,
  lineHeight: "var(--lh-display-md)",
  letterSpacing: "var(--ls-display)",
  textTransform: "uppercase",
  color: "var(--on-dark)",
  margin: 0,
};

const lead = {
  margin: 0,
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-title-sm)",
  fontWeight: 300,
  lineHeight: 1.5,
  color: "var(--body-strong)",
};

const body = {
  margin: 0,
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-body-md)",
  fontWeight: 300,
  lineHeight: 1.6,
  color: "var(--body)",
};

const container = {
  maxWidth: "var(--content-max)",
  margin: "0 auto",
  padding: "0 var(--space-xl)",
};

// ─────────────────────────────────────────────────────────────
// Section header (eyebrow + big display headline)
// ─────────────────────────────────────────────────────────────
function SectionHead({ eyebrow: eb, title, action }) {
  return (
    <div style={{ ...container, display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "var(--space-xl)", marginBottom: "var(--space-xxl)" }}>
      <div>
        <p style={eyebrow}>{eb}</p>
        <h2 style={{ ...h2, marginTop: "var(--space-sm)" }}>{title}</h2>
      </div>
      {action}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 1. HERO — split: intro copy + portrait
// ─────────────────────────────────────────────────────────────
function Hero() {
  const p = D.profile;
  return (
    <section id="intro" style={{ paddingTop: "calc(64px + var(--space-section))", paddingBottom: "var(--space-section)" }}>
      <div style={{ ...container, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "var(--space-xxl)", alignItems: "center" }}>
        <div>
          {/* <p style={eyebrow}>{C.hero.eyebrow}  {p.location}</p> */}
          <h1 style={{ ...h2, fontSize: "var(--fs-display-xl)", lineHeight: 1, marginTop: "var(--space-lg)" }}>
            {p.name}
          </h1>
          <div style={{ marginTop: "var(--space-md)" }}>
            <MStripe width={160} />
          </div>
          <h2 style={{ ...h3, fontSize: "var(--fs-display-md)", color: "var(--body-strong)", marginTop: "var(--space-lg)" }}>
            {p.tagline}
          </h2>
          <p style={{ ...lead, marginTop: "var(--space-xl)", maxWidth: "56ch", textAlign: "justify" }}>
            {p.intro}
          </p>
          <div style={{ marginTop: "var(--space-xxl)", display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Button href={p.resumeUrl}>{C.hero.resumeButton}</Button>
            <Button href={p.linkedinUrl} variant="outline">{C.hero.linkedinButton}</Button>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{
            aspectRatio: "4 / 5",
            background: `#000 url(${p.portrait}) center/cover no-repeat`,
            border: "1px solid var(--hairline-strong)",
          }} role="img" aria-label={`Portrait of ${p.name}`} />
          <div style={{ position: "absolute", left: 0, right: 0, bottom: -2, height: 4, background: "var(--stripe-gradient)" }} />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. EDUCATION
// ─────────────────────────────────────────────────────────────
function Education() {
  return (
    <section id="education" style={{ padding: "var(--space-section) 0", borderTop: "1px solid var(--hairline-strong)" }}>
      <SectionHead eyebrow={C.sections.education.eyebrow} title={C.sections.education.title} />
      <div style={{ ...container }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${D.education.length}, 1fr)`, gap: 1, background: "var(--hairline-strong)" }}>
          {D.education.map((e, i) => (
            <div key={i} style={{ background: "var(--surface-soft)", padding: "var(--space-xl)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-lg)" }}>
              <div>
                <p style={{ ...eyebrow, color: "var(--muted)" }}>{e.period}</p>
                <h3 style={{ ...h3, marginTop: "var(--space-md)" }}>{e.degree}</h3>
                <p style={{ ...body, marginTop: "var(--space-md)", color: "var(--body-strong)" }}>
                  {e.org}
                </p>
                <p style={{ ...body, marginTop: "var(--space-xs)", color: "var(--muted)" }}>
                  {e.location} · {e.detail}
                </p>
              </div>
              {e.logo && (
                <img
                  src={e.logo}
                  alt={`${e.org} logo`}
                  style={{ width: 120, height: 120, objectFit: "contain", flexShrink: 0, opacity: 0.9 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. PROJECTS — 2×2 grid
// ─────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" style={{ padding: "var(--space-section) 0", borderTop: "1px solid var(--hairline-strong)" }}>
      <SectionHead eyebrow={C.sections.projects.eyebrow} title={C.sections.projects.title} />
      <div style={{ ...container }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-xxl)" }}>
          {D.projects.map((p) => (
            <ProjectCard
              key={p.id}
              image={p.image}
              imageAlt={p.name}
              name={p.name}
              specs={p.specs}
              description={p.description}
              href={p.link || p.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. WORK EXPERIENCE — timeline
// ─────────────────────────────────────────────────────────────
function WorkExperience() {
  return (
    <section id="work-ex" style={{ padding: "var(--space-section) 0", borderTop: "1px solid var(--hairline-strong)" }}>
      <SectionHead eyebrow={C.sections.workExperience.eyebrow} title={C.sections.workExperience.title} />
      <div style={{ ...container }}>
        {D.workExperience.map((org, i) => (
          <div key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "var(--space-md)", paddingBottom: "var(--space-lg)", borderBottom: "1px solid var(--hairline)" }}>
              <h3 style={{ ...h3, fontSize: "var(--fs-title-lg)" }}>{org.org}</h3>
              <p style={{ ...body, color: "var(--muted)", fontSize: "var(--fs-body-sm)" }}>
                {org.location} · {org.period}
              </p>
            </div>
            <div style={{ marginTop: "var(--space-xl)", display: "grid", gap: "var(--space-xl)" }}>
              {org.roles.map((r, j) => (
                <div key={j} style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "var(--space-xl)", paddingBottom: "var(--space-xl)", borderBottom: j === org.roles.length - 1 ? "none" : "1px solid var(--hairline-strong)" }}>
                  <div>
                    <p style={{ ...eyebrow, color: "var(--muted)" }}>{r.period}</p>
                    <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title-md)", fontWeight: 700, letterSpacing: "var(--ls-display)", textTransform: "uppercase", color: "var(--on-dark)", margin: "var(--space-sm) 0 0 0" }}>
                      {r.title}
                    </h4>
                  </div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
                    {r.bullets.map((b, k) => (
                      <li key={k} style={{ ...body, paddingLeft: "var(--space-md)", borderLeft: "1px solid var(--hairline)", textAlign: "justify" }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. LEADERSHIP — role blocks with horizontal image albums
// ─────────────────────────────────────────────────────────────
function Album({ images }) {
  const scrollerRef = useRef(null);
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  const scrollTo = (idx) => {
    const el = scrollerRef.current;
    if (!el) return;
    const target = el.children[idx];
    if (target) {
      el.scrollTo({ left: target.offsetLeft - el.offsetLeft, behavior: "smooth" });
    }
    setActive(idx);
  };

  const next = () => scrollTo(Math.min(active + 1, images.length - 1));
  const prev = () => scrollTo(Math.max(active - 1, 0));

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          ref={scrollerRef}
          style={{
            display: "flex",
            gap: "var(--space-md)",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "var(--space-sm)",
            scrollbarWidth: "thin",
            scrollbarColor: "var(--hairline) transparent",
          }}
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightbox(src)}
              style={{
                flex: "0 0 auto",
                width: 320,
                aspectRatio: "4 / 3",
                background: `#000 url(${src}) center/cover no-repeat`,
                border: "1px solid var(--hairline-strong)",
                cursor: "pointer",
                padding: 0,
                scrollSnapAlign: "start",
                transition: "opacity var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--hairline)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--hairline-strong)"; }}
              aria-label={`Album image ${i + 1}`}
            />
          ))}
        </div>
        {images.length > 1 && (
          <div style={{ display: "flex", gap: "var(--space-sm)", marginTop: "var(--space-md)", justifyContent: "flex-end" }}>
            <CarouselArrow direction="prev" onClick={prev} label="Previous image" />
            <CarouselArrow direction="next" onClick={next} label="Next image" />
          </div>
        )}
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "var(--space-xl)",
            cursor: "zoom-out",
          }}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightbox}
            alt=""
            style={{ maxWidth: "min(1200px, 100%)", maxHeight: "90vh", border: "1px solid var(--hairline)" }}
          />
        </div>
      )}
    </>
  );
}

function LeadershipItem({ item, index }) {
  return (
    <div style={{ padding: "var(--space-xxl) 0", borderTop: index === 0 ? "none" : "1px solid var(--hairline-strong)" }}>
      <div style={{ ...container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-xxl)", alignItems: "start" }}>
        <div style={{ minWidth: 0 }}>
          <p style={{ ...eyebrow, color: "var(--muted)" }}>{item.period}</p>
          <h3 style={{ ...h3, marginTop: "var(--space-md)" }}>{item.role}</h3>
          <p style={{ ...body, marginTop: "var(--space-sm)", color: "var(--body-strong)", fontSize: "var(--fs-title-sm)" }}>
            {item.org}
          </p>
          <p style={{ ...lead, marginTop: "var(--space-lg)", textAlign: "justify" }}>{item.summary}</p>
          <ul style={{ margin: "var(--space-lg) 0 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{ ...body, paddingLeft: "var(--space-md)", borderLeft: "1px solid var(--hairline)", textAlign: "justify" }}>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ minWidth: 0 }}>
          <Album images={item.album} />
        </div>
      </div>
    </div>
  );
}

function Leadership() {
  return (
    <section id="leadership" style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)", borderTop: "1px solid var(--hairline-strong)" }}>
      <SectionHead eyebrow={C.sections.leadership.eyebrow} title={C.sections.leadership.title} />
      {D.leadership.map((item, i) => (
        <LeadershipItem key={item.id} item={item} index={i} />
      ))}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// 6. CERTIFICATIONS
// ─────────────────────────────────────────────────────────────
function Certifications() {
  return (
    <section id="certifications" style={{ padding: "var(--space-section) 0", borderTop: "1px solid var(--hairline-strong)" }}>
      <SectionHead eyebrow={C.sections.certifications.eyebrow} title={C.sections.certifications.title} />
      <div style={{ ...container }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--hairline-strong)" }}>
          {D.certifications.map((c, i) => (
            <div key={i} style={{ background: "var(--surface-soft)", padding: "var(--space-xl)", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 200 }}>
              <p style={{ ...eyebrow, color: "var(--muted)" }}>{c.date}</p>
              <div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--fs-title-md)", fontWeight: 700, letterSpacing: "var(--ls-display)", textTransform: "uppercase", color: "var(--on-dark)", margin: 0, lineHeight: 1.25 }}>
                  {c.name}
                </h4>
                <p style={{ ...body, marginTop: "var(--space-sm)", color: "var(--body)" }}>{c.org}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "var(--space-xxl)" }}>
          <p style={{ ...eyebrow, color: "var(--muted)" }}>{C.techToolkitLabel}</p>
          <div style={{ marginTop: "var(--space-md)", display: "flex", flexWrap: "wrap", gap: "var(--space-sm)" }}>
            {D.skills.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--fs-body-sm)",
                  fontWeight: 300,
                  color: "var(--body-strong)",
                  padding: "var(--space-xs) var(--space-md)",
                  border: "1px solid var(--hairline)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// App shell
// ─────────────────────────────────────────────────────────────
function App() {
  const navItems = D.nav.items;

  const [active, setActive] = useState(navItems[0]?.label || "Intro");
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const labelByHref = Object.fromEntries(navItems.map((n) => [n.href.slice(1), n.label]));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(labelByHref[entry.target.id] || navItems[0]?.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const onNavClick = (item, e) => {
    e.preventDefault();
    const id = item.href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: "var(--canvas)", color: "var(--on-dark)", minHeight: "100vh" }}>
      <TopNav
        brand={D.profile.name}
        items={navItems}
        active={active}
        onItemClick={onNavClick}
        utilities={
          <Button size="sm" onClick={() => setContactOpen(true)}>
            {D.nav.contactButtonLabel}
          </Button>
        }
        sticky
      />
      <MStripe />

      <Hero />
      <Education />
      <Projects />
      <WorkExperience />
      <Leadership />
      <Certifications />

      <CtaBand
        headline={C.cta.headline}
        subhead={C.cta.subhead}
        image={C.cta.image}
        action={<Button variant="outline" onClick={() => setContactOpen(true)}>{C.cta.actionLabel}</Button>}
      />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
