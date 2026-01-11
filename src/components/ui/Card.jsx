import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => {
  const hoverEffect = hover ? 'hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20' : '';
  
  return (
    <div 
      className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 transition-all duration-300 ${hoverEffect} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;