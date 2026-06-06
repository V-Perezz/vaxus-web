import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, GitBranch } from 'lucide-react';
import { projects } from '../../data';

const FILTERS = [{label:'Todos',value:'all'},{label:'Web',value:'web'},{label:'IA',value:'ia'},{label:'Seguridad',value:'seguridad'},{label:'Automatización',value:'automatizacion'}];

export default function Portfolio() {
  const [filter,setFilter] = useState('all');
  const filtered = filter==='all'?projects:projects.filter(p=>p.category===filter);
  return (
    <section id="portafolio" className="section-pad relative">
      <div className="absolute inset-0" style={{background:'#091525'}}/>
      <div className="absolute inset-0 grid-bg opacity-20"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-12">
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',color:'#1491d3',letterSpacing:'.2em'}}>// PORTAFOLIO</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{fontFamily:'Syne,sans-serif'}}>
            Proyectos <span className="gradient-text">reales</span>
          </h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {FILTERS.map(f=>(
            <button key={f.value} onClick={()=>setFilter(f.value)}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={{background:filter===f.value?'linear-gradient(135deg,#1491d3,#034678)':'rgba(20,145,211,0.07)',border:`1px solid ${filter===f.value?'transparent':'rgba(20,145,211,0.2)'}`,color:filter===f.value?'white':'rgba(255,255,255,0.6)',fontFamily:'DM Sans,sans-serif',boxShadow:filter===f.value?'0 0 15px rgba(20,145,211,0.35)':'none'}}>
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {filtered.map((p,i)=>(
              <motion.div key={p.id} initial={{opacity:0,scale:.95}} animate={{opacity:1,scale:1}}
                exit={{opacity:0,scale:.95}} transition={{duration:.3,delay:i*0.06}} whileHover={{y:-4}}
                className="glass rounded-2xl overflow-hidden group">
                <div className="h-40 relative" style={{background:`linear-gradient(135deg,${p.color}18,${p.color}08)`}}>
                  {p.featured&&<div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs" style={{background:'rgba(20,145,211,0.15)',border:'1px solid rgba(20,145,211,0.3)',color:'#1491d3',fontFamily:'JetBrains Mono,monospace'}}><Star size={10} fill="#1491d3"/> Destacado</div>}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{background:p.status==='Activo'?'rgba(34,197,94,0.15)':'rgba(148,163,184,0.15)',border:`1px solid ${p.status==='Activo'?'rgba(34,197,94,0.3)':'rgba(148,163,184,0.3)'}`,color:p.status==='Activo'?'#22c55e':'#94a3b8',fontFamily:'JetBrains Mono,monospace'}}>
                    {p.status}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl" style={{background:`linear-gradient(135deg,${p.color}40,${p.color}20)`,border:`1px solid ${p.color}40`}}/>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold mb-2 text-sm leading-tight" style={{fontFamily:'Syne,sans-serif'}}>{p.name}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map(t=><span key={t} className="tech-badge" style={{fontSize:'.6rem'}}>{t}</span>)}
                  </div>
                  <div className="flex gap-2">
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all hover:scale-105"
                      style={{background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.7)',fontFamily:'DM Sans,sans-serif'}}>
                      <GitBranch size={12} />
                    </a>
                    <a href={p.demo} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all hover:scale-105"
                      style={{background:'rgba(20,145,211,0.1)',border:'1px solid rgba(20,145,211,0.25)',color:'#1491d3',fontFamily:'DM Sans,sans-serif'}}>
                      <ExternalLink size={12}/> Ver proyecto
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}