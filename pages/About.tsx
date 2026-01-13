
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.h2 
        className="text-4xl font-bold mb-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <span className="w-12 h-px bg-accent-primary" />
        Cognition & Origins
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div 
          className="space-y-6 text-neutral-300 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            I am <span className="text-white font-bold">Suvendu</span>, an engineer who lives where complex logic meets autonomous execution. 
            While others focus on pixels and layouts, my obsession lies in the <span className="text-accent-primary italic">nervous system</span> of the application: the backend.
          </p>
          <p>
            My journey began with a deep curiosity for how systems communicate. This evolved from simple REST APIs to high-concurrency Node.js architectures, and eventually into the realm of <span className="text-white">Agentic AI</span>. 
          </p>
          <p>
            I believe that the future of software isn't just about code that responds to input, but code that <span className="text-accent-secondary font-bold">thinks</span> and <span className="text-accent-secondary font-bold">orchestrates</span>. Using n8n and advanced AI tooling, I build systems that can independently solve real-world problems.
          </p>
        </motion.div>

        <motion.div 
          className="relative group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-square">
             <img 
               src="https://picsum.photos/seed/suvendu/800/800" 
               alt="Suvendu Portrait" 
               className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <p className="text-sm font-mono text-neutral-400">Location: [GLOBAL]</p>
                <p className="text-sm font-mono text-neutral-400">Specialization: [AUTONOMOUS_BACKENDS]</p>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="mt-20 p-8 rounded-3xl bg-neutral-900/50 border border-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6">Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Builder Mindset', val: 'I start with "how it works", not "how it looks". A beautiful shell is useless without a powerful engine.' },
            { label: 'Rapid Iteration', val: 'The field moves fast. I prioritize building end-to-end prototypes that can scale into production systems.' },
            { label: 'Systems Thinking', val: 'I view applications as interconnected ecosystems. Every endpoint and automation node must serve the whole.' }
          ].map((item, i) => (
            <div key={i}>
              <p className="text-accent-primary font-mono text-xs mb-2 uppercase tracking-tighter">{item.label}</p>
              <p className="text-neutral-400 text-sm">{item.val}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
