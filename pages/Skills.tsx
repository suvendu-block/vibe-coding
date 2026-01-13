
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_GROUPS } from '../constants';
import * as Icons from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <header className="mb-20 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Architecture <span className="gradient-text">& Stack</span>
        </motion.h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">
          Presenting expertise as modular systems. Every node below represents a pillar of my engineering capability.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_GROUPS.map((group, groupIdx) => {
          // Dynamically resolve icon component
          const IconComp = (Icons as any)[group.icon] || Icons.Code2;

          return (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group overflow-hidden"
            >
              {/* Decorative connection lines */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                <IconComp className="w-full h-full text-accent-primary" />
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-accent-primary/10 text-accent-primary">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{group.name}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-sm font-mono text-neutral-400 cursor-default transition-all hover:text-white hover:border-accent-primary/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* System Link Visualization Mockup */}
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  <span>Latency: 12ms</span>
                  <span>Health: Optimal</span>
                  <span>Throughput: High</span>
                </div>
                <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: groupIdx * 0.2 }}
                    className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div 
        className="mt-24 p-12 text-center rounded-[3rem] bg-gradient-to-br from-accent-primary/10 to-transparent border border-white/10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h4 className="text-xl font-bold mb-4">Continuous Learning Pipeline</h4>
        <p className="text-neutral-400 max-w-xl mx-auto mb-8">
          Currently exploring advanced <span className="text-white">Vector Search</span> optimizations and 
          <span className="text-white"> Autonomous Agent Correction</span> protocols to further enhance system reliability.
        </p>
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-black/40 rounded-full border border-white/5 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Monitoring Latest Advancements in GenAI & Distributed Systems
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
