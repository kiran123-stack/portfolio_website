import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: "mindpulse",
    title: "MindPulse",
    category: "Behavioral AI",
    description:
      "A prototype that reads typing rhythm and keystroke dynamics right in the browser to surface real-time stress signals. Built to explore privacy-first behavioral sensing — the input never leaves the user's device.",
    meta: "Client-side inference · Encrypted input",
    tech: ["Next.js", "AI (Grok)", "GSAP"],
    link: "https://mind-pluse.vercel.app/",
    github: "https://github.com/kiran123-stack/MindPluse",
    image: "/images.jfif",
    gridClass: "lg:col-span-7 lg:row-span-2",
    featured: true,
  },
  {
    id: "natours",
    title: "Natours AI",
    category: "AI Travel Planner",
    description:
      "Turns a short brief into a structured, multi-day itinerary by chaining model calls to assemble routes, stops and timing.",
    meta: "One prompt → full itinerary",
    tech: ["Gemini AI", "Node.js"],
    link: "https://natours-ai.vercel.app/",
    github: "https://github.com/kiran123-stack/natours-ai",
    image: "/air.webp",
    gridClass: "lg:col-span-5 lg:row-span-1",
  },
  {
    id: "cinesphere",
    title: "Cinesphere",
    category: "Streaming UI",
    description:
      "A movie-discovery interface built around fast, image-heavy grids and smooth, responsive browsing.",
    meta: "Performance-tuned grid",
    tech: ["React", "CSS3"],
    link: "https://cine-sphere-one.vercel.app/",
    github: "#",
    image: "/movie.jpg",
    gridClass: "lg:col-span-5 lg:row-span-1",
  },
  {
    id: "oggy-landing",
    title: "Oggy Visuals",
    category: "Creative Frontend",
    description:
      "A motion-driven landing page built as a GSAP study — scroll-triggered sequences and micro-interactions that tell a visual story.",
    meta: "Animation & interaction study",
    tech: ["GSAP", "JavaScript", "HTML5"],
    link: "https://oggy-nu.vercel.app/",
    github: "#",
    image: "/oggy.webp",
    gridClass: "lg:col-span-12 lg:row-span-1",
  },
];

const Work = () => {
  return (
    <section className="w-full bg-[#020617] py-24 text-slate-300">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-2 font-mono text-sm uppercase tracking-widest text-blue-500">
            // Selected Work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Things I&apos;ve designed &amp; built
          </h2>
        </div>

        {/* Bento grid — image sits behind the text, so content can never
            overflow the card regardless of how tall each tile is. */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-12">
          {projects.map((p) => (
            <article
              key={p.id}
              className={`group relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900 ${p.gridClass}`}
            >
              {/* Background image */}
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
              />

              {/* Dark gradient keeps the text readable over any image */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/30" />

              {/* Content */}
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                {/* Top row: category + links */}
                <div className="flex items-start justify-between">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                    {p.category}
                  </span>

                  <div className="flex gap-3 text-white/60">
                    {p.github !== "#" && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} source code`}
                        className="transition hover:text-white"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${p.title}`}
                      className="transition hover:text-white"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>

                {/* Bottom block: title, description, tech + meta */}
                <div>
                  <h3
                    className={`font-bold text-white ${
                      p.featured ? "text-3xl sm:text-4xl" : "text-2xl"
                    }`}
                  >
                    {p.title}
                  </h3>

                  <p
                    className={`mt-2 max-w-xl text-sm leading-relaxed text-slate-300/90 ${
                      p.featured ? "" : "line-clamp-2"
                    }`}
                  >
                    {p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="ml-auto text-xs font-medium text-blue-400">
                      {p.meta}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle hover ring */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/0 transition group-hover:ring-blue-500/40" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
