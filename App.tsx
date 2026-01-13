
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import BackgroundEffect from './components/BackgroundEffect';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Projects = lazy(() => import('./pages/Projects'));
const Lab = lazy(() => import('./pages/Lab'));
const Contact = lazy(() => import('./pages/Contact'));

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Suspense fallback={null}><PageWrapper><Home /></PageWrapper></Suspense>} />
        <Route path="/about" element={<Suspense fallback={null}><PageWrapper><About /></PageWrapper></Suspense>} />
        <Route path="/skills" element={<Suspense fallback={null}><PageWrapper><Skills /></PageWrapper></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={null}><PageWrapper><Projects /></PageWrapper></Suspense>} />
        <Route path="/lab" element={<Suspense fallback={null}><PageWrapper><Lab /></PageWrapper></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={null}><PageWrapper><Contact /></PageWrapper></Suspense>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative font-sans text-white bg-background overflow-hidden selection:bg-accent-primary/30">
        <BackgroundEffect />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
