
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Currently building my portfolio of projects. Stay tuned for exciting 
            developments as I apply my skills to real-world applications!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-12 text-center shadow-lg animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full mb-6">
              <Code size={40} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Projects Coming Soon!
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I'm currently working on exciting projects as part of my Full Stack Development 
              journey. This space will soon showcase applications built with Java, Spring Boot, 
              React, and other modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/DiyaSanthosh77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                <Github size={20} className="mr-2" />
                View GitHub Profile
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                <ExternalLink size={20} className="mr-2" />
                Let's Collaborate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
