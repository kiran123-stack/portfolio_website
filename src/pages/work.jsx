import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle, FaInfoCircle, FaShieldAlt, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const workRef = useRef(null);

  const flagshipProjects = [
    {
      id: "mindpulse",
      title: "MindPulse",
      tagline: "Behavioral AI & Emotional Sanctuary",
      problem: "Traditional chatbots are 'emotionally blind,' relying purely on text without understanding the user's physical state or cognitive load.",
      challenge: "Developing a non-intrusive telemetry system to detect typing latency and hesitation patterns without compromising user privacy.",
      solution: "Engineered a behavioral analysis engine with AES-256 encryption. Integrated 'Hana,' a specialized AI mascot, to provide a judged-free safe space.",
      tech: ["Next.js 16", "Gemini 2.5", "AES-256", "GSAP", "Lenis"],
      image: "/images.jfif",
      adVideo: "/ad_mindpulse.mp4",
      demoVideo: "/demo_mindpuls.mp4",
      liveLink: "https://mind-pluse.vercel.app/",
      githubLink: "https://github.com/kiran123-stack/MindPluse"
    },
    {
      id: "natours",
      title: "Natours AI",
      tagline: "Autonomous Travel Orchestrator",
      problem: "Planning a trip currently takes hours across 5+ fragmented platforms, leading to information overload and decision fatigue.",
      challenge: "Orchestrating multiple AI agents to generate structured itineraries while maintaining high performance and visual immersion.",
      solution: "Built a 15-second research collapser that generates 3-day itineraries, including hotels and local cuisine, based on real-time budget data.",
      tech: ["Next.js", "Node.js", "Gemini AI", "Tailwind v4", "Framer Motion"],
      image: "/air.webp",
      adVideo: "/ai_natour.mp4", // As requested: ai_natour is the Ad
      demoVideo: "/demo_nator.mp4",
      liveLink: "https://natours-ai.vercel.app/",
      githubLink: "https://github.com/kiran123-stack/natours-ai"
    }
  ];

  const standardProjects = [
    {
      id: 3,
      title: "Cinesphere",
      desc: "Netflix-inspired streaming UI with a focus on LCP optimization and semantic HTML.",
      tech: "React, CSS3",
      image: "/movie.jpg",
      link: "https://cine-sphere-one.vercel.app/"
    },
    {
      id: 4,
      title: "Oggy Landing Page",
      desc: "Creative frontend implementation exploring micro-interactions and GSAP animations.",
      tech: "HTML5, GSAP",
      image: "/oggy.webp",
      link: "https://oggy-nu.vercel.app/"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Flagship Card Entrance
      gsap.from(".flagship-card", {
        scrollTrigger: {
          trigger: ".flagship-container",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.4,
        ease: "expo.out"
      });

      // Video Hover Animation
      gsap.utils.toArray(".video-container").forEach(container => {
        const video = container.querySelector("video");
        container.addEventListener("mouseenter", () => video.play());
        container.addEventListener("mouseleave", () => {
          video.pause();
          video.currentTime = 0;
        });
      });
    }, workRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={workRef} className="min-h-screen py-32 px-6 bg-[#020617] text-slate-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-blue-500 font-mono tracking-widest text-sm uppercase mb-4">Engineering Case Studies</h2>
          <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
            Where Code Meets <span className="text-blue-600 italic">Purpose.</span>
          </h3>
        </div>

        {/* Flagship Projects - Case Study Layout */}
        <div className="flagship-container space-y-40">
          {flagshipProjects.map((p, idx) => (
            <div key={p.id} className="flagship-card grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Visuals */}
              <div className={`lg:col-span-7 space-y-6 ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="video-container relative group rounded-3xl overflow-hidden border border-slate-800 bg-black aspect-video">
                  <video 
                    src={p.adVideo} 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8 pointer-events-none">
                    <span className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                      <FaPlayCircle className="text-blue-500 text-xl" /> Hover to preview AD
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-slate-800 aspect-video">
                    <video src={p.demoVideo} controls className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center p-4">
                     <p className="text-[10px] font-mono text-center">DEMO CLIP: SYSTEM ARCHITECTURE WALKTHROUGH</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Case Study Content */}
              <div className={`lg:col-span-5 flex flex-col space-y-8 ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div>
                  <h4 className="text-4xl font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-blue-400 font-mono text-sm tracking-widest">{p.tagline}</p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <FaInfoCircle className="text-blue-500 mt-1 shrink-0" />
                    <p className="text-sm"><strong className="text-white block mb-1">THE PROBLEM</strong> {p.problem}</p>
                  </div>
                  <div className="flex gap-4">
                    <FaShieldAlt className="text-red-500 mt-1 shrink-0" />
                    <p className="text-sm"><strong className="text-white block mb-1">TECHNICAL CHALLENGE</strong> {p.challenge}</p>
                  </div>
                  <div className="flex gap-4">
                    <FaRocket className="text-green-500 mt-1 shrink-0" />
                    <p className="text-sm"><strong className="text-white block mb-1">ENGINEERED SOLUTION</strong> {p.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {p.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-[10px] text-blue-300 font-bold uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 pt-6">
                  <a href={p.liveLink} className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
                    <FaExternalLinkAlt /> Launch App
                  </a>
                  <a href={p.githubLink} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-white transition-colors">
                    <FaGithub /> View Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Projects */}
        <div className="mt-48 pt-20 border-t border-slate-900 grid grid-cols-1 md:grid-cols-2 gap-8">
          {standardProjects.map(proj => (
            <div key={proj.id} className="group p-8 bg-slate-900/40 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h5 className="text-xl font-bold text-white mb-2">{proj.title}</h5>
                <p className="text-xs text-slate-500 mb-4">{proj.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-blue-500">{proj.tech}</span>
                  <a href={proj.link} className="text-white hover:text-blue-400"><FaExternalLinkAlt /></a>
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
