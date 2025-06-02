
import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

export const About = () => {
  const skills = [
    { icon: Code, title: "Development", description: "Modern web technologies including React, TypeScript, and Node.js" },
    { icon: Palette, title: "Design", description: "Creating beautiful, user-centered interfaces and experiences" },
    { icon: Zap, title: "Performance", description: "Building fast, optimized applications that users love" },
    { icon: Heart, title: "Passion", description: "Dedicated to continuous learning and delivering excellence" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop&crop=center"
              alt="Developer workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Crafting Digital Experiences
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With a background in both design and development, I bring a unique perspective 
              to every project. I believe in the power of clean code, thoughtful design, 
              and seamless user experiences.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open source projects, or sharing knowledge with the developer community.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-32 text-slate-500 font-medium">Frontend:</div>
                <div className="text-slate-700">React, TypeScript, Tailwind CSS</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-slate-500 font-medium">Backend:</div>
                <div className="text-slate-700">Node.js, Python, PostgreSQL</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-slate-500 font-medium">Tools:</div>
                <div className="text-slate-700">Git, Docker, AWS, Figma</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                <skill.icon size={32} />
              </div>
              <h4 className="text-xl font-semibold text-slate-800 mb-2">{skill.title}</h4>
              <p className="text-slate-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
