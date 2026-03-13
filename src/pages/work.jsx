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
      bg: "bg-blue-600/10"
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
      bg: "bg-emerald-600/10"
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
      gridClass: "lg:col-span-4 lg:row-span-1",
      bg: "bg-purple-600/10"
    },
    {
      id: "oggy landing page",
      title: "Oggy Landing Page",
      desc: "Creative frontend implementation exploring micro-interactions and animations.",
      tech: "HTML5, GSAP","CSS","Javascript",
      image: "/oggy.webp",
      link: "https://oggy-nu.vercel.app/"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logic: Target elements by class name within this specific context
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 90%", // Start animation when top of grid is 90% down the screen
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-24 bg-[#020617] text-slate-300 overflow-visible">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">// Engineering Case Studies</h2>
          <h3 className="text-5xl font-bold text-white tracking-tight">Selected Artifacts</h3>
        </div>

        {/* The Bento Grid */}
        <div className="bento-grid grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[280px]">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`bento-item border border-slate-800 p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50 ${p.gridClass} ${p.bg}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <h4 className="text-3xl font-bold text-white mt-4">{p.title}</h4>
                </div>
                <div className="flex gap-4 text-slate-500">
                  <a href={p.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub size={22}/></a>
                  <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaExternalLinkAlt size={18}/></a>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex gap-3 text-sm">
                  <FaShieldAlt className="text-blue-500 shrink-0 mt-1" />
                  <p><span className="text-white font-medium">Challenge:</span> {p.challenge}</p>
                </div>
                <div className="flex gap-3 text-sm">
                  <FaBolt className="text-amber-500 shrink-0 mt-1" />
                  <p><span className="text-white font-medium">Outcome:</span> {p.outcome}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-slate-800/50">
                <div className="flex gap-3">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono text-slate-500 uppercase">{t}</span>
                  ))}
                </div>
                <div className="text-xs font-bold text-blue-400 flex items-center gap-2">
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
