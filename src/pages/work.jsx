import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaCode, FaMicrochip, FaBolt, FaShieldAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);

  const projects = [
    {
      id: "mindpulse",
      title: "MindPulse",
      category: "Behavioral AI",
      stats: "AES-256 Encrypted",
      challenge: "High-latency detection in real-time typing dynamics.",
      outcome: "94% Accuracy in stress pattern recognition.",
      tech: ["Next.js", "Grok", "GSAP", "Tailwind"],
      link: "https://mind-pluse.vercel.app/",
      github: "https://github.com/kiran123-stack/MindPluse",
      gridClass: "lg:col-span-8 lg:row-span-2", // Large Bento Block
      bg: "bg-blue-600/5"
    },
    {
      id: "natours",
      title: "Natours AI",
      category: "Autonomous Travel",
      stats: "15s Itinerary Gen",
      challenge: "Multi-agent orchestration for real-time budget scraping.",
      outcome: "Reduced planning time by 80%.",
      tech: ["Gemini AI", "Node.js", "React"],
      link: "https://natours-ai.vercel.app/",
      github: "https://github.com/kiran123-stack/natours-ai",
      gridClass: "lg:col-span-4 lg:row-span-1", // Medium Bento Block
      bg: "bg-emerald-600/5"
    },
    {
      id: "cinesphere",
      title: "Cinesphere",
      category: "Streaming UI",
      stats: "LCP < 1.2s",
      challenge: "Optimizing Largest Contentful Paint for image-heavy grids.",
      outcome: "Achieved 98/100 Lighthouse Performance score.",
      tech: ["React", "Optimized Assets"],
      link: "https://cine-sphere-one.vercel.app/",
      gridClass: "lg:col-span-4 lg:row-span-1", // Small Bento Block
      bg: "bg-purple-600/5"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 bg-[#020617] text-slate-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">// Portfolio.v3</h2>
          <h3 className="text-5xl font-bold text-white tracking-tight">
            Selected <span className="text-blue-600 italic">Artifacts.</span>
          </h3>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[280px]">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`bento-item group relative overflow-hidden rounded-[2rem] border border-slate-800 p-8 flex flex-col justify-between transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 ${p.gridClass} ${p.bg}`}
            >
              {/* Top Layer: Category & Icon */}
              <div className="flex justify-between items-start">
                <div>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h4 className="text-3xl font-bold text-white mt-4">{p.title}</h4>
                </div>
                <div className="flex gap-3">
                  <a href={p.github} className="text-slate-500 hover:text-white transition-colors"><FaGithub size={20}/></a>
                  <a href={p.link} className="text-slate-500 hover:text-white transition-colors"><FaExternalLinkAlt size={18}/></a>
                </div>
              </div>

              {/* Middle Layer: Case Study Content (Only visible on large blocks) */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaShieldAlt className="text-blue-500 mt-1 shrink-0" />
                  <p className="text-sm"><span className="text-white font-semibold">Challenge:</span> {p.challenge}</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaBolt className="text-amber-500 mt-1 shrink-0" />
                  <p className="text-sm"><span className="text-white font-semibold">Outcome:</span> {p.outcome}</p>
                </div>
              </div>

              {/* Bottom Layer: Tech & Metrics */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800/50">
                <div className="flex gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono text-slate-500 uppercase">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                  <FaMicrochip /> {p.stats}
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
