import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaMicrochip, FaBolt, FaShieldAlt, FaCode } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const containerRef = useRef(null);

  const projects = [
    {
      id: "mindpulse",
      title: "MindPulse",
      category: "Behavioral AI",
      stats: "AES-256 Encrypted",
      challenge: "High-latency detection in real-time typing dynamics and cognitive load patterns.",
      outcome: "Achieved 94% accuracy in stress recognition using non-invasive biometric data.",
      tech: ["Next.js", "Grok", "Tailwind"],
      link: "https://mind-pluse.vercel.app/",
      github: "https://github.com/kiran123-stack/MindPluse",
      gridClass: "lg:col-span-8 lg:row-span-2", 
      bg: "bg-blue-600/5"
    },
    {
      id: "natours",
      title: "Natours AI",
      category: "Autonomous Travel",
      stats: "15s Gen Time",
      challenge: "Orchestrating multi-agent LLMs for real-time itinerary synthesis.",
      outcome: "Automated complex travel logistics, reducing human planning time by 80%.",
      tech: ["Gemini AI", "Node.js"],
      link: "https://natours-ai.vercel.app/",
      github: "https://github.com/kiran123-stack/natours-ai",
      gridClass: "lg:col-span-4 lg:row-span-1",
      bg: "bg-emerald-600/5"
    },
    {
      id: "cinesphere",
      title: "Cinesphere",
      category: "Streaming UI",
      stats: "LCP < 1.2s",
      challenge: "Optimizing Largest Contentful Paint for high-resolution media-heavy grids.",
      outcome: "Secured a 98/100 Lighthouse Performance score via advanced asset caching.",
      tech: ["React", "CSS3"],
      link: "https://cine-sphere-one.vercel.app/",
      github: "#",
      gridClass: "lg:col-span-4 lg:row-span-1",
      bg: "bg-purple-600/5"
    },
    {
      id: "oggy-landing",
      title: "Oggy Visuals",
      category: "Creative Frontend",
      stats: "60 FPS Motion",
      challenge: "Implementing high-performance micro-interactions without dropping frame rates.",
      outcome: "Seamless storytelling through motion, enhancing user dwell time significantly.",
      tech: ["GSAP", "JS", "HTML5"],
      link: "https://oggy-nu.vercel.app/",
      github: "#",
      gridClass: "lg:col-span-12 lg:row-span-1",
      bg: "bg-orange-600/5"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-24 bg-[#020617] text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase mb-3">// Engineering Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Selected Artifacts</h3>
        </div>

        {/* Improved Responsive Grid */}
        <div className="bento-grid grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-min lg:auto-rows-[320px]">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`bento-item group border border-slate-800 p-6 md:p-8 rounded-3xl flex flex-col justify-between transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)] ${p.gridClass} ${p.bg}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {p.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mt-4 group-hover:text-blue-400 transition-colors">{p.title}</h4>
                </div>
                <div className="flex gap-4 text-slate-500">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub size={20}/></a>}
                  <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaExternalLinkAlt size={18}/></a>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3 text-sm leading-relaxed">
                  <FaShieldAlt className="text-blue-500 shrink-0 mt-1 opacity-70" />
                  <p><span className="text-slate-100 font-semibold">Challenge:</span> {p.challenge}</p>
                </div>
                <div className="flex gap-3 text-sm leading-relaxed">
                  <FaBolt className="text-amber-500 shrink-0 mt-1 opacity-70" />
                  <p><span className="text-slate-100 font-semibold">Outcome:</span> {p.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center pt-6 border-t border-slate-800/50 gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-800/30 px-2 py-1 rounded">
                      <FaCode className="text-blue-500/50" /> {t}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-bold text-blue-400 flex items-center gap-2 whitespace-nowrap">
                  <FaMicrochip className="animate-pulse" /> {p.stats}
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
