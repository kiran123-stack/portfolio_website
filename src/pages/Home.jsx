import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import image from "../assets/profile.jpg";

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
      gsap.from(".hero-img", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-10 bg-gray-900"
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left mt-10 md:mt-0">
        <div className="hero-text text-xl md:text-2xl font-light text-gray-400">
          Hello, I am
        </div>
        <h1 className="hero-text text-4xl md:text-6xl font-bold leading-tight text-gray-100">
          Kiran <br />{" "}
          <span className="text-blue-500">Frontend Developer</span>
        </h1>
        <p className="hero-text text-gray-300 max-w-md mx-auto md:mx-0">
           A passionate Frontend Developer with expertise in React, Node.js, and MongoDB.
            I specialize in building responsive, user-friendly websites and web applications. 
        </p>
        <div className="hero-text mt-6">
          <a
            href="/resume.pdf"
            download="Kiran_Resume.pdf"
            className="inline-block border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>

      {/* Right: Circle Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="hero-img w-64 h-64 md:w-96 md:h-96 bg-gray-800 rounded-full overflow-hidden shadow-2xl border-4 border-gray-700">
          <img
            src={image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
