import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Cursor from './components/ui/Cursor';
import LoadingScreen from './components/ui/LoadingScreen';
import FloatingCTA from './components/ui/FloatingCTA';
import MatrixEgg from './components/ui/MatrixEgg';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import About from './components/sections/About';
import Technologies from './components/sections/Technologies';
import Social from './components/sections/Social';
import Contact from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [matrix, setMatrix] = useState(false);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const seq = ['v','a','x','u','s'];
    const fn = e => {
      const next = [...keys, e.key].slice(-5);
      setKeys(next);
      if (next.join('') === seq.join('')) { setMatrix(true); setKeys([]); }
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [keys]);

  return (
    <>
      <Cursor />
      <MatrixEgg active={matrix} onClose={() => setMatrix(false)} />
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Portfolio />
            <About />
            <Technologies />
            <Social />
            <Contact />
          </main>
          <Footer />
          <FloatingCTA />
        </>
      )}
    </>
  );
}