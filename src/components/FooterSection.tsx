
import React from 'react';
import { Github, Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-devops-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-poppins">
              DevOps<span className="text-devops-accent">Pro</span>
            </h2>
            <p className="text-gray-300 mt-2 max-w-md">
              Building scalable, resilient infrastructure and streamlining development workflows.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/LakshmanBolisetti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/lakshman-bolisetti/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/lakshman___lucky?igsh=enJwemdzN2tmbzQz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="mailto:Lakshmankumarbolisetti@gmail.com"
              className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Lakshman Bolisetti. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-devops-accent hover:bg-opacity-80 text-white p-2 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
