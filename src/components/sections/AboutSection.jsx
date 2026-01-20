import React, { useEffect, useRef } from 'react';
import { Code, Database, Brain, TrendingUp } from 'lucide-react';
import Card from '../ui/Card';
import { skills, skillCategories } from '../../data/skills';
import AboutMe from '../../Images/AboutMe.jpg'

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Machine Learning',
      description: 'Building and deploying production-grade ML models'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Engineering',
      description: 'Designing scalable data pipelines and infrastructure'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Software Development',
      description: 'Writing clean, maintainable, and efficient code'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Analytics',
      description: 'Transforming data into actionable business insights'
    }
  ];

  return (
    <section id="about" className="py-20 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Card */}
          <div className="fade-on-scroll">
            <Card className="h-full">
              <div className="flex flex-col items-center text-center lg:text-left lg:flex-row gap-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-1 flex-shrink-0">
                  <img 
                    src={AboutMe} 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover bg-slate-800"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Passionate About Data & AI
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    With over 5 years of experience in data science and engineering, I specialize in 
                    building end-to-end ML solutions that drive business value. My expertise spans 
                    from data infrastructure to model deployment and monitoring.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    I'm constantly learning and exploring new technologies in the rapidly evolving 
                    fields of AI and data engineering. When I'm not coding, you'll find me traveling to new places and exploring advancements in physics.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-on-scroll">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="text-center p-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 text-cyan-400 mb-4">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="fade-on-scroll">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Technical Skills
          </h3>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-6"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                  {category.name}
                </h4>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Tech Stack Tags */}
          {/* <Card className="p-6">
            <h4 className="text-xl font-semibold text-white mb-6">Technologies I Work With</h4>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={category}>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg text-sm font-medium hover:scale-105 transition-transform cursor-default"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;