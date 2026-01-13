
import React from 'react';
import { motion } from 'framer-motion';
import { LAB_EXPERIMENTS } from '../constants';
import { FlaskConical, Beaker, Zap, Boxes } from 'lucide-react';

const Lab: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <header className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
        <div className="text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-secondary/10 border border-accent-secondary/20 text-accent-secondary text-[10px] font-mono uppercase tracking-widest mb-4"
          >
            <FlaskConical className="w-3 h-3" />
            Experimental Division
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            AI <span className="gradient-text">Research Lab</span>
          </motion.h2>
          <p className="text-neutral-400 max-w-xl">
            Where theoretical concepts transition into proof-of-concept prototypes. 
            Focused on agentic recursion and trustless automation.
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center min-w-[120px]">
            <span className="block text-2xl font-bold font-mono">03</span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">Active Exps</span>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center min-w-[120px]">
            <span className="block text-2xl font-bold font-mono">09</span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">Completed</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LAB_EXPERIMENTS.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-3xl bg-neutral-900/40 border border-white/5 hover:border-accent-secondary/30 transition-all"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-secondary/10 blur-2xl group-hover:bg-accent-secondary/20 transition-all rounded-full" />
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-xl bg-white/5 text-accent-secondary">
                {exp.category === 'AI Agents' && <Zap className="w-5 h-5" />}
                {exp.category === 'Blockchain' && <Boxes className="w-5 h-5" />}
                {exp.category === 'Automation' && <Zap className="w-5 h-5" />}
                {exp.category === 'System Design' && <Beaker className="w-5 h-5" />}
              </div>
              <span className={`px-2 py-1 rounded-md text-[9px] font-mono font-bold uppercase ${
                exp.status === 'Experimental' ? 'bg-orange-500/10 text-orange-400' :
                exp.status === 'Alpha' ? 'bg-red-500/10 text-red-400' :
                'bg-blue-500/10 text-blue-400'
              }`}>
                {exp.status}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-accent-secondary transition-colors">{exp.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              {exp.description}
            </p>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">{exp.category}</span>
              <button className="text-[10px] font-mono text-accent-secondary hover:text-white underline">Request Blueprint</button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-20 p-12 border border-dashed border-white/10 rounded-[3rem] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
          <FlaskConical className="w-8 h-8 text-neutral-600" />
        </div>
        <h3 className="text-xl font-bold mb-2">New Hypothesis Incoming</h3>
        <p className="text-neutral-500 max-w-md mx-auto">
          I am currently drafting a paper on <span className="text-white italic">Event-Driven Neural Orchestration</span> in distributed backend clusters.
        </p>
      </motion.div>
    </div>
  );
};

export default Lab;
