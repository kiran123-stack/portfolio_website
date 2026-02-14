import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const Work = () => {
  const workRef = useRef(null);

  // --- PROJECT DATA FROM YOUR DETAILS ---
  const projects = [
    {
      id: 1,
      title: "Cinesphere - Netflix Inspired Landing Page Clone",
      description: "A responsive recreation of the Netflix landing page, built with semantic HTML5 and modern CSS. This modified version replicates the complex multi-section layout, sign-up flow, and dynamic FAQ section.",
      technologies: "HTML5, CSS3, Flexbox/Grid",
     
      image: "/movie.jpg", 
      liveLink: "https://cine-sphere-one.vercel.app/",
      githubLink: "https://github.com/kiran123-stack/movieX"
    },
    {
      id: 2,
      title: "oggy-landing-page",
      description: "A fun learning focused landing page with smooth CSS animations and a clear call-to-action. Implemented with advance CSS Flexbox/Grid for a pixel-perfect layout on all devices.",
      technologies: "HTML5, CSS3 (Flex/Grid), Animations",
      image: "/oggy.webp",
      liveLink: "https://oggy-nu.vercel.app/",
      githubLink: "https://github.com/kiran123-stack/oggy"
    },
    
      {
      id: 3,

      title: "MindPulse - AI-Powered Behavioral Analytics",
      description: "A cutting-edge, full-stack AI system designed to analyze a user's mental state and cognitive load through digital interaction patterns. Unlike traditional chatbots, MindPulse monitors 'digital cues'—such as typing latency, backspace frequency, and idle time—to provide a deeper, context-aware conversational experience. The system leverages Google Gemini 2.5 to interpret these behavioral signals in real-time, delivering empathetic and adaptive responses.",
      technologies: "Next.js 16, TypeScript, Node.js, Express, MongoDB, Google Gemini API, Tailwind CSS v4",
      image: "/mindpulse-analytics.jpg", 
      liveLink: " https://mind-pluse.vercel.app/", 
      githubLink: "https://github.com/kiran123-stack/MindPluse"
    },
    
    {
     id: 5,
      title: "Natours AI – Intelligent Travel Planner",
      description: "A full-stack AI-powered travel application that generates personalized itineraries using Google Gemini. Features a cinematic UI, real-time text-to-speech audio guides, secure authentication, and dynamic image generation.",
      technologies: "Next.js, TypeScript, Node.js, Express, MongoDB, Gemini AI",
      image: "/images.jfif", // Make sure to add a screenshot named 'natours.jpg' to your public folder
      liveLink: "https://natours-ai.vercel.app/",
      githubLink: "https://github.com/kiran123-stack/natours-ai"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 150, opacity: 0, rotation: 10, scale: 0.8, transformOrigin: "bottom left" },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
        }
      );
    }, workRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={workRef} className="min-h-screen py-24 px-6 md:px-12 bg-slate-900 overflow-hidden">
      <h2 className="text-4xl font-bold mb-16 text-center text-white uppercase tracking-widest border-b-4 border-blue-600 inline-block mx-auto">
        WORK
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto perspective-1000">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-card bg-slate-800 border border-slate-700 rounded-2xl shadow-xl overflow-hidden 
                       hover:-translate-y-4 hover:rotate-1 
                       hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:border-blue-500
                       transition-all duration-300 ease-out flex flex-col group"
          >
            
            {/* Image Area */}
            <div className="h-48 overflow-hidden relative bg-slate-700">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay with Tech Stack */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                <span className="text-blue-400 font-bold mb-2 text-sm uppercase tracking-wider">Tech Stack</span>
                <p className="text-xs font-medium">{project.technologies}</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-1">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex gap-4 mt-auto border-t border-slate-700 pt-4">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                  >
                     <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                
                <a 
                  href={project.githubLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white hover:underline transition-colors"
                >
                   <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
