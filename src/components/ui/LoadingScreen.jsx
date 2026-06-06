import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(t); setTimeout(onComplete, 400); return 100; }
        return p + 2;
      });
    }, 35);
    return () => clearInterval(t);
  }, [onComplete]);

  const msg = progress < 30 ? '// Cargando módulos...' : progress < 65 ? '// Preparando interfaz...' : progress < 90 ? '// Activando sistemas IA...' : '// Sistema listo ✓';

  return (
    <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#050E1A' }}>
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div initial={{ opacity:0,y:30 }} animate={{ opacity:1,y:0 }} transition={{ duration:.6 }}
        className="relative z-10 text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-3">
          <motion.div animate={{ rotate:360 }} transition={{ duration:8,repeat:Infinity,ease:'linear' }}
            className="w-14 h-14 rounded-xl flex items-center justify-center"
            style={{ border:'2px solid #1491d3',boxShadow:'0 0 25px rgba(20,145,211,0.5)' }}>
            <div className="w-7 h-7 rounded-lg" style={{ background:'linear-gradient(135deg,#1491d3,#034678)' }} />
          </motion.div>
          <div>
            <div style={{ fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'2rem',letterSpacing:'.15em' }}>
              VAX<span style={{ color:'#1491d3' }}>US</span>
            </div>
            <div style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'rgba(255,255,255,0.35)',letterSpacing:'.2em' }}>
              SOLUCIONES DIGITALES
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          {[0,1,2].map(i => (
            <motion.div key={i} animate={{ opacity:[.3,1,.3],scale:[.8,1.3,.8] }}
              transition={{ duration:1.2,repeat:Infinity,delay:i*0.2 }}
              className="w-1.5 h-1.5 rounded-full" style={{ background:'#1491d3' }} />
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.3 }} className="relative z-10 w-60">
        <div className="flex justify-between mb-1.5">
          <span style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.7rem',color:'rgba(255,255,255,0.35)' }}>Inicializando</span>
          <span style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.7rem',color:'#1491d3' }}>{progress}%</span>
        </div>
        <div className="h-px w-full rounded-full overflow-hidden" style={{ background:'rgba(20,145,211,0.15)' }}>
          <div className="h-full rounded-full transition-all duration-75"
            style={{ background:'linear-gradient(90deg,#1491d3,#5bc4f5)',width:`${progress}%` }} />
        </div>
        <div className="mt-2 text-left" style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.65rem',color:'rgba(255,255,255,0.2)' }}>{msg}</div>
      </motion.div>
    </motion.div>
  );
}