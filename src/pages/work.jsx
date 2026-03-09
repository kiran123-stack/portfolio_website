import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle, FaShieldAlt, FaRocket, FaVideo, FaPlay } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);

  const flagshipProjects = [
    {
      id: "mindpulse",
      title: "MindPulse",
      tagline: "Behavioral AI & Emotional Sanctuary",
      problem: "Traditional chatbots are 'emotionally blind,' missing the user's physical state or cognitive fatigue.",
      challenge: "Developing a non-intrusive telemetry system to detect typing latency patterns without compromising privacy.",
      solution: "Engineered a behavioral analysis engine with AES-256 encryption. Integrated 'Hana' mascot for a safe conversational space.",
      tech: ["Next.js 16", "Grok", "AES-256", "GSAP", "Lenis"],
      adVideo: "/ad_mindpulse.mp4",
      demoVideo: "/demo_mindpuls.mp4",
      liveLink: "https://mind-pluse.vercel.app/",
      githubLink: "https://github.com/kiran123-stack/MindPluse"
    },
    {
      id: "natours",
      title: "Natours AI",
      tagline: "Autonomous Travel Orchestrator",
      problem: "Planning a trip takes hours across fragmented platforms, leading to information overload.",
      challenge: "Orchestrating multiple AI agents to generate structured itineraries while maintaining visual immersion.",
      solution: "Built a 15-second research collapser that generates custom 3-day itineraries based on real-time budget data.",
      tech: ["Next.js", "Node.js", "Gemini AI", "Tailwind v4", "Gsap"],
      adVideo: "/ai_natour.mp4",
      demoVideo: "/demo_nator.mp4",
      liveLink: "https://natours-ai.vercel.app/",
      githubLink: "https://github.com/kiran123-stack/natours-ai"
    }
  ];

  const standardProjects = [
    {
      id: 3,
      title: "Cinesphere",
      desc: "Netflix-inspired streaming UI focusing on LCP optimization and semantic HTML.",
      tech: "React, CSS3",
      image: "/movie.jpg",
      link: "https://cine-sphere-one.vercel.app/"
    },
    {
      id: 4,
      title: "Oggy Landing Page",
      desc: "Creative frontend implementation exploring micro-interactions and animations.",
      tech: "HTML5, GSAP",
      image: "/oggy.webp",
      link: "https://oggy-nu.vercel.app/"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".flagship-card", {
        scrollTrigger: {
          trigger: ".flagship-container",
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out"
      });
    }, workRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={workRef} className="min-h-screen py-32 px-6 bg-[#020617] text-slate-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-blue-500 font-mono tracking-widest text-sm uppercase mb-4 tracking-[0.3em]">Case Studies</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Where Code Meets <span className="text-blue-600 italic font-serif">Purpose.</span>
          </h3>
        </div>

        {/* Flagship Case Studies */}
        <div className="flagship-container space-y-48">
          {flagshipProjects.map((p, idx) => (
            <div key={p.id} className="flagship-card grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Side: Dynamic Visuals */}
              <div className={`lg:col-span-7 space-y-8 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                
                {/* 1. AD VIDEO (AUTOPLAY TEASER) */}
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-black aspect-video shadow-2xl shadow-blue-500/5">
                  <video 
                    src={p.adVideo} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover brightness-110"
                  />
                  <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <FaVideo className="text-blue-500 text-xs animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Cinema Teaser</span>
                  </div>
                </div>
                
                {/* 2. DEMO VIDEO (FULL INTERFACE VIEW) */}
                <div className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 aspect-video shadow-inner">
                  {/* Changed to object-contain to show the WHOLE video without cropping */}
                  <video 
                    src={p.demoVideo} 
                    controls
                    className="w-full h-full object-contain z-10 relative"
                  />
                  {/* Blurred background copy for an "Elite" pillar-box effect if the video is narrow */}
                  <video 
                    src={p.demoVideo} 
                    muted 
                    loop
                    className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl scale-110"
                  />
                  
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:hidden transition-all duration-500 z-20">
                     <div className="bg-blue-600/90 p-5 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] backdrop-blur-sm">
                        <FaPlay className="text-white text-xl translate-x-0.5" />
                     </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 bg-blue-600 px-3 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider z-30">
                      High-Def Demo
                  </div>
                </div>
              </div>

              {/* Right Side: Professional Content */}
              <div className={`lg:col-span-5 flex flex-col space-y-8 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div>
                  <h4 className="text-4xl font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">{p.tagline}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4 group/item">
                    <FaInfoCircle className="text-blue-500 mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                    <p className="text-sm leading-relaxed"><strong className="text-white block mb-1 uppercase tracking-tighter text-xs">The Problem</strong> {p.problem}</p>
                  </div>
                  <div className="flex gap-4 group/item">
                    <FaShieldAlt className="text-red-500 mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                    <p className="text-sm leading-relaxed"><strong className="text-white block mb-1 uppercase tracking-tighter text-xs">Engineering Challenge</strong> {p.challenge}</p>
                  </div>
                  <div className="flex gap-4 group/item">
                    <FaRocket className="text-green-500 mt-1 shrink-0 group-hover/item:scale-110 transition-transform" />
                    <p className="text-sm leading-relaxed"><strong className="text-white block mb-1 uppercase tracking-tighter text-xs">The Solution</strong> {p.solution}</p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {p.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-blue-500/10 border border-blue-400/20 rounded-lg text-[10px] text-blue-300 font-bold uppercase tracking-tight">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 pt-6">
                  <a href={p.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-all group">
                    <FaExternalLinkAlt className="group-hover:-translate-y-1 transition-transform" /> View Live
                  </a>
                  <a href={p.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-white transition-all">
                    <FaGithub /> Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Projects */}
        <div className="mt-60 pt-20 border-t border-slate-900 grid grid-cols-1 md:grid-cols-2 gap-10">
          {standardProjects.map(proj => (
            <div key={proj.id} className="group p-8 bg-slate-900/20 rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col sm:flex-row gap-8">
              <div className="w-full sm:w-1/3 aspect-video rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h5 className="text-2xl font-bold text-white mb-2">{proj.title}</h5>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">{proj.desc}</p>
                <div className="flex justify-between items-center mt-auto border-t border-slate-800/50 pt-4">
                  <span className="text-[10px] font-mono text-blue-500 uppercase font-bold tracking-widest">{proj.tech}</span>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="text-white hover:text-blue-400 transition-transform hover:scale-125">
                    <FaExternalLinkAlt />
                  </a>
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
