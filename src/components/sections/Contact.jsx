import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Clock } from 'lucide-react';

const SERVICES = ['Desarrollo Web Full Stack','Inteligencia Artificial','Ciberseguridad','Soporte Técnico','Automatización de Procesos','Consultoría Tecnológica','Otro'];
const BUDGETS = ['Menos de $500','$500 - $1,000','$1,000 - $3,000','$3,000 - $10,000','Más de $10,000','Por definir'];
const inp = {background:'rgba(9,21,37,0.7)',border:'1px solid rgba(20,145,211,0.2)',color:'white',borderRadius:'12px',padding:'12px 16px',width:'100%',fontFamily:'DM Sans,sans-serif',fontSize:'.875rem',outline:'none'};

export default function Contact() {
  const [form,setForm]=useState({name:'',email:'',service:'',budget:'',message:''});
  const [sent,setSent]=useState(false);
  const [loading,setLoading]=useState(false);
  const change=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=async e=>{
    e.preventDefault();setLoading(true);
    await new Promise(r=>setTimeout(r,1200));
    setLoading(false);setSent(true);
  };
  return (
    <section id="contacto" className="section-pad relative">
      <div className="absolute inset-0" style={{background:'#091525'}}/>
      <div className="absolute inset-0 grid-bg opacity-20"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center mb-14">
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',color:'#1491d3',letterSpacing:'.2em'}}>// CONTACTO</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{fontFamily:'Syne,sans-serif'}}>
            Hablemos de tu <span className="gradient-text">proyecto</span>
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}} className="space-y-4">
            {[{emoji:'💬',label:'WhatsApp',val:'+1 (809) 678-7108',link:'https://wa.me/18096787108',color:'#25D366'},{emoji:'📧',label:'Email',val:'contacto@vaxus.tech',link:'mailto:contacto@vaxus.tech',color:'#1491d3'},{emoji:'📍',label:'Ubicación',val:'Santo Domingo, República Dominicana',link:null,color:'#7c3aed'}].map(({emoji,label,val,link,color})=>(
              <div key={label} className="glass rounded-2xl p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-xl" style={{background:`${color}18`,border:`1px solid ${color}30`}}>{emoji}</div>
                <div>
                  <p className="text-xs mb-0.5" style={{color:'rgba(255,255,255,0.4)',fontFamily:'JetBrains Mono,monospace'}}>{label}</p>
                  {link?<a href={link} className="text-sm font-medium hover:text-white transition-colors" style={{color:'rgba(255,255,255,0.85)',fontFamily:'DM Sans,sans-serif'}}>{val}</a>
                    :<p className="text-sm" style={{color:'rgba(255,255,255,0.85)',fontFamily:'DM Sans,sans-serif'}}>{val}</p>}
                </div>
              </div>
            ))}
            <div className="glass rounded-2xl p-5 flex items-center gap-4" style={{border:'1px solid rgba(34,197,94,0.2)',background:'rgba(34,197,94,0.04)'}}>
              <Clock size={20} style={{color:'#22c55e',flexShrink:0}}/>
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{fontFamily:'Syne,sans-serif',color:'#22c55e'}}>Respondo en menos de 24 horas</p>
                <p className="text-xs" style={{color:'rgba(255,255,255,0.45)',fontFamily:'DM Sans,sans-serif'}}>Lunes a Viernes, 8am–8pm (GMT-4)</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}}>
            {sent?(
              <div className="glass rounded-2xl p-10 text-center" style={{border:'1px solid rgba(34,197,94,0.2)'}}>
                <CheckCircle size={48} className="mx-auto mb-4" style={{color:'#22c55e'}}/>
                <h3 className="text-xl font-bold mb-2" style={{fontFamily:'Syne,sans-serif'}}>¡Mensaje enviado!</h3>
                <p className="text-sm" style={{color:'rgba(255,255,255,0.55)',fontFamily:'DM Sans,sans-serif'}}>Te responderé en menos de 24 horas. ¡Gracias por contactar a VAXUS!</p>
              </div>
            ):(
              <form onSubmit={submit} className="glass rounded-2xl p-7 space-y-4" style={{border:'1px solid rgba(20,145,211,0.15)'}}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-1.5" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>Nombre *</label>
                    <input name="name" value={form.name} onChange={change} required placeholder="Tu nombre" style={inp}
                      onFocus={e=>e.target.style.borderColor='rgba(20,145,211,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(20,145,211,0.2)'}/>
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>Correo *</label>
                    <input name="email" type="email" value={form.email} onChange={change} required placeholder="tu@email.com" style={inp}
                      onFocus={e=>e.target.style.borderColor='rgba(20,145,211,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(20,145,211,0.2)'}/>
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>Tipo de servicio *</label>
                  <select name="service" value={form.service} onChange={change} required style={{...inp,cursor:'pointer'}}
                    onFocus={e=>e.target.style.borderColor='rgba(20,145,211,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(20,145,211,0.2)'}>
                    <option value="" style={{background:'#091525'}}>Selecciona un servicio</option>
                    {SERVICES.map(s=><option key={s} value={s} style={{background:'#091525'}}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>Presupuesto aproximado</label>
                  <select name="budget" value={form.budget} onChange={change} style={{...inp,cursor:'pointer'}}
                    onFocus={e=>e.target.style.borderColor='rgba(20,145,211,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(20,145,211,0.2)'}>
                    <option value="" style={{background:'#091525'}}>Selecciona un rango</option>
                    {BUDGETS.map(b=><option key={b} value={b} style={{background:'#091525'}}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif'}}>Descripción del proyecto *</label>
                  <textarea name="message" value={form.message} onChange={change} required rows={4}
                    placeholder="Cuéntame sobre tu proyecto..." style={{...inp,resize:'vertical',minHeight:'100px'}}
                    onFocus={e=>e.target.style.borderColor='rgba(20,145,211,0.5)'} onBlur={e=>e.target.style.borderColor='rgba(20,145,211,0.2)'}/>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-70"
                  style={{background:'linear-gradient(135deg,#1491d3,#034678)',boxShadow:'0 0 20px rgba(20,145,211,0.35)',fontFamily:'DM Sans,sans-serif'}}>
                  {loading?<><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Enviando...</>:<><Send size={15}/>Enviar mensaje</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}