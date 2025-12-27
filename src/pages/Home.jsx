import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import prince from "../assets/avatar.webp";
import { faHome, faUser, faBriefcase, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';





const Home = () => {

    const[isNavOpen,setIsNavOpen]=useState(false);

    const taggleNav=()=>{
        setIsNavOpen(!isNavOpen);
    }

  return (
    <div>
        <main className='home'>
            
            <header>
                <div className="logo">
        <h1>Prince</h1>
                </div>
       <nav className={isNavOpen ? 'nav-menu active' : 'nav-menu'}>
        <ul>
            <li>
                <Link to="/" className='nav-link' onClick={()=>{setIsNavOpen(false)}}> <FontAwesomeIcon icon={faHome} /> Home</Link>
            </li>
            <li>
                <Link to="/about" className='nav-link'onClick={()=>{setIsNavOpen(false)}}> <FontAwesomeIcon icon={faUser} />About</Link>
            </li>
            <li>
                <Link to="/work" className='nav-link' onClick={()=>{setIsNavOpen(false)}} ><FontAwesomeIcon icon={faBriefcase} />Work</Link>
            </li>
            <li>
                <Link to="/contact" className='nav-link' onClick={()=>{setIsNavOpen(false)}}><FontAwesomeIcon icon={faEnvelope} />Contact</Link>
            </li>

            
          
        </ul>
       </nav>
       <div className="hambur" onClick={taggleNav}>
                <FontAwesomeIcon icon={isNavOpen ? faXmark: faBars} />
            </div>
       </header>

       <section className='hero-section'>
        <div className="hero-text">
        <h2>Hi I'm Prince </h2>
            <h3>Editor | Content Creator</h3>
            <p>Prince is a meticulous and creative editor with a keen eye for detail and a passion for storytelling. With</p>
            <p>extensive experience in refining content for clarity, flow, and impact, he ensures every piece resonates with</p>
            <p>its audience. Whether it's polishing articles, scripts, or digital content, Prince brings precision,</p>
            <p>creativity, and a professional touch to every project he undertakes.</p>
        </div>
        <div className="hero-image">
            <img src={prince} alt="Hero" />
        </div>
       </section>

</main>
    </div>
  )
}

export default Home