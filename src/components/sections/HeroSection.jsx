import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { scrollToElement } from '../../utils/animations';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Data Scientist', 'ML Engineer', 'Data Engineer'];
  const fullText = "Hi, I'm ";
  const name = "Devesh Darji";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          {/* Greeting with typewriter effect */}
          <div className="mb-6 overflow-hidden">
            <p className="text-cyan-400 text-xl md:text-2xl font-mono">
              {displayedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              {name}
            </span>
          </h1>

          {/* Rotating Roles */}
          <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
              <span className="text-purple-400">
                {roles[roleIndex]}
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            I build intelligent software systems and scalable machine learning solutions that turn complex data 
            into actionable business insights. Passionate about machine learning, data engineering, 
            and creating impact through technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => scrollToElement('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToElement('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToElement('about')}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;