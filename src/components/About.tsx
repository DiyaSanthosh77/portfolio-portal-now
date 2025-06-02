
import React from 'react';
import { Code, Palette, Zap, Heart, GraduationCap, Calendar } from 'lucide-react';

export const About = () => {
  const skills = [
    { icon: Code, title: "Development", description: "Expanding skills in Full Stack Development with Java and modern web technologies" },
    { icon: GraduationCap, title: "Education", description: "B.Tech in Computer Science and Engineering from College of Engineering Attingal (2025)" },
    { icon: Zap, title: "Innovation", description: "Passionate about building impactful web applications and innovative solutions" },
    { icon: Heart, title: "Dedication", description: "Committed to continuous learning and creating meaningful digital solutions" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a 22-year-old Computer Science graduate passionate about technology 
            and driven to create meaningful digital solutions. Currently, I'm expanding 
            my skills in Full Stack Development to build impactful web applications and 
            grow as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/760e4861-0e3b-4deb-bb4d-ac634cc51bc5.png"
              alt="Diya Santhosh"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              My Journey
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Born on March 24, 2003, I have always been fascinated by technology and its 
              potential to solve real-world problems. I completed my B.Tech in Computer 
              Science and Engineering from the College of Engineering Attingal in 2025. 
              Currently, I am pursuing Full Stack Development with Java to expand my skills 
              and knowledge.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              I am eager to apply my academic background to practical projects and contribute 
              to innovative solutions. My goal is to become a skilled full-stack developer 
              capable of building end-to-end applications that make a positive impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-32 text-slate-500 font-medium">Education:</div>
                <div className="text-slate-700">B.Tech CSE, College of Engineering Attingal (2025)</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-slate-500 font-medium">Current Focus:</div>
                <div className="text-slate-700">Full Stack Development with Java</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-slate-500 font-medium">Age:</div>
                <div className="text-slate-700">22 years old</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-slate-500 font-medium">Born:</div>
                <div className="text-slate-700">March 24, 2003</div>
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
