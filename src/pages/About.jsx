import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt, faNodeJs, faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons'; 
import { faGraduationCap, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons'; // Added icons for education

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const skillCardsRef = useRef([]);

  useEffect(() => {
    // --- SECTION ENTRANCE ANIMATIONS ---
    const fadeUps = [aboutRef, educationRef, skillsRef, contactRef];

    fadeUps.forEach((ref) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // --- SKILLS STAGGERED POP ANIMATION ---
    if (skillCardsRef.current.length > 0) {
      gsap.fromTo(
        skillCardsRef.current,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 75%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !skillCardsRef.current.includes(el)) {
      skillCardsRef.current.push(el);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      {/* ================= ABOUT ME SECTION ================= */}
      <section ref={aboutRef} className="py-20 px-6 md:px-32 text-center text-white border-b border-slate-800">
        <h2 className="text-4xl font-bold mb-8 uppercase tracking-widest text-blue-500">About ME</h2>
        <div className="space-y-4 max-w-3xl mx-auto text-lg mb-10 text-slate-300 leading-relaxed">
          <p>
            I am a passionate developer aiming for top tech companies. I specialize in building 
            clean, responsive web applications with modern technologies. My focus is on writing 
            efficient code and designing intuitive user interfaces.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link 
            to="/work" 
            className="border-2 border-white px-8 py-3 rounded-full text-white font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View Work
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-blue-600 px-8 py-3 rounded-full text-blue-600 font-medium hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* ================= EDUCATION SECTION (NEW) ================= */}
      <section ref={educationRef} className="py-20 px-6 md:px-32 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center border-b-2 border-blue-500 inline-block pb-2 tracking-wide mx-auto table">
             EDUCATION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Degree Card 1: BCA */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-all">
                  <FontAwesomeIcon icon={faUniversity} size="lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-slate-400 text-sm">IGNOU</p>
                </div>
              </div>
              <p className="text-blue-400 font-semibold mb-3 text-sm">Current Student</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                Currently pursuing my BCA, building a strong foundation in computer science principles while specializing in modern <strong className="text-white">Web Development</strong> technologies.
              </p>
            </div>

            {/* Degree Card 2: Schooling */}
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 group-hover:text-green-300 group-hover:bg-green-500/20 transition-all">
                  <FontAwesomeIcon icon={faSchool} size="lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">Higher Secondary Education</h3>
                  <p className="text-slate-400 text-sm">Dhruva Public School</p>
                </div>
              </div>
              <p className="text-green-400 font-semibold mb-3 text-sm">Completed: 2024</p>
              <p className="text-slate-300 leading-relaxed text-sm">
                Completed my schooling with a <strong className="text-white">Science Stream</strong> focus, achieving <strong className="text-white">79%</strong>. This background provided a strong analytical and problem-solving mindset crucial for coding.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section ref={skillsRef} className="py-20 bg-slate-950 text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 border-b-2 border-blue-500 inline-block pb-2 tracking-wide">
            TECHNICAL SKILLS
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React', icon: faReact, color: 'text-cyan-400' },
              { name: 'JavaScript', icon: faJsSquare, color: 'text-yellow-400' },
              { name: 'HTML5', icon: faHtml5, color: 'text-orange-500' },
              { name: 'CSS3', icon: faCss3Alt, color: 'text-blue-500' },
              { name: 'Node.js', icon: faNodeJs, color: 'text-green-500' },
              { name: 'GitHub', icon: faGithub, color: 'text-white' },
              { name: 'Git', icon: faGitAlt, color: 'text-red-500' },
              { name: 'Tailwind', icon: faCss3Alt, color: 'text-cyan-300' }, 
            ].map((skill, index) => (
              <div
                key={index}
                ref={addToRefs}
                className="skill-card group relative flex flex-col items-center p-8 
                           bg-slate-900 border border-slate-700 rounded-2xl 
                           transition-all duration-300 ease-out
                           hover:-translate-y-3 
                           hover:border-blue-400 
                           hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
              >
                <div className={`text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${skill.color}`}>
                   <FontAwesomeIcon icon={skill.icon} />
                </div>
                <span className="text-xl font-semibold text-slate-300 group-hover:text-white tracking-wide">
                  {skill.name}
                </span>
                <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA SECTION ================= */}
      <section ref={contactRef} className="py-24 bg-slate-900 text-center text-white border-t border-slate-800">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Feel free to reach out if you have any questions, want to collaborate on a project, or just want to say hi!
        </p>
        <Link 
            to="/contact" 
            className="border-2 border-blue-600 px-10 py-4 rounded-full text-lg text-blue-400 font-bold hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 inline-block"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default About;
