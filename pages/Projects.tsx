
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Github, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout
      className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="h-64 lg:h-auto overflow-hidden bg-neutral-900">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 hover:scale-105"
          />
        </div>
        
        <div className="p-8 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-mono text-neutral-400">
                {t}
              </span>
            ))}
          </div>
          
          <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
          <p className="text-neutral-400 mb-8 leading-relaxed">
            {project.description}
          </p>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-sm font-bold text-accent-primary hover:text-white transition-colors"
            >
              {isOpen ? 'Minimize Specs' : 'View Deep Dive'}
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            <div className="flex-1 h-px bg-white/5" />
            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-black/40"
          >
            <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5">
              <div>
                <h4 className="text-accent-primary font-mono text-xs uppercase mb-3 tracking-widest">Problem Statement</h4>
                <p className="text-sm text-neutral-400">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-accent-primary font-mono text-xs uppercase mb-3 tracking-widest">System Architecture</h4>
                <p className="text-sm text-neutral-400">{project.architecture}</p>
              </div>
              <div>
                <h4 className="text-accent-primary font-mono text-xs uppercase mb-3 tracking-widest">Core Challenge</h4>
                <p className="text-sm text-neutral-400">{project.challenge}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <header className="mb-16">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Production <span className="gradient-text">Deployments</span>
        </motion.h2>
        <p className="text-neutral-400 max-w-2xl">
          A selection of end-to-end systems designed for scalability and intelligence. 
          Each project represents a significant engineering hurdle solved.
        </p>
      </header>

      <div className="space-y-12">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
