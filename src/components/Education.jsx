import React from 'react';
import SectionWrapper, { SecLabel, SecTitle, SecSub } from './SectionWrapper';

const educations = [
  {
    degree: 'Master of Computer Applications (MCA)',
    college: 'Savitribai Phule Pune University',
    location: 'Pune, Maharashtra',
    score: 'CGPA: 8.27',
    scoreColor: '#00d4ff',
    gradient: 'linear-gradient(135deg,#7c6dff,#00d4ff)',
    borderHover: 'rgba(124,109,255,0.35)',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    college: 'Gopal Krishna Gokhale College',
    location: 'Shivaji University, Kolhapur',
    score: 'Percentage: 79.12%',
    scoreColor: '#8bfc3e',
    gradient: 'linear-gradient(135deg,#00d4ff,#8bfc3e)',
    borderHover: 'rgba(0,212,255,0.35)',
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SecLabel>Education</SecLabel>
      <SecTitle>Academic Foundation</SecTitle>
      <SecSub>Educational background that laid the foundation for my data engineering career.</SecSub>
      <div style={{ display:'grid', gap:16 }}>
        {educations.map((edu) => (
          <div
            key={edu.degree}
            style={{
              borderRadius:24, border:'1px solid var(--border)',
              background:'var(--card)', padding:32,
              display:'flex', gap:24, alignItems:'flex-start',
              transition:'0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = edu.borderHover}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
          >
            <div style={{
              width:52, height:52, flexShrink:0, borderRadius:16,
              background: edu.gradient,
              display:'flex', alignItems:'center', justifyContent:'center', fontSize:22,
            }}>🎓</div>
            <div>
              <div style={{ fontFamily:'Syne,sans-serif', fontSize:20, fontWeight:700 }}>{edu.degree}</div>
              <div style={{ color:'#7c6dff', fontSize:14, fontWeight:600, marginTop:4 }}>{edu.college}</div>
              <div style={{ color:'var(--muted)', fontSize:13, marginTop:3 }}>{edu.location}</div>
              <div style={{
                display:'inline-block', marginTop:10,
                padding:'5px 12px', borderRadius:999, fontSize:13, fontWeight:700,
                background:'rgba(139,252,62,0.08)', border:'1px solid rgba(139,252,62,0.25)',
                color: edu.scoreColor,
              }}>{edu.score}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
