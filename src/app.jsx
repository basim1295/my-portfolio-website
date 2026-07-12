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
  Footer,
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
          Explore this project →
        </span>
      ) : null}
    </Wrap>
  );
}

const D = window.PortfolioData;

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
          <p style={eyebrow}>Hello there · {p.location}</p>
          <h1 style={{ ...h2, fontSize: "var(--fs-display-xl)", lineHeight: 1, marginTop: "var(--space-lg)" }}>
            {p.name}.
          </h1>
          <div style={{ marginTop: "var(--space-md)" }}>
            <MStripe width={160} />
          </div>
          <h2 style={{ ...h3, fontSize: "var(--fs-display-md)", color: "var(--body-strong)", marginTop: "var(--space-lg)" }}>
            {p.tagline}
          </h2>
          <p style={{ ...lead, marginTop: "var(--space-xl)", maxWidth: "56ch" }}>
            {p.intro}
          </p>
          <div style={{ marginTop: "var(--space-xxl)", display: "flex", gap: "var(--space-md)", flexWrap: "wrap" }}>
            <Button href={p.resumeUrl}>Download résumé</Button>
            <Button href={p.linkedinUrl} variant="outline">LinkedIn</Button>
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
      <SectionHead eyebrow="Education" />
      <div style={{ ...container }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--hairline-strong)" }}>
          {D.education.map((e, i) => (
            <div key={i} style={{ background: "var(--surface-soft)", padding: "var(--space-xl)" }}>
              <p style={{ ...eyebrow, color: "var(--muted)" }}>{e.period}</p>
              <h3 style={{ ...h3, marginTop: "var(--space-md)" }}>{e.degree}</h3>
              <p style={{ ...body, marginTop: "var(--space-md)", color: "var(--body-strong)" }}>
                {e.org}
              </p>
              <p style={{ ...body, marginTop: "var(--space-xs)", color: "var(--muted)" }}>
                {e.location} · {e.detail}
              </p>
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
      <SectionHead eyebrow="Selected work" title="Projects." />
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
              href={p.href}
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
      <SectionHead eyebrow="Work experience" title="Where I've built." />
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
                      <li key={k} style={{ ...body, paddingLeft: "var(--space-md)", borderLeft: "1px solid var(--hairline)" }}>
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
          <p style={{ ...lead, marginTop: "var(--space-lg)" }}>{item.summary}</p>
          <ul style={{ margin: "var(--space-lg) 0 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
            {item.bullets.map((b, i) => (
              <li key={i} style={{ ...body, paddingLeft: "var(--space-md)", borderLeft: "1px solid var(--hairline)" }}>
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
      <SectionHead eyebrow="Leadership" title="Communities I've led." />
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
      <SectionHead eyebrow="Certifications" title="Credentials." />
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
          <p style={{ ...eyebrow, color: "var(--muted)" }}>Technical toolkit</p>
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
  const navItems = [
    { label: "Intro", href: "#intro" },
    { label: "Projects", href: "#projects" },
    { label: "Work Ex", href: "#work-ex" },
    { label: "Leadership", href: "#leadership" },
    { label: "Certifications", href: "#certifications" },
  ];

  const [active, setActive] = useState("Intro");

  useEffect(() => {
    const ids = ["intro", "projects", "work-ex", "leadership", "certifications"];
    const labelByHref = Object.fromEntries(navItems.map((n) => [n.href.slice(1), n.label]));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(labelByHref[entry.target.id] || "Intro");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
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
          <Button size="sm" href={`mailto:${D.profile.email}`}>
            Contact
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
        headline="Let's talk."
        subhead="Open to graduate roles in data science, AI consulting, and applied ML across Australia and APAC."
        image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000&q=80"
        action={<Button variant="outline" href={`mailto:${D.profile.email}`}>Get in touch</Button>}
      />

      <Footer
        brand={D.profile.name}
        columns={[
          {
            title: "Site",
            links: [
              { label: "Intro", href: "#intro" },
              { label: "Projects", href: "#projects" },
              { label: "Work experience", href: "#work-ex" },
              { label: "Leadership", href: "#leadership" },
              { label: "Certifications", href: "#certifications" },
            ],
          },
          {
            title: "Contact",
            links: [
              { label: D.profile.email, href: `mailto:${D.profile.email}` },
              { label: "LinkedIn", href: D.profile.linkedinUrl },
              { label: "Résumé (PDF)", href: D.profile.resumeUrl },
            ],
          },
          {
            title: "Currently",
            links: [
              { label: "Melbourne, AEST" },
              { label: "Master of Data Science · Monash" },
              { label: "Available Q3 2026" },
            ],
          },
        ]}
        fineprint={`© ${new Date().getFullYear()} Basim Shabir. All rights reserved.`}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
