export const services = [
  { id:1, icon:'Globe', color:'#1491d3', title:'Desarrollo Web Full Stack', short:'Sitios institucionales, e-commerce y plataformas a medida.', description:'Construimos aplicaciones web completas desde diseño hasta despliegue con React, Next.js, Node.js y bases de datos SQL/NoSQL para plataformas escalables y seguras.', features:['Landing pages y sitios corporativos','E-commerce completo','Plataformas SaaS','APIs REST / GraphQL','SEO técnico'] },
  { id:2, icon:'Brain', color:'#7c3aed', title:'Inteligencia Artificial', short:'Chatbots, automatización y modelos personalizados con IA.', description:'Integramos IA en tus procesos con OpenAI, LangChain y modelos fine-tuneados. Desde chatbots hasta análisis de datos con machine learning.', features:['Chatbots y asistentes IA','Integración OpenAI / Claude API','Fine-tuning de modelos','Análisis de datos con IA','Flujos inteligentes'] },
  { id:3, icon:'Shield', color:'#ef4444', title:'Ciberseguridad', short:'Auditorías, hardening y protección de infraestructura.', description:'Protegemos tu plataforma con pentesting profesional, análisis de vulnerabilidades y configuración de seguridad robusta usando Kali Linux y Burp Suite.', features:['Pentesting web y de red','Hardening de servidores','Auditorías de seguridad','Protección DDoS','Configuración firewalls/VPN'] },
  { id:4, icon:'Headphones', color:'#10b981', title:'Soporte Técnico', short:'Soporte nacional e internacional, mantenimiento continuo.', description:'Soporte técnico confiable con monitoreo, mantenimiento preventivo y respuesta rápida a incidentes para empresas y personas.', features:['Soporte remoto y presencial','Mantenimiento preventivo','Monitoreo de servidores','Recuperación ante desastres','Documentación técnica'] },
  { id:5, icon:'Zap', color:'#f59e0b', title:'Automatización de Procesos', short:'Bots, scripts y flujos que eliminan tareas repetitivas.', description:'Automatizamos procesos con n8n, Make y scripts personalizados reduciendo errores humanos y aumentando la productividad de tu equipo.', features:['Workflows n8n y Make','Bots Telegram / WhatsApp','Automatización de marketing','Integraciones entre plataformas','Scripts de datos'] },
  { id:6, icon:'Lightbulb', color:'#06b6d4', title:'Consultoría Tecnológica', short:'Asesoría estratégica para transformar y escalar tu empresa.', description:'Evaluamos tu stack, identificamos oportunidades y diseñamos la hoja de ruta hacia la eficiencia digital con una visión estratégica clara.', features:['Diagnóstico tecnológico','Selección de stack','Arquitectura de soluciones','Estrategia digital','Formación de equipos'] },
];

export const projects = [
  { id:1, category:'web', status:'Activo', featured:true, name:'Natanel Gutiérrez — Plataforma Pastoral', description:'Plataforma web institucional con gestión de contenido, transmisiones en vivo y comunidad digital integrada.', tech:['React','Node.js','MongoDB','TailwindCSS'], color:'#1491d3', github:'#', demo:'#' },
  { id:2, category:'ia', status:'Activo', featured:false, name:'AutoBot — Asistente IA para PYMES', description:'Chatbot empresarial entrenado con datos propios del cliente para soporte automático 24/7.', tech:['Python','FastAPI','OpenAI API','React'], color:'#7c3aed', github:'#', demo:'#' },
  { id:3, category:'seguridad', status:'Completado', featured:false, name:'SecureAudit Dashboard', description:'Panel de control para auditorías de ciberseguridad con reportes automáticos y seguimiento de incidentes.', tech:['Python','React','PostgreSQL','Docker'], color:'#ef4444', github:'#', demo:'#' },
  { id:4, category:'automatizacion', status:'Activo', featured:false, name:'FlowMaster — Automatización n8n', description:'50+ workflows activos que redujeron el trabajo manual en un 70%.', tech:['n8n','Node.js','PostgreSQL','Docker'], color:'#f59e0b', github:'#', demo:'#' },
  { id:5, category:'web', status:'Completado', featured:false, name:'E-Commerce Platform RD', description:'Tienda en línea completa con pagos locales, inventario y panel administrativo.', tech:['Next.js','Stripe','MongoDB','TailwindCSS'], color:'#10b981', github:'#', demo:'#' },
  { id:6, category:'ia', status:'Activo', featured:false, name:'AI Content Generator', description:'Generador de contenido para redes sociales con IA y análisis de engagement.', tech:['React','OpenAI','LangChain','FastAPI'], color:'#7c3aed', github:'#', demo:'#' },
];

export const technologies = [
  {name:'React',color:'#61DAFB'},{name:'Next.js',color:'#ffffff'},{name:'Vue.js',color:'#42b883'},
  {name:'TailwindCSS',color:'#38bdf8'},{name:'TypeScript',color:'#3178c6'},{name:'HTML5',color:'#e34f26'},
  {name:'CSS3',color:'#1572b6'},{name:'Node.js',color:'#8cc84b'},{name:'Python',color:'#ffd43b'},
  {name:'FastAPI',color:'#009688'},{name:'Express',color:'#ffffff'},{name:'PostgreSQL',color:'#336791'},
  {name:'MongoDB',color:'#47a248'},{name:'MySQL',color:'#4479a1'},{name:'OpenAI',color:'#74aa9c'},
  {name:'LangChain',color:'#1c9f8a'},{name:'TensorFlow',color:'#ff6f00'},{name:'n8n',color:'#ea4b71'},
  {name:'Docker',color:'#2496ed'},{name:'Git',color:'#f05032'},{name:'GitHub',color:'#ffffff'},
  {name:'Linux',color:'#fcc624'},{name:'Nginx',color:'#009639'},{name:'Vercel',color:'#ffffff'},
  {name:'Kali Linux',color:'#367bf0'},{name:'Metasploit',color:'#e13631'},{name:'Burp Suite',color:'#ff6633'},
];

export const socialLinks = [
  { name:'Instagram', handle:'@vaxus.tech', description:'Proyectos, novedades y contenido tech', followers:'2.4K seguidores', url:'https://instagram.com', color:'#E1306C', gradient:'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366)', icon:'Instagram' },
  { name:'GitHub', handle:'vaxus-tech', description:'Repositorios open source y proyectos', followers:'48 repositorios', url:'https://github.com', color:'#ffffff', gradient:'linear-gradient(135deg,#24292e,#404448)', icon:'Github' },
  { name:'LinkedIn', handle:'VAXUS Technology', description:'Red profesional y oportunidades', followers:'1.1K conexiones', url:'https://linkedin.com', color:'#0A66C2', gradient:'linear-gradient(135deg,#0A66C2,#004182)', icon:'Linkedin' },
  { name:'Discord', handle:'VAXUS Community', description:'Comunidad activa de desarrolladores', followers:'380 miembros', url:'https://discord.gg', color:'#5865F2', gradient:'linear-gradient(135deg,#5865F2,#404eed)', icon:'MessageCircle' },
];

export const stats = [
  {value:32,label:'Proyectos completados',suffix:'+'},
  {value:18,label:'Clientes atendidos',suffix:'+'},
  {value:4,label:'Años de experiencia',suffix:'+'},
  {value:25,label:'Tecnologías dominadas',suffix:'+'},
];

export const values = [
  { icon:'Lightbulb', title:'Innovación', description:'Adoptamos las tecnologías más avanzadas para crear soluciones que anticipan los retos del futuro.' },
  { icon:'Shield', title:'Seguridad', description:'Cada sistema que construimos parte de una base segura. La ciberseguridad no es un extra, es un estándar.' },
  { icon:'TrendingUp', title:'Liderazgo', description:'No seguimos tendencias, las creamos. Posicionamos a nuestros clientes como referentes en sus industrias.' },
];

export const objectives = [
  'Expandir servicios digitales a nivel nacional e internacional',
  'Automatizar procesos humanos con IA de vanguardia',
  'Proveer soporte técnico y humano de alta calidad',
  'Mejorar la seguridad de plataformas digitales',
  'Construir comunidad de talento tech en RD',
  'Posicionar VAXUS como referente en IA y automatización',
];