
import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Work from "./work";
import Contact from "./Contact";
import "./Home.css";

const portraitUrl =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20261031_040619_2f6f349e-a4a7-40db-8e9b-03b6acd8b99a.png&w=1024&q=92";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const Home = () => {
  return (
    <main className="portfolio-wrapper">

      {/* HERO */}
      <section className="hero-section" id="home">

        {/* NAVBAR */}
        <motion.nav
          className="hero-navbar"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <a href="#about">About</a>
          <a href="#price">Price</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </motion.nav>

        {/* HUGE HEADING */}
        <div className="hero-heading-wrap">
          <motion.h1
            className="hero-heading"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.15}
          >
            Hi, i'm Kiran
          </motion.h1>
        </div>

        {/* CENTER PORTRAIT */}
        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          id="magnetWrap"
        >
          <div className="hero-portrait-inner">

            <img
              id="faceFallback"
              src={portraitUrl}
              alt="Kiran's interactive portrait"
              draggable="false"
            />

            <canvas id="faceGl" aria-hidden="true" />

            <div id="faceProps" aria-hidden="true">
              <svg id="faceFly" viewBox="0 0 32 32">
                <path className="wing"
                  d="M15 15C12 9.5 4.5 8.5 2 13c2.5 4.5 10 4.5 13 2z"
                />
                <path className="wing r"
                  d="M17 15c3-5.5 10.5-6.5 13-2-2.5 4.5-10 4.5-13 2z"
                />
                <ellipse cx="16" cy="19.5" rx="4" ry="6.5" />
                <circle cx="16" cy="11.5" r="3.3" />
              </svg>
            </div>

          </div>
        </motion.div>

        {/* BOTTOM CONTENT */}
        <div className="hero-bottom">

          <motion.p
            className="hero-description"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.35}
          >
            MERN STACK & AI DEVELOPER
            <br /><br />
            Building intelligent digital experiences
            through modern web technologies and AI.
          </motion.p>

          <motion.a
            href="#contact"
            className="contact-button"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.5}
          >
            Contact Me
          </motion.a>

        </div>
      </section>

      {/* EXISTING SECTIONS */}
      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Work />
      </div>

      <div id="contact">
        <Contact />
      </div>

    </main>
  );
};

export default Home;
