import React, { useRef, useEffect, useState } from 'react';

export default function SectionWrapper({ id, children, style = {} }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      style={{
        padding: '100px 0',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(32px)',
        transition: '0.8s cubic-bezier(0.16,1,0.3,1)',
        ...style,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5vw' }}>
        {children}
      </div>
    </section>
  );
}

export function SecLabel({ children }) {
  return (
    <div style={{
      fontSize:11, fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase',
      color:'var(--cyan)', marginBottom:14,
      display:'flex', alignItems:'center', gap:10,
    }}>
      <span style={{ width:28, height:1, background:'var(--cyan)', display:'block' }} />
      {children}
    </div>
  );
}

export function SecTitle({ children }) {
  return (
    <h2 style={{
      fontFamily:'Syne,sans-serif', fontSize:'clamp(30px,4vw,50px)',
      fontWeight:800, letterSpacing:'-0.05em', lineHeight:1.1, marginBottom:14,
    }}>{children}</h2>
  );
}

export function SecSub({ children }) {
  return (
    <p style={{ color:'var(--muted)', maxWidth:640, fontSize:16, marginBottom:52 }}>{children}</p>
  );
}

export function Card({ children, style = {}, hover = true }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => hover && setHov(false)}
      style={{
        borderRadius:22, border:`1px solid ${hov ? 'rgba(0,212,255,0.28)' : 'var(--border)'}`,
        background:'var(--card)', padding:28,
        transform: hov ? 'translateY(-5px)' : 'none',
        transition:'0.3s ease',
        ...style,
      }}
    >{children}</div>
  );
}
