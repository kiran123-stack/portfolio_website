import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Work from './pages/work.jsx'; // Note: Ensure filename matches exactly (case-sensitive)
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar is ALWAYS visible, so it goes outside Routes */}
      <Navbar />
      
      {/* Routes only changes the middle part of the page */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      {/* Footer is ALWAYS visible, so it goes outside Routes */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center mt-auto">
        <p>&copy; 2025 Kiran. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;