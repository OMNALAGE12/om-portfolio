import React from 'react';
import SectionWrapper, { SecLabel, SecTitle, SecSub } from './SectionWrapper';

const tags = ['AWS Glue','Amazon S3','PySpark','EMR','Lambda','Athena','Redshift','EventBridge','CloudWatch','Apache Airflow'];

const steps = [
  { icon:'📥', name:'Data Ingestion',   tech:'S3 Raw Zone · EventBridge' },
  { icon:'🔄', name:'Transform & Clean', tech:'AWS Glue · PySpark · EMR' },
  { icon:'✅', name:'Validation Layer',  tech:'Python · Boto3 · Lambda' },
  { icon:'🏪', name:'Analytics Store',   tech:'Redshift · Athena' },
  { icon:'📡', name:'Monitoring',        tech:'CloudWatch · Airflow' },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SecLabel>Featured Project</SecLabel>
      <SecTitle>Healthcare Management System —<br/>Cloud Data Engineering Pipeline.</SecTitle>
      <SecSub>A cloud-based healthcare data engineering project focused on ingesting, transforming, validating, monitoring, and analyzing patient and hospital-related datasets.</SecSub>

      <div style={{
        borderRadius:28, border:'1px solid rgba(0,212,255,0.18)',
        background:'var(--card)', padding:40,
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'start',
      }}>
        {/* Left */}
        <div>
          <h3 style={{ fontFamily:'Syne,sans-serif', fontSize:26, fontWeight:700, marginBottom:14 }}>Healthcare Analytics Data Pipeline</h3>
          <p style={{ color:'var(--muted)', fontSize:15, lineHeight:1.7, marginBottom:16 }}>
            Developed cloud-based ETL workflows for healthcare and patient-related datasets using AWS services.
            The solution used S3 as a centralized data lake, Glue and PySpark for transformation, Lambda and
            EventBridge for automation, and Athena/Redshift for analytics.
          </p>
          <p style={{ color:'var(--muted)', fontSize:15, lineHeight:1.7, marginBottom:20 }}>
            Key outcomes: reduced data processing latency, improved data quality through automated validation,
            and enabled self-service analytics for clinical teams.
          </p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {tags.map(t => (
              <span key={t} style={{
                padding:'7px 13px', borderRadius:999, fontSize:12.5, fontWeight:600,
                border:'1px solid rgba(124,109,255,0.28)', color:'#c4bcff',
                background:'rgba(124,109,255,0.08)',
              }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Pipeline visual */}
        <div style={{ background:'rgba(0,0,0,0.3)', borderRadius:20, padding:22, border:'1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize:13, fontWeight:700, color:'var(--muted)', marginBottom:16, letterSpacing:'0.06em', textTransform:'uppercase' }}>
            Pipeline Architecture
          </div>
          {steps.map((s, i) => (
            <PipeStep key={i} {...s} />
          ))}
        </div>

        <style>{`@media(max-width:900px){ #projects > div > div > div:last-child > div { grid-template-columns:1fr!important; } }`}</style>
      </div>
    </SectionWrapper>
  );
}

function PipeStep({ icon, name, tech }) {
  const [hov, setHov] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'12px 16px', borderRadius:12,
        background: hov ? 'rgba(0,212,255,0.08)' : 'rgba(255,255,255,0.04)',
        border: hov ? '1px solid rgba(0,212,255,0.2)' : '1px solid rgba(255,255,255,0.05)',
        marginBottom:8, transition:'0.2s ease',
      }}
    >
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <span style={{ fontSize:18 }}>{icon}</span>
        <div>
          <div style={{ fontWeight:600, color:'var(--text)', fontSize:13.5 }}>{name}</div>
          <div style={{ fontSize:11.5, color:'var(--muted)' }}>{tech}</div>
        </div>
      </div>
      <span style={{
        padding:'3px 9px', borderRadius:999, fontSize:11, fontWeight:700,
        background:'rgba(139,252,62,0.12)', border:'1px solid rgba(139,252,62,0.3)', color:'#8bfc3e',
      }}>✓ Live</span>
    </div>
  );
}
