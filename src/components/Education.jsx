import React from 'react';
import SectionWrapper, { SecLabel, SecTitle, SecSub } from './SectionWrapper';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SecLabel>Education</SecLabel>
      <SecTitle>Academic Foundation</SecTitle>
      <SecSub>Educational background that laid the foundation for my data engineering career.</SecSub>
      <div style={{ display:'grid', gap:16 }}>
        <div style={{
          borderRadius:24, border:'1px solid var(--border)',
          background:'var(--card)', padding:32,
          display:'flex', gap:24, alignItems:'flex-start',
          transition:'0.3s ease',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor='rgba(124,109,255,0.35)'}
          onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}
        >
          <div style={{
            width:52, height:52, flexShrink:0, borderRadius:16,
            background:'linear-gradient(135deg,#7c6dff,#00d4ff)',
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:22,
          }}>🎓</div>
          <div>
            <div style={{ fontFamily:'Syne,sans-serif', fontSize:20, fontWeight:700 }}>Bachelor of Computer Science / IT</div>
            <div style={{ color:'#7c6dff', fontSize:14, fontWeight:600, marginTop:4 }}>Pune University, Maharashtra, India</div>
            <div style={{ color:'var(--muted)', fontSize:13, marginTop:3 }}>Graduated</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
