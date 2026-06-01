import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 68 }}>
      <div style={{ width: '100%', maxWidth: 1200, margin: '0 auto', padding: '80px 5vw 60px' }}>

        {/* Main grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: 64, alignItems: 'center' }}>

          {/* Left: text */}
          <div>
            <motion.div {...fadeUp(0)} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '7px 14px', borderRadius: 999,
              border: '1px solid rgba(139,252,62,0.3)',
              background: 'rgba(139,252,62,0.07)',
              fontSize: 12.5, fontWeight: 600, color: '#a8f560',
              letterSpacing: '0.08em', textTransform: 'uppercase',
              marginBottom: 28,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', background: '#8bfc3e',
                animation: 'live 2s ease-in-out infinite',
              }} />
              Available for AWS Data Engineering Opportunities
            </motion.div>

            <motion.h1 {...fadeUp(0.05)} style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(46px, 6.5vw, 88px)',
              lineHeight: 0.95, letterSpacing: '-0.07em',
              fontWeight: 800, marginBottom: 24,
            }}>
              <span style={{ display: 'block', color: 'var(--text)' }}>Building scalable</span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c6dff 60%, #8bfc3e 100%)',
                WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
              }}>cloud data</span>
              <span style={{ display: 'block', color: 'var(--text)' }}>pipelines.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.1)} style={{
              color: 'var(--muted)', fontSize: 17, lineHeight: 1.7,
              maxWidth: 560, marginBottom: 40,
            }}>
              I'm Om Pandurang Nalage — an AWS Data Engineer from Pune with hands-on experience in ETL pipelines,
              cloud data workflows, and healthcare analytics solutions. Specializing in AWS Glue, EMR, Lambda,
              Redshift, and PySpark.
            </motion.p>

            <motion.div {...fadeUp(0.15)} style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#projects" style={btnStyle('glow')}>View My Work →</a>
              <a href="mailto:nalageom1212@gmail.com" style={btnStyle('ghost')}>Hire Me</a>
              <a href="https://www.linkedin.com/in/om-nalage2223" target="_blank" rel="noopener" style={btnStyle('ghost')}>LinkedIn ↗</a>
            </motion.div>
          </div>

          {/* Right: photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', animation: 'floatCard 6s ease-in-out infinite alternate' }}
          >
            {/* Spinning gradient ring */}
            <div style={{
              position: 'absolute', inset: -5, borderRadius: 34,
              background: 'conic-gradient(from 0deg, #00d4ff, #7c6dff, #8bfc3e, #ff4f8b, #00d4ff)',
              animation: 'spinRing 5s linear infinite', zIndex: 0,
            }} />
            {/* Mask */}
            <div style={{
              position: 'absolute', inset: 3, borderRadius: 29,
              background: 'var(--bg)', zIndex: 1,
            }} />

            {/* Status badge */}
            <div style={{
              position: 'absolute', top: 14, right: -10, zIndex: 10,
              display: 'flex', alignItems: 'center', gap: 7,
              padding: '8px 14px', borderRadius: 999,
              background: 'rgba(3,5,15,0.92)',
              border: '1px solid rgba(139,252,62,0.4)',
              backdropFilter: 'blur(10px)',
              fontSize: 11.5, fontWeight: 700, color: '#a8f560',
              whiteSpace: 'nowrap',
              animation: 'badgePop 3s ease-in-out infinite',
            }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:'#8bfc3e', animation:'live 2s ease-in-out infinite' }} />
              Open to Work
            </div>

            {/* AWS badge */}
            <div style={{
              position: 'absolute', bottom: 90, left: -14, zIndex: 10,
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 14px', borderRadius: 16,
              background: 'rgba(3,5,15,0.92)',
              border: '1px solid rgba(0,212,255,0.35)',
              backdropFilter: 'blur(10px)',
              fontSize: 12, fontWeight: 700, color: '#00d4ff',
              animation: 'badgePop 3.5s ease-in-out infinite 0.8s',
            }}>
              ☁️ AWS Data Engineer
            </div>

            {/* Photo container */}
            <div style={{
              position: 'relative', zIndex: 2,
              borderRadius: 27, overflow: 'hidden',
              border: '1px solid rgba(0,212,255,0.2)',
            }}>
              <img
                src="/profile.png"
                alt="Om Pandurang Nalage"
                style={{ display: 'block', width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top' }}
              />
              {/* Scanlines */}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none',
                background: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.03) 3px,rgba(0,0,0,0.03) 4px)',
              }} />
              {/* Corner brackets */}
              {[
                { top:14, left:14, borderTop:'2px solid #00d4ff', borderLeft:'2px solid #00d4ff' },
                { top:14, right:14, borderTop:'2px solid #00d4ff', borderRight:'2px solid #00d4ff' },
                { bottom:78, left:14, borderBottom:'2px solid #8bfc3e', borderLeft:'2px solid #8bfc3e' },
                { bottom:78, right:14, borderBottom:'2px solid #8bfc3e', borderRight:'2px solid #8bfc3e' },
              ].map((s,i) => <div key={i} style={{ position:'absolute', zIndex:4, width:22, height:22, ...s }} />)}
              {/* Name overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5,
                padding: '28px 20px 18px',
                background: 'linear-gradient(transparent, rgba(3,5,15,0.97))',
              }}>
                <div style={{ fontFamily:'Syne,sans-serif', fontSize:19, fontWeight:800 }}>Om Pandurang Nalage</div>
                <div style={{ color:'#00d4ff', fontSize:12.5, fontWeight:600, marginTop:4 }}>AWS Data Engineer · Pune, India</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16, paddingTop:40 }}>
          {[
            { val:'AWS', label:'Cloud Platform' },
            { val:'ETL', label:'Pipeline Dev' },
            { val:'PySpark', label:'Big Data' },
            { val:'BI', label:'Analytics Ready' },
          ].map((s,i) => (
            <motion.div
              key={s.val}
              initial={{ opacity:0, y:24 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.6, delay:0.3 + i*0.08, ease:[0.16,1,0.3,1] }}
              style={{
                padding:22, borderRadius:18,
                border:'1px solid var(--border)',
                background:'var(--card)',
                textAlign:'center',
                cursor:'default',
                transition:'0.3s ease',
              }}
              whileHover={{ y:-6, borderColor:'rgba(0,212,255,0.3)' }}
            >
              <div style={{
                fontFamily:'Syne,sans-serif', fontSize:28, fontWeight:800,
                background:'linear-gradient(135deg,#00d4ff,#8bfc3e)',
                WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent',
              }}>{s.val}</div>
              <div style={{ fontSize:13, color:'var(--muted)', marginTop:5, fontWeight:500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        <style>{`
          @media(max-width:900px){
            section > div > div:first-child { grid-template-columns: 1fr !important; }
            section > div > div:first-child > div:last-child { max-width:340px; margin:0 auto; }
          }
          @media(max-width:580px){
            section > div > div:last-child { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

function btnStyle(type) {
  const base = {
    display:'inline-flex', alignItems:'center', gap:8,
    padding:'14px 24px', borderRadius:14, fontWeight:600,
    fontSize:15, cursor:'pointer', transition:'0.25s ease',
    textDecoration:'none', border:'none', fontFamily:'inherit',
  };
  if (type === 'glow') return { ...base, background:'linear-gradient(135deg,#00d4ff,#7c6dff)', color:'#03050f', boxShadow:'0 0 40px rgba(0,212,255,0.25)' };
  return { ...base, background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.09)', color:'var(--text)' };
}
