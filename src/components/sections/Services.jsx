import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { services } from '../../data';
import ServiceModal from '../ui/ServiceModal';

export default function Services() {
  const [modal,setModal] = useState(null);
  return (
    <section id="servicios" className="section-pad relative">
      <div className="absolute inset-0 grid-bg opacity-30"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-center mb-16">
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',color:'#1491d3',letterSpacing:'.2em'}}>// SERVICIOS</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{fontFamily:'Syne,sans-serif'}}>
            ¿En qué puedo <span className="gradient-text">ayudarte?</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>
            Soluciones tecnológicas completas para empresas que quieren crecer en la era digital.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s,i)=>{
            const Icon=Icons[s.icon]||Icons.Globe;
            return (
              <motion.div key={s.id} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
                transition={{duration:.5,delay:i*0.08}} whileHover={{y:-4,scale:1.01}}
                className="glass rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
                onClick={()=>setModal(s)}>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  style={{background:`radial-gradient(circle at 50% 0%,${s.color}12 0%,transparent 70%)`}}/>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110"
                  style={{background:`${s.color}18`,border:`1px solid ${s.color}35`}}>
                  <Icon size={24} style={{color:s.color}}/>
                </div>
                <h3 className="font-bold mb-2 text-base" style={{fontFamily:'Syne,sans-serif'}}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>{s.short}</p>
                <span className="flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5" style={{color:s.color,fontFamily:'DM Sans,sans-serif'}}>
                  Saber más <Icons.ArrowRight size={13}/>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
      <ServiceModal service={modal} onClose={()=>setModal(null)}/>
    </section>
  );
}