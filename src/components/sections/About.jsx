import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Icons from 'lucide-react';
import { stats, values, objectives } from '../../data';

function Counter({value,suffix}) {
  const ref=useRef(null);
  const inView=useInView(ref,{once:true});
  return <span ref={ref}>{inView?value:0}{suffix}</span>;
}

export default function About() {
  return (
    <section id="sobre" className="section-pad relative">
      <div className="absolute inset-0 grid-bg opacity-25"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-16">
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',color:'#1491d3',letterSpacing:'.2em'}}>// SOBRE VAXUS</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2" style={{fontFamily:'Syne,sans-serif'}}>
            La empresa <span className="gradient-text">detrás del código</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}}>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{background:'linear-gradient(135deg,#1491d3,#034678)',boxShadow:'0 0 20px rgba(20,145,211,0.4)'}}>
                  <span style={{fontFamily:'Syne,sans-serif',fontWeight:800,fontSize:'1.2rem',color:'white'}}>VX</span>
                </div>
                <div>
                  <h3 style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'1.1rem'}}>Fundador & CEO</h3>
                  <p className="text-sm" style={{color:'#1491d3',fontFamily:'JetBrains Mono,monospace'}}>VAXUS Technology</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{color:'rgba(255,255,255,0.65)',fontFamily:'DM Sans,sans-serif'}}>
                VAXUS nació de la necesidad de ofrecer soluciones tecnológicas reales, adaptadas al mercado dominicano e internacional, combinando desarrollo de software, inteligencia artificial y ciberseguridad en una sola propuesta de valor.
              </p>
              <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>
                Desde República Dominicana, construimos tecnología que compite a nivel mundial, con identidad propia y enfoque en resultados medibles para cada cliente.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}} className="space-y-4">
            {[{label:'Misión',icon:'Target',text:'Desarrollar soluciones digitales inteligentes que automaticen procesos humanos, fortalezcan la seguridad de plataformas y empresas, y ofrezcan soporte confiable a nivel nacional e internacional, impulsando la transformación tecnológica con IA.'},{label:'Visión',icon:'Eye',text:'Ser la empresa líder en inteligencia artificial y tecnología en 2030 en República Dominicana, reconocida nacional e internacionalmente por resolver problemáticas aún no atendidas y generar impacto positivo en la sociedad.'}].map(({label,icon,text})=>{
              const Icon=Icons[icon];
              return (
                <div key={label} className="glass rounded-2xl p-6">
                  <div className="flex items-center gap-2.5 mb-3">
                    <Icon size={18} style={{color:'#1491d3'}}/><h4 style={{fontFamily:'Syne,sans-serif',fontWeight:700,fontSize:'.9rem',color:'#1491d3'}}>{label}</h4>
                  </div>
                  <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.6)',fontFamily:'DM Sans,sans-serif'}}>{text}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {stats.map((s,i)=>(
            <motion.div key={i} initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.1}}
              className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-1" style={{fontFamily:'Syne,sans-serif',color:'#1491d3'}}>
                <Counter value={s.value} suffix={s.suffix}/>
              </div>
              <div className="text-xs" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{fontFamily:'Syne,sans-serif'}}>Nuestros <span className="gradient-text">valores</span></h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((v,i)=>{
              const Icon=Icons[v.icon];
              return (
                <motion.div key={i} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}} whileHover={{y:-4}}
                  className="glass rounded-2xl p-6 text-center group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all group-hover:scale-110" style={{background:'rgba(20,145,211,0.12)',border:'1px solid rgba(20,145,211,0.25)'}}>
                    <Icon size={22} style={{color:'#1491d3'}}/>
                  </div>
                  <h4 className="font-bold mb-2" style={{fontFamily:'Syne,sans-serif'}}>{v.title}</h4>
                  <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.55)',fontFamily:'DM Sans,sans-serif'}}>{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{fontFamily:'Syne,sans-serif'}}>Objetivos <span className="gradient-text">estratégicos</span></h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {objectives.map((obj,i)=>(
              <motion.div key={i} initial={{opacity:0,x:-15}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.08}}
                className="flex items-start gap-3 glass rounded-xl p-4">
                <span className="w-5 h-5 rounded-md flex-shrink-0 mt-0.5 flex items-center justify-center text-xs font-bold"
                  style={{background:'rgba(20,145,211,0.15)',color:'#1491d3',fontFamily:'JetBrains Mono,monospace'}}>
                  {String(i+1).padStart(2,'0')}
                </span>
                <p className="text-sm leading-relaxed" style={{color:'rgba(255,255,255,0.65)',fontFamily:'DM Sans,sans-serif'}}>{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}