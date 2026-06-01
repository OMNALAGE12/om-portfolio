import React from 'react';
import SectionWrapper, { SecLabel, SecTitle, SecSub, Card } from './SectionWrapper';

const cards = [
  { icon:'🏗️', title:'Data Lake Design', desc:'Experienced in using Amazon S3 as a centralized data lake for storing raw, processed, and analytics-ready datasets across multiple zones.' },
  { icon:'⚙️', title:'ETL Engineering', desc:'Built scalable ETL workflows using AWS Glue, PySpark, Python, Boto3, and Amazon EMR for structured and semi-structured healthcare data.' },
  { icon:'📊', title:'Analytics Enablement', desc:'Used Amazon Athena and Amazon Redshift to query, analyze, and report on large datasets for business insights and clinical reporting.' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SecLabel>About Me</SecLabel>
      <SecTitle>Cloud-first data engineer with strong<br/>AWS pipeline experience.</SecTitle>
      <SecSub>I work on cloud data engineering projects where the main goal is to ingest data, clean it, transform it, validate it, store it in proper layers, and make it available for analytics and reporting.</SecSub>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20 }}>
        {cards.map(c => (
          <Card key={c.title}>
            <div style={{ fontSize:30, marginBottom:14 }}>{c.icon}</div>
            <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:16, marginBottom:12 }}>{c.title}</h3>
            <p style={{ color:'var(--muted)', fontSize:14.5 }}>{c.desc}</p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
