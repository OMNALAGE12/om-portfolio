import React from 'react';
import SectionWrapper, { SecLabel, SecTitle, SecSub } from './SectionWrapper';

const contacts = [
  { icon:'📞', label:'Phone',    value:'+91 9067156962',           href:'tel:+919067156962' },
  { icon:'✉️', label:'Email',    value:'nalageom1212@gmail.com',    href:'mailto:nalageom1212@gmail.com' },
  { icon:'🔗', label:'LinkedIn', value:'linkedin.com/in/om-nalage2223', href:'https://www.linkedin.com/in/om-nalage2223' },
  { icon:'📍', label:'Location', value:'Pune, Maharashtra, India',  href:null },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SecLabel>Contact</SecLabel>
      <SecTitle>Let's build something great together.</SecTitle>
      <SecSub>Open to full-time AWS Data Engineering roles, contract work, and consulting. Based in Pune — open to remote.</SecSub>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20, marginBottom:40 }}>
        {contacts.map(c => {
          const Tag = c.href ? 'a' : 'div';
          return (
            <Tag
              key={c.label}
              href={c.href || undefined}
              target={c.href?.startsWith('http') ? '_blank' : undefined}
              rel={c.href?.startsWith('http') ? 'noopener' : undefined}
              style={{
                display:'flex', alignItems:'center', gap:16,
                padding:22, borderRadius:18,
                border:'1px solid var(--border)', background:'var(--card)',
                textDecoration:'none', color:'var(--text)',
                transition:'0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateX(6px)'; e.currentTarget.style.borderColor='rgba(0,212,255,0.3)'; e.currentTarget.style.background='rgba(0,212,255,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.background='var(--card)'; }}
            >
              <div style={{ width:44, height:44, borderRadius:14, flexShrink:0, background:'rgba(0,212,255,0.1)', border:'1px solid rgba(0,212,255,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize:12, color:'var(--muted)', fontWeight:500 }}>{c.label}</div>
                <div style={{ fontSize:14.5, fontWeight:600, marginTop:2, wordBreak:'break-all' }}>{c.value}</div>
              </div>
            </Tag>
          );
        })}
      </div>

      {/* CTA block */}
      <div style={{
        borderRadius:32, padding:'64px 52px', textAlign:'center',
        background:'linear-gradient(135deg,rgba(124,109,255,0.16),rgba(0,212,255,0.12),rgba(139,252,62,0.09))',
        border:'1px solid rgba(0,212,255,0.18)', position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', width:600, height:600, top:'50%', left:'50%', transform:'translate(-50%,-50%)', background:'radial-gradient(circle,rgba(0,212,255,0.08),transparent 60%)', pointerEvents:'none' }} />
        <h2 style={{ fontFamily:'Syne,sans-serif', fontSize:'clamp(28px,4vw,48px)', fontWeight:800, letterSpacing:'-0.05em', marginBottom:14, position:'relative' }}>
          Ready to work together?
        </h2>
        <p style={{ color:'var(--muted)', maxWidth:600, margin:'0 auto 32px', fontSize:16, position:'relative' }}>
          I'm actively looking for AWS Data Engineering opportunities. Whether it's a full-time role, project, or consulting — let's connect.
        </p>
        <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', position:'relative' }}>
          <a href="mailto:nalageom1212@gmail.com" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:14, fontWeight:600, fontSize:15, textDecoration:'none', background:'linear-gradient(135deg,#00d4ff,#7c6dff)', color:'#03050f', boxShadow:'0 0 40px rgba(0,212,255,0.25)' }}>
            Send Me an Email →
          </a>
          <a href="https://www.linkedin.com/in/om-nalage2223" target="_blank" rel="noopener" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'14px 24px', borderRadius:14, fontWeight:600, fontSize:15, textDecoration:'none', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.09)', color:'var(--text)' }}>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
