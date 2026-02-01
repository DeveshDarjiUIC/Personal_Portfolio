import React, { useEffect, useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import Card from '../ui/Card';
import { education, certifications } from '../../data/education';

const EducationSection = () => {
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

  return (
    <section id="education" className="py-20 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Education */}
        <div className="mb-16 fade-on-scroll">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="text-cyan-400" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={edu.id}
                className="p-8"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 text-lg font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-gray-300 font-semibold">{edu.period}</p>
                    <p className="text-cyan-400 font-semibold">GPA: {edu.gpa}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{edu.description}</p>

                <div>
                  <p className="text-sm text-gray-400 font-semibold mb-2 flex items-center gap-2">
                    <BookOpen size={16} className="text-cyan-400" />
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/30"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {/* <div className="fade-on-scroll">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Award className="text-cyan-400" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.id}
                className="p-6 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-cyan-400 font-semibold mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  Issued: {cert.date}
                </p>
                <p className="text-gray-500 text-xs font-mono">
                  ID: {cert.credentialId}
                </p>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EducationSection;