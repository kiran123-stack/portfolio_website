import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaMicrochip, FaBolt, FaShieldAlt } from "react-icons/fa";

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
      outcome: "94% Accuracy in stress recognition.",
      tech: ["Next.js", "Grok", "GSAP"],
      link: "https://mind-pluse.vercel.app/",
      github: "https://github.com/kiran123-stack/MindPluse",
      gridClass: "lg:col-span-8 lg:row-span-2", 
      bg: "bg-blue-500/10", // Increased opacity
      border: "border-blue-500/30"
    },
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
      gridClass: "lg:col-span-4 lg:row-span-1",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/30"
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
      gridClass: "lg:col-span-4 lg:row-span-1",
      bg: "bg-purple-500/20", // Higher opacity for visibility
      border: "border-purple-500/40"
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
      gridClass: "lg:col-span-12 lg:row-span-1",
      bg: "bg-orange-500/20", // Higher opacity for visibility
      border: "border-orange-500/40"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-24 bg-[#020617] text-slate-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">// Engineering Case Studies</h2>
          <h3 className="text-5xl font-bold text-white tracking-tight">Selected Artifacts</h3>
        </div>

        <div className="bento-grid grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-auto lg:auto-rows-[300px]">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`bento-item border p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_70px_rgba(168,85,247,0.35)] ${p.gridClass}  bg-blue-500/10 border-blue-500/30  `}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    {p.category}
                  </span>
                  <h4 className="text-3xl font-bold text-white mt-4">{p.title}</h4>
                </div>
                <div className="flex gap-4 text-white/50">
                  <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub size={22}/></a>
                  <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaExternalLinkAlt size={18}/></a>
                </div>
              </div>

              <div className="my-6 space-y-3">
                <div className="flex gap-3 text-sm">
                  <FaShieldAlt className="text-white/70 shrink-0 mt-1" />
                  <p><span className="text-white font-medium">Challenge:</span> {p.challenge}</p>
                </div>
                <div className="flex gap-3 text-sm">
                  <FaBolt className="text-white/70 shrink-0 mt-1" />
                  <p><span className="text-white font-medium">Outcome:</span> {p.outcome}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-white/10">
                <div className="flex gap-3">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono text-white/60 uppercase">{t}</span>
                  ))}
                </div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <FaMicrochip className="opacity-70" /> {p.stats}
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
