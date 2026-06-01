import React from 'react';
import SectionWrapper, { SecLabel, SecTitle, SecSub } from './SectionWrapper';

const bullets = [
  'Working on real-time cloud and data engineering projects for a Healthcare Management System.',
  'Designed and managed scalable ETL and data pipelines using AWS Glue, PySpark, and Amazon EMR.',
  'Worked with Amazon S3 as a data lake for storing and processing healthcare datasets.',
  'Built serverless workflows using AWS Lambda and AWS EventBridge for event-driven automation.',
  'Used Amazon Athena and Amazon Redshift for analytics, querying, and reporting on large datasets.',
  'Automated ingestion, transformation, and validation processes using Python and Boto3.',
  'Managed IAM roles, security policies, and monitored cloud resources using Amazon CloudWatch.',
  'Worked with AWS CLI, Git, GitHub, Linux/Ubuntu, AWS CodePipeline, and Apache Airflow.',
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SecLabel>Work Experience</SecLabel>
      <SecTitle>Professional experience in<br/>AWS data engineering.</SecTitle>
      <SecSub>Currently working at Aspire Softtech Pvt. Ltd., building real-time data pipelines for healthcare management systems.</SecSub>

      <div style={{
        borderRadius:24, border:'1px solid var(--border)',
        background:'var(--card)', padding:36,
        position:'relative', overflow:'hidden',
      }}>
        {/* Left accent bar */}
        <div style={{
          position:'absolute', left:0, top:0, bottom:0, width:3,
          background:'linear-gradient(#00d4ff, #7c6dff)',
        }} />

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:6, gap:16, flexWrap:'wrap' }}>
          <div>
            <h3 style={{ fontFamily:'Syne,sans-serif', fontSize:24, fontWeight:700 }}>AWS Data Engineer</h3>
            <div style={{ color:'#00d4ff', fontSize:14, fontWeight:600, marginBottom:20, marginTop:4 }}>
              Aspire Softtech Pvt. Ltd. · Pune, India
            </div>
          </div>
          <span style={{
            padding:'6px 14px', borderRadius:999,
            background:'rgba(139,252,62,0.09)', border:'1px solid rgba(139,252,62,0.25)',
            color:'#a8f560', fontSize:12, fontWeight:600, whiteSpace:'nowrap', height:'fit-content',
          }}>June 2024 – Present</span>
        </div>

        <ul style={{ listStyle:'none', display:'grid', gap:10 }}>
          {bullets.map((b,i) => (
            <li key={i} style={{ paddingLeft:22, position:'relative', color:'var(--muted)', fontSize:15 }}>
              <span style={{ position:'absolute', left:0, color:'#00d4ff', fontSize:12, top:2 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
