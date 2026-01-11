import React, { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { blogs } from '../../data/blogs';

const BlogSection = () => {
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

  const featuredBlog = blogs.find(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  return (
    <section id="blog" className="py-20 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Blog & Articles
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Thoughts on data science, machine learning, and technology
          </p>
        </div>

        {/* Featured Article */}
        {featuredBlog && (
          <div className="mb-12 fade-on-scroll">
            <Card className="overflow-hidden p-0 grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredBlog.image} 
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {featuredBlog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredBlog.readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 hover:text-cyan-400 transition-colors">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {featuredBlog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredBlog.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="primary" className="self-start">
                  Read Article
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-on-scroll">
          {regularBlogs.map((blog, index) => (
            <Card 
              key={blog.id}
              className="overflow-hidden p-0 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={blog.link}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-2 transition-colors group"
                >
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 fade-on-scroll">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;