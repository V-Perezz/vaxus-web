import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  {label:'Inicio',href:'inicio'},{label:'Servicios',href:'servicios'},
  {label:'Portafolio',href:'portafolio'},{label:'Sobre Vaxus',href:'sobre'},
  {label:'Tecnologías',href:'tecnologias'},{label:'Contacto',href:'contacto'},
];
const go = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

export default function Navbar() {
  const [scrolled,setScrolled] = useState(false);
  const [open,setOpen] = useState(false);
  const [active,setActive] = useState('inicio');

  useEffect(()=>{
    const fn = ()=>{
      setScrolled(window.scrollY>40);
      for(let i=links.length-1;i>=0;i--){
        const el=document.getElementById(links[i].href);
        if(el&&window.scrollY>=el.offsetTop-200){setActive(links[i].href);break;}
      }
    };
    window.addEventListener('scroll',fn);
    return ()=>window.removeEventListener('scroll',fn);
  },[]);

  return (
    <>
      <motion.nav initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.6}}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{ background:scrolled?'rgba(5,14,26,0.95)':'transparent', backdropFilter:scrolled?'blur(20px)':'none', borderBottom:scrolled?'1px solid rgba(20,145,211,0.12)':'none' }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={()=>go('inicio')} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-all group-hover:scale-110"
              style={{ background:'linear-gradient(135deg,#1491d3,#034678)',boxShadow:'0 0 15px rgba(20,145,211,0.4)' }}>
             <img src="/public/icons/ISOTIPO.svg" alt="VAXUS" width={48} height={48} /> 
            </div>
           <img
          src="/public/icons/VAXUS.png"
          alt="VAXUS"
          width={120}
          height={120}
          className="relative -top-2"
          />
          </button>

          <div className="hidden md:flex items-center gap-1">
            {links.map(link=>{
              const isActive=active===link.href;
              return (
                <button key={link.href} onClick={()=>go(link.href)}
                  className="relative px-4 py-2 text-sm rounded-lg transition-all"
                  style={{ color:isActive?'#1491d3':'rgba(255,255,255,0.65)',fontWeight:isActive?600:400,fontFamily:'DM Sans,sans-serif' }}>
                  {isActive&&<motion.div layoutId="navActive" className="absolute inset-0 rounded-lg"
                    style={{ background:'rgba(20,145,211,0.1)',border:'1px solid rgba(20,145,211,0.2)' }}/>}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={()=>go('contacto')}
              className="hidden md:flex px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background:'linear-gradient(135deg,#1491d3,#034678)',boxShadow:'0 0 18px rgba(20,145,211,0.35)',fontFamily:'DM Sans,sans-serif' }}>
              Contrátame
            </button>
            <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-lg"
              style={{ background:'rgba(20,145,211,0.1)',border:'1px solid rgba(20,145,211,0.2)',color:'white' }}>
              {open?<X size={20}/>:<Menu size={20}/>}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open&&(
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{ background:'rgba(5,14,26,0.98)',backdropFilter:'blur(30px)',borderBottom:'1px solid rgba(20,145,211,0.15)' }}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((link,i)=>(
                <motion.button key={link.href} initial={{opacity:0,x:-15}} animate={{opacity:1,x:0}} transition={{delay:i*.05}}
                  onClick={()=>{go(link.href);setOpen(false);}}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm transition-all"
                  style={{ color:active===link.href?'#1491d3':'rgba(255,255,255,0.75)',background:active===link.href?'rgba(20,145,211,0.1)':'transparent',fontFamily:'DM Sans,sans-serif' }}>
                  {link.label}
                </motion.button>
              ))}
              <button onClick={()=>{go('contacto');setOpen(false);}}
                className="w-full mt-2 py-3 rounded-lg text-sm font-semibold text-white"
                style={{ background:'linear-gradient(135deg,#1491d3,#034678)',fontFamily:'DM Sans,sans-serif' }}>
                Contrátame
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}