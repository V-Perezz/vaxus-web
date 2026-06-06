import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MatrixEgg({ active, onClose }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / 16);
    const drops = Array(cols).fill(1);
    const chars = 'VAXUS01アイウエオ0110IA';
    const draw = () => {
      ctx.fillStyle = 'rgba(5,14,26,0.05)';
      ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = '#1491d3'; ctx.font = '13px JetBrains Mono';
      drops.forEach((y,i) => {
        ctx.fillText(chars[Math.floor(Math.random()*chars.length)],i*16,y*16);
        if (y*16 > canvas.height && Math.random()>.975) drops[i]=0;
        drops[i]++;
      });
    };
    const interval = setInterval(draw,45);
    const auto = setTimeout(onClose,8000);
    return () => { clearInterval(interval); clearTimeout(auto); };
  }, [active,onClose]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
          className="fixed inset-0 z-[9990]" style={{ background:'#050E1A' }}>
          <canvas ref={canvasRef} className="w-full h-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
            <div style={{ fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'3rem',color:'#1491d3',textShadow:'0 0 30px rgba(20,145,211,0.9)' }}>VAXUS</div>
            <div style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.8rem',color:'rgba(20,145,211,0.7)',marginTop:'8px' }}>// Easter egg activado</div>
          </div>
          <button onClick={onClose} className="absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background:'rgba(20,145,211,0.1)',border:'1px solid rgba(20,145,211,0.3)',color:'#1491d3' }}>
            <X size={20} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}