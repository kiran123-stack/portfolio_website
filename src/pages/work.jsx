import React, { useState } from "react";
import { Github, ArrowUpRight } from "lucide-react";

const BASE_URL = import.meta.env.BASE_URL;

const asset = (path) => {
  const cleanPath = path.replace(/^\/+/, "");
  return `${BASE_URL}${cleanPath}`;
};

const CASES = [
  {
    file: "01",
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
    image: asset("images.jfif"),
    link: "https://mind-pluse.vercel.app/",
    github: "https://github.com/kiran123-stack/MindPluse",
  },

  {
    file: "02",
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
    image: asset("cosmic.jpg"),
    link: "https://kiran123-stack.github.io/med-dak/",
    github: "https://github.com/kiran123-stack/med-dak",
  },

  {
    file: "03",
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
    image: asset("air.webp"),
    link: "https://natours-ai.vercel.app/",
    github: "https://github.com/kiran123-stack/natours-ai",
  },

  {
    file: "04",
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
    image: asset("movie.jpg"),
    link: "https://cine-sphere-one.vercel.app/",
    github: null,
  },

  {
    file: "05",
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
    image: asset("oggy.webp"),
    link: "https://oggy-nu.vercel.app/",
    github: null,
  },

  {
    file: "06",
    id: "disitech",
    title: "DisiTech",
    category: "Web Dev Agency",
    status: "Concept",
    year: "2025",
    description:
      "A conversion-focused agency landing page built on one idea: a website should be judged as a growth engine, not a portfolio piece.",
    approach:
      "Problem-to-solution storytelling drives the page order — the cost of a slow site, the process that fixes it, then proof in three short case studies written in a challenge / solution / result format.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "https://kiran123-stack.github.io/disitech/hero.jpg",
    link: "https://kiran123-stack.github.io/disitech/",
    github: null,
  },

  {
    file: "07",
    id: "trendmedi",
    title: "TrendMedi",
    category: "Healthcare B2B",
    status: "Concept",
    year: "2026",
    description:
      "A B2B site for a medical-supply manufacturer — product categories, manufacturing quality, and procurement process laid out for a purchasing committee, not a casual browser.",
    approach:
      "Client-side product search and filtering plus an interactive product modal stand in for a static catalog PDF, backed by dedicated quality, industries-served, and five-step procurement sections.",
    tech: ["HTML5", "CSS3", "JavaScript", "SVG"],
    image:
      "https://kiran123-stack.github.io/trendmedi_1/images/hospital_corridor.jpg",
    link: "https://kiran123-stack.github.io/trendmedi_1/",
    github: null,
  },

  {
    file: "08",
    id: "ibn-sima",
    title: "Ibn Sima",
    category: "Medical Tourism · i18n",
    status: "Live",
    year: "2026",
    description:
      "A bilingual (English / Arabic) medical tourism platform built as a luxury travel concierge experience for patients from Iraq and the UAE — not a clinical medical site.",
    approach:
      "A zero-dependency i18n system with no routing library and no build-time compilation, flipping the entire layout to RTL instantly through a single useLanguage() hook, with GSAP and Lenis handling scroll feel.",
    tech: ["Next.js 16", "TypeScript", "Tailwind v4", "GSAP", "Lenis"],
    image:
      "https://picsum.photos/seed/ibn-sima-concierge/1200/800",
    link: "https://ibn-sima.vercel.app/",
    github: null,
  },
];

const STATUS_STYLES = {
  Live: "text-emerald-400 border-emerald-400/30",
  Concept: "text-[#C6A15B] border-[#C6A15B]/30",
  Prototype: "text-sky-400 border-sky-400/30",
  "In Progress": "text-orange-400 border-orange-400/30",
};

const Work = () => {
  const [active, setActive] = useState(0);
  const current = CASES[active];

  return (
    <section className="w-full bg-[#0A0C10] py-24 text-[#EDEAE1]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
      `}</style>

      <div
        className="mx-auto max-w-7xl px-6"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      >
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-4 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-3 text-xs uppercase tracking-[0.3em] text-[#C6A15B]"
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
            >
              Case File Archive
            </p>

            <h2
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Things I&apos;ve designed &amp; built
            </h2>
          </div>

          <p
            className="max-w-sm text-xs leading-relaxed text-white/40"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            {CASES.length} files on record. Open one to see the brief, the
            approach, and what shipped.
          </p>
        </div>

        {/* Archive */}
        <div className="flex flex-col gap-0 overflow-hidden lg:flex-row lg:rounded-2xl lg:border lg:border-white/10">
          {/* Index rail */}
          <div className="flex gap-2 overflow-x-auto pb-1 lg:w-72 lg:flex-none lg:flex-col lg:gap-0 lg:overflow-visible lg:border-r lg:border-white/10 lg:bg-[#0D1016] lg:pb-0">
            {CASES.map((c, i) => {
              const isActive = i === active;

              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={isActive ? "true" : undefined}
                  className={`group flex flex-shrink-0 items-center gap-3 border-b border-white/5 px-4 py-4 text-left transition-colors lg:w-full lg:flex-shrink ${
                    isActive
                      ? "bg-[#161A22]"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`text-xs ${
                      isActive ? "text-[#C6A15B]" : "text-white/30"
                    }`}
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    {c.file}
                  </span>

                  <span className="min-w-[7rem] flex-1">
                    <span
                      className={`block text-sm font-medium ${
                        isActive ? "text-white" : "text-white/60"
                      }`}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    >
                      {c.title}
                    </span>

                    <span
                      className="block text-[10px] uppercase tracking-wider text-white/30"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      {c.category}
                    </span>
                  </span>

                  <span
                    className={`hidden h-1.5 w-1.5 flex-none rounded-full lg:block ${
                      isActive ? "bg-[#C6A15B]" : "bg-white/15"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Case panel */}
          <div
            key={current.id}
            className="relative flex-1 lg:bg-[#12151B]"
          >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden sm:h-80">
              <img
                src={current.image}
                alt={`${current.title} project preview`}
                loading={active === 0 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover opacity-70 transition-transform duration-700"
                onError={(event) => {
                  event.currentTarget.style.opacity = "0.2";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#12151B] via-[#12151B]/40 to-transparent" />

              <span
                className={`absolute right-5 top-5 rounded-full border px-3 py-1 text-[10px] uppercase tracking-widest backdrop-blur-sm ${
                  STATUS_STYLES[current.status] ||
                  "border-white/20 text-white/60"
                }`}
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                {current.status}
              </span>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-10">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <p
                    className="mb-1 text-xs uppercase tracking-widest text-[#C6A15B]"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    File {current.file} — {current.category} ·{" "}
                    {current.year}
                  </p>

                  <h3
                    className="text-3xl font-semibold text-white sm:text-4xl"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {current.title}
                  </h3>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {current.github && (
                    <a
                      href={current.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${current.title} source code`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-white/40 hover:text-white"
                    >
                      <Github size={16} />
                    </a>
                  )}

                  {current.link && (
                    <a
                      href={current.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${current.title}`}
                      className="flex items-center gap-1.5 rounded-full border border-[#C6A15B]/40 px-4 py-2 text-xs uppercase tracking-wider text-[#C6A15B] transition hover:bg-[#C6A15B]/10"
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                      }}
                    >
                      Open File
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-white/75">
                {current.description}
              </p>

              {/* Details */}
              <div className="grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                {/* Approach */}
                <div>
                  <p
                    className="mb-2 text-[10px] uppercase tracking-widest text-white/35"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    Approach
                  </p>

                  <p className="text-sm leading-relaxed text-white/60">
                    {current.approach}
                  </p>
                </div>

                {/* Stack */}
                <div>
                  <p
                    className="mb-2 text-[10px] uppercase tracking-widest text-white/35"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {current.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-wide text-white/60"
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                        }}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
