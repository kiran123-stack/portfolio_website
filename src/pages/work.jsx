import React, { useEffect, useState } from "react";

const PROJECTS = [
  {
    number: "01",
    id: "mindpulse",
    title: "MindPulse",
    category: "Behavioral AI",
    status: "Prototype",
    year: "2025",
    description:
      "Reads typing rhythm and keystroke dynamics right in the browser to surface real-time stress signals — a prototype in privacy-first behavioral sensing.",
    approach:
      "Every signal is scored client-side. The keystroke stream never leaves the device — inference runs entirely in-browser against a Grok-backed model, with GSAP driving the live signal visualization.",
    tech: ["Next.js", "AI (Grok)", "GSAP"],
    image: "/images.jfif",
    link: "https://mind-pluse.vercel.app/",
    github: "https://github.com/kiran123-stack/MindPluse",
    challenge:
      "Create a behavioral AI experience capable of interpreting typing patterns while keeping the interaction privacy-focused.",
    solution:
      "MindPulse processes the typing signal on the client side and turns the resulting behavioral data into a real-time visual experience.",
  },

  {
    number: "02",
    id: "meddak",
    title: "MedDak",
    category: "Healthcare Procurement",
    status: "In Progress",
    year: "2026",
    description:
      "A healthcare procurement platform for medical apparel, surgical instruments, and hospital equipment — built for buyers who need to move fast without the site feeling like a scanned catalog.",
    approach:
      "Component-based React build on a teal/navy brand system, with a sticky-image services layout and IntersectionObserver-driven reveals in place of scroll-jacked animation.",
    tech: ["React", "Tailwind CSS", "GSAP"],
    image: "/cosmic.jpg",
    link: "https://kiran123-stack.github.io/med-dak/",
    github: "https://github.com/kiran123-stack/med-dak",
    challenge:
      "Design a procurement-focused healthcare interface that feels like a modern digital product rather than a static catalogue.",
    solution:
      "The experience uses reusable React components, structured service sections and subtle scroll-based reveals to make the procurement journey easier to navigate.",
  },

  {
    number: "03",
    id: "natours",
    title: "Natours AI",
    category: "AI Travel Planner",
    status: "Live",
    year: "2025",
    description:
      "Turns a short brief into a structured, multi-day itinerary — routes, stops, and timing assembled automatically instead of built by hand.",
    approach:
      "Chains Gemini model calls behind a Node.js service, so one prompt fans out into a full day-by-day plan rather than a single monolithic generation pass.",
    tech: ["Gemini AI", "Node.js"],
    image: "/air.webp",
    link: "https://natours-ai.vercel.app/",
    github: "https://github.com/kiran123-stack/natours-ai",
    challenge:
      "Reduce the effort required to manually create a structured multi-day travel itinerary.",
    solution:
      "A Node.js service coordinates Gemini-powered generation so a short user brief can become a structured itinerary.",
  },

  {
    number: "04",
    id: "cinesphere",
    title: "Cinesphere",
    category: "Streaming UI",
    status: "Live",
    year: "2024",
    description:
      "A movie-discovery interface built around fast, image-heavy grids — browsing that stays smooth even when every tile is a poster.",
    approach:
      "Performance-tuned grid rendering in plain React and CSS3, prioritizing scroll feel over feature count.",
    tech: ["React", "CSS3"],
    image: "/movie.jpg",
    link: "https://cine-sphere-one.vercel.app/",
    github: null,
    challenge:
      "Build an image-heavy movie discovery interface without making browsing feel slow or overloaded.",
    solution:
      "The interface focuses on a lightweight React/CSS grid and prioritizes smooth scrolling and straightforward discovery.",
  },

  {
    number: "05",
    id: "oggy-landing",
    title: "Oggy Visuals",
    category: "Creative Frontend",
    status: "Live",
    year: "2024",
    description:
      "A motion-driven landing page built to prove out sequencing and micro-interactions on nothing but vanilla JavaScript, HTML, and CSS.",
    approach:
      "No framework, no animation library — hand-rolled sequencing and hover states, used as a foundation study before reaching for GSAP on client work.",
    tech: ["CSS3", "JavaScript", "HTML5"],
    image: "/oggy.webp",
    link: "https://oggy-nu.vercel.app/",
    github: null,
    challenge:
      "Explore how much interaction and visual sequencing could be achieved without relying on a frontend framework or animation library.",
    solution:
      "The landing page uses vanilla HTML, CSS and JavaScript with custom sequencing and hover interactions.",
  },

  {
    number: "06",
    id: "disitech",
    title: "DisiTech",
    category: "Web Dev Agency",
    status: "Concept",
    year: "2025",
    description:
      "A conversion-focused agency landing page built on one idea: a website should be judged as a growth engine, not a portfolio piece.",
    approach:
      "Problem-to-solution storytelling drives the page order — the cost of a slow site, the process that fixes it, then proof in three short case studies.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "https://kiran123-stack.github.io/disitech/hero.jpg",
    link: "https://kiran123-stack.github.io/disitech/",
    github: null,
    challenge:
      "Create an agency website that communicates business value instead of simply displaying design work.",
    solution:
      "The page is structured around problem → solution → proof, using case-study storytelling as the main conversion mechanism.",
  },

  {
    number: "07",
    id: "trendmedi",
    title: "TrendMedi",
    category: "Healthcare B2B",
    status: "Concept",
    year: "2026",
    description:
      "A B2B site for a medical-supply manufacturer — product categories, manufacturing quality, and procurement process laid out for a purchasing committee.",
    approach:
      "Client-side product search and filtering plus an interactive product modal stand in for a static catalog PDF, backed by dedicated quality and procurement sections.",
    tech: ["HTML5", "CSS3", "JavaScript", "SVG"],
    image:
      "https://kiran123-stack.github.io/trendmedi_1/images/hospital_corridor.jpg",
    link: "https://kiran123-stack.github.io/trendmedi_1/",
    github: null,
    challenge:
      "Transform a traditional medical-supply catalogue experience into a structured B2B digital product.",
    solution:
      "Product filtering, interactive product details and dedicated procurement sections create a more usable purchasing experience.",
  },

  {
    number: "08",
    id: "ibn-sima",
    title: "Ibn Sima",
    category: "Medical Tourism · i18n",
    status: "In Development",
    year: "2026",
    description:
      "A bilingual English / Arabic medical tourism platform built as a luxury travel concierge experience for patients from Iraq and the UAE.",
    approach:
      "A zero-dependency i18n system flips the entire layout to RTL through a single language hook, with GSAP and Lenis handling scroll feel.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Tailwind v4",
      "GSAP",
      "Lenis",
    ],
    image:
      "https://github.com/user-attachments/assets/274423db-3168-4135-b3c0-dcbb04843e04",
    link: null,
    github: "https://github.com/kiran123-stack/ibn_sima",
    challenge:
      "Create a premium medical-tourism experience supporting both English and Arabic users.",
    solution:
      "The interface switches between LTR and RTL layouts while maintaining a consistent visual system.",
  },

  {
    number: "09",
    id: "legend-salon",
    title: "Legend Salon",
    category: "Salon Website",
    status: "Live",
    year: "2026",
    description:
      "A premium salon website designed around strong visual presentation, service discovery and a polished customer-facing experience.",
    approach:
      "A responsive visual system combines premium typography, service presentation, imagery and interactive sections into a focused salon experience.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image:
      "https://res.cloudinary.com/smiudv7m/image/upload/f_auto,q_auto/Screenshot_2026-10-06_172744",
    link: "https://kiran123-stack.github.io/legend_salon/",
    github: "https://github.com/kiran123-stack/legend_salon",
    challenge:
      "Create a visually polished salon website that communicates premium service quality immediately.",
    solution:
      "A clean visual system, responsive layout and service-focused sections create a stronger digital presence for the salon.",
  },

  {
    number: "10",
    id: "careglobe",
    title: "CareGlobe",
    category: "Medical Travel Experience",
    status: "Live",
    year: "2026",
    description:
      "An immersive medical-travel experience focused on cinematic interaction, advanced motion and premium digital presentation.",
    approach:
      "The project explores large-scale canvas animation, interactive perspective effects, radial interface elements and glassmorphic UI to create an immersive experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas", "Animation"],
    image:
      "https://kiran123-stack.github.io/careGlobe/",
    link: "https://kiran123-stack.github.io/careGlobe/",
    github: "https://github.com/kiran123-stack/careGlobe",
    challenge:
      "Explore how motion and immersive interaction can present a medical-travel experience differently from a conventional healthcare website.",
    solution:
      "The experience combines cinematic scrolling, interactive visual composition and advanced motion to create a more immersive healthcare-travel presentation.",
  },
];

const STATUS_STYLES = {
  Live: "bg-[#edf8df] text-[#315d18]",
  Prototype: "bg-[#fff0bf] text-[#946400]",
  Concept: "bg-[#f3e9d1] text-[#775f35]",
  "In Progress": "bg-[#ffe3a5] text-[#895a00]",
  "In Development": "bg-[#ffe3a5] text-[#895a00]",
};

export default function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <section className="projects-section">
        <div className="projects-container">

          {/* HEADER */}

          <div className="projects-header">
            <div>
              
             

              <h1>
                Selected
                <span>Projects.</span>
              </h1>

              <p className="handwritten">
                — Real Designs. Real Results. ♡
              </p>
            </div>
          </div>


          {/* STATS */}

          <div className="stats-grid">

            <Stat
              icon="▣"
              value="10"
              label="Projects Completed"
            />

            <Stat
              icon="◎"
              value="1"
              label="Internship"
            />

            <Stat
              icon="♙"
              value="1"
              label="Research — KONsensX"
            />

            <Stat
              icon="◷"
              value="2500+"
              label="Hours of Work"
            />

          </div>


          {/* PROJECTS */}

          <div className="project-grid">

            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}

          </div>

        </div>
      </section>


      {/* CASE STUDY */}

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}


/* =====================================================
   STAT
===================================================== */

function Stat({ icon, value, label }) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-content">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>

    </div>
  );
}


/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">

      <div className="project-number">
        {project.number}
      </div>


      <div className="project-image-wrapper">

        <img
          src={project.image}
          alt={`${project.title} website`}
          className="project-image"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="image-overlay" />

        <span
          className={`status-pill ${
            STATUS_STYLES[project.status] || STATUS_STYLES.Live
          }`}
        >
          {project.status}
        </span>

      </div>


      <div className="project-content">

        <div className="project-title-row">

          <div>

            <h2>
              {project.title}
            </h2>

            <p>
              {project.category}
            </p>

          </div>

          <span className="project-year">
            {project.year}
          </span>

        </div>


        <p className="project-description">
          {project.description}
        </p>


        <div className="project-tags">

          {project.tech.slice(0, 3).map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}

        </div>


        <button
          className="case-study-button"
          onClick={onOpen}
        >
          <span>
            View Case Study
          </span>

          <span className="arrow">
            ↗
          </span>
        </button>

      </div>

    </article>
  );
}


/* =====================================================
   CASE STUDY MODAL
===================================================== */

function CaseStudyModal({ project, onClose }) {
  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >

      <div className="case-study-modal">

        <div className="modal-top">

          <div className="modal-file">
            CASE STUDY / {project.number}
          </div>

          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close case study"
          >
            ×
          </button>

        </div>


        {/* HERO */}

        <div className="modal-hero">

          <img
            src={project.image}
            alt={project.title}
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="modal-hero-overlay" />

          <div className="modal-hero-content">

            <span
              className={`status-pill ${
                STATUS_STYLES[project.status] || STATUS_STYLES.Live
              }`}
            >
              {project.status}
            </span>

            <p>
              {project.category} · {project.year}
            </p>

            <h2>
              {project.title}
            </h2>

          </div>

        </div>


        {/* BODY */}

        <div className="modal-body">

          <section className="modal-intro">

            <span className="section-label">
              OVERVIEW
            </span>

            <p>
              {project.description}
            </p>

          </section>


          <div className="modal-two-column">

            <section>

              <span className="section-label">
                01 — CHALLENGE
              </span>

              <h3>
                The problem
              </h3>

              <p>
                {project.challenge}
              </p>

            </section>


            <section>

              <span className="section-label">
                02 — SOLUTION
              </span>

              <h3>
                The approach
              </h3>

              <p>
                {project.solution}
              </p>

            </section>

          </div>


          <section className="implementation-section">

            <span className="section-label">
              03 — IMPLEMENTATION
            </span>

            <h3>
              How it was built
            </h3>

            <p>
              {project.approach}
            </p>

          </section>


          <section className="stack-section">

            <span className="section-label">
              TECHNOLOGY
            </span>

            <div className="modal-tech">

              {project.tech.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}

            </div>

          </section>


          {/* LINKS */}

          <div className="modal-actions">

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="live-button"
              >
                Visit Live Site
                <span>↗</span>
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                View GitHub Repo
                <span>↗</span>
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}


/* =====================================================
   STYLES
===================================================== */

const styles = `

.projects-section {
  width: 100%;
  min-height: 100vh;

  /* ORIGINAL DARK MAIN BACKGROUND */
  background: #0A0C10;

  color: #172019;

  padding: 42px 20px 70px;

  font-family:
    Arial,
    Helvetica,
    sans-serif;
}

.projects-container {
  width: 100%;
  max-width: 1180px;

  margin: 0 auto;

  position: relative;
}


/* =====================================================
   HEADER
===================================================== */

.projects-header {
  position: relative;

  margin-bottom: 25px;
}

.brand-mark {
  font-family: Georgia, serif;

  font-style: italic;

  font-size: 21px;

  font-weight: 700;

  color: #f5f0e3;

  margin-bottom: 18px;
}

.page-label {
  position: absolute;

  top: 0;
  right: 0;

  font-size: 9px;

  letter-spacing: .05em;

  color: rgba(255,255,255,.45);
}

.projects-header h1 {
  margin: 0;

  font-size: clamp(48px, 7vw, 76px);

  line-height: .86;

  letter-spacing: -0.065em;

  font-weight: 800;

  color: #ffffff;
}

.projects-header h1 span {
  display: block;

  color: #eda719;
}

.handwritten {
  margin: 10px 0 0 10px;

  color: #b8b19e;

  font-family: Georgia, serif;

  font-style: italic;

  font-size: 15px;

  transform: rotate(-2deg);
}


/* =====================================================
   STATS
===================================================== */

.stats-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 10px;

  margin: 28px 0 25px;
}

.stat-card {
  min-height: 55px;

  background: rgba(255,255,255,.65);

  border: 1px solid #ded7c5;

  border-radius: 10px;

  display: flex;

  align-items: center;

  gap: 10px;

  padding: 9px 13px;

  box-shadow:
    0 2px 7px rgba(73, 61, 31, .05);
}

.stat-icon {
  width: 27px;
  height: 27px;

  border-radius: 7px;

  display: flex;

  justify-content: center;
  align-items: center;

  background: #fff1bf;

  color: #df9b09;

  font-size: 14px;

  flex-shrink: 0;
}

.stat-content {
  display: flex;

  flex-direction: column;

  gap: 2px;
}

.stat-content strong {
  font-size: 15px;

  line-height: 1;

  color: black;
}

.stat-content span {
  font-size: 8px;

  color: black;

  letter-spacing: .02em;
}


/* =====================================================
   PROJECT GRID
===================================================== */

.project-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 12px;
}


/* =====================================================
   PROJECT CARD
===================================================== */

.project-card {
  position: relative;

  background: #fffdf7;

  border: 1px solid #ded8c8;

  border-radius: 12px;

  overflow: hidden;

  box-shadow:
    0 4px 12px rgba(71, 62, 40, .08);

  transition:
    transform .25s ease,
    box-shadow .25s ease;
}

.project-card:hover {
  transform: translateY(-4px);

  box-shadow:
    0 12px 28px rgba(71, 62, 40, .13);
}

.project-number {
  position: absolute;

  z-index: 5;

  top: 6px;
  left: 6px;

  min-width: 20px;
  height: 20px;

  border-radius: 50%;

  background: #17251c;

  color: white;

  display: flex;

  justify-content: center;
  align-items: center;

  font-size: 7px;

  font-weight: 700;
}


/* =====================================================
   IMAGE
===================================================== */

.project-image-wrapper {
  height: 122px;

  position: relative;

  overflow: hidden;

  background: #ded7c5;
}

.project-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition:
    transform .5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.04);
}

.image-overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(15, 24, 18, .02),
      rgba(15, 24, 18, .17)
    );
}


/* =====================================================
   STATUS
===================================================== */

.status-pill {
  position: absolute;

  top: 8px;
  right: 8px;

  padding: 4px 7px;

  border-radius: 20px;

  font-size: 7px;

  line-height: 1;

  font-weight: 700;

  letter-spacing: .04em;
}


/* =====================================================
   CONTENT
===================================================== */

.project-content {
  padding: 11px;
}

.project-title-row {
  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  gap: 5px;

  margin-bottom: 6px;
}

.project-title-row h2 {
  margin: 0;

  color: #1d2a20;

  font-size: 14px;

  line-height: 1.05;

  font-weight: 800;
}

.project-title-row p {
  margin: 3px 0 0;

  color: #b07a08;

  font-size: 7px;

  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: .07em;
}

.project-year {
  color: #989987;

  font-size: 8px;
}

.project-description {
  margin: 0;

  min-height: 49px;

  color: #73766b;

  font-size: 8px;

  line-height: 1.5;
}

.project-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 4px;

  margin: 8px 0;
}

.project-tags span {
  background: #f5efdf;

  color: #6e6e5e;

  border-radius: 3px;

  padding: 3px 5px;

  font-size: 6px;

  font-weight: 600;
}


/* =====================================================
   CASE STUDY BUTTON
===================================================== */

.case-study-button {
  width: 100%;

  border: 0;

  border-radius: 5px;

  padding: 7px 8px;

  background: #163b26;

  color: #fffdf4;

  cursor: pointer;

  display: flex;

  justify-content: space-between;

  align-items: center;

  font-size: 7px;

  font-weight: 700;

  transition:
    background .2s ease,
    transform .2s ease;
}

.case-study-button:hover {
  background: #205434;
}

.case-study-button .arrow {
  font-size: 11px;
}


/* =====================================================
   MODAL BACKDROP
===================================================== */

.modal-backdrop {
  position: fixed;

  inset: 0;

  z-index: 9999;

  background: rgba(16, 23, 18, .72);

  backdrop-filter: blur(8px);

  padding: 25px;

  display: flex;

  align-items: center;

  justify-content: center;

  animation: fadeIn .2s ease;
}


/* =====================================================
   MODAL
===================================================== */

.case-study-modal {
  width: min(900px, 100%);

  max-height: 92vh;

  overflow-y: auto;

  background: #fffdf7;

  border-radius: 18px;

  border: 1px solid #ddd6c4;

  box-shadow:
    0 25px 80px rgba(0,0,0,.3);

  animation: modalIn .25s ease;
}


/* =====================================================
   MODAL TOP
===================================================== */

.modal-top {
  height: 50px;

  padding: 0 18px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  border-bottom:
    1px solid #e8e1d2;
}

.modal-file {
  color: #8a836f;

  font-size: 8px;

  font-weight: 700;

  letter-spacing: .14em;
}

.close-button {
  width: 30px;
  height: 30px;

  border: 0;

  border-radius: 50%;

  background: #f1ecde;

  color: #354236;

  font-size: 20px;

  cursor: pointer;

  line-height: 1;
}


/* =====================================================
   MODAL HERO
===================================================== */

.modal-hero {
  height: 290px;

  position: relative;

  overflow: hidden;
}

.modal-hero img {
  width: 100%;
  height: 100%;

  object-fit: cover;
}

.modal-hero-overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(14, 29, 19, .95),
      rgba(14, 29, 19, .1)
    );
}

.modal-hero-content {
  position: absolute;

  bottom: 28px;

  left: 32px;
  right: 32px;

  color: white;
}

.modal-hero-content p {
  margin: 10px 0 5px;

  color: #f3bd38;

  font-size: 9px;

  text-transform: uppercase;

  letter-spacing: .12em;

  font-weight: 700;
}

.modal-hero-content h2 {
  margin: 0;

  font-size: clamp(35px, 6vw, 58px);

  line-height: .95;

  letter-spacing: -.045em;
}


/* =====================================================
   MODAL BODY
===================================================== */

.modal-body {
  padding: 32px;
}

.section-label {
  display: block;

  margin-bottom: 9px;

  color: #b27a05;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: .16em;
}


/* =====================================================
   OVERVIEW
===================================================== */

.modal-intro {
  padding-bottom: 25px;

  border-bottom:
    1px solid #e8e1d2;
}

.modal-intro p {
  max-width: 730px;

  margin: 0;

  color: #444b43;

  font-size: 17px;

  line-height: 1.65;
}


/* =====================================================
   CHALLENGE / SOLUTION
===================================================== */

.modal-two-column {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 45px;

  padding: 30px 0;

  border-bottom:
    1px solid #e8e1d2;
}

.modal-two-column h3,
.implementation-section h3 {
  margin: 0 0 8px;

  color: #1c291f;

  font-size: 21px;
}

.modal-two-column p,
.implementation-section p {
  margin: 0;

  color: #71766c;

  font-size: 13px;

  line-height: 1.7;
}


/* =====================================================
   IMPLEMENTATION
===================================================== */

.implementation-section {
  padding: 30px 0;

  border-bottom:
    1px solid #e8e1d2;
}

.implementation-section p {
  max-width: 780px;
}


/* =====================================================
   STACK
===================================================== */

.stack-section {
  padding: 25px 0;
}

.modal-tech {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;
}

.modal-tech span {
  padding: 7px 10px;

  border-radius: 5px;

  background: #f5efdf;

  border:
    1px solid #e5ddca;

  color: #5e6358;

  font-size: 9px;

  font-weight: 700;
}


/* =====================================================
   BUTTONS
===================================================== */

.modal-actions {
  display: flex;

  flex-wrap: wrap;

  gap: 9px;

  padding-top: 5px;
}

.live-button,
.github-button {
  text-decoration: none;

  padding: 11px 17px;

  border-radius: 6px;

  font-size: 10px;

  font-weight: 800;

  display: inline-flex;

  align-items: center;

  gap: 12px;
}

.live-button {
  background: #173d27;

  color: white;
}

.github-button {
  background: #f4eee0;

  color: #354237;

  border:
    1px solid #ded6c3;
}

.live-button:hover {
  background: #245737;
}

.github-button:hover {
  background: #ebe3d1;
}


/* =====================================================
   ANIMATIONS
===================================================== */

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modalIn {
  from {
    opacity: 0;

    transform:
      translateY(18px)
      scale(.98);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 900px) {

  .project-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .page-label {
    position: static;

    margin-bottom: 15px;
  }
}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 560px) {

  .projects-section {
    padding: 28px 12px 50px;
  }

  .projects-header h1 {
    font-size: 54px;
  }

  .page-label {
    font-size: 7px;
  }

  .stats-grid {
    grid-template-columns: 1fr 1fr;

    gap: 7px;
  }

  .stat-card {
    min-height: 52px;

    padding: 7px 8px;
  }

  .stat-content strong {
    font-size: 13px;
  }

  .stat-content span {
    font-size: 7px;
  }

  .project-grid {
    grid-template-columns: 1fr;

    gap: 14px;
  }

  .project-image-wrapper {
    height: 190px;
  }

  .project-content {
    padding: 14px;
  }

  .project-title-row h2 {
    font-size: 18px;
  }

  .project-title-row p {
    font-size: 8px;
  }

  .project-description {
    min-height: auto;

    font-size: 10px;
  }

  .project-tags span {
    font-size: 7px;
  }

  .case-study-button {
    padding: 10px;

    font-size: 9px;
  }

  .modal-backdrop {
    padding: 0;
  }

  .case-study-modal {
    width: 100%;

    height: 100%;

    max-height: 100vh;

    border-radius: 0;
  }

  .modal-hero {
    height: 230px;
  }

  .modal-body {
    padding: 22px 18px 35px;
  }

  .modal-two-column {
    grid-template-columns: 1fr;

    gap: 28px;
  }

  .modal-intro p {
    font-size: 15px;
  }

  .modal-two-column p,
  .implementation-section p {
    font-size: 12px;
  }

  .modal-actions {
    flex-direction: column;
  }

  .live-button,
  .github-button {
    justify-content: center;
  }
}


/* =====================================================
   VERY SMALL DEVICES
===================================================== */

@media (max-width: 360px) {

  .projects-header h1 {
    font-size: 46px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .project-image-wrapper {
    height: 165px;
  }
}
`;


/* =====================================================
   INJECT STYLES
===================================================== */

if (typeof document !== "undefined") {
  const styleId = "selected-projects-styles";

  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");

    style.id = styleId;

    style.innerHTML = styles;

    document.head.appendChild(style);
  }
}
