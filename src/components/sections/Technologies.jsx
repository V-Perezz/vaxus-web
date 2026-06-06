import { motion } from 'framer-motion';
import { technologies } from '../../data';

const row1 = technologies.slice(0, Math.ceil(technologies.length / 2));
const row2 = technologies.slice(Math.ceil(technologies.length / 2));

function TechItem({tech}) {
  return (
    <div className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl mx-2 group transition-all hover:scale-105 relative"
      style={{background:'rgba(9,21,37,0.7)',border:'1px solid rgba(20,145,211,0.12)',minWidth:'90px'}}>
      <span className="text-base font-bold" style={{color:tech.color,fontFamily:'Syne,sans-serif',textShadow:`0 0 10px ${tech.color}60`}}>
        {tech.name.slice(0,2).toUpperCase()}
      </span>
      <span className="text-xs whitespace-nowrap" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>{tech.name}</span>
    </div>
  );
}

function MarqueeRow({items,reverse}) {
  const doubled=[...items,...items];
  return (
    <div className="overflow-hidden marquee-wrap">
      <div className={`flex ${reverse?'marquee-rev':'marquee-fwd'}`}>
        {doubled.map((t,i)=><TechItem key={`${t.name}-${i}`} tech={t}/>)}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="tecnologias" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0" style={{background:'#091525'}}/>
      <div className="absolute inset-0 grid-bg opacity-20"/>
      <div className="relative z-10">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="text-center mb-14 max-w-7xl mx-auto px-6">
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',color:'#1491d3',letterSpacing:'.2em'}}>// TECNOLOGÍAS</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{fontFamily:'Syne,sans-serif'}}>
            Nuestro <span className="gradient-text">arsenal técnico</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm" style={{color:'rgba(255,255,255,0.45)',fontFamily:'DM Sans,sans-serif'}}>
            Herramientas y tecnologías con las que construimos soluciones de clase mundial.
          </p>
        </motion.div>
        <div className="space-y-4">
          <MarqueeRow items={row1} reverse={false}/>
          <MarqueeRow items={row2} reverse={true}/>
        </div>
      </div>
    </section>
  );
}