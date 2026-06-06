import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const Icon = Icons[service.icon] || Icons.Globe;
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        style={{ background:'rgba(5,14,26,0.85)',backdropFilter:'blur(8px)' }}
        onClick={onClose}>
        <motion.div initial={{ scale:.9,opacity:0,y:20 }} animate={{ scale:1,opacity:1,y:0 }}
          exit={{ scale:.9,opacity:0,y:20 }} transition={{ type:'spring',duration:.4 }}
          className="glass-strong rounded-2xl p-8 max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all" style={{ color:'rgba(255,255,255,0.5)' }}>
            <X size={18} />
          </button>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background:`${service.color}20`,border:`1px solid ${service.color}40` }}>
              <Icon size={28} style={{ color:service.color }} />
            </div>
            <div>
              <h3 style={{ fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1.2rem' }}>{service.title}</h3>
              <p className="text-sm" style={{ color:'rgba(255,255,255,0.5)' }}>Servicio VAXUS</p>
            </div>
          </div>
          <p className="mb-6 leading-relaxed text-sm" style={{ color:'rgba(255,255,255,0.7)',fontFamily:'DM Sans,sans-serif' }}>{service.description}</p>
          <div className="mb-6">
            <p className="text-xs font-semibold mb-3" style={{ color:'rgba(255,255,255,0.4)',fontFamily:'JetBrains Mono,monospace',letterSpacing:'.1em' }}>INCLUYE</p>
            <div className="space-y-2">
              {service.features.map((f,i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle size={14} style={{ color:service.color,flexShrink:0 }} />
                  <span className="text-sm" style={{ color:'rgba(255,255,255,0.75)',fontFamily:'DM Sans,sans-serif' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => { onClose(); document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'}); }}
            className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
            style={{ background:`linear-gradient(135deg,${service.color},${service.color}99)`,fontFamily:'DM Sans,sans-serif' }}>
            Solicitar este servicio
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}