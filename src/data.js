/* eslint-disable */
/* Content for the Basim Shabir portfolio site. */
window.PortfolioData = {
  profile: {
    name: "BASIM SHABIR",
    tagline: "BUILDING TOWARD A CAREER IN DATA & AI CONSULTING",
    // location: "Melbourne, VIC · Australia",
    resumeUrl: "assets/Basim_Shabir_resume.pdf",
    linkedinUrl: "https://linkedin.com/in/basimshabir",
    email: "basimkhan09@gmail.com",
    portrait: "assets/portrait.jpg",
    intro: "I'm happiest when I'm standing between a technical problem and the person who actually has to use the answer. My thesis with Alfred Health on using ML in determining patient outcomes, bridging teams at my worplace - BYJU'S, and leading a 2000+ members strong student team at Monash have all pointed me the same direction: someone who wants to take technical understanding, use his peoples skills and actually close the gap with it. I want to help people see what data science and AI really are, and how they can do good beyond the hype. That's the exactly why data & AI consulting compliments me, and it's where I'm headed.",
  },

  education: [
    {
      degree: "Master of Data Science",
      org: "Monash University",
      location: "Clayton, VIC",
      period: "Jul 2024 – Jun 2026",
      detail: "WAM: 75.0",
      logo: "assets/monash-logo.svg.webp",
    },
    // {
    //   degree: "B.Tech, Automobile Engineering",
    //   org: "SRM Institute of Science & Technology",
    //   location: "Chennai, India",
    //   period: "Jul 2015 – May 2019",
    //   detail: "First Class with Distinction · 77.52%",
    // },
  ],

  // Each card = one project.
  //
  // `link` is what makes the card clickable. Paste ANY URL here — GitHub repo,
  // Vercel/Netlify deployment, Google Doc, Colab/Jupyter notebook, YouTube demo,
  // Medium article, arXiv PDF — the whole card becomes a link that opens in a
  // new tab, and an "Explore this project →" label appears at the bottom.
  //
  // Leave `link` as "" (empty string) if there's nothing to link to yet — the
  // card will still show image/title/description, just won't be clickable.
  projects: [
    {
      id: "cancer-treatment",
      name: "PREDICTING TREATMENT RESPONSE IN MELANOMA WITH DEEP LEARNING",
      specs: "Monash × Alfred Health · Minor Thesis · Jul 2025 – Jun 2026",
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80",
      description:
        "AI-powered decision-support tool for oncology, built to help distinguish real cancer progression from treatment-related effects in melanoma patients on immunotherapy. Surfaced CT texture features as the strongest discriminators between patient classes - a finding that directly informs treatment decisions.",
      link: "EXPLORE THIS PROJECT →",
    },
    {
      id: "resume-tailor",
      name: "Resume Tailor",
      specs: "Full-stack AI app · FastAPI + React · deployed on Vercel",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
      description:
        "AI-powered web app that tailors resumes to specific job descriptions using the Claude API — built and shipped end to end, from prompt design to production deployment.",
      link: "https://resume-tailor-omega-rosy.vercel.app",
    },
  //   {
  //     id: "byjus-workflow",
  //     name: "Live Classes Workflow",
  //     specs: "BYJU'S · process analysis · 2022–2023",
  //     image:
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  //     description:
  //       "Reduced turnaround time by 25% through workflow redesign across design, content, and engineering. Established user feedback loops that informed product decisions.",
  //     link: "",
  //   },
  //   {
  //     id: "toolbox-india",
  //     name: "Toolbox India — NPO Analytics",
  //     specs: "Medhavi Association · volunteering · Sep 2023 – Mar 2024",
  //     image:
  //       "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
  //     description:
  //       "Analysed social media data and co-developed a content strategy that expanded digital reach. Fundraising pitches contributed to 500,000 INR secured in funding.",
  //     link: "",
  //   },
  ],

  workExperience: [
    {
      org: "Think & Learn Pvt. Ltd. - BYJU'S",
      location: "Bengaluru, India",
      period: "Jul 2019 – Jan 2024",
      roles: [
        {
          title: "Assistant Manager",
          period: "Sep 2023 – Jan 2024",
          bullets: [
            "Acted as the bridge between product, engineering, design, and QA teams across 2 flagship product lines, gathering cross-functional requirements and translating them into scoped, deliverable plans.",
            "Partnered with product, data, and engineering stakeholders to analyse business requirements and align delivery priorities across multiple concurrent workstreams.",
          ],
        },
        {
          title: "Team Lead",
          period: "Jan 2022 – Aug 2023",
          bullets: [
            "Translated business and user requirements into actionable delivery plans across design, content, and engineering functions for two major projects (Live Classes & Learning App).",
            "Redesigned core workflows to cut turnaround time by 25%, and built user feedback loops that turned raw data into product decisions.",
          ],
        },
                {
          title: "Senior Associate",
          period: "Oct 2020 – Dec 2021",
          bullets: [
            "Worked across the data and product side, tracking and reporting on quality metrics for 100+ assets to inform delivery decisions across 3 concurrent projects.",
            "Built reporting on recurring quality patterns, feeding findings back into process standards and product priorities.",
          ],
        },
        {
          title: "Associate",
          period: "Jul 2019 – Sep 2020",
          bullets: [
            "Supported data tracking and reporting across 30+ deliverables, working closely with the product team to align output against requirements.",
            "Analysed gaps between requirements and delivered work, translating findings into structured reporting for the product and content teams.",
          ],
        },
        // {
        //   title: "Senior Associate",
        //   period: "Oct 2020 – Dec 2021",
        //   bullets: [
        //     "Closed out 3 content development projects and led QA across 100+ assets, applying structured quality frameworks to hit compliance and delivery timelines.",
        //   ],
        // },
        // {
        //   title: "Associate",
        //   period: "Jul 2019 – Sep 2020",
        //   bullets: [
        //     "Developed 30+ educational scripts for large-scale digital learning products, translating curriculum requirements into structured, reviewable content formats.",
        //   ],
        // },
      ],
    },
  ],

leadership: [
    {
      id: "mdas-president",
      role: "President",
      org: "Monash Data Science & AI Society (MDAS)",
      period: "Jan 2026 – Jun 2026",
      summary:
        "Took charge of a 2,000+ member society - setting strategic direction, leading a 6-person executive team and 35+ person working committee, and driving industry partnerships with Accenture, Google, and AWS.",
      bullets: [
        "Built and delivered a two-day AI Bootcamp from the ground up, involving 250+ students, with industry representatives from Telstra, AWS, REA Group, EY, and Accenture on stage.",
        "Conceived and delivered \"Women in IT: Unfiltered & Unstoppable,\" landing 5 senior women industry leaders from CXO to mid-level roles as panellists.",
        "Owned the society's budget and operational reporting end-to-end, aligning university administration, the Graduate Students Association, faculty partners, and external stakeholders behind a single plan.",
      ],
      album: [
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80",
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80",
        "https://images.unsplash.com/photo-1560439514-4e9645039924?w=900&q=80",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=900&q=80",
      ],
    },
    {
          id: "mdas-vp",
          role: "Vice President",
          org: "Monash Data Science & AI Society (MDAS)",
          period: "May 2025 - Dec 2025",
          summary:
            "Owned two flagship society events end-to-end - speakers, industry partners, cross-university teams, and every operational detail in between.",
          bullets: [
            "Drove DataWaves 2025 from concept to execution, hosting a 5-member industry panel that pulled in 100+ students.",
            "Built and ran the Inter-University Datathon, sponsored by Allianz - a multi-day competition spanning 200+ participants from 5 universities across Sydney and Melbourne.",
            "Stepped up as a key decision-maker alongside the President and executive committee, shaping team structure, operational planning, and society governance.",
          ],
          album: [
            "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?w=900&q=80",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80",
            "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
          ],
        },
    {
      id: "study-melbourne",
      role: "Team Lead",
      org: "Study Melbourne Leadership Labs - 4Impact Challenge",
      period: "Mar 2025 – May 2025",
      summary:
        "Led a cross-cultural team of 4 through a 10-week startup-style accelerator tackling real-world challenges aligned with the UN Sustainable Development Goals.",
      bullets: [
        "Designed and pitched a solution to help low-English-confidence students in Victoria build communication skills and break down language barriers.",
      ],
      album: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80",
      ],
    },
  ],
certifications: [
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      org: "Amazon Web Services",
      date: "Jul 2026",
    },
    {
      name: "Claude Code 101",
      org: "Anthropic",
      date: "Jun 2026",
    },
    {
      name: "Advanced Business Analytics",
      org: "BACentric Technologies",
      date: "Feb 2024",
    },
    // {
    //   name: "", // ← fill in exact cert name
    //   org: "", // ← fill in issuing org
    //   date: "", // ← fill in date
    // },
  ],
  skills: [
    "Python",
    "SQL",
    "PyTorch",
    "scikit-learn",
    "AWS",
    "FastAPI",
    "React",
    "pandas",
    "NumPy",
    "PowerBI",
    "Tableau",
    "Git",
    "Bash",
    "Matplotlib",
    "Jupyter",
    "Cursor",
    "Claude Code",
    "Canva",
  ],

  // ──────────────────────────────────────────────────────────────
  // Nav — the top-bar labels. Change `label` to rename;
  // `href` must match a section id in app.jsx (leave the # in).
  // ──────────────────────────────────────────────────────────────
  nav: {
    items: [
      { label: "Intro", href: "#intro" },
      { label: "Projects", href: "#projects" },
      { label: "Work Ex", href: "#work-ex" },
      { label: "Leadership", href: "#leadership" },
      { label: "Certifications", href: "#certifications" },
    ],
    contactButtonLabel: "Contact",
  },

  // ──────────────────────────────────────────────────────────────
  // Copy — every heading, button, and label the site shows.
  // Edit here, save, refresh the browser. No build step.
  // ──────────────────────────────────────────────────────────────
  copy: {
    hero: {
      // eyebrow: "Hello there",           // appended with " · <location>"
      resumeButton: "Download résume",
      linkedinButton: "My Linkedin",
    },

    // Each section has an uppercase eyebrow + a big display title.
    // Leave `title` as "" to hide it (Education is set up this way).
    sections: {
      education:      { eyebrow: "",       title: "My Education" },
      projects:       { eyebrow: "",   title: "My Projects" },
      workExperience: { eyebrow: "", title: "Work experience" },
      leadership:     { eyebrow: "",      title: "Leadership Activities" },
      certifications: { eyebrow: "",  title: "Certifications" },
    },

    // Text on the project cards.
    projectCard: {
      linkLabel: "Explore this project →",
    },

    // Small eyebrow above the skills chips.
    techToolkitLabel: "Technical toolkit",

    // The pre-footer CTA band.
    cta: {
      headline: "Let's talk.",
      subhead: "Open to graduate roles in data science, AI, data & AI consulting, and beyond across Australia.",
      actionLabel: "Get in touch",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=2000&q=80",
    },

    // Footer text. `currentlyLinks` are static labels (no URLs);
    // set fineprint to null to auto-render "© YYYY <name>. All rights reserved."
    footer: {
      siteColumnTitle: "Site",
      contactColumnTitle: "Contact",
      currentlyColumnTitle: "Currently",
      currentlyLinks: [
        "Melbourne, AEST",
        "Master of Data Science · Monash",
        "Available Q3 2026",
      ],
      resumeLabel: "Résumé (PDF)",
      linkedinLabel: "LinkedIn",
      fineprint: null,
    },
  },
};
