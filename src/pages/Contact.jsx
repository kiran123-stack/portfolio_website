import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import image from "../assets/profile.jpg";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", { scale: 0.9, opacity: 0, duration: 1, ease: "back.out(1.7)" });
    }, contactRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} className="py-20 px-6 md:px-32 bg-slate-900 min-h-screen flex flex-col justify-center pt-24">
      <h2 className="text-4xl font-bold mb-12 text-center text-white uppercase tracking-widest">CONTACT</h2>
      
      <div className="contact-anim flex flex-col md:flex-row items-center gap-12 border border-slate-700 bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto w-full">
        {/* Left: Image/Icon */}
         <img
                    src={image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />

        {/* Right: Info */}
        <div className="w-full md:w-2/3 space-y-6 text-slate-300">
          <div className="flex items-center gap-4 text-xl hover:text-blue-400 transition-colors cursor-pointer">
             <FaGithub className="text-3xl" /> <span>https://github.com/kiran123-stack</span>
          </div>
          <div className="flex items-center gap-4 text-xl hover:text-green-400 transition-colors cursor-pointer">
             <FaPhoneAlt className="text-3xl text-green-500" /> <span>+91 8745080356</span>
          </div>
          <div className="flex items-center gap-4 text-xl hover:text-red-400 transition-colors cursor-pointer">
             <FaEnvelope className="text-3xl text-red-500" /> <span>kiranpar321@gmail.com</span>
          </div>
          
          <div className="pt-6 border-t border-slate-700">
             <p className="text-2xl font-handwriting text-blue-400 italic">
               "Thank you, I am available to join immediately."
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;