import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = ['About','Experience','Projects','Skills','Education','Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5vw', height: 68,
        background: scrolled ? 'rgba(3,5,15,0.85)' : 'rgba(3,5,15,0.5)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration:'none' }}>
        <span style={{
          fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 20, letterSpacing: '-0.04em',
          background: 'linear-gradient(135deg, #00d4ff, #8bfc3e)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
        }}>ON.</span>
      </a>

      {/* Desktop links */}
      <div style={{ display:'flex', gap:6, alignItems:'center' }} className="hidden-mobile">
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              padding: '8px 14px', borderRadius: 999,
              color: 'var(--muted)', fontSize: 13.5, fontWeight: 500,
              textDecoration: 'none', transition: '0.2s ease',
            }}
            onMouseEnter={e => { e.target.style.color='var(--text)'; e.target.style.background='rgba(255,255,255,0.07)'; }}
            onMouseLeave={e => { e.target.style.color='var(--muted)'; e.target.style.background='transparent'; }}
          >{l}</a>
        ))}
        <a
          href="mailto:nalageom1212@gmail.com"
          style={{
            padding: '9px 20px', borderRadius: 999, marginLeft: 6,
            background: 'linear-gradient(135deg, #00d4ff, #7c6dff)',
            color: '#03050f', fontWeight: 700, fontSize: 13,
            textDecoration: 'none', transition: '0.2s ease',
          }}
        >Hire Me →</a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ display:'none', background:'none', border:'none', color:'var(--text)', fontSize:22, cursor:'pointer' }}
        className="show-mobile"
      >☰</button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:'absolute', top:68, left:0, right:0,
          background:'rgba(3,5,15,0.97)', backdropFilter:'blur(20px)',
          borderBottom:'1px solid rgba(255,255,255,0.08)',
          display:'flex', flexDirection:'column', padding:'16px 5vw 20px',
          gap:4,
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              style={{ padding:'12px 0', color:'var(--muted)', textDecoration:'none', fontSize:16, fontWeight:500, borderBottom:'1px solid rgba(255,255,255,0.06)' }}
            >{l}</a>
          ))}
          <a href="mailto:nalageom1212@gmail.com" style={{ marginTop:12, padding:'13px 20px', borderRadius:14, background:'linear-gradient(135deg,#00d4ff,#7c6dff)', color:'#03050f', fontWeight:700, textDecoration:'none', textAlign:'center' }}>Hire Me →</a>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .hidden-mobile{display:none!important;}
          .show-mobile{display:block!important;}
        }
      `}</style>
    </motion.nav>
  );
}
