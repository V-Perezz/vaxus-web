import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const trails = [];
    for (let i = 0; i < 8; i++) {
      const el = document.createElement('div');
      el.className = 'cursor-trail';
      el.style.opacity = String(1 - i / 8);
      el.style.width = `${5 - i * 0.4}px`;
      el.style.height = `${5 - i * 0.4}px`;
      document.body.appendChild(el);
      trails.push({ el, x: 0, y: 0 });
    }
    const onMove = e => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dot.current) { dot.current.style.left = `${e.clientX}px`; dot.current.style.top = `${e.clientY}px`; }
    };
    const enter = () => { if (dot.current) dot.current.style.transform = 'translate(-50%,-50%) scale(2.5)'; if (ring.current) { ring.current.style.width = '50px'; ring.current.style.height = '50px'; } };
    const leave = () => { if (dot.current) dot.current.style.transform = 'translate(-50%,-50%) scale(1)'; if (ring.current) { ring.current.style.width = '30px'; ring.current.style.height = '30px'; } };
    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });
    let raf;
    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.1;
      if (ring.current) { ring.current.style.left = `${ringPos.current.x}px`; ring.current.style.top = `${ringPos.current.y}px`; }
      let prev = mouse.current;
      trails.forEach((t, i) => {
        const d = 0.08 + i * 0.025;
        t.x += (prev.x - t.x) * d; t.y += (prev.y - t.y) * d;
        t.el.style.left = `${t.x}px`; t.el.style.top = `${t.y}px`;
        prev = t;
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => { document.removeEventListener('mousemove', onMove); trails.forEach(t => t.el.remove()); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}