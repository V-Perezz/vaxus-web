import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const ROLES = ['Desarrollador Full Stack','Especialista en IA','Consultor Tecnológico','Experto en Ciberseguridad'];
const BADGES = ['React','Python','OpenAI','Docker','Node.js','FastAPI'];

function Particles() {
  const ref = useRef(null);
  useEffect(()=>{
    const c=ref.current, ctx=c.getContext('2d'); let raf;
    const resize=()=>{c.width=window.innerWidth;c.height=window.innerHeight;};
    resize(); window.addEventListener('resize',resize);
    const pts=Array.from({length:75},()=>({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.5+.4,a:Math.random()*.5+.1}));
    const draw=()=>{
      ctx.clearRect(0,0,c.width,c.height);
      pts.forEach(p=>{
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=c.width;if(p.x>c.width)p.x=0;
        if(p.y<0)p.y=c.height;if(p.y>c.height)p.y=0;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(20,145,211,${p.a})`;ctx.fill();
      });
      for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
        const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<110){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(20,145,211,${.1*(1-d/110)})`;ctx.lineWidth=.5;ctx.stroke();}
      }
      raf=requestAnimationFrame(draw);
    };
    draw();
    return()=>{window.removeEventListener('resize',resize);cancelAnimationFrame(raf);};
  },[]);
  return <canvas ref={ref} className="absolute inset-0 pointer-events-none" style={{opacity:.75}}/>;
}

function Typewriter() {
  const [idx,setIdx]=useState(0);const [txt,setTxt]=useState('');const [del,setDel]=useState(false);
  useEffect(()=>{
    const cur=ROLES[idx];
    const t=setTimeout(()=>{
      if(!del&&txt.length<cur.length)setTxt(cur.slice(0,txt.length+1));
      else if(!del&&txt.length===cur.length)setDel(true);
      else if(del&&txt.length>0)setTxt(cur.slice(0,txt.length-1));
      else{setDel(false);setIdx((idx+1)%ROLES.length);}
    },del?35:(!del&&txt.length===ROLES[idx].length)?2000:75);
    return()=>clearTimeout(t);
  },[txt,del,idx]);
  return <span><span style={{color:'#1491d3'}}>{txt}</span><span className="tw-cursor" style={{color:'#1491d3'}}>|</span></span>;
}

export default function Hero() {
  const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0" style={{background:'#050E1A'}}/>
      <div className="absolute inset-0 grid-bg"/>
      <Particles/>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle,rgba(20,145,211,0.1) 0%,transparent 70%)',filter:'blur(60px)'}}/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.5}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
              style={{background:'rgba(20,145,211,0.07)',border:'1px solid rgba(20,145,211,0.22)'}}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{background:'#22c55e'}}/>
              <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',color:'rgba(255,255,255,0.75)'}}>Disponible para proyectos</span>
              <Sparkles size={13} style={{color:'#1491d3'}}/>
            </motion.div>

            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}}
              className="text-4xl sm:text-5xl lg:text-[3.2rem] font-bold leading-tight mb-4"
              style={{fontFamily:'Syne,sans-serif',lineHeight:1.1}}>
              Transformamos ideas en{' '}
              <span className="gradient-text">soluciones digitales</span>{' '}
              <span className="glow-text" style={{color:'#1491d3'}}>inteligentes</span>
            </motion.h1>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3}}
              className="text-xl sm:text-2xl font-medium mb-5 h-9"
              style={{fontFamily:'DM Sans,sans-serif',color:'rgba(255,255,255,0.8)'}}>
              <Typewriter/>
            </motion.div>

            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.4}}
              className="text-sm leading-relaxed mb-8 max-w-lg"
              style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>
              VAXUS es tu aliado tecnológico para construir plataformas web escalables, implementar inteligencia artificial y automatizar procesos que impulsan tu negocio hacia el futuro.
            </motion.p>

            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.5}}
              className="flex flex-wrap gap-3 mb-8">
              <button onClick={()=>go('portafolio')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                style={{background:'linear-gradient(135deg,#1491d3,#034678)',boxShadow:'0 0 22px rgba(20,145,211,0.4)',fontFamily:'DM Sans,sans-serif'}}>
                Ver portafolio <ArrowRight size={15}/>
              </button>
              <button onClick={()=>go('contacto')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:scale-105"
                style={{background:'rgba(20,145,211,0.07)',border:'1px solid rgba(20,145,211,0.28)',fontFamily:'DM Sans,sans-serif'}}>
                <Play size={13} style={{fill:'#1491d3',color:'#1491d3'}}/> Contactar ahora
              </button>
            </motion.div>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}}
              className="flex flex-wrap gap-2 items-center">
              <span className="text-xs" style={{color:'rgba(255,255,255,0.3)',fontFamily:'DM Sans,sans-serif'}}>Stack:</span>
              {BADGES.map((b,i)=>(
                <motion.span key={b} initial={{opacity:0,scale:.8}} animate={{opacity:1,scale:1}} transition={{delay:.7+i*.07}}
                  className="tech-badge">{b}</motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.3}}
            className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <motion.div animate={{rotate:360}} transition={{duration:20,repeat:Infinity,ease:'linear'}}
                className="absolute inset-0 rounded-full" style={{border:'1px dashed rgba(20,145,211,0.25)'}}>
                {[0,90,180,270].map(d=>(
                  <div key={d} className="absolute w-2.5 h-2.5 rounded-full"
                    style={{background:'#1491d3',boxShadow:'0 0 8px rgba(20,145,211,0.9)',top:'50%',left:'50%',transform:`rotate(${d}deg) translateX(120px) translateY(-5px)`}}/>
                ))}
              </motion.div>
              <motion.div animate={{rotate:-360}} transition={{duration:13,repeat:Infinity,ease:'linear'}}
                className="absolute rounded-full" style={{inset:'36px',border:'1px solid rgba(20,145,211,0.12)'}}>
                {[45,135,225,315].map(d=>(
                  <div key={d} className="absolute w-2 h-2 rounded-full"
                    style={{background:'rgba(20,145,211,0.6)',top:'50%',left:'50%',transform:`rotate(${d}deg) translateX(66px) translateY(-4px)`}}/>
                ))}
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{scale:[1,1.04,1]}} transition={{duration:3,repeat:Infinity}}
                  className="w-28 h-28 rounded-2xl flex flex-col items-center justify-center"
                  style={{background:'rgba(9,21,37,0.95)',border:'1px solid rgba(20,145,211,0.4)',boxShadow:'0 0 40px rgba(20,145,211,0.2)'}}>
                {/* <div className="w-9 h-9 rounded-xl mb-1.5" style={{background:'linear-gradient(135deg,#1491d3,#034678)',boxShadow:'0 0 18px rgba(20,145,211,0.5)'}}/> */}
                   <img
                   src="/public/icons/vaxus.png"
                   alt="vaxus"
                   width={90}
                   height={90}
                   className="relative -top-2"
                   />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.6rem',letterSpacing:'.2em',color:'rgba(255,255,255,0.25)'}}>SCROLL</span>
          <motion.div animate={{y:[0,8,0]}} transition={{duration:1.5,repeat:Infinity}}
            className="w-px h-7" style={{background:'linear-gradient(to bottom,rgba(20,145,211,0.5),transparent)'}}/>
        </motion.div>
      </div>
    </section>
  );
}