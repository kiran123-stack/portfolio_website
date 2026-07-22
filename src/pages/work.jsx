import React from "react";
import { FaGithub, FaExternalLinkAlt, FaMicrochip, FaBolt, FaShieldAlt } from "react-icons/fa";

const Work = () => {

  const projects = [
    {
      id: "mindpulse",
      title: "MindPulse",
      category: "Behavioral AI",
      stats: "AES-256 Encrypted",
      challenge: "High-latency detection in real-time typing dynamics.",
      outcome: "94% Accuracy in stress recognition.",
      tech: ["Next.js", "Grok", "GSAP"],
      link: "https://mind-pluse.vercel.app/",
      github: "https://github.com/kiran123-stack/MindPluse",
      image: "/images.jfif",
      gridClass: "lg:col-span-8 lg:row-span-2",
    },import React from "react";
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
    {
      id: "natours",
      title: "Natours AI",
      category: "Autonomous Travel",
      stats: "15s Itinerary Gen",
      challenge: "Multi-agent orchestration for real-time data.",
      outcome: "Reduced planning time by 80%.",
      tech: ["Gemini AI", "Node.js"],
      link: "https://natours-ai.vercel.app/",
      github: "https://github.com/kiran123-stack/natours-ai",
      image: "/air.webp",
      gridClass: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: "cinesphere",
      title: "Cinesphere",
      category: "Streaming UI",
      stats: "LCP < 1.2s",
      challenge: "Optimizing LCP for image-heavy grids.",
      outcome: "98/100 Lighthouse Performance.",
      tech: ["React", "CSS3"],
      link: "https://cine-sphere-one.vercel.app/",
      github: "#",
      image: "/movie.jpg",
      gridClass: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: "oggy-landing",
      title: "Oggy Visuals",
      category: "Creative Frontend",
      stats: "60 FPS Motion",
      challenge: "High-performance micro-interactions.",
      outcome: "Seamless storytelling through motion.",
      tech: ["GSAP", "JS", "HTML5"],
      link: "https://oggy-nu.vercel.app/",
      github: "#",
      image: "/oggy.webp",
      gridClass: "lg:col-span-12 lg:row-span-1",
    }
  ];

  return (
    <section className="w-full py-24 bg-[#020617] text-slate-300">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">
            // Engineering Case Studies
          </h2>
          <h3 className="text-5xl font-bold text-white tracking-tight">
            Selected Artifacts
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto lg:auto-rows-[300px]">

          {projects.map((p) => (
            <div
              key={p.id}
              className={`border border-blue-500/30 bg-blue-500/10 rounded-[2rem] overflow-hidden flex flex-col justify-between ${p.gridClass}`}
            >

              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between flex-1">

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                      {p.category}
                    </span>

                    <h4 className="text-3xl font-bold text-white mt-4">
                      {p.title}
                    </h4>
                  </div>

                  <div className="flex gap-4 text-white/50">
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <FaGithub size={22} />
                    </a>

                    <a href={p.link} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt size={18} />
                    </a>
                  </div>
                </div>

                <div className="my-6 space-y-3">

                  <div className="flex gap-3 text-sm">
                    <FaShieldAlt className="text-white/70 mt-1" />
                    <p>
                      <span className="text-white font-medium">Challenge:</span>{" "}
                      {p.challenge}
                    </p>
                  </div>

                  <div className="flex gap-3 text-sm">
                    <FaBolt className="text-white/70 mt-1" />
                    <p>
                      <span className="text-white font-medium">Outcome:</span>{" "}
                      {p.outcome}
                    </p>
                  </div>

                </div>

                <div className="flex justify-between items-center pt-6 border-t border-white/10">

                  <div className="flex gap-3">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono text-white/60 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <FaMicrochip className="opacity-70" />
                    {p.stats}
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Work;
