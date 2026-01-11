import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const TimelineItem = ({ experience, index }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-purple-500"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-4 h-4 -ml-2 rounded-full bg-cyan-500 border-4 border-slate-900 shadow-lg shadow-cyan-500/50"></div>
      
      {/* Content */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
              <Briefcase size={16} />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{experience.description}</p>
        
        <ul className="space-y-2 mb-4">
          {experience.achievements.map((achievement, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-400">
              <span className="text-cyan-500 mt-1">▹</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;