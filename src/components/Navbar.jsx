import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900 shadow-md top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl font-bold text-white">kiran.</h1>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 font-medium text-white">
          <li>
            <Link to="/" className="hover:text-blue-400 transition flex items-center gap-2">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} /> About
            </Link>
          </li>
          <li>
            <Link to="/work" className="hover:text-blue-400 transition flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} /> Work
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 transition flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Icon (Visible on Mobile) */}
        <div className="md:hidden text-2xl cursor-pointer text-gray-400" onClick={toggleNav}>
          <FontAwesomeIcon icon={isNavOpen ? faXmark : faBars} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 shadow-lg flex flex-col items-center gap-6 py-8 transition-all duration-300 ease-in-out ${isNavOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <Link to="/" className="text-lg font-medium text-gray-200 hover:text-blue-400 flex items-center gap-2" onClick={closeNav}>
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/about" className="text-lg font-medium text-gray-200 hover:text-blue-400 flex items-center gap-2" onClick={closeNav}>
          <FontAwesomeIcon icon={faUser} /> About
        </Link>
        <Link to="/work" className="text-lg font-medium text-gray-200 hover:text-blue-400 flex items-center gap-2" onClick={closeNav}>
          <FontAwesomeIcon icon={faBriefcase} /> Work
        </Link>
        <Link to="/contact" className="text-lg font-medium text-gray-200 hover:text-blue-400 flex items-center gap-2" onClick={closeNav}>
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
