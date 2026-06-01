import React from 'react';
import SectionWrapper, { SecLabel, SecTitle, SecSub, Card } from './SectionWrapper';

const skillGroups = [
  { icon:'☁️', title:'AWS Cloud Services', chips:['AWS Glue','Amazon S3','Amazon EMR','AWS Lambda','Amazon Redshift','Amazon Athena','EventBridge','CloudWatch','IAM','AWS CLI','CodePipeline'] },
  { icon:'💻', title:'Languages & Frameworks', chips:['Python','PySpark','SQL','Boto3','Bash / Shell','HiveQL'] },
  { icon:'🔧', title:'Tools & Platforms', chips:['Apache Airflow','Git','GitHub','Linux / Ubuntu','Jupyter','VS Code'] },
  { icon:'📊', title:'Data Engineering', chips:['ETL / ELT Pipelines','Data Lake Design','Data Warehousing','Data Validation','Data Quality','Medallion Architecture'] },
  { icon:'🏥', title:'Domain Knowledge', chips:['Healthcare Analytics','Patient Data','Clinical Reporting','HIPAA Awareness'] },
  { icon:'🚀', title:'Architecture', chips:['Serverless','Event-Driven','Batch Processing','Stream Processing','Microservices'] },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SecLabel>Technical Skills</SecLabel>
      <SecTitle>Full-stack AWS data engineering toolkit.</SecTitle>
      <SecSub>From raw ingestion to analytics-ready datasets — every layer of the modern data stack.</SecSub>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
        {skillGroups.map(g => (
          <Card key={g.title}>
            <div style={{ fontSize:30, marginBottom:14 }}>{g.icon}</div>
            <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:16, marginBottom:16 }}>{g.title}</h3>
            <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
              {g.chips.map(c => <Chip key={c}>{c}</Chip>)}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Chip({ children }) {
  const [hov, setHov] = React.useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding:'7px 11px', borderRadius:10, fontSize:12.5, fontWeight:600,
        background: hov ? 'rgba(0,212,255,0.1)' : 'rgba(255,255,255,0.06)',
        border: hov ? '1px solid rgba(0,212,255,0.3)' : '1px solid rgba(255,255,255,0.08)',
        color: hov ? 'var(--text)' : 'var(--muted)',
        transform: hov ? 'translateY(-2px)' : 'none',
        transition:'0.2s ease', cursor:'default',
      }}
    >{children}</span>
  );
}
