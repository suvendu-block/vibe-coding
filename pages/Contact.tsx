
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  const contactLinks = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      value: 'forexsuvendu@gmail.com', 
      href: 'mailto:forexsuvendu@gmail.com' 
    },
    { 
      icon: <Github className="w-5 h-5" />, 
      label: 'GitHub', 
      value: 'https://github.com/suvendu-block', 
      href: 'https://github.com/suvendu-block' 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      value: 'www.linkedin.com/in/suvendu-block', 
      href: 'https://www.linkedin.com/in/suvendu-block' 
    },
    { 
      icon: <MessageSquare className="w-5 h-5" />, 
      label: 'Community', 
      value: 'https://dev.to/', 
      href: 'https://dev.to/' 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Initialize <span className="gradient-text">Connection</span>
          </motion.h2>
          <p className="text-neutral-400 text-lg mb-12">
            Interested in backend scaling, AI orchestration, or custom automation pipelines? 
            Drop a packet below or find me on developer platforms.
          </p>

          <div className="space-y-8">
            {contactLinks.map((link, i) => (
              <motion.a 
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-accent-primary/10 group-hover:border-accent-primary/30 transition-all text-neutral-400 group-hover:text-accent-primary">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">{link.label}</p>
                  <p className="text-lg font-medium group-hover:text-accent-primary transition-colors truncate max-w-[280px] md:max-w-md">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 blur-3xl -z-10" />
          
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Transmission Received</h3>
              <p className="text-neutral-400">
                I'll review the payload and get back to you within 24 hours.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm font-mono text-neutral-500 hover:text-white underline"
              >
                Send Another Packet
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest ml-1">Identity</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-accent-primary focus:outline-none transition-all placeholder:text-neutral-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest ml-1">Callback URL / Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-accent-primary focus:outline-none transition-all placeholder:text-neutral-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest ml-1">Payload / Message</label>
                <textarea 
                  required
                  rows={5}
                  placeholder="Describe your project or inquiry..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-accent-primary focus:outline-none transition-all resize-none placeholder:text-neutral-600"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all active:scale-[0.98]"
              >
                Send Transmission
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
      
      <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-xs font-mono">© 2024 SUVENDU ARCHITECTURES. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest">
          <span>Uptime: 99.9%</span>
          <span>Build: stable-v2.5.12</span>
          <span>Kernel: Linux 6.1-LTS</span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
