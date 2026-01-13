
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
      {/* Dynamic Glows */}
      <div className="blur-glow bg-accent-primary w-[40vw] h-[40vw] -top-20 -left-20" />
      <div className="blur-glow bg-accent-secondary w-[30vw] h-[30vw] bottom-20 -right-10" />
      
      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
      
      {/* Animated Floating Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute border border-white/5 rounded-full"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            top: `${20 * i}%`,
            left: `${15 * i}%`,
            opacity: 0.05
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffect;
