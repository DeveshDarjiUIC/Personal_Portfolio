import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import Button from './Button';

const ProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <div 
        className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <div className="relative overflow-hidden h-48">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-cyan-500/90 text-white text-xs font-semibold rounded-full">
              {project.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs text-cyan-400">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
          
          <div className="flex gap-3">
            {project.github && (
              <a 
                href={project.github}
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                onClick={(e) => e.stopPropagation()}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full hover:bg-slate-800 transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/30">
                  {project.category}
                </span>
              </div>
              
              <p className="text-gray-300 text-lg mb-6">{project.longDescription}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Key Highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-400">
                      <span className="text-cyan-500 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {project.github && (
                  <Button 
                    variant="outline" 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </Button>
                )}
                {project.demo && (
                  <Button 
                    variant="primary" 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;