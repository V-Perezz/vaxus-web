import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { socialLinks } from '../../data';

const SocialIcon = ({ name, color }) => {
  if (name === 'Instagram') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
  if (name === 'GitHub') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
  if (name === 'LinkedIn') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
  if (name === 'Discord') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
  return <ExternalLink size={22} color={color} />;
};

export default function Social() {
  return (
    <section className="section-pad relative">
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="text-center mb-14">
          <span style={{ fontFamily:'JetBrains Mono,monospace',fontSize:'.72rem',color:'#1491d3',letterSpacing:'.2em' }}>// REDES SOCIALES</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4" style={{ fontFamily:'Syne,sans-serif' }}>
            Conecta con <span className="gradient-text">VAXUS</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {socialLinks.map((s, i) => (
            <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              initial={{ opacity:0,y:25 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}
              transition={{ duration:.5,delay:i*.1 }} whileHover={{ y:-6 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 group"
              style={{ textDecoration:'none' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                style={{ background:'rgba(255,255,255,0.05)',border:`1px solid ${s.color}40` }}>
                <SocialIcon name={s.name} color={s.color} />
              </div>
              <div>
                <h3 className="font-bold mb-0.5" style={{ fontFamily:'Syne,sans-serif' }}>{s.name}</h3>
                <p className="text-xs mb-2" style={{ color:'#1491d3',fontFamily:'JetBrains Mono,monospace' }}>{s.handle}</p>
                <p className="text-xs" style={{ color:'rgba(255,255,255,0.5)',fontFamily:'DM Sans,sans-serif' }}>{s.description}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold" style={{ color:s.color,fontFamily:'JetBrains Mono,monospace' }}>{s.followers}</span>
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background:`${s.color}18`,border:`1px solid ${s.color}30` }}>
                  <ExternalLink size={12} style={{ color:s.color }} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}