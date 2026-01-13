
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Network, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-mono uppercase tracking-widest"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
        </span>
        Systems Online: v2.5-Stable
      </motion.div>

      <motion.h1 
        className="text-5xl md:text-8xl font-bold tracking-tight mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Architecting <span className="gradient-text">Intelligence.</span>
      </motion.h1>

      <motion.p 
        className="text-lg md:text-2xl text-neutral-400 max-w-2xl mb-12 font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Building intelligent backend systems with <span className="text-white">Agentic AI</span>, 
        <span className="text-white"> Automation</span>, and <span className="text-white">Blockchain</span>. 
        Focusing on scale, reliability, and autonomous workflows.
      </motion.p>

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link to="/projects" className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-neutral-200 transition-all overflow-hidden">
          View Deployments
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link to="/contact" className="px-8 py-4 border border-white/10 hover:border-white/20 rounded-full font-semibold transition-colors">
          Initialize Contact
        </Link>
      </motion.div>

      <motion.div 
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { icon: <Terminal className="w-5 h-5" />, title: 'Agentic AI', desc: 'Swarms of autonomous agents executing complex logic trees.' },
          { icon: <Network className="w-5 h-5" />, title: 'Workflow Orchestration', desc: 'Seamless n8n automation bridging backend services and external APIs.' },
          { icon: <ShieldCheck className="w-5 h-5" />, title: 'Blockchain Ready', desc: 'Secure, trustless systems integrated with decentralized data layers.' }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <div className="text-accent-primary mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
