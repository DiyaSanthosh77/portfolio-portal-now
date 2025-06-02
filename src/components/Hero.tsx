
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/760e4861-0e3b-4deb-bb4d-ac634cc51bc5.png"
              alt="Diya Santhosh"
              className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Diya Santhosh
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Aspiring Full Stack Developer passionate about creating innovative solutions
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Computer Science graduate currently pursuing Full Stack Development (Java). 
            Ready to bring fresh perspectives to exciting projects.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/DiyaSanthosh77" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/diyasanthosh/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:diyasanthoshcs@gmail.com" 
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-slate-600 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-slate-400 hover:text-blue-600 transition-colors duration-200" size={32} />
        </button>
      </div>
    </section>
  );
};
