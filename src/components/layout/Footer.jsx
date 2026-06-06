const go = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(20,145,211,0.1)',background:'#050E1A' }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background:'linear-gradient(135deg,#1491d3,#034678)' }}>
                <img src="/public/icons/ISOTIPO.svg" alt="VAXUS" width={48} height={48} />
              </div>
               <img
          src="/public/icons/VAXUS.png"
          alt="VAXUS"
          width={120}
          height={120}
          className="relative -top-2"
          />
            </div>
            <p className="text-sm leading-relaxed" style={{ color:'rgba(255,255,255,0.4)',fontFamily:'DM Sans,sans-serif',maxWidth:'260px' }}>
              Soluciones digitales inteligentes desde República Dominicana para el mundo.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ fontFamily:'Syne,sans-serif',color:'rgba(255,255,255,0.5)',letterSpacing:'.1em' }}>NAVEGACIÓN</h4>
            <div className="space-y-2">
              {[['inicio','Inicio'],['servicios','Servicios'],['portafolio','Portafolio'],['sobre','Sobre Vaxus'],['tecnologias','Tecnologías'],['contacto','Contacto']].map(([id,label])=>(
                <button key={id} onClick={()=>go(id)} className="block text-sm hover:text-white transition-colors" style={{ color:'rgba(255,255,255,0.4)',fontFamily:'DM Sans,sans-serif' }}>{label}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4" style={{ fontFamily:'Syne,sans-serif',color:'rgba(255,255,255,0.5)',letterSpacing:'.1em' }}>CONTACTO</h4>
            <div className="space-y-2 text-sm" style={{ color:'rgba(255,255,255,0.4)',fontFamily:'DM Sans,sans-serif' }}>
              <p>📧 contacto@vaxus.tech</p>
              <p>📱 +1 (809) 678-7108</p>
              <p>📍 Santo Domingo, RD</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full animate-pulse inline-block" style={{ background:'#22c55e' }}/>
                <span>Disponible para proyectos</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop:'1px solid rgba(20,145,211,0.08)' }}>
          <p className="text-xs" style={{ color:'rgba(255,255,255,0.2)',fontFamily:'JetBrains Mono,monospace' }}>© {new Date().getFullYear()} VAXUS. Todos los derechos reservados.</p>
          <p className="text-xs" style={{ color:'rgba(255,255,255,0.2)',fontFamily:'JetBrains Mono,monospace' }}>Hecho con 💙 en República Dominicana</p>
        </div>
      </div>
    </footer>
  );
}